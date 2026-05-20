export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	pokemon: {
		isGrounded(negateImmunity = false) {
			if ('gravity' in this.battle.field.pseudoWeather) return true;
			if ('ingrain' in this.volatiles && this.battle.gen >= 4) return true;
			if ('smackdown' in this.volatiles) return true;
			const item = (this.ignoringItem() ? '' : this.item);
			if (item === 'ironball') return true;
			// If a Fire/Flying type uses Burn Up and Roost, it becomes ???/Flying-type, but it's still grounded.
			if (!negateImmunity && this.hasType('Flying') && !(this.hasType('???') && 'roost' in this.volatiles)) return false;
			if ((this.hasAbility('levitate') || this.hasAbility('sunkensky')) && !this.battle.suppressingAbility(this)) return null;
			if ('magnetrise' in this.volatiles) return false;
			if ('telekinesis' in this.volatiles) return false;
			return item !== 'airballoon';
		},
	},
	actions: {
		canMegaEvo(pokemon: Pokemon) {
			const species = pokemon.baseSpecies;
			const altForme = species.otherFormes && this.dex.species.get(species.otherFormes[0]);
			const item = pokemon.getItem();
			// Mega Rayquaza
			if ((this.battle.gen <= 7 || this.battle.ruleTable.has('+pokemontag:past') ||
				this.battle.ruleTable.has('+pokemontag:future')) &&
				altForme?.isMega && altForme?.requiredMove &&
				pokemon.baseMoves.includes(toID(altForme.requiredMove)) && !item.zMove) {
				return altForme.name;
			}
			return item.megaStone?.[species.name] || null;
		},
		modifyDamage(
			baseDamage: number, pokemon: Pokemon, target: Pokemon, move: ActiveMove, suppressMessages = false
		) {
			const tr = this.battle.trunc;
			if (!move.type) move.type = '???';
			const type = move.type;

			baseDamage += 2;

			if (move.spreadHit) {
				// multi-target modifier (doubles only)
				const spreadModifier = this.battle.gameType === 'freeforall' ? 0.5 : 0.75;
				this.battle.debug(`Spread modifier: ${spreadModifier}`);
				baseDamage = this.battle.modify(baseDamage, spreadModifier);
			} else if (move.multihitType === 'parentalbond' && move.hit > 1) {
				// Parental Bond modifier
				const bondModifier = this.battle.gen > 6 ? 0.25 : 0.5;
				this.battle.debug(`Parental Bond modifier: ${bondModifier}`);
				baseDamage = this.battle.modify(baseDamage, bondModifier);
			} else if (move.multihitType === 'broodlingbond' && move.hit > 1) {
				const bondModifier = 0.5;
				this.battle.debug(`Broodling Bond modifier: ${bondModifier}`);
				baseDamage = this.battle.modify(baseDamage, bondModifier);
			}

			// weather modifier
			baseDamage = this.battle.runEvent('WeatherModifyDamage', pokemon, target, move, baseDamage);

			// crit - not a modifier
			const isCrit = target.getMoveHitData(move).crit;
			if (isCrit) {
				baseDamage = tr(baseDamage * (move.critModifier || (this.battle.gen >= 6 ? 1.5 : 2)));
			}

			// random factor - also not a modifier
			baseDamage = this.battle.randomizer(baseDamage);

			// STAB
			// The "???" type never gets STAB
			// Not even if you Roost in Gen 4 and somehow manage to use
			// Struggle in the same turn.
			// (On second thought, it might be easier to get a MissingNo.)
			if (type !== '???') {
				let stab: number | [number, number] = 1;

				const isSTAB = move.forceSTAB || pokemon.hasType(type) || pokemon.getTypes(false, true).includes(type);
				if (isSTAB) {
					stab = 1.5;
				}

				// The Stellar tera type makes this incredibly confusing
				// If the move's type does not match one of the user's base types,
				// the Stellar tera type applies a one-time 1.2x damage boost for that type.
				//
				// If the move's type does match one of the user's base types,
				// then the Stellar tera type applies a one-time 2x STAB boost for that type,
				// and then goes back to using the regular 1.5x STAB boost for those types.
				if (pokemon.terastallized === 'Stellar') {
					if (!pokemon.stellarBoostedTypes.includes(type) || move.stellarBoosted) {
						stab = isSTAB ? 2 : [4915, 4096];
						move.stellarBoosted = true;
						if (pokemon.species.name !== 'Terapagos-Stellar') {
							pokemon.stellarBoostedTypes.push(type);
						}
					}
				} else {
					if (pokemon.terastallized === type && pokemon.getTypes(false, true).includes(type)) {
						stab = 2;
					}
					stab = this.battle.runEvent('ModifySTAB', pokemon, target, move, stab);
				}

				baseDamage = this.battle.modify(baseDamage, stab);
			}

			// types
			let typeMod = target.runEffectiveness(move);
			typeMod = this.battle.clampIntRange(typeMod, -6, 6);
			target.getMoveHitData(move).typeMod = typeMod;
			if (typeMod > 0) {
				if (!suppressMessages) this.battle.add('-supereffective', target);

				for (let i = 0; i < typeMod; i++) {
					baseDamage *= 2;
				}
			}
			if (typeMod < 0) {
				if (!suppressMessages) this.battle.add('-resisted', target);

				for (let i = 0; i > typeMod; i--) {
					baseDamage = tr(baseDamage / 2);
				}
			}

			if (isCrit && !suppressMessages) this.battle.add('-crit', target);

			if (pokemon.status === 'brn' && move.category === 'Physical' && !pokemon.hasAbility('guts')) {
				if (this.battle.gen < 6 || move.id !== 'facade') {
					baseDamage = this.battle.modify(baseDamage, 0.5);
				}
			}

			// Generation 5, but nothing later, sets damage to 1 before the final damage modifiers
			if (this.battle.gen === 5 && !baseDamage) baseDamage = 1;

			// Final modifier. Modifiers that modify damage after min damage check, such as Life Orb.
			baseDamage = this.battle.runEvent('ModifyDamage', pokemon, target, move, baseDamage);

			const bypassProtect = target.getMoveHitData(move).bypassProtect;
			if (bypassProtect) {
				baseDamage = this.battle.modify(baseDamage, 0.25);
				if (bypassProtect !== true && bypassProtect.effectType === 'Ability') {
					this.battle.add('-ability', pokemon, bypassProtect.name);
				}
				this.battle.add('-zbroken', target);
			}

			// Generation 6-7 moves the check for minimum 1 damage after the final modifier...
			if (this.battle.gen !== 5 && !baseDamage) return 1;

			// ...but 16-bit truncation happens even later, and can truncate to 0
			return tr(baseDamage, 16);
		},
		useMoveInner(
			moveOrMoveName: Move | string, pokemon: Pokemon, options?: {
				target?: Pokemon | null, sourceEffect?: Effect | null,
				zMove?: string, maxMove?: string,
			},
		) {
			let target = options?.target;
			let sourceEffect = options?.sourceEffect;
			const zMove = options?.zMove;
			const maxMove = options?.maxMove;
			if (!sourceEffect && this.battle.effect.id) sourceEffect = this.battle.effect;
			if (sourceEffect && ['instruct', 'custapberry'].includes(sourceEffect.id)) sourceEffect = null;

			let move = this.dex.getActiveMove(moveOrMoveName);
			pokemon.lastMoveUsed = move;
			if (move.id === 'weatherball' && zMove) {
				// Z-Weather Ball only changes types if it's used directly,
				// not if it's called by Z-Sleep Talk or something.
				this.battle.singleEvent('ModifyType', move, null, pokemon, target, move, move);
				if (move.type !== 'Normal') sourceEffect = move;
			}
			if (zMove || (move.category !== 'Status' && sourceEffect && (sourceEffect as ActiveMove).isZ)) {
				move = this.getActiveZMove(move, pokemon);
			}
			if (maxMove && move.category !== 'Status') {
				// Max move outcome is dependent on the move type after type modifications from ability and the move itself
				this.battle.singleEvent('ModifyType', move, null, pokemon, target, move, move);
				this.battle.runEvent('ModifyType', pokemon, target, move, move);
			}
			if (maxMove || (move.category !== 'Status' && sourceEffect && (sourceEffect as ActiveMove).isMax)) {
				move = this.getActiveMaxMove(move, pokemon);
			}

			if (this.battle.activeMove) {
				move.priority = this.battle.activeMove.priority;
				if (!move.hasBounced) move.pranksterBoosted = this.battle.activeMove.pranksterBoosted;
			}
			const baseTarget = move.target;
			let targetRelayVar = { target };
			targetRelayVar = this.battle.runEvent('ModifyTarget', pokemon, target, move, targetRelayVar, true);
			if (targetRelayVar.target !== undefined) target = targetRelayVar.target;
			if (target === undefined) target = this.battle.getRandomTarget(pokemon, move);
			if (move.target === 'self' || move.target === 'allies') {
				target = pokemon;
			}
			if (sourceEffect) {
				move.sourceEffect = sourceEffect.id;
				move.ignoreAbility = (sourceEffect as ActiveMove).ignoreAbility;
			}
			let moveResult = false;

			this.battle.setActiveMove(move, pokemon, target);

			this.battle.singleEvent('ModifyType', move, null, pokemon, target, move, move);
			this.battle.singleEvent('ModifyMove', move, null, pokemon, target, move, move);
			if (baseTarget !== move.target) {
				// Target changed in ModifyMove, so we must adjust it here
				// Adjust before the next event so the correct target is passed to the
				// event
				target = this.battle.getRandomTarget(pokemon, move);
			}
			move = this.battle.runEvent('ModifyType', pokemon, target, move, move);
			move = this.battle.runEvent('ModifyMove', pokemon, target, move, move);
			if (baseTarget !== move.target) {
				// Adjust again
				target = this.battle.getRandomTarget(pokemon, move);
			}
			if (!move || pokemon.fainted) {
				return false;
			}

			let attrs = '';

			let movename = move.name;
			if (move.id === 'hiddenpower') movename = 'Hidden Power';
			if (sourceEffect) attrs += `|[from] ${sourceEffect.fullname}`;
			if (zMove && move.isZ === true) {
				attrs = `|[anim]${movename}${attrs}`;
				movename = `Z-${movename}`;
			}
			this.battle.addMove('move', pokemon, movename, `${target}${attrs}`);

			if (zMove) this.runZPower(move, pokemon);

			if (!target) {
				this.battle.attrLastMove('[notarget]');
				this.battle.add(this.battle.gen >= 5 ? '-fail' : '-notarget', pokemon);
				return false;
			}

			const { targets, pressureTargets } = pokemon.getMoveTargets(move, target);
			if (targets.length) {
				target = targets[targets.length - 1]; // in case of redirection
			}

			const callerMoveForPressure = sourceEffect && (sourceEffect as ActiveMove).pp ? sourceEffect as ActiveMove : null;
			if (!sourceEffect || callerMoveForPressure || sourceEffect.id === 'pursuit') {
				let extraPP = 0;
				for (const source of pressureTargets) {
					const ppDrop = this.battle.runEvent('DeductPP', source, pokemon, move);
					if (ppDrop !== true) {
						extraPP += ppDrop || 0;
					}
				}
				if (extraPP > 0) {
					pokemon.deductPP(callerMoveForPressure || moveOrMoveName, extraPP);
				}
			}

			let tryMoveResult = this.battle.singleEvent('TryMove', move, null, pokemon, target, move);
			if (tryMoveResult) {
				tryMoveResult = this.battle.runEvent('TryMove', pokemon, target, move);
			}
			if (!tryMoveResult) {
				move.mindBlownRecoil = false;
				return tryMoveResult;
			}

			this.battle.singleEvent('UseMoveMessage', move, null, pokemon, target, move);

			if (move.ignoreImmunity === undefined) {
				move.ignoreImmunity = (move.category === 'Status');
			}

			if (this.battle.gen !== 4 && move.selfdestruct === 'always') {
				this.battle.faint(pokemon, pokemon, move);
			}

			let damage: number | false | undefined | '' = false;
			if (move.target === 'all' || move.target === 'foeSide' || move.target === 'allySide' || move.target === 'allyTeam') {
				damage = this.tryMoveHit(targets, pokemon, move);
				if (damage === this.battle.NOT_FAIL) pokemon.moveThisTurnResult = null;
				if (damage || damage === 0 || damage === undefined) moveResult = true;
			} else {
				if (!targets.length) {
					this.battle.attrLastMove('[notarget]');
					this.battle.add(this.battle.gen >= 5 ? '-fail' : '-notarget', pokemon);
					return false;
				}
				if (this.battle.gen === 4 && move.selfdestruct === 'always') {
					this.battle.faint(pokemon, pokemon, move);
				}
				moveResult = this.trySpreadMoveHit(targets, pokemon, move);
			}
			if (move.selfBoost && moveResult) this.moveHit(pokemon, pokemon, move, move.selfBoost, false, true);
			if (!pokemon.hp) {
				this.battle.faint(pokemon, pokemon, move);
			}

			if (!moveResult) {
				this.battle.singleEvent('MoveFail', move, null, target, pokemon, move);
				return false;
			}

			if (!(move.hasSheerForce && (pokemon.hasAbility('sheerforce') || pokemon.hasAbility('broodlingbond'))) && !move.flags['futuremove']) {
				const originalHp = pokemon.hp;
				this.battle.singleEvent('AfterMoveSecondarySelf', move, null, pokemon, target, move);
				this.battle.runEvent('AfterMoveSecondarySelf', pokemon, target, move);
				if (pokemon && pokemon !== target && move.category !== 'Status') {
					if (pokemon.hp <= pokemon.maxhp / 2 && originalHp > pokemon.maxhp / 2) {
						this.battle.runEvent('EmergencyExit', pokemon, pokemon);
					}
				}
			}

			return true;
		},
	},
};
