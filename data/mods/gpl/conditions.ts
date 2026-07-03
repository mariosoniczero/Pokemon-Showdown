export const Conditions: import('../../../sim/dex-conditions').ModdedConditionDataTable = {
	par: {
		inherit: true,
		onModifySpe(spe, pokemon) {
			// Paralysis occurs after all other Speed modifiers, so evaluate all modifiers up to this point first
			spe = this.finalModify(spe);
			if (!pokemon.hasAbility('quickfeet') && !pokemon.hasAbility('momentum')) {
				spe = Math.floor(spe * 50 / 100);
			}
			return spe;
		},
	},
	raindance: {
		inherit: true,
		durationCallback(source, effect) {
			if (source?.hasItem('damprock') || source?.hasAbility('thunderstorm')) {
				return 8;
			}
			return 5;
		},
	},
	sunnyday: {
		inherit: true,
		durationCallback(source, effect) {
			if (source?.hasItem('heatrock') || source?.hasAbility('greenhouse')) {
				return 8;
			}
			return 5;
		},
	},
	sandstorm: {
		inherit: true,
		durationCallback(source, effect) {
			if (source?.hasItem('smoothrock') || source?.hasAbility('lifestream')) {
				return 8;
			}
			return 5;
		},
	},
	snowscape: {
		inherit: true,
		durationCallback(source, effect) {
			if (source?.hasItem('icyrock') || source?.hasAbility('bizarreblizzard')) {
				return 8;
			}
			return 5;
		},
	},
	packtactics: {
		name: 'Pack Tactics',
		// this is a volatile status
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
};
