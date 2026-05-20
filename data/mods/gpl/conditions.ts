export const Conditions: import('../../../sim/dex-conditions').ModdedConditionDataTable = {
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
