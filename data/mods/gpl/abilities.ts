export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	aromaveil: {
		inherit: true,
		onAllyTryAddVolatile(status, target, source, effect) {
			if (['attract', 'disable', 'encore', 'healblock', 'taunt', 'torment', 'tantalize'].includes(status.id)) {
				if (effect.effectType === 'Move') {
					const effectHolder = this.effectState.target;
					this.add('-block', target, 'ability: Aroma Veil', `[of] ${effectHolder}`);
				}
				return null;
			}
		},
	},
	battlebond: {
		inherit: true,
		onSourceAfterFaint(length, target, source, effect) {
			if (source.bondTriggered) return;
			if (effect?.effectType !== 'Move') return;
			if ((source.species.id === 'greninjabond' || source.species.id === 'raichumega') && source.hp && !source.transformed && source.side.foePokemonLeft()) {
				this.boost({ atk: 1, spa: 1, spe: 1 }, source, source, this.effect);
				this.add('-activate', source, 'ability: Battle Bond');
				source.bondTriggered = true;
			}
		},
	},
	oblivious: {
		inherit: true,
		onUpdate(pokemon) {
			if (pokemon.volatiles['attract']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('attract');
				this.add('-end', pokemon, 'move: Attract', '[from] ability: Oblivious');
			}
			if (pokemon.volatiles['taunt']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('taunt');
				// Taunt's volatile already sends the -end message when removed
			}
			if (pokemon.volatiles['packtactics']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('packtactics');
				// Taunt's volatile already sends the -end message when removed
			}
		},
	},
	persistent: {
		inherit: true,
		isNonstandard: null,
	},
	/*
	Inherit Template:
	: {
		inherit: true,
		
	},
	*/
	"thunderstorm": {
		shortDesc: "On switch-in, this Pokemon summons Rain and Electric Terrain.",
		onStart(source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.template.speciesid === 'kyogre') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.field.setWeather('raindance');
			this.field.setTerrain('electricterrain');
		},
		flags: {},
		name: "Thunderstorm",
		rating: 4,
		num: 1001,
	},
	"terrify": {
		desc: "On switch-in, this Pokemon lowers the Special Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Special Attack of adjacent opponents by 1 stage.",
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Terrify', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({spa: -1}, target, pokemon, null, true);
				}
			}
		},
		flags: {},
		name: "Terrify",
		rating: 3.5,
		num: 1002,
	},
	"conflagrate": {
		desc: "This Pokemon's Normal-type moves become Fire-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Fire type and have 1.2x power.",
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Fire';
				move.pixilateBoosted = true;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.pixilateBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		flags: {},
		name: "Conflagrate",
		rating: 4,
		num: 1003,
	},
	"spectralbattery": {
		shortDesc: "User's two-turn moves complete in one turn (except Sky Drop).",
		onChargeMove(pokemon, target, move) {
			this.add('-activate', pokemon, 'ability: Spectral Battery');
			this.debug('spectral battery - remove charge turn for ' + move.id);
			this.attrLastMove('[still]');
			this.addMove('-anim', pokemon, move.name, target);
			return false; // skip charge turn
		},
		onBasePowerPriority: 21,
		onBasePower(basePower, pokemon, target, move) {
			if (move.flags['charge']) return this.chainModify([5325, 4096]);
		},
		flags: {},
		name: "Spectral Battery",
		rating: 3,
		num: 1004,
	},
	"infectate": {
		desc: "This Pokemon's Normal-type moves become Bug-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Bug type and have 1.2x power.",
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Bug';
				move.pixilateBoosted = true;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.pixilateBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		flags: {},
		name: "Infectate",
		rating: 4,
		num: 1005,
	},
	"weatherrush": {
		onModifySpe(spe, pokemon) {
			if (['snow', 'hail', 'raindance', 'primordialsea', 'sandstorm'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		flags: {},
		name: "Weather Rush",
		rating: 3,
		num: 1006,
	},
	"momentum": {
		onTryBoost(boost, target, source, effect) {
			if (boost.spe && boost.spe < 0) {
				delete boost.spe;
			}
		},
		flags: {},
		name: "Momentum",
		rating: 2,
		num: 1007,
	},
	"sharpenedfangs": {
		// Implemented in moves.ts
		flags: {},
		name: "Sharpened Fangs",
		rating: 2,
		num: 1008,
	},
	"starstruck": {
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onSwitchIn(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.hp) continue;
				if (target.hasType('Dark')) {
					this.damage(target.baseMaxhp / 8, target, pokemon);
				}
			}
		},
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.hp) continue;
				if (target.hasType('Dark')) {
					this.damage(target.baseMaxhp / 8, target, pokemon);
				}
			}
		},
		flags: {},
		name: "Starstruck",
		rating: 3,
		num: 1009,
	},
	"heeltactics": {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fighting') {
				this.debug('Heel Tactics boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fighting') {
				this.debug('Heel Tactics boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Heel Tactics",
		rating: 3.5,
		num: 1010,
	},
	"crescendo": {
		onStart(pokemon) {
			pokemon.addVolatile('crescendo');
		},
		condition: {
			onStart(pokemon) {
				this.effectState.lastMove = '';
				this.effectState.numConsecutive = 0;
			},
			onTryMovePriority: -2,
			onTryMove(pokemon, target, move) {
				if (!pokemon.hasAbility('crescendo')) {
					pokemon.removeVolatile('crescendo');
					return;
				}
				if (this.effectState.lastMove === move.id) {
					this.effectState.numConsecutive++;
				} else if (pokemon.volatiles['twoturnmove']) {
					if (this.effectState.lastMove !== move.id) {
						this.effectState.numConsecutive = 1;
					} else {
						this.effectState.numConsecutive++;
					}
				} else {
					this.effectState.numConsecutive = 0;
				}
				this.effectState.lastMove = move.id;
			},
			onModifyDamage(damage, source, target, move) {
				const dmgMod = [0x1000, 0x1333, 0x1666, 0x1999, 0x1CCC, 0x2000];
				const numConsecutive = this.effectState.numConsecutive > 5 ? 5 : this.effectState.numConsecutive;
				return this.chainModify([dmgMod[numConsecutive], 0x1000]);
			},
		},
		flags: {},
		name: "Crescendo",
		rating: 3,
		num: 1011,
	},
	"vigorcharge": {
		onTryAddVolatile(status, pokemon) {
			this.add('-activate', pokemon, "ability: Vigor Charge");
			if (status.id === 'mustrecharge') return null;
		},
		flags: {},
		name: "Vigor Charge",
		rating: 3,
		num: 1013,
	},
	"determination": {
		onBasePower(basePower, pokemon, target, move) {
			if (pokemon.moveLastTurnResult === false) {
				this.add('-activate', pokemon, "ability: Determination");
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Determination",
		rating: 3,
		num: 1013,
	},
	"packtactics": {
		onStart(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.hp) continue;
				this.add('-activate', pokemon, 'ability: Pack Tactics');
				target.addVolatile('packtactics');
			}
		},
		onFoeSwitchIn(pokemon) {
			pokemon.addVolatile('packtactics');
		},
		onEnd(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.hp) continue;
				target.removeVolatile('packtactics');
			}
		},
		condition: {
			onStart(target) {
				this.add('-start', target, 'Pack Tactics');
			},
			onEnd(target) {
				this.add('-end', target, 'Pack Tactics');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					const move = this.dex.moves.get(moveSlot.id);
					if (move.category === 'Status' && move.id !== 'mefirst') {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 5,
			onBeforeMove(attacker, defender, move) {
				if (!move.isZ && !move.isMax && move.category === 'Status' && move.id !== 'mefirst') {
					this.add('cant', attacker, 'move: Taunt', move);
					return false;
				}
			},
		},
		flags: {},
		name: "Pack Tactics",
		rating: 4,
		num: 1014,
	},
	"hindenburg": {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.status === 'brn' && move.category === 'Special') {
				return this.chainModify(1.5);
			}
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.trySetStatus('brn', pokemon);
		},
		flags: {},
		name: "Hindenburg",
		rating: 3,
		num: 1015,
	},
	"opportunistic": {
		onBasePowerPriority: 21,
		onBasePower(basePower, pokemon) {
			let boosted = false;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (this.queue.willMove(target)) {
					boosted = true;
					break;
				}
			}
			if (boosted) {
				this.debug('Opportunistic boost');
				return this.chainModify([5325, 4096]);
			}
		},
		flags: {},
		name: "Opportunistic",
		rating: 2.5,
		num: 1016,
	},
	"flytrap": {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Bug') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Fly Trap');
				}
				return null;
			}
		},
		flags: {breakable: 1},
		name: "Fly Trap",
		rating: 3.5,
		num: 1017,
	},
	"dragonstyle": {
		/*
		onModifyMove(move) {
			move.stab = 1;
		},
		*/
		onModifySTAB(stab, source, target, move) {
			return 1.5;
		},
		/*
		onBasePowerPriority: 30,
		onBasePower(basePower, attacker, defender, move) {
			/*
			const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
			this.debug('Base Power: ' + basePowerAfterMultiplier);
			console.log('Base Power: ' + basePowerAfterMultiplier);
			/
			
			this.debug('Dragon Style boost');
			return this.chainModify(1.5);
		},
		*/
		flags: {},
		name: "Dragon Style",
		rating: 4,
		num: 1018,
	},
	"restoreorder": {
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp / 8);
		},
		flags: {},
		name: "Restore Order",
		rating: 4,
		num: 1019,
	},
	"brainless": {
		onAnyModifyBoost(boosts, pokemon) {
			const unawareUser = this.effectState.target;
			if (unawareUser === pokemon) return;
			if (unawareUser === this.activePokemon && pokemon === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['def'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
		},
		onAllyTryAddVolatile(status, target, source, effect) {
			if (['attract', 'disable', 'encore', 'healblock', 'taunt', 'torment', 'packtactics', 'tantalize'].includes(status.id)) {
				if (effect.effectType === 'Move') {
					const effectHolder = this.effectState.target;
					this.add('-block', target, 'ability: Brainless', '[of] ' + effectHolder);
				}
				return null;
			}
		},
		flags: {breakable: 1},
		name: "Brainless",
		rating: 4,
		num: 1020,
	},
	"soulsiphon": {
		onModifyMove(move, pokemon) {
			const type1 = pokemon.getTypes()[0];
			const type2 = pokemon.getTypes()[1];
			if (type1 === move.type || type2 === move.type) move.drain = [1, 2];
		},
		flags: {},
		name: "Soul Siphon",
		rating: 4,
		num: 1021,
	},
	"bootyplunderer": {
		// Coded under Chatter
		flags: {},
		name: "Booty Plunderer",
		rating: 4,
		num: 1022,
	},
	/*
	"clearskies": {
		onStart(source) {
			this.field.clearWeather();
		},
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream'];
			if (!strongWeathers.includes(weather.id)) return false;
		},
		name: "Clear Skies",
		rating: 3,
		num: 1023,
	},
	*/
	"arsonist": {
		onModifyCritRatio(critRatio, source, target) {
			if (target && ['brn'].includes(target.status)) return 5;
		},
		flags: {},
		name: "Arsonist",
		rating: 3,
		num: 1024,
	},
	"ancientwisdom": {
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'mustrecharge') {
				this.add('-activate', pokemon, "ability: Ancient Wisdom");
				return null;
			}
		},
		flags: {},
		name: "Ancient Wisdom",
		rating: 3,
		num: 1025,
	},
	"mindreboot": {
		onStart(pokemon) {
			for (const target of pokemon.adjacentFoes()) {
				target.clearBoosts();
				this.add('-clearboost', target, '[from] ability: Mind Reboot', '[of] ' + pokemon);
			}
		},
		flags: {},
		name: "Mind Reboot",
		rating: 3,
		num: 1026,
	},
	"darkwarp": {
		onModifyMove(move, pokemon) {
			if (move.category !== 'Status' && move.priority <= 0) {
				move.selfSwitch = 'true';
			}
		},
		flags: {},
		name: "Dark Warp",
		rating: 4,
		num: 1027,
	},
	"supernova": {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (['explosion', 'selfdestruct'].includes(move.id)) {
				this.add('-activate', attacker, 'ability: Supernova');
				this.debug('Supernova boost');
				return this.chainModify(2);
			}
		},
		flags: {},
		name: "Supernova",
		rating: 3,
		num: 1028,
	},
	"lunarpower": {
		// Moonlight is coded in the move code
		onStart(pokemon) {
			pokemon.addVolatile('lunarpower');
			this.add('-ability', pokemon, 'Lunar Power');
		},
		onBasePowerPriority: 16,
		onBasePower(basePower, user, target, move) {
			if (move.id === 'moonblast') {
				return this.chainModify([4505, 4096]);
			}
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('lunarpower');
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onChargeMove(pokemon, target, move) {
				this.add('-activate', pokemon, 'ability: Lunar Power');
				this.debug('lunar power - remove charge turn for ' + move.id);
				this.attrLastMove('[still]');
				this.addMove('-anim', pokemon, move.name, target);
				pokemon.removeVolatile('lunarpower');
				return false; // skip charge turn
			},
		},
		flags: {},
		name: "Lunar Power",
		rating: 3,
		num: 1028,
	},
	"tantalize": {
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Tantalize');
					activated = true;
				}
				target.addVolatile('tantalize');
			}
		},
		condition: {
			noCopy: true,
			onStart(pokemon, source, effect) {
				if (pokemon.volatiles['dynamax']) {
					delete pokemon.volatiles['tantalize'];
					return false;
				}
				this.add('-start', pokemon, 'Tantalize');
			},
			onBeforeSwitchOut(pokemon) {
				this.debug('Tantalize damage');
				this.add('-activate', pokemon, 'Tantalize');
				this.damage(pokemon.baseMaxhp / 8, pokemon, pokemon);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Tantalize');
			},
			onDisableMove(pokemon) {
				if (pokemon.lastMove && pokemon.lastMove.id !== 'struggle') pokemon.disableMove(pokemon.lastMove.id);
			},
		},
		flags: {},
		name: "Tantalize",
		rating: 4,
		num: 1028,
	},
	"sushiscraps": {
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.id === "dracometeor") {
				this.debug('Adding Sushi Scraps');
				move.self = {
					boosts: {
						spa: -2,
					},
					onHit(source) {
						for (const side of source.side.foeSidesWithConditions()) {
							this.add('-activate', source, 'ability: Sushi Scraps');
							side.addSideCondition('spikes');
						}
					},
				};
			}
		},
		flags: {},
		name: "Sushi Scraps",
		rating: 3.5,
		num: 1029,
	},
	"perfectmimicry": {
		onStart(pokemon) {
			this.singleEvent('TerrainChange', this.effect, this.effectState, pokemon);
		},
		onTerrainChange(pokemon) {
			let type = pokemon.getTypes()[1];
			let types;
			switch (this.field.terrain) {
			case 'electricterrain':
				types = ['Electric', type];
				break;
			case 'grassyterrain':
				types = ['Grass', type];
				break;
			case 'mistyterrain':
				types = ['Fairy', type];
				break;
			case 'psychicterrain':
				types = ['Psychic', type];
				break;
			default:
				types = pokemon.baseSpecies.types;
			}
			const oldTypes = pokemon.getTypes();
			if (oldTypes.join() === types.join() || !pokemon.setType(types)) return;
			if (this.field.terrain || pokemon.transformed) {
				this.add('-start', pokemon, 'typechange', types.join('/'), '[from] ability: Perfect Mimicry');
				if (!this.field.terrain) this.hint("Transform Mimicry changes you to your original un-transformed types.");
			} else {
				this.add('-activate', pokemon, 'ability: Perfect Mimicry');
				this.add('-end', pokemon, 'typechange', '[silent]');
			}
		},
		flags: {},
		name: "Perfect Mimicry",
		rating: 3,
		num: 1030,
	},
	"greenhouse": {
		onStart(source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.species.id === 'groudon') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.field.setWeather('sunnyday');
			this.field.setTerrain('grassyterrain');
		},
		flags: {},
		name: "Greenhouse",
		rating: 4,
		num: 1031,
	},
	"terahammer": {
		onStart(pokemon) {
			this.add('-ability', pokemon, pokemon.teraType, 'Tera Hammer');
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			if (move.id === 'gigatonhammer') {
				move.type = pokemon.teraType;
			}
		},
		onModifyWeightPriority: 1,
		onModifyWeight(weighthg) {
			return weighthg * 2;
		},
		flags: {},
		name: "Tera Hammer",
		rating: 4,
		num: 1032,
	},
	"megaiceface": {
		onStart(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2 && !['Noice'].includes(pokemon.species.forme)) {
				this.add('-activate', pokemon, 'ability: Mega Ice Face');
				pokemon.addVolatile('megaiceface');
			} 
		},
		onDamage(damage, target, source, effect) {
			if (effect.id === 'recoil' && source.species.id === 'eiscuemega') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Eiscue' || pokemon.transformed) {
				return;
			}
			if (pokemon.hp <= pokemon.maxhp / 2 && !['Noice'].includes(pokemon.species.forme)) {
				this.add('-activate', pokemon, 'ability: Mega Ice Face');
				pokemon.addVolatile('megaiceface');
			} 
			/*
			else if (pokemon.hp > pokemon.maxhp / 2 && ['Noice'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('megaiceface'); // in case of base Darmanitan-Zen
				pokemon.removeVolatile('megaiceface');
			}
			*/
		},
		/*
		onEnd(pokemon) {
			if (!pokemon.volatiles['megaiceface'] || !pokemon.hp) return;
			pokemon.transformed = false;
			delete pokemon.volatiles['megaiceface'];
			if (pokemon.species.baseSpecies === 'Eiscue-Mega' && pokemon.species.battleOnly) {
				pokemon.formeChange(pokemon.species.battleOnly as string, this.effect, false, '[silent]');
			}
		},
		*/
		condition: {
			onStart(pokemon) {
				if (pokemon.species.id !== 'eiscuemeganoice') pokemon.formeChange('Eiscue-Mega-Noice');
				this.effectState.checkedBerserk = false;
			},
			onUpdate(pokemon) {
				if (pokemon.hp <= pokemon.maxhp / 4 && !this.effectState.checkedBerserk) {
					this.boost({spe: 1});
					this.effectState.checkedBerserk = true;
				}
			},
			/*
			onEnd(pokemon) {
				if (['Noice'].includes(pokemon.species.forme)) {
					pokemon.formeChange(pokemon.species.battleOnly as string);
				}
			},
			*/
		},
		flags: {
			failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1,
			notransform: 1,
		},
		name: "Mega Ice Face",
		rating: 3,
		num: 1033,
	},
	"anemochory": {
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.type === 'Flying') {
				move.basePower *= 1.5;
			}
			if (move.type === "Grass" && move.category !== "Status" && !move.self) {
				this.debug('Adding Anemochory');
				move.self = {
					onHit(source) {
						this.add('-activate', source, 'ability: Anemochory');
						this.field.setTerrain('grassyterrain');
					},
				};
			}
		},
		flags: {},
		name: "Anemochory",
		rating: 2.5,
		num: 1034,
	},
	"deadlyprecision": {
		onAnyModifyDef(def, target, source, move) {
			const abilityHolder = this.effectState.target;
			if (target.hasAbility('Deadly Precision')) return;
			if (!move.ruinedDef?.hasAbility('Deadly Precision')) move.ruinedDef = abilityHolder;
			if (move.ruinedDef !== abilityHolder) return;
			this.debug('Deadly Precision Def drop');
			return this.chainModify([3276, 4096]);
		},
		onAnyModifySpD(spd, target, source, move) {
			const abilityHolder = this.effectState.target;
			if (target.hasAbility('Deadly Precision')) return;
			if (!move.ruinedSpD?.hasAbility('Deadly Precision')) move.ruinedSpD = abilityHolder;
			if (move.ruinedSpD !== abilityHolder) return;
			this.debug('Deadly Precision SpD drop');
			return this.chainModify([3276, 4096]);
		},
		flags: {},
		name: "Deadly Precision",
		rating: 3.5,
		num: 1035,
	},
	magneticfists: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				this.debug('Magnetic Fists boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Magnetic Fists",
		rating: 3.5,
		num: 1036,
	},
	"heavyartillery": {
		onStart(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		onBeforeMove(pokemon, target, move) {
			if (move.isZOrMaxPowered || move.id === 'struggle') return;
			if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
				// Fails unless ability is being ignored (these events will not run), no PP lost.
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Heavy Artillery");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
			pokemon.abilityState.choiceLock = move.id;
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Heavy Artillery SpA Boost');
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			if (!pokemon.abilityState.choiceLock) return;
			if (pokemon.volatiles['dynamax']) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== pokemon.abilityState.choiceLock) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
		onEnd(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		flags: {},
		name: "Heavy Artillery",
		rating: 3,
		num: 1037,
	},
	"corrosiveooze": {
		onModifyMove(move) {
			if (move.target === 'self') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 100,
				volatileStatus: 'healblock',
				ability: this.dex.abilities.get('corrosiveooze'),
			});
		},		
		/*
		onDamagingHit(damage, target, source, move) {
			if (source.volatiles['corrosiveooze']) return;
			if (!move.isMax && !move.isFutureMove && move.id !== 'struggle') {
				this.add('-activate', target, 'ability: Corrosive Ooze');
				this.debug(source);
				this.debug(target);
				source.addVolatile('healblock');
			}
		},
		/*
		condition: {
			onTryHeal(damage, target, source, effect) {
				this.debug("heal occurring");
				this.damage(damage);
				return 0;
			},
		},
		*/
		flags: {},
		name: "Corrosive Ooze",
		rating: 4,
		num: 1038,
	},
	machibuse: {
		onBeforeSwitchIn(pokemon) {
			pokemon.illusion = null;
			// yes, you can Illusion an active pokemon but only if it's to your right
			for (let i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
				const possibleTarget = pokemon.side.pokemon[i];
				if (!possibleTarget.fainted) {
					pokemon.illusion = possibleTarget;
					break;
				}
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (target.illusion) {
				this.singleEvent('End', this.dex.abilities.get('Illusion'), target.abilityState, target, source, move);
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (pokemon.illusion) return this.chainModify([5324, 4096]);
		},
		onEnd(pokemon) {
			if (pokemon.illusion) {
				this.debug('illusion cleared');
				pokemon.illusion = null;
				const details = pokemon.species.name + (pokemon.level === 100 ? '' : ', L' + pokemon.level) +
					(pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
				this.add('replace', pokemon, details);
				this.add('-end', pokemon, 'Illusion');
			}
		},
		onFaint(pokemon) {
			pokemon.illusion = null;
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1},
		name: "Machibuse",
		rating: 4.5,
		num: 1039,
	},
	"assassinate": {
		onStart(pokemon) {
			pokemon.addVolatile('assassinate');
			this.add('-start', pokemon, 'assassinate');
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['assassinate'];
		},
		condition: {
			onModifyCritRatio(critRatio, source, target) {
				delete source.volatiles['assassinate'];
				this.add('-end', source, 'assassinate');
				return 5;
			},
		},
		flags: {},
		name: "Assassinate",
		rating: 3.5,
		num: 1040,
	},
	"surgingsteel": {
		onModifyMovePriority: -1,
		onModifyMove(move) {
			this.debug(move.type);
			this.debug(move.category);
			this.debug(move.self);
			if (move.type === "Steel" && move.category !== "Status" && !move.self) {
				this.debug('Adding Surging Steel');
				move.self = {
					onHit(source) {
						for (const side of source.side.foeSidesWithConditions()) {
							this.add('-activate', source, 'ability: Surging Steel');
							side.addSideCondition('gmaxsteelsurge');
						}
					},
				};
			}
		},
		flags: {},
		name: "Surging Steel",
		rating: 4.5,
		num: 1041,
	},
	"elementalmastery": {
		onModifyMove(move) {
			const types = ['Fire', 'Electric', 'Ice'];
			if (types.includes(move.type)) {
				move.basePower *= 1.5;
			}
		},
		flags: {},
		name: "Elemental Mastery",
		rating: 3.5,
		num: 1042,
	},
	"divineinspiration": {
		//Coded as part of Wish in moves.ts
		condition: {
			onStart(target) {
				this.add('-start', target, 'ability: Divine Inspiration');
			},
			onModifyAtk(atk, target, source, move) {
				return this.chainModify([4915, 4096]);
			},
			onModifySpA(def, target, source, move) {
				return this.chainModify([4915, 4096]);
			},
			onEnd(target) {
				delete target.volatiles['divineinspiration'];
			},
		},
		flags: {},
		name: "Divine Inspiration",
		rating: 4,
		num: 1043,
	},
	"pristinearmor": {
		onStart(pokemon) {
			pokemon.addVolatile('pristinearmor');
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['pristinearmor'];
			this.add('-end', pokemon, 'Pristine Armor', '[silent]');
		},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'ability: Pristine Armor');
			},
			onModifyDef(def, target, source, move) {
				return this.chainModify([5120, 4096]);
			},
			onModifySpD(spd, target, source, move) {
				return this.chainModify([5120, 4096]);
			},
			onDamagingHit(damage, target, source, move) {
				if (move.type === 'Water' && target !== source && move.category !== 'Status') {
					delete target.volatiles['pristinearmor'];
					this.add('-end', target, 'ability: Pristine Armor');
				}
			},
			onWeatherChange(pokemon) {
				let rain = ['raindance', 'primordialsea'];
				if (rain.includes(pokemon.effectiveWeather())) {
					delete pokemon.volatiles['pristinearmor'];
					this.add('-end', pokemon, 'ability: Pristine Armor');
				}
			},
			onModifyMove(move) {
				if (move.id === 'bodypress') {
					move.basePower *= 1.2;
					console.log("Body Press boost");
				}
			},
		},
		flags: {breakable: 1},
		name: "Pristine Armor",
		rating: 4,
		num: 1044,
	},
	"puremindset": {
		onModifyMove(move) {
			if (move.category === 'Physical') {
				move.category = 'Special';
			}
		},
		flags: {},
		name: "Pure Mindset",
		rating: 4,
		num: 1045,
	},
	"weatherrod": {
		onStart(pokemon) {
			this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
		},
		onWeatherChange(pokemon) {
			//if (pokemon.baseSpecies.baseSpecies !== 'Heliolisk' || pokemon.transformed) return;
			let type = null;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				type = 'Fire';
				break;
			case 'raindance':
			case 'primordialsea':
				type = 'Water';
				break;
			case 'hail':
			case 'snow':
				type = 'Ice';
				break;
			case 'sandstorm':
				type = 'Rock';
				break;
			default:
				break;
			}
			pokemon.setType(pokemon.baseSpecies.types);
			if (!type) return;
			else {
				if (!pokemon.addType(type)) return;
				this.add('-start', pokemon, 'typeadd', type, '[from] ability: Weather Rod');
			}
		},
		flags: {},
		name: "Weather Rod",
		rating: 3,
		num: 1046,
	},
	"fearless": {
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.accuracy === 'true') return;
			if (move.accuracy < 100) return this.chainModify([4915, 4096]);
		},
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Scrappy', '[of] ' + target);
			}
		},
		flags: {},
		name: "Fearless",
		rating: 3,
		num: 1047,
	},
	"spectralflames": {
		/*
		onSourceInvulnerabilityPriority: 1,
		onSourceInvulnerability(target, source, move) {
			if (move.category !== 'Status') return;
			if (move && source === this.effectState.target && target === this.effectState.source) return 0;
		},
		*/
		onSourceAccuracy(accuracy, target, source, move) {
			if (move.category !== 'Status') return accuracy;
			if (move && source === this.effectState.target && target) return true;
		},
		flags: {},
		name: "Spectral Flames",
		rating: 3.5,
		num: 1048,
	},
	"entrance": {
		/*
		onBasePower(pokemon, target, move) {
			let statused = false;
			let statLowered = false;
			if (target.status || target.hasAbility('comatose')) {
				this.debug('BP boost from status condition');
				statused = true;
			}
			if (target.volatiles['confusion'] || target.volatiles['attract']) {
				this.debug('BP boost from volatile status condition');
				statused = true;
			}
			const boosts: SparseBoostsTable = {};
			let i: BoostID;
			for (i in target.boosts) {
				if (target.boosts[i] < 0) {
					this.debug('BP boost from lowered stat stage');
					statLowered = true;
				}
			}
			if (statused && statLowered) {
				return this.chainModify(1.5);
			}
			else if (statused || statLowered) {
				return this.chainModify([5324, 4096]);
			}
		},
		*/
		onModifySpA(atk, attacker, defender, move) {
			let statused = false;
			let statLowered = false;
			if (defender.status || defender.hasAbility('comatose')) {
				this.debug('Boost from status condition');
				statused = true;
			}
			if (defender.volatiles['confusion'] || defender.volatiles['attract']) {
				this.debug('Boost from volatile status condition');
				statused = true;
			}
			const boosts: SparseBoostsTable = {};
			let i: BoostID;
			for (i in defender.boosts) {
				if (defender.boosts[i] < 0) {
					this.debug('Boost from lowered stat stage');
					statLowered = true;
				}
			}
			if (statused && statLowered) {
				return this.chainModify(1.5);
			}
			else if (statused || statLowered) {
				return this.chainModify([5324, 4096]);
			}
		},
		flags: {},
		name: "Entrance",
		rating: 2.5,
		num: 1049,
	},
	"crammander": {
		onAfterMoveSecondarySelf(source, target, move) {
			if (!move || !target) return;
			if (target !== source && move.category !== 'Status') {
				if (!target.hp || !target.isActive || source.transformed || source.isSemiInvulnerable()) return;
				this.damage(target.baseMaxhp / 4, target, source);
				//this.boost({def: -1, spd: -1}, target, source, null, true);	
			}
		},
		flags: {},
		name: "Crammander",
		rating: 4.5,
		num: 1050,
	},
	"terachromaticism": {
		onStart(pokemon) {
			pokemon.setType(pokemon.teraType);
			this.add('-start', pokemon, 'typechange', pokemon.teraType, '[from] ability: Terachromaticism');
		},
		onModifyMove(move, pokemon) {
			if (move.type === pokemon.teraType) {
				move.stab = 1.75;
			}
		},
		flags: {},
		name: "Terachromaticism",
		rating: 3.5,
		num: 1051,
	},
	arachnophobia: {
		onFoeSwitchIn(pokemon) {
			this.add('-ability', this.effectState.target, 'Arachnophobia');
			this.boost({spe: -1}, pokemon, pokemon.side.foe.active[0], null, true);
		},
		flags: {},
		name: "Arachnophobia",
		rating: 2.5,
		num: 1052,
	},
	dragonhunter: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Dragon') {
				this.debug('Dragonhunter boost');
				return this.chainModify([5325, 4096]);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Dragon') {
				this.add('-immune', target, '[from] ability: Dragonhunter');
				return null;
			}
		},
		flags: {},
		name: "Dragonhunter",
		rating: 3.5,
		num: 1053,
	},
	lifestream: {
		onStart(source) {
			this.field.setWeather('sandstorm');
			this.field.setTerrain('mistyterrain');
		},
		flags: {},
		name: "Lifestream",
		rating: 4,
		num: 1054,
	},
	decay: {
		onSourceDamagingHit(damage, target, source, move) {
			//this.boost({spd: -1}, target, source);
			let activated = false;
			this.debug(target);
			this.debug(source);
			for (const pokemon of this.getAllActive()) {
				this.debug(pokemon);
				if (pokemon === target || pokemon.fainted) continue;
				if (!activated) {
					this.add('-ability', source, 'Decay');
					activated = true;
				}
				this.boost({spd: -1}, target, target, null, true);
			}
		},
		flags: {},
		name: "Decay",
		rating: 3.5,
		num: 1055,
	},
	sunkensky: {
		// airborneness implemented in sim/pokemon.js:Pokemon#isGrounded		
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Sunken Sky');
				}
				return null;
			}
		},
		flags: {breakable: 1},
		name: "Sunken Sky",
		rating: 3.5,
		num: 1056,
	},
	mindjail: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Mind Jail');
			pokemon.addVolatile('imprison');
		},
		flags: {breakable: 1},
		name: "Mind Jail",
		rating: 4,
		num: 1057,
	},
	hyperdrillsuperseed: {
		onStart(source) {
			this.field.setTerrain('grassyterrain');
		},
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (!this.field.isTerrain('grassyterrain')) {
				this.field.setTerrain('grassyterrain');
			}
		},
		onEnd() {
			this.field.clearTerrain();
		},
		flags: {},
		name: "Hyperdrill Superseed",
		rating: 4,
		num: 1058,
	},
	frostyresurgence: {
		onSourceDamagingHit(damage, target, source, move) {
			this.heal(damage / 4, source);
		},
		flags: {},
		name: "Frosty Resurgence",
		rating: 3.5,
		num: 1059,
	},
	analyzer: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			const types = ['Fire', 'Electric', 'Ice'];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && 
				!(move.name === 'Tera Blast' && pokemon.terastallized) &&
				types.includes(pokemon.teraType)) {
				move.type = pokemon.teraType;
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Analyzer",
		rating: 4,
		num: 1060,
	},
	bizarreblizzard: {
		onStart(source) {
			this.field.setWeather('snow');
			this.field.setTerrain('psychicterrain');
		},
		flags: {},
		name: "Bizarre Blizzard",
		rating: 4,
		num: 1061,
	},
	torquetunegear: {
		/*
		onTryMovePriority: -2,
		onTryMove(pokemon, target, move) {
			if (move.id === 'spinout') {
				switch (pokemon.teraType) {
				case 'dark':
					this.actions.useMove('wickedtorque', pokemon, target);
					return null;
				case 'fairy':
					this.actions.useMove('magicaltorque', pokemon, target);
					return null;
				case 'fighting':
					this.actions.useMove('combattorque', pokemon, target);
					return null;
				case 'fire':
					this.actions.useMove('blazingtorque', pokemon, target);
					return null;
				case 'poison':
					this.actions.useMove('noxioustorque', pokemon, target);
					return null;
				default:
					break;
				}				
			}
		},
		*/
		/*
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (move.id === 'spinout') {
				switch (source.teraType) {
				case 'dark':
					this.actions.useMove('wickedtorque', target, source);
					return null;
				case 'fairy':
					this.actions.useMove('magicaltorque', target, source);
					return null;
				case 'fighting':
					this.actions.useMove('combattorque', target, source);
					return null;
				case 'fire':
					this.actions.useMove('blazingtorque', target, source);
					return null;
				case 'poison':
					this.actions.useMove('noxioustorque', target, source);
					return null;
				default:
					break;
				}				
			}
		},
		*/
		/*
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			Console.log("test");
			let newMove = this.dex.moves.get('noxioustorque');
			this.actions.useMove(newMove, target, source);
		},
		*/
		onTryMovePriority: -2,
		onTryMove(pokemon, target, move) {
			if (move.id !== 'spinout') return;
			switch (pokemon.teraType) {
				case 'Dark':
					this.actions.useMove(this.dex.moves.get('wickedtorque'), pokemon, target);
					break;
				case 'Fairy':
					this.actions.useMove(this.dex.moves.get('magicaltorque'), pokemon, target);
					break;
				case 'Fighting':
					this.actions.useMove(this.dex.moves.get('combattorque'), pokemon, target);
					break;
				case 'Fire':
					this.actions.useMove(this.dex.moves.get('blazingtorque'), pokemon, target);
					break;
				case 'Poison':
					this.actions.useMove(this.dex.moves.get('noxioustorque'), pokemon, target);
					break;
				default:
					return;
				}
			return null;
		},
		flags: {},
		name: "Torque Tune Gear",
		rating: 4,
		num: 1062,
	},
	flickerfusion: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.type === 'Flying') return priority + 1;
		},
		onSourceModifyAccuracyPriority: 10,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (!(move.category === 'Status') && typeof accuracy === 'number') {
				this.debug('Flicker Fusion - guaranteed hit');
				//console.log("test");
				return true;
			}
		},
		flags: {},
		name: "Flicker Fusion",
		rating: 4,
		num: 1063,
	},
	hyperion: {
		onStart(pokemon) {
			this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
		},
		onWeatherChange(pokemon) {
			//console.log(pokemon.abilityState.battleBondTriggered);
			// Protosynthesis is not affected by Utility Umbrella
			if (this.field.isWeather('sunnyday')) {
				pokemon.addVolatile('hyperion');
			} 
			else if (pokemon.abilityState.battleBondTriggered !== true) {
				pokemon.addVolatile('hyperion');
				pokemon.abilityState.battleBondTriggered = true;
			}
			else {
				// Protosynthesis will not deactivate if Sun is suppressed, hence the direct ID check (isWeather respects supression)
				pokemon.removeVolatile('hyperion');
			}
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['hyperion'];
			this.add('-end', pokemon, 'Hyperion', '[silent]');
		},
		condition: {
			noCopy: true,
			onStart(pokemon, source, effect) {
				this.add('-activate', pokemon, 'ability: Hyperion');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, pokemon) {
				if (pokemon.ignoringAbility()) return;
				this.debug('Hyperion atk boost');
				return this.chainModify(1.5);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Hyperion');
			},
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1},
		name: "Hyperion",
		rating: 4,
		num: 1064,
	},
	livingcitadel: {
		onSourceModifyDamage(damage, source, target, move) {
			if (move.category === 'Special') {
				return this.chainModify(0.5);
			}
		},
		flags: {breakable: 1},
		name: "Living Citadel",
		rating: 4,
		num: 1065,
	},
	jadeemperor: {
		onStart(pokemon) {
			if (pokemon.side.totalFainted) {
				this.add('-activate', pokemon, 'ability: Jade Emperor');
				const fallen = Math.min(pokemon.side.totalFainted, 5);
				this.add('-start', pokemon, `fallen${fallen}`, '[silent]');
				this.effectState.fallen = fallen;
			}
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, `fallen${this.effectState.fallen}`, '[silent]');
		},
		onModifyDef(def, target, source, move) {
			if (this.effectState.fallen) {
				const powMod = [4096, 4506, 4915, 5325, 5734, 6144];
				this.debug(`Jade Emperor boost: ${powMod[this.effectState.fallen]}/4096`);
				return this.chainModify([powMod[this.effectState.fallen], 4096]);
			}
		},
		onModifySpD(spd, target, source, move) {
			if (this.effectState.fallen) {
				const powMod = [4096, 4506, 4915, 5325, 5734, 6144];
				this.debug(`Jade Emperor boost: ${powMod[this.effectState.fallen]}/4096`);
				return this.chainModify([powMod[this.effectState.fallen], 4096]);
			}
		},
		flags: {},
		name: "Jade Emperor",
		rating: 4,
		num: 1066,
	},
	warlord: {
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
			let newPower = 0;
			switch (move.id) {
			case 'hardpress':
				newPower = 100;
				break;
			case 'reversal':
				newPower = 200;
				break;
			case 'gyroball':
				newPower = 150;
				break;
			case 'grassknot':
				newPower = 120;
				break;
			case 'heatcrash':
				newPower = 120;
				break;
			case 'heavyslam':
				newPower = 120;
				break;
			case 'lowkick':
				newPower = 120;
				break;
			case 'magnitude':
				newPower = 150;
				break;
			case 'return':
				newPower = 102;
				break;
			case 'frustration':
				newPower = 102;
				break;
			default:
				return;
			}
			this.debug("BP: " + newPower);
			return newPower;
		},
		flags: {},
		name: "Warlord",
		rating: 4,
		num: 1067,
	},
	lastrights: {
		//coded under Healing Wish
		condition: {
			onStart(target) {
				this.add('-start', target, 'ability: Last Rights');
				this.boost({ atk: 1, spa: 1 }, pokemon);
			},
		},
		flags: {},
		name: "Last Rights",
		rating: 4,
		num: 1068,
	},
	bushido: {
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				const move = this.dex.moves.get(moveSlot.id);
				if (move.category === 'Status') {
					return;
				}
			}
			return this.chainModify(1.5);
		},
		flags: {},
		name: "Bushido",
		rating: 4,
		num: 1069,
	},
	divinity: {
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon) {
			if (move?.type === 'Psychic' || pokemon.hp !== pokemon.maxhp) return;
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Dark'] = true;
			}
		},
		onModifyDamage(damage, source, target, move) {
			if (move.ignoreImmunity['Dark']) {
				this.debug('Divinity boost');
				return this.chainModify(2);
			}
		},
		flags: { breakable: 1 },
		name: "Divinity",
		rating: 4,
		num: 1070,
	},
	broodlingbond: {
		//additional implementation in scripts (actions modifyDamage and useMoveInner)
		onPrepareHit(source, target, move) {
			if (move.category === 'Status' || move.multihit || move.flags['noparentalbond'] || move.flags['charge'] ||
				move.flags['futuremove'] || move.spreadHit || move.isZ || move.isMax) return;
			move.multihit = 2;
			move.multihitType = 'broodlingbond';
		},
		onModifyMove(move, pokemon) {
			if (move.secondaries && !move.hasSheerForceBoost) {
				delete move.secondaries;
				// Technically not a secondary effect, but it is negated
				delete move.self;
				if (move.id === 'clangoroussoulblaze') delete move.selfBoost;
				// Actual negation of `AfterMoveSecondary` effects implemented in scripts.js
				move.hasSheerForce = true;
			}
		},
		flags: {},
		name: "Broodling Bond",
		rating: 4.5,
		num: 1071
	},
};
