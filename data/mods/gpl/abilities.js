'use strict';

/**@type {{[k: string]: ModdedAbilityData}} */
let BattleAbilities = {
    "infectate": {
		desc: "This Pokemon's Normal-type moves become Bug-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Bug type and have 1.2x power.",
		onModifyMovePriority: -1,
		onModifyMove(move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Bug';
				move.pixilateBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.pixilateBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "infectate",
		name: "Infectate",
		rating: 4,
		num: 1007,
	},
    /*
	"hemotoxin": {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Poison-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Poison') {
				this.debug('Hemotoxin boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Poison') {
				this.debug('Hemotoxin boost');
				return this.chainModify(1.5);
			}
		},
		id: "hemotoxin",
		name: "Hemotoxin",
		rating: 3,
		num: 1006,
	},
    */
	"spectralbattery": {
		shortDesc: "User's two-turn moves complete in one turn (except Sky Drop).",
		onChargeMove(pokemon, target, move) {
			this.add('-ability', pokemon, 'Spectral Battery');
			this.debug('spectral battery - remove charge turn for ' + move.id);
			this.attrLastMove('[still]');
			this.addMove('-anim', pokemon, move.name, target);
			return false; // skip charge turn
		},
		id: "spectralbattery",
		name: "Spectral Battery",
		rating: 3,
		num: 1005,
	},
	/*
    "terraformer": {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Ground-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ground') {
				this.debug('Terraformer boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Ground') {
				this.debug('Terraformer boost');
				return this.chainModify(1.5);
			}
		},
		id: "terraformer",
		name: "Terraformer",
		rating: 3,
		num: 1004,
	},
    */
	"conflagrate": {
		desc: "This Pokemon's Normal-type moves become Fire-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Fire type and have 1.2x power.",
		onModifyMovePriority: -1,
		onModifyMove(move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Fire';
				move.pixilateBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.pixilateBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "conflagrate",
		name: "Conflagrate",
		rating: 4,
		num: 1003,
	},
	"terrify": {
		desc: "On switch-in, this Pokemon lowers the Special Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Special Attack of adjacent opponents by 1 stage.",
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Terrify', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({spa: -1}, target, pokemon);
				}
			}
		},
		id: "terrify",
		name: "Terrify",
		rating: 3.5,
		num: 1002,
	},
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
		id: "thunderstorm",
		name: "Thunderstorm",
		rating: 4,
		num: 1001,
	},
    "persistent": {
        inherit: true,
        isNonstandard: null,
    },
};

exports.BattleAbilities = BattleAbilities;
