export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	chatter: {
		inherit: true,
		onBasePower(basePower, source, target, move) {
			const item = target.getItem();
			if (!this.singleEvent('TakeItem', item, target.itemState, target, target, move, item)) return;
			if (item.id) {
				return this.chainModify(1.5);
			}
		},
		onAfterHit(target, source) {
			if (target.volatiles['confusion'] && source.ability === 'bootyplunderer') {
				const item = target.takeItem();
				if (item) {
					this.add('-enditem', target, item.name, '[from] ability: Booty Plunderer', '[of] ' + source);
				}
			}
		},
	},
	healingwish: {
		inherit: true,
		condition: {
			onStart(pokemon, source) {
				if (source.ability === 'lastrights') {
					this.effectState.lastRights = true;
				}
			},
			onSwitchIn(target) {
				this.singleEvent('Swap', this.effect, this.effectState, target);
			},
			onSwap(target) {
				if (!target.fainted && (target.hp < target.maxhp || target.status)) {
					target.heal(target.maxhp);
					target.clearStatus();
					this.add('-heal', target, target.getHealth, '[from] move: Healing Wish');
					target.side.removeSlotCondition(target, 'healingwish');
					if (this.effectState.divineInspiration) {
						target.addVolatile('lastrights');
					}
				}
			},
		},
	},
	moonlight: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'snow':
				factor = 0.25;
				break;
			}
			if (pokemon.ability === 'lunarpower') factor *= 1.5;
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
	},
	wish: {
		inherit: true,
		condition: {
			duration: 2,
			onStart(pokemon, source) {
				this.effectState.hp = source.maxhp / 2;
				if (source.ability === 'divineinspiration') {
					this.effectState.divineInspiration = true;
				}
			},
			onResidualOrder: 4,
			onEnd(target) {
				if (target && !target.fainted) {
					const damage = this.heal(this.effectState.hp, target, target);
					if (damage) {
						this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + this.effectState.source.name);
					}
					if (this.effectState.divineInspiration) {
						target.addVolatile('divineinspiration');
					}
				}
			},
		},
	},
	/*
	Template
	: {
		inherit: true,
		
	},
	*/
};
