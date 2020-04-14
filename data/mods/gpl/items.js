'use strict';

/**@type {{[k: string]: ModdedItemData}} */
let BattleItems = {
	abomasite: {
		inherit: true,
		isNonstandard: null,
	},
	absolite: {
		inherit: true,
		isNonstandard: null,
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
	    	"krookodilite": {
		id: "krookodilite",
		name: "Krookodilite",
		spritenum: 575,
		megaStone: "Krookodile-Mega",
		megaEvolves: "Krookodile",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1041,
		gen: 6,
		desc: "If held by a Krookodile, this item allows it to Mega Evolve in battle.",
	},
	"flygonitey": {
		id: "flygonitey",
		name: "Flygonite Y",
		spritenum: 575,
		megaStone: "Flygon-Mega-Y",
		megaEvolves: "Flygon",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1040,
		gen: 6,
		desc: "If held by a Flygon, this item allows it to Mega Evolve in battle.",
	},
	"flygonitex": {
		id: "flygonitex",
		name: "Flygonite X",
		spritenum: 575,
		megaStone: "Flygon-Mega-X",
		megaEvolves: "Flygon",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1039,
		gen: 6,
		desc: "If held by a Flygon, this item allows it to Mega Evolve in battle.",
	},
	"miltankite": {
		id: "miltankite",
		name: "Miltankite",
		spritenum: 575,
		megaStone: "Miltank-Mega",
		megaEvolves: "Miltank",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1038,
		gen: 6,
		desc: "If held by a Miltank, this item allows it to Mega Evolve in battle.",
	},
	"druddigonite": {
		id: "druddigonite",
		name: "Druddigonite",
		spritenum: 575,
		megaStone: "Druddigon-Mega",
		megaEvolves: "Druddigon",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1037,
		gen: 6,
		desc: "If held by a Druddigon, this item allows it to Mega Evolve in battle.",
	},
	/*"ariadosite": {
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
	},*/
	"bellossomite": {
		id: "bellossomite",
		name: "Bellossomite",
		spritenum: 575,
		megaStone: "Bellossom-Mega",
		megaEvolves: "Bellossom",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1035,
		gen: 6,
		desc: "If held by a Bellossom, this item allows it to Mega Evolve in battle.",
	},
	"staraptorite": {
		id: "staraptorite",
		name: "Staraptorite",
		spritenum: 575,
		megaStone: "Staraptor-Mega",
		megaEvolves: "Staraptor",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1035,
		gen: 6,
		desc: "If held by a Staraptor, this item allows it to Mega Evolve in battle.",
	},
	"kecleonite": {
		id: "kecleonite",
		name: "Kecleonite",
		spritenum: 575,
		megaStone: "Kecleon-Mega",
		megaEvolves: "Kecleon",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1034,
		gen: 6,
		desc: "If held by a Kecleon, this item allows it to Mega Evolve in battle.",
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
		id: "delcattite",
		name: "Delcattite",
		spritenum: 575,
		megaStone: "Delcatty-Mega",
		megaEvolves: "Delcatty",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1032,
		gen: 6,
		desc: "If held by a Delcatty, this item allows it to Mega Evolve in battle.",
	},
	"roseradite": {
		id: "roseradite",
		name: "Roseradite",
		spritenum: 575,
		megaStone: "Roserade-Mega",
		megaEvolves: "Roserade",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1031,
		gen: 6,
		desc: "If held by a Roserade, this item allows it to Mega Evolve in battle.",
	},
	/*"tyrantrumite": {
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
	},*/
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
		id: "shoqinite",
		name: "Shoqinite",
		spritenum: 575,
		megaStone: "Lanturn-Mega",
		megaEvolves: "Lanturn",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1027,
		gen: 6,
		desc: "If held by a Lanturn, this item allows it to Mega Evolve in battle.",
	},
	"dottite": {
		id: "dottite",
		name: "Dottite",
		spritenum: 575,
		megaStone: "Granbull-Mega",
		megaEvolves: "Granbull",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1026,
		gen: 6,
		desc: "If held by a Granbull, this item allows it to Mega Evolve in battle.",
	},
	"granbelite": {
		id: "granbelite",
		name: "Granbelite",
		spritenum: 575,
		megaStone: "Butterfree-Mega",
		megaEvolves: "Butterfree",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1025,
		gen: 6,
		desc: "If held by a Butterfree, this item allows it to Mega Evolve in battle.",
	},
	"avaluggite": {
		id: "avaluggite",
		name: "Avaluggite",
		spritenum: 575,
		megaStone: "Avalugg-Mega",
		megaEvolves: "Avalugg",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1024,
		gen: 6,
		desc: "If held by an Avalugg, this item allows it to Mega Evolve in battle.",
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
		id: "bronzongite",
		name: "Bronzongite",
		spritenum: 575,
		megaStone: "Bronzong-Mega",
		megaEvolves: "Bronzong",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1022,
		gen: 6,
		desc: "If held by a Bronzong, this item allows it to Mega Evolve in battle.",
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
		id: "golurkite",
		name: "Golurkite",
		spritenum: 575,
		megaStone: "Golurk-Mega",
		megaEvolves: "Golurk",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1020,
		gen: 6,
		desc: "If held by a Golurk, this item allows it to Mega Evolve in battle.",
	},
	"lanturnite": {
		id: "lanturnite",
		name: "Lanturnite",
		spritenum: 575,
		megaStone: "Lanturn-Mega",
		megaEvolves: "Lanturn",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1019,
		gen: 6,
		desc: "If held by a Lanturn, this item allows it to Mega Evolve in battle.",
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
		id: "rapidashite",
		name: "Rapidashite",
		spritenum: 575,
		megaStone: "Rapidash-Mega",
		megaEvolves: "Rapidash",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1016,
		gen: 6,
		desc: "If held by a Rapidash, this item allows it to Mega Evolve in battle.",
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
		id: "weezingite",
		name: "Weezingite",
		spritenum: 575,
		megaStone: "Weezing-Mega",
		megaEvolves: "Weezing",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1013,
		gen: 6,
		desc: "If held by a Weezing, this item allows it to Mega Evolve in battle.",
	},
	"arbokite": {
		id: "arbokite",
		name: "Arbokite",
		spritenum: 575,
		megaStone: "Arbok-Mega",
		megaEvolves: "Arbok",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1012,
		gen: 6,
		desc: "If held by an Arbok, this item allows it to Mega Evolve in battle.",
	},
	/*"xatunite": {
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
	},*/
	"granbullite": {
		id: "granbullite",
		name: "Granbullite",
		spritenum: 575,
		megaStone: "Granbull-Mega",
		megaEvolves: "Granbull",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1010,
		gen: 6,
		desc: "If held by a Granbull, this item allows it to Mega Evolve in battle.",
	},
	"luxrite": {
		id: "luxrite",
		name: "Luxrite",
		spritenum: 575,
		megaStone: "Luxray-Mega",
		megaEvolves: "Luxray",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1010,
		gen: 6,
		desc: "If held by a Luxray, this item allows it to Mega Evolve in battle.",
	},
	"butterfrite": {
		id: "butterfrite",
		name: "Butterfrite",
		spritenum: 575,
		megaStone: "Butterfree-Mega",
		megaEvolves: "Butterfree",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1009,
		gen: 6,
		desc: "If held by a Butterfree, this item allows it to Mega Evolve in battle.",
	},
	/*"flygonite": {
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
	},*/
	"froslassite": {
		id: "froslassite",
		name: "Froslassite",
		spritenum: 575,
		megaStone: "Froslass-Mega",
		megaEvolves: "Froslass",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1007,
		gen: 6,
		desc: "If held by a Froslass, this item allows it to Mega Evolve in battle.",
	},
	"meganiumite": {
		id: "meganiumite",
		name: "Meganiumite",
		spritenum: 575,
		megaStone: "Meganium-Mega",
		megaEvolves: "Meganium",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1006,
		gen: 6,
		desc: "If held by a Meganium, this item allows it to Mega Evolve in battle.",
	},
	"torterrite": {
		id: "torterrite",
		name: "Torterrite",
		spritenum: 575,
		megaStone: "Torterra-Mega",
		megaEvolves: "Torterra",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1005,
		gen: 6,
		desc: "If held by a Torterra, this item allows it to Mega Evolve in battle.",
	},
	"feraligatite": {
		id: "feraligatite",
		name: "Feraligatite",
		spritenum: 575,
		megaStone: "Feraligatr-Mega",
		megaEvolves: "Feraligatr",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1004,
		gen: 6,
		desc: "If held by an Typhlosion, this item allows it to Mega Evolve in battle.",
	},
	"empoleonite": {
		id: "empoleonite",
		name: "Empoleonite",
		spritenum: 575,
		megaStone: "Empoleon-Mega",
		megaEvolves: "Empoleon",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1003,
		gen: 6,
		desc: "If held by an Empoleon, this item allows it to Mega Evolve in battle.",
	},
	"typhlosionite": {
		id: "typhlosionite",
		name: "Typhlosionite",
		spritenum: 575,
		megaStone: "Typhlosion-Mega",
		megaEvolves: "Typhlosion",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1002,
		gen: 6,
		desc: "If held by a Typhlosion, this item allows it to Mega Evolve in battle.",
	},
	"infernapite": {
		id: "infernapite",
		name: "Infernapite",
		spritenum: 575,
		megaStone: "Infernape-Mega",
		megaEvolves: "Infernape",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 1001,
		gen: 6,
		desc: "If held by an Infernape, this item allows it to Mega Evolve in battle.",
	},
};

exports.BattleItems = BattleItems;
