export const Items: {[k: string]: ModdedItemData} = {
	abomasite: {
		inherit: true,
		isNonstandard: null,
	},
	absolite: {
		inherit: true,
		isNonstandard: null,
	},
	adamantcrystal: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Steel' || move.type === 'Dragon') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem: false,
	},
	aerodactylite: {
		inherit: true,
		isNonstandard: null,
	},
	aggronite: {
		inherit: true,
		isNonstandard: null,
	},
	alakazite: {
		inherit: true,
		isNonstandard: null,
	},
	altarianite: {
		inherit: true,
		isNonstandard: null,
	},
	ampharosite: {
		inherit: true,
		isNonstandard: null,
	},
	audinite: {
		inherit: true,
		isNonstandard: null,
	},
	banettite: {
		inherit: true,
		isNonstandard: null,
	},
	beedrillite: {
		inherit: true,
		isNonstandard: null,
	},
	blastoisinite: {
		inherit: true,
		isNonstandard: null,
	},
	blazikenite: {
		inherit: true,
		isNonstandard: null,
	},
	blueorb: {
		inherit: true,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && !pokemon.species.isPrimal) {
				this.queue.insertChoice({pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal(pokemon) {
			// @ts-ignore
			const species: Species = this.actions.getMixedSpecies(pokemon.m.originalSpecies, 'Kyogre-Primal', pokemon);
			if (pokemon.m.originalSpecies === 'Kyogre') {
				pokemon.formeChange(species, this.effect, true);
			} else {
				pokemon.formeChange(species, this.effect, true);
				pokemon.baseSpecies = species;
				this.add('-start', pokemon, 'Blue Orb', '[silent]');
			}
			pokemon.canTerastallize = null;
		},
		onTakeItem: false,
		isNonstandard: null,
	},
	cameruptite: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditex: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditey: {
		inherit: true,
		isNonstandard: null,
	},
	diancite: {
		inherit: true,
		isNonstandard: null,
	},
	galladite: {
		inherit: true,
		isNonstandard: null,
	},
	garchompite: {
		inherit: true,
		isNonstandard: null,
	},
	gardevoirite: {
		inherit: true,
		isNonstandard: null,
	},
	gengarite: {
		inherit: true,
		isNonstandard: null,
	},
	glalitite: {
		inherit: true,
		isNonstandard: null,
	},
	griseouscore: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ghost' || move.type === 'Dragon') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem: false,
	},
	gyaradosite: {
		inherit: true,
		isNonstandard: null,
	},
	heracronite: {
		inherit: true,
		isNonstandard: null,
	},
	houndoominite: {
		inherit: true,
		isNonstandard: null,
	},
	kangaskhanite: {
		inherit: true,
		isNonstandard: null,
	},
	latiasite: {
		inherit: true,
		isNonstandard: null,
	},
	latiosite: {
		inherit: true,
		isNonstandard: null,
	},
	lopunnite: {
		inherit: true,
		isNonstandard: null,
	},
	lucarionite: {
		inherit: true,
		isNonstandard: null,
	},
	lustrousglobe: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Water' || move.type === 'Dragon') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem: false,
	},
	manectite: {
		inherit: true,
		isNonstandard: null,
	},
	mawilite: {
		inherit: true,
		isNonstandard: null,
	},
	medichamite: {
		inherit: true,
		isNonstandard: null,
	},
	metagrossite: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwonitex: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwonitey: {
		inherit: true,
		isNonstandard: null,
	},
	pidgeotite: {
		inherit: true,
		isNonstandard: null,
	},
	pinsirite: {
		inherit: true,
		isNonstandard: null,
	},
	redorb: {
		inherit: true,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && !pokemon.species.isPrimal) {
				this.queue.insertChoice({pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal(pokemon) {
			// @ts-ignore
			const species: Species = this.actions.getMixedSpecies(pokemon.m.originalSpecies, 'Groudon-Primal', pokemon);
			if (pokemon.m.originalSpecies === 'Groudon') {
				pokemon.formeChange(species, this.effect, true);
			} else {
				pokemon.formeChange(species, this.effect, true);
				pokemon.baseSpecies = species;
				this.add('-start', pokemon, 'Red Orb', '[silent]');
				const apparentSpecies = pokemon.illusion ? pokemon.illusion.species.name : pokemon.m.originalSpecies;
				const oSpecies = this.dex.species.get(apparentSpecies);
				if (pokemon.illusion) {
					const types = oSpecies.types;
					if (types.length > 1 || types[types.length - 1] !== 'Fire') {
						this.add('-start', pokemon, 'typechange', (types[0] !== 'Fire' ? types[0] + '/' : '') + 'Fire', '[silent]');
					}
				} else if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
			pokemon.canTerastallize = null;
		},
		onTakeItem: false,
		isNonstandard: null,
	},
	rustedshield: {
		inherit: true,
		onTakeItem: false,
	},
	rustedsword: {
		inherit: true,
		onTakeItem: false,
	},
	sablenite: {
		inherit: true,
		isNonstandard: null,
	},
	salamencite: {
		inherit: true,
		isNonstandard: null,
	},
	sceptilite: {
		inherit: true,
		isNonstandard: null,
	},
	scizorite: {
		inherit: true,
		isNonstandard: null,
	},
	sharpedonite: {
		inherit: true,
		isNonstandard: null,
	},
	slowbronite: {
		inherit: true,
		isNonstandard: null,
	},
	steelixite: {
		inherit: true,
		isNonstandard: null,
	},
	swampertite: {
		inherit: true,
		isNonstandard: null,
	},
	tyranitarite: {
		inherit: true,
		isNonstandard: null,
	},
	venusaurite: {
		inherit: true,
		isNonstandard: null,
	},
	vilevial: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (['Poison', 'Flying'].includes(move.type)) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem: false,
	},
	"krookodilite": {
		inherit: true,
		isNonstandard: null,
	},
	"flygonitey": {
		inherit: true,
		isNonstandard: null,
	},
	"flygonitex": {
		inherit: true,
		isNonstandard: null,
	},
	"miltankite": {
		inherit: true,
		isNonstandard: null,
	},
	"druddigonite": {
		inherit: true,
		isNonstandard: null,
	},
	/*
	"ariadosite": {
		id: "ariadosite",
		name: "Ariadosite",
		spritenum: 575,
		megaStone: "Ariados-Mega",
		megaEvolves: "Ariados",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1036,
		gen: 6,
		desc: "If held by an Ariados, this item allows it to Mega Evolve in battle.",
	},
	*/
	"bellossomite": {
		inherit: true,
		isNonstandard: null,
	},
	"staraptorite": {
		inherit: true,
		isNonstandard: null,
	},
	"kecleonite": {
		inherit: true,
		isNonstandard: null,
	},
	/*
	"clawitzite": {
		id: "clawitzite",
		name: "Clawitzite",
		spritenum: 575,
		megaStone: "Clawitzer-Mega",
		megaEvolves: "Clawitzer",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1033,
		gen: 6,
		desc: "If held by a Clawitzer, this item allows it to Mega Evolve in battle.",
	},
	*/
	"delcattite": {
		inherit: true,
		isNonstandard: null,
	},
	"roseradite": {
		inherit: true,
		isNonstandard: null,
	},
	/*
	"tyrantrumite": {
		id: "tyrantrumite",
		name: "Tyrantrumite",
		spritenum: 575,
		megaStone: "Tyrantrum-Mega",
		megaEvolves: "Tyrantrum",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1030,
		gen: 6,
		desc: "If held by a Tyrantrum, this item allows it to Mega Evolve in battle.",
	},
	*/
	/*
	"chipinite": {
		id: "chipinite",
		name: "Chipinite",
		spritenum: 575,
		megaStone: "Scolipede-Mega",
		megaEvolves: "Scolipede",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1029,
		gen: 6,
		desc: "If held by a Scolipede, this item allows it to Mega Evolve in battle.",
	},
	"froginite": {
		id: "froginite",
		name: "Froginite",
		spritenum: 575,
		megaStone: "Toxicroak-Mega",
		megaEvolves: "Toxicroak",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1028,
		gen: 6,
		desc: "If held by a Toxicroak, this item allows it to Mega Evolve in battle.",
	},
	*/
	"shoqinite": {
		inherit: true,
		isNonstandard: null,
	},
	"dottite": {
		inherit: true,
		isNonstandard: null,
	},
	"granbelite": {
		inherit: true,
		isNonstandard: null,
	},
	"avaluggite": {
		inherit: true,
		isNonstandard: null,
	},
	/*
	"scolipedite": {
		id: "scolipedite",
		name: "Scolipedite",
		spritenum: 575,
		megaStone: "Scolipede-Mega",
		megaEvolves: "Scolipede",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1023,
		gen: 6,
		desc: "If held by a Scolipede, this item allows it to Mega Evolve in battle.",
	},
	*/
	"bronzongite": {
		inherit: true,
		isNonstandard: null,
	},
	/*
	"toxicroakite": {
		id: "toxicroakite",
		name: "Toxicroakite",
		spritenum: 575,
		megaStone: "Toxicroak-Mega",
		megaEvolves: "Toxicroak",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1021,
		gen: 6,
		desc: "If held by a Toxicroak, this item allows it to Mega Evolve in battle.",
	},
	*/
	"golurkite": {
		inherit: true,
		isNonstandard: null,
	},
	"lanturnite": {
		inherit: true,
		isNonstandard: null,
	},
	/*
	"exploudite": {
		id: "exploudite",
		name: "Exploudite",
		spritenum: 575,
		megaStone: "Exploud-Mega",
		megaEvolves: "Exploud",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1018,
		gen: 6,
		desc: "If held by an Exploud, this item allows it to Mega Evolve in battle.",
	},
	"whimsicottite": {
		id: "whimsicottite",
		name: "Whimsicottite",
		spritenum: 575,
		megaStone: "Whimsicott-Mega",
		megaEvolves: "Whimsicott",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1017,
		gen: 6,
		desc: "If held by a Whimsicott, this item allows it to Mega Evolve in battle.",
	},
	*/
	"rapidashite": {
		inherit: true,
		isNonstandard: null,
	},
	/*
	"vespiquenite": {
		id: "vespiquenite",
		name: "Vespiquenite",
		spritenum: 575,
		megaStone: "Vespiquen-Mega",
		megaEvolves: "Vespiquen",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1015,
		gen: 6,
		desc: "If held by a Vespiquen, this item allows it to Mega Evolve in battle.",
	},
	"toucannonite": {
		id: "toucannonite",
		name: "Toucannonite",
		spritenum: 575,
		megaStone: "Toucannon-Mega",
		megaEvolves: "Toucannon",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1014,
		gen: 6,
		desc: "If held by a Toucannon, this item allows it to Mega Evolve in battle.",
	},
	*/
	"weezingite": {
		inherit: true,
		isNonstandard: null,
	},
	"arbokite": {
		inherit: true,
		isNonstandard: null,
	},
	/*
	"xatunite": {
		id: "xatunite",
		name: "Xatunite",
		spritenum: 575,
		megaStone: "Xatu-Mega",
		megaEvolves: "Xatu",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1011,
		gen: 6,
		desc: "If held by a Xatu, this item allows it to Mega Evolve in battle.",
	},
	*/
	"granbullite": {
		inherit: true,
		isNonstandard: null,
	},
	"luxrite": {
		inherit: true,
		isNonstandard: null,
	},
	"butterfrite": {
		inherit: true,
		isNonstandard: null,
	},
	/*
	"flygonite": {
		id: "flygonite",
		name: "Flygonite",
		spritenum: 575,
		megaStone: "Flygon-Mega",
		megaEvolves: "Flygon",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1008,
		gen: 6,
		desc: "If held by a Flygon, this item allows it to Mega Evolve in battle.",
	},
	*/
	"froslassite": {
		inherit: true,
		isNonstandard: null,
	},
	"meganiumite": {
		inherit: true,
		isNonstandard: null,
	},
	"torterrite": {
		inherit: true,
		isNonstandard: null,
	},
	"feraligatite": {
		inherit: true,
		isNonstandard: null,
	},
	"empoleonite": {
		inherit: true,
		isNonstandard: null,
	},
	"typhlosionite": {
		inherit: true,
		isNonstandard: null,
	},
	"infernapite": {
		inherit: true,
		isNonstandard: null,
	},
	"pachirisunite": {
		inherit: true,
		isNonstandard: null,
	},
	"vespiquenite": {
		inherit: true,
		isNonstandard: null,
	},
	"goodrite": {
		inherit: true,
		isNonstandard: null,
	},
	"crobatite": {
		inherit: true,
		isNonstandard: null,
	},
	"bearticite": {
		inherit: true,
		isNonstandard: null,
	},
	"honchkrowite": {
		inherit: true,
		isNonstandard: null,
	},
	"Sudowoodite": {
		inherit: true,
		isNonstandard: null,
	},
	"deciduite": {
		inherit: true,
		isNonstandard: null,
	},
	"incinerite": {
		inherit: true,
		isNonstandard: null,
	},
	"primarinite": {
		inherit: true,
		isNonstandard: null,
	},
	"crustlite": {
		inherit: true,
		isNonstandard: null,
	},
	"girafarigite": {
		inherit: true,
		isNonstandard: null,
	},
	"primeapite": {
		inherit: true,
		isNonstandard: null,
	},
	"mightyenite": {
		inherit: true,
		isNonstandard: null,
	},
	"boltundite": {
		inherit: true,
		isNonstandard: null,
	},
	"pangorite": {
		inherit: true,
		isNonstandard: null,
	},
	"drifblimite": {
		inherit: true,
		isNonstandard: null,
	},
	"golisopodite": {
		inherit: true,
		isNonstandard: null,
	},
	"carnivinite": {
		inherit: true,
		isNonstandard: null,
	},
	"copperajite": {
		inherit: true,
		isNonstandard: null,
	},
	"wigglytuffite": {
		inherit: true,
		isNonstandard: null,
	},
	quagsirite: {
		inherit: true,
		isNonstandard: null,
	},
	gogoatite: {
		inherit: true,
		isNonstandard: null,
	},
	spiritombite: {
		inherit: true,
		isNonstandard: null,
	},
	chatotite: {
		inherit: true,
		isNonstandard: null,
	},
	lunatonite: {
		inherit: true,
		isNonstandard: null,
	},
	lunatonitebluemoon: {
		inherit: true,
		isNonstandard: null,
	},
	solrockite: {
		inherit: true,
		isNonstandard: null,
	},
	solrockitesupernova: {
		inherit: true,
		isNonstandard: null,
	},
	heatmorite: {
		inherit: true,
		isNonstandard: null,
	},
	drampite: {
		inherit: true,
		isNonstandard: null,
	},
	probopassite: {
		inherit: true,
		isNonstandard: null,
	},
	beheeyite: {
		inherit: true,
		isNonstandard: null,
	},
	grimmsnarlite: {
		inherit: true,
		isNonstandard: null,
	},
	aromatissite: {
		inherit: true,
		isNonstandard: null,
	},
};
