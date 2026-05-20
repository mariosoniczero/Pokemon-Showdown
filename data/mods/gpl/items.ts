export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	krookodilite: {
		name: "Krookodilite",
		spritenum: 575,
		megaStone: { "Krookodile": "Krookodile-Mega" },
		itemUser: ["Krookodile"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11041,
		gen: 6,
		desc: "If held by a Krookodile, this item allows it to Mega Evolve in battle.",
	},
	flygonitey: {
		name: "Flygonite Y",
		spritenum: 575,
		megaStone: { "Flygon": "Flygon-Mega-Y" },
		itemUser: ["Flygon"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11040,
		gen: 6,
		desc: "If held by a Flygon, this item allows it to Mega Evolve in battle.",
	},
	flygonitex: {
		name: "Flygonite X",
		spritenum: 575,
		megaStone: { "Flygon": "Flygon-Mega-X" },
		itemUser: ["Flygon"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11039,
		gen: 6,
		desc: "If held by a Flygon, this item allows it to Mega Evolve in battle.",
	},
	miltankite: {
		name: "Miltankite",
		spritenum: 575,
		megaStone: { "Miltank": "Miltank-Mega" },
		itemUser: ["Miltank"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11038,
		gen: 6,
		desc: "If held by a Miltank, this item allows it to Mega Evolve in battle.",
	},
	druddigonite: {
		name: "Druddigonite",
		spritenum: 575,
		megaStone: { "Druddigon": "Druddigon-Mega" },
		itemUser: ["Druddigon"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11037,
		gen: 6,
		desc: "If held by a Druddigon, this item allows it to Mega Evolve in battle.",
	},
	bellossomite: {
		name: "Bellossomite",
		spritenum: 575,
		megaStone: { "Bellossom": "Bellossom-Mega" },
		itemUser: ["Bellossom"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11035,
		gen: 6,
		desc: "If held by a Bellossom, this item allows it to Mega Evolve in battle.",
	},
	staraptoriteg: {
		name: "Staraptorite G",
		spritenum: 575,
		megaStone: { "Staraptor": "Staraptor-Mega-G" },
		itemUser: ["Staraptor"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11035,
		gen: 6,
		desc: "If held by a Staraptor, this item allows it to Mega Evolve in battle.",
	},
	kecleonite: {
		name: "Kecleonite",
		spritenum: 575,
		megaStone: { "Bellossom": "Bellossom-Mega" },
		itemUser: ["Bellossom"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11034,
		gen: 6,
		desc: "If held by a Kecleon, this item allows it to Mega Evolve in battle.",
	},
	delcattite: {
		name: "Delcattite",
		spritenum: 575,
		megaStone: { "Bellossom": "Bellossom-Mega" },
		itemUser: ["Bellossom"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11032,
		gen: 6,
		desc: "If held by a Delcatty, this item allows it to Mega Evolve in battle.",
	},
	roseradite: {
		name: "Roseradite",
		spritenum: 575,
		megaStone: { "Roserade": "Roserade-Mega" },
		itemUser: ["Roserade"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11031,
		gen: 6,
		desc: "If held by a Roserade, this item allows it to Mega Evolve in battle.",
	},
	avaluggite: {
		name: "Avaluggite",
		spritenum: 575,
		megaStone: { "Avalugg": "Avalugg-Mega" },
		itemUser: ["Avalugg"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11024,
		gen: 6,
		desc: "If held by an Avalugg, this item allows it to Mega Evolve in battle.",
	},
	bronzongite: {
		name: "Bronzongite",
		spritenum: 575,
		megaStone: { "Bronzong": "Bronzong-Mega" },
		itemUser: ["Bronzong"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11022,
		gen: 6,
		desc: "If held by a Bronzong, this item allows it to Mega Evolve in battle.",
	},
	golurkiteg: {
		name: "Golurkite G",
		spritenum: 575,
		megaStone: { "Golurk": "Golurk-Mega-G" },
		itemUser: ["Golurk"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11020,
		gen: 6,
		desc: "If held by a Golurk, this item allows it to Mega Evolve in battle.",
	},
	lanturnite: {
		name: "Lanturnite",
		spritenum: 575,
		megaStone: { "Lanturn": "Lanturn-Mega" },
		itemUser: ["Lanturn"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11019,
		gen: 6,
		desc: "If held by a Lanturn, this item allows it to Mega Evolve in battle.",
	},
	rapidashite: {
		name: "Rapidashite",
		spritenum: 575,
		megaStone: { "Rapidash": "Rapidash-Mega" },
		itemUser: ["Rapidash"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11016,
		gen: 6,
		desc: "If held by a Rapidash, this item allows it to Mega Evolve in battle.",
	},
	weezingite: {
		name: "Weezingite",
		spritenum: 575,
		megaStone: { "Weezing": "Weezing-Mega" },
		itemUser: ["Weezing"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11013,
		gen: 6,
		desc: "If held by a Weezing, this item allows it to Mega Evolve in battle.",
	},
	arbokite: {
		name: "Arbokite",
		spritenum: 575,
		megaStone: { "Arbok": "Arbok-Mega" },
		itemUser: ["Arbok"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11012,
		gen: 6,
		desc: "If held by an Arbok, this item allows it to Mega Evolve in battle.",
	},
	granbullite: {
		name: "Granbullite",
		spritenum: 575,
		megaStone: { "Granbull": "Granbull-Mega" },
		itemUser: ["Granbull"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11014,
		gen: 6,
		desc: "If held by a Granbull, this item allows it to Mega Evolve in battle.",
	},
	luxrite: {
		name: "Luxrite",
		spritenum: 575,
		megaStone: { "Luxray": "Luxray-Mega" },
		itemUser: ["Luxray"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11010,
		gen: 6,
		desc: "If held by a Luxray, this item allows it to Mega Evolve in battle.",
	},
	butterfrite: {
		name: "Butterfrite",
		spritenum: 575,
		megaStone: { "Butterfree": "Butterfree-Mega" },
		itemUser: ["Butterfree"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11009,
		gen: 6,
		desc: "If held by a Butterfree, this item allows it to Mega Evolve in battle.",
	},
	froslassiteg: {
		name: "Froslassite G",
		spritenum: 575,
		megaStone: { "Froslass": "Froslass-Mega-G" },
		itemUser: ["Froslass"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11007,
		gen: 6,
		desc: "If held by a Froslass, this item allows it to Mega Evolve in battle.",
	},
	meganiumiteg: {
		name: "Meganiumite G",
		spritenum: 575,
		megaStone: { "Meganium": "Meganium-Mega-G" },
		itemUser: ["Meganium"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11006,
		gen: 6,
		desc: "If held by a Meganium, this item allows it to Mega Evolve in battle.",
	},
	torterrite: {
		name: "Torterrite",
		spritenum: 575,
		megaStone: { "Torterra": "Torterra-Mega" },
		itemUser: ["Torterra"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11005,
		gen: 6,
		desc: "If held by a Torterra, this item allows it to Mega Evolve in battle.",
	},
	feraligatiteg: {
		name: "Feraligatite G",
		spritenum: 575,
		megaStone: { "Feraligatr": "Feraligatr-Mega-G" },
		itemUser: ["Feraligatr"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11004,
		gen: 6,
		desc: "If held by an Typhlosion, this item allows it to Mega Evolve in battle.",
	},
	empoleonite: {
		name: "Empoleonite",
		spritenum: 575,
		megaStone: { "Empoleon": "Empoleon-Mega" },
		itemUser: ["Empoleon"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11003,
		gen: 6,
		desc: "If held by an Empoleon, this item allows it to Mega Evolve in battle.",
	},
	typhlosionite: {
		name: "Typhlosionite",
		spritenum: 575,
		megaStone: { "Typhlosion": "Typhlosion-Mega" },
		itemUser: ["Typhlosion"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11002,
		gen: 6,
		desc: "If held by a Typhlosion, this item allows it to Mega Evolve in battle.",
	},
	infernapite: {
		name: "Infernapite",
		spritenum: 575,
		megaStone: { "Infernape": "Infernape-Mega" },
		itemUser: ["Infernape"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11001,
		gen: 6,
		desc: "If held by an Infernape, this item allows it to Mega Evolve in battle.",
	},
	pachirisunite: {
		name: "Pachirisunite",
		spritenum: 575,
		megaStone: { "Pachirisu": "Pachirisu-Mega" },
		itemUser: ["Pachirisu"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11043,
		gen: 6,
	},
	vespiquenite: {
		name: "Vespiquenite",
		spritenum: 575,
		megaStone: { "Vespiquen": "Vespiquen-Mega" },
		itemUser: ["Vespiquen"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11044,
		gen: 6,
	},
	goodrite: {
		name: "Goodrite",
		spritenum: 575,
		megaStone: { "Goodra": "Goodra-Mega" },
		itemUser: ["Goodra"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11045,
		gen: 6,
	},
	crobatite: {
		name: "Crobatite",
		spritenum: 575,
		megaStone: { "Crobat": "Crobat-Mega" },
		itemUser: ["Crobat"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11046,
		gen: 6,
	},
	bearticite: {
		name: "Bearticite",
		spritenum: 575,
		megaStone: { "Beartic": "Beartic-Mega" },
		itemUser: ["Beartic"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11047,
		gen: 6,
	},
	honchkrowite: {
		name: "Honchkrowite",
		spritenum: 575,
		megaStone: { "Honchkrow": "Honchkrow-Mega" },
		itemUser: ["Honchkrow"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11048,
		gen: 6,
	},
	sudowoodite: {
		name: "Sudowoodite",
		spritenum: 575,
		megaStone: { "Sudowoodo": "Sudowoodo-Mega" },
		itemUser: ["Sudowoodo"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11049,
		gen: 6,
	},
	deciduite: {
		name: "Deciduite",
		spritenum: 575,
		megaStone: { "Decidueye": "Decidueye-Mega" },
		itemUser: ["Decidueye"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11050,
		gen: 6,
	},
	incinerite: {
		name: "Incinerite",
		spritenum: 575,
		megaStone: { "Incineroar": "Incineroar-Mega" },
		itemUser: ["Incineroar"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11051,
		gen: 6,
	},
	primarinite: {
		name: "Primarinite",
		spritenum: 575,
		megaStone: { "Primarina": "Primarina-Mega" },
		itemUser: ["Primarina"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11052,
		gen: 6,
	},
	crustlite: {
		name: "Crustlite",
		spritenum: 575,
		megaStone: { "Crustle": "Crustle-Mega" },
		itemUser: ["Crustle"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11053,
		gen: 6,
	},
	girafarigite: {
		name: "Girafarigite",
		spritenum: 575,
		megaStone: { "Girafarig": "Girafarig-Mega" },
		itemUser: ["Girafarig"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11054,
		gen: 6,
	},
	primeapite: {
		name: "Primeapite",
		spritenum: 575,
		megaStone: { "Primeape": "Primeape-Mega" },
		itemUser: ["Primeape"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11055,
		gen: 6,
	},
	mightyenite: {
		name: "Mightyenite",
		spritenum: 575,
		megaStone: { "Mightyena": "Mightyena-Mega" },
		itemUser: ["Mightyena"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11056,
		gen: 6,
	},
	boltundite: {
		name: "Boltundite",
		spritenum: 575,
		megaStone: { "Boltund": "Boltund-Mega" },
		itemUser: ["Boltund"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11057,
		gen: 6,
	},
	pangorite: {
		name: "Pangorite",
		spritenum: 575,
		megaStone: { "Pangoro": "Pangoro-Mega" },
		itemUser: ["Pangoro"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11058,
		gen: 6,
	},
	drifblimite: {
		name: "Drifblimite",
		spritenum: 575,
		megaStone: { "Drifblim": "Drifblim-Mega" },
		itemUser: ["Driflbim"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11059,
		gen: 6,
	},
	golisopodite: {
		name: "Golisopodite",
		spritenum: 575,
		megaStone: { "Golisopod": "Golisopod-Mega" },
		itemUser: ["Golisopod"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11060,
		gen: 6,
	},
	carnivinite: {
		name: "Carnivinite",
		spritenum: 575,
		megaStone: { "Carnivine": "Carnivine-Mega" },
		itemUser: ["Carnivine"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11061,
		gen: 6,
	},
	copperajite: {
		name: "Copperajite",
		spritenum: 575,
		megaStone: { "Copperajah": "Copperajah-Mega" },
		itemUser: ["Copperajah"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11062,
		gen: 6,
	},
	wigglytuffite: {
		name: "Wigglytuffite",
		spritenum: 575,
		megaStone: { "Wigglytuff": "Wigglytuff-Mega" },
		itemUser: ["Wigglytuff"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11063,
		gen: 6,
	},
	quagsirite: {
		name: "Quagsirite",
		spritenum: 575,
		megaStone: { "Quagsire": "Quagsire-Mega" },
		itemUser: ["Quagsire"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11064,
		gen: 6,
	},
	gogoatite: {
		name: "Gogoatite",
		spritenum: 575,
		megaStone: { "Gogoat": "Gogoat-Mega" },
		itemUser: ["Gogoat"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11065,
		gen: 6,
	},
	spiritombite: {
		name: "Spiritombite",
		spritenum: 575,
		megaStone: { "Spiritomb": "Spiritomb-Mega" },
		itemUser: ["Spiritomb"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11066,
		gen: 6,
	},
	chatotite: {
		name: "Chatotite",
		spritenum: 575,
		megaStone: { "Chatot": "Chatot-Mega" },
		itemUser: ["Chatot"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11067,
		gen: 6,
	},
	lunatonite: {
		name: "Lunatonite",
		spritenum: 575,
		megaStone: { "Lunatone": "Lunatone-Mega" },
		itemUser: ["Lunatone"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11068,
		gen: 6,
	},
	solrockite: {
		name: "Solrockite",
		spritenum: 575,
		megaStone: { "Solrock": "Solrock-Mega" },
		itemUser: ["Solrock"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11069,
		gen: 6,
	},
	heatmorite: {
		name: "Heatmorite",
		spritenum: 575,
		megaStone: { "Heatmor": "Heatmor-Mega" },
		itemUser: ["Heatmor"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11070,
		gen: 6,
	},
	drampiteg: {
		name: "Drampite G",
		spritenum: 575,
		megaStone: { "Drampa": "Drampa-Mega-G" },
		itemUser: ["Drampa"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11071,
		gen: 6,
	},
	beheeyite: {
		name: "Beheeyite",
		spritenum: 575,
		megaStone: { "Beheeyem": "Beheeyem-Mega" },
		itemUser: ["Beheeyem"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11072,
		gen: 6,
	},
	probopassite: {
		name: "Probopassite",
		spritenum: 575,
		megaStone: { "Probopass": "Probopass-Mega" },
		itemUser: ["Probopass"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11073,
		gen: 6,
	},
	grimmsnarlite: {
		name: "Grimmsnarlite",
		spritenum: 575,
		megaStone: { "Grimmsnarl": "Grimmsnarl-Mega" },
		itemUser: ["Grimmsnarl"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11073,
		gen: 6,
	},
	aromatissite: {
		name: "Aromatissite",
		spritenum: 575,
		megaStone: { "Aromatisse": "Aromatisse-Mega" },
		itemUser: ["Aromatisse"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11074,
		gen: 6,
	},
	lunatonitebluemoon: {
		name: "Lunatonite (Blue Moon)",
		spritenum: 575,
		megaStone: { "Lunatone": "Lunatone-Mega-Blue-Moon" },
		itemUser: ["Lunatone"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11075,
		gen: 6,
	},
	solrockitesupernova: {
		name: "Solrockite (Supernova)",
		spritenum: 575,
		megaStone: { "Solrock": "Solrock-Mega-Supernova" },
		itemUser: ["Solrock"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11076,
		gen: 6,
	},
	tatsugiriteg: {
		name: "Tatsugirite G",
		spritenum: 575,
		megaStone: { "Tatsugiri": "Tatsugiri-Mega-G" },
		itemUser: ["Tatsugiri"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11077,
		gen: 6,
	},
	stunfiskitegalar: {
		name: "Stunfiskite (Galar)",
		spritenum: 575,
		megaStone: { "Stunfisk-Galar": "Stunfisk-Galar-Mega" },
		itemUser: ["Stunfisk-Galar"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11078,
		gen: 6,
	},
	victreebeliteg: {
		name: "Victreebelite G",
		spritenum: 575,
		megaStone: { "Victreebel": "Victreebel-Mega-G" },
		itemUser: ["Victreebel"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11079,
		gen: 6,
	},
	tinkatonite: {
		name: "Tinkatonite",
		spritenum: 575,
		megaStone: { "Tinkaton": "Tinkaton-Mega" },
		itemUser: ["Tinkaton"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11080,
		gen: 6,
	},
	eiscuite: {
		name: "Eiscuite",
		spritenum: 575,
		megaStone: { "Eiscue": "Eiscue-Mega" },
		itemUser: ["Eiscue"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11081,
		gen: 6,
	},
	whimsicottite: {
		name: "Whimsicottite",
		spritenum: 575,
		megaStone: { "Whimsicott": "Whimsicott-Mega" },
		itemUser: ["Whimsicott"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11082,
		gen: 6,
	},
	clawitzite: {
		name: "Clawitzite",
		spritenum: 575,
		megaStone: { "Clawitzer": "Clawitzer-Mega" },
		itemUser: ["Clawitzer"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11083,
		gen: 6,
	},
	octillerite: {
		name: "Octillerite",
		spritenum: 575,
		megaStone: { "Octillery": "Octillery-Mega" },
		itemUser: ["Octillery"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11084,
		gen: 6,
	},
	bombirdite: {
		name: "Bombirdite",
		spritenum: 575,
		megaStone: { "Bombirdier": "Bombirdier-Mega" },
		itemUser: ["Bombirdier"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11085,
		gen: 6,
	},
	electivirite: {
		name: "Electivirite",
		spritenum: 575,
		megaStone: { "Electivire": "Electivire-Mega" },
		itemUser: ["Electivire"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11086,
		gen: 6,
	},
	magmortarite: {
		name: "Magmortarite",
		spritenum: 575,
		megaStone: { "Magmortar": "Magmortar-Mega" },
		itemUser: ["Magmortar"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11087,
		gen: 6,
	},
	swalotite: {
		name: "Swalotite",
		spritenum: 575,
		megaStone: { "Swalot": "Swalot-Mega" },
		itemUser: ["Swalot"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11088,
		gen: 6,
	},
	zoroarkite: {
		name: "Zoroarkite",
		spritenum: 575,
		megaStone: { "Zoroark": "Zoroark-Mega" },
		itemUser: ["Zoroark"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11089,
		gen: 6,
	},
	accelgorite: {
		name: "Accelgorite",
		spritenum: 575,
		megaStone: { "Accelgor": "Accelgor-Mega" },
		itemUser: ["Accelgor"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11090,
		gen: 6,
	},
	escavalite: {
		name: "Escavalite",
		spritenum: 575,
		megaStone: { "Escavalier": "Escavalier-Mega" },
		itemUser: ["Escavalier"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11091,
		gen: 6,
	},
	belliboltite: {
		name: "Belliboltite",
		spritenum: 575,
		megaStone: { "Bellibolt": "Bellibolt-Mega" },
		itemUser: ["Bellibolt"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11092,
		gen: 6,
	},
	dudunsparcite: {
		name: "Dudunsparcite",
		spritenum: 575,
		megaStone: { "Dudunsparce": "Dudunsparce-Mega" },
		itemUser: ["Dudunsparce"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11093,
		gen: 6,
	},
	hydreigonite: {
		name: "Hydreigonite",
		spritenum: 575,
		megaStone: { "Hydreigon": "Hydreigon-Mega" },
		itemUser: ["Hydreigon"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11094,
		gen: 6,
	},
	xatuite: {
		name: "Xatuite",
		spritenum: 575,
		megaStone: { "Xatu": "Xatu-Mega" },
		itemUser: ["Xatu"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11095,
		gen: 6,
	},
	skarmoriteg: {
		name: "Skarmorite G",
		spritenum: 575,
		megaStone: { "Skarmory": "Skarmory-Mega-G" },
		itemUser: ["Skarmory"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11096,
		gen: 6,
	},
	donphanite: {
		name: "Donphanite",
		spritenum: 575,
		megaStone: { "Donphan": "Donphan-Mega" },
		itemUser: ["Donphan"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11097,
		gen: 6,
	},
	shiftrite: {
		name: "Shiftrite",
		spritenum: 575,
		megaStone: { "Shiftry": "Shiftry-Mega" },
		itemUser: ["Shiftry"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11098,
		gen: 6,
	},
	reuniclusite: {
		name: "Reuniclusite",
		spritenum: 575,
		megaStone: { "Reuniclus": "Reuniclus-Mega" },
		itemUser: ["Reuniclus"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11099,
		gen: 6,
	},
	helioliskite: {
		name: "Helioliskite",
		spritenum: 575,
		megaStone: { "Heliolisk": "Heliolisk-Mega" },
		itemUser: ["Heliolisk"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11100,
		gen: 6,
	},
	hawluchiteg: {
		name: "Hawluchite G",
		spritenum: 575,
		megaStone: { "Hawlucha": "Hawlucha-Mega-G" },
		itemUser: ["Hawlucha"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11101,
		gen: 6,
	},
	ninetalite: {
		name: "Ninetalite",
		spritenum: 575,
		megaStone: { "Ninetales": "Ninetales-Mega" },
		itemUser: ["Ninetales"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11102,
		gen: 6,
	},
	jynxite: {
		name: "Jynxite",
		spritenum: 575,
		megaStone: { "Jynx": "Jynx-Mega" },
		itemUser: ["Jynx"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11103,
		gen: 6,
	},
	cramorantite: {
		name: "Cramorantite",
		spritenum: 575,
		megaStone: { "Cramorant": "Cramorant-Mega" },
		itemUser: ["Cramorant"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11104,
		gen: 6,
	},
	arcaninite: {
		name: "Arcaninite",
		spritenum: 575,
		megaStone: { "Arcanine": "Arcanine-Mega" },
		itemUser: ["Arcanine"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11105,
		gen: 6,
	},
	ariadosite: {
		name: "Ariadosite",
		spritenum: 575,
		megaStone: { "Ariados": "Ariados-Mega" },
		itemUser: ["Ariados"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11106,
		gen: 6,
	},
	bewearite: {
		name: "Bewearite",
		spritenum: 575,
		megaStone: { "Bewear": "Bewear-Mega" },
		itemUser: ["Bewear"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11107,
		gen: 6,
	},
	carbinkite: {
		name: "Carbinkite",
		spritenum: 575,
		megaStone: { "Carbink": "Carbink-Mega" },
		itemUser: ["Carbink"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11108,
		gen: 6,
	},
	centiskorchite: {
		name: "Centiskorchite",
		spritenum: 575,
		megaStone: { "Centiskorch": "Centiskorch-Mega" },
		itemUser: ["Centiskorch"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11109,
		gen: 6,
	},
	dragalgiteg: {
		name: "Dragalgite G",
		spritenum: 575,
		megaStone: { "Dragalge": "Dragalge-Mega-G" },
		itemUser: ["Dragalge"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11110,
		gen: 6,
	},
	eelektrossite: {
		name: "Eelektrossite",
		spritenum: 575,
		megaStone: { "Eelektross": "Eelektross-Mega" },
		itemUser: ["Eelektross"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11111,
		gen: 6,
	},
	farigirafite: {
		name: "Farigirafite",
		spritenum: 575,
		megaStone: { "Farigiraf": "Farigiraf-Mega" },
		itemUser: ["Farigiraf"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11112,
		gen: 6,
	},
	ferrothornite: {
		name: "Ferrothornite",
		spritenum: 575,
		megaStone: { "Ferrothorn": "Ferrothorn-Mega" },
		itemUser: ["Ferrothorn"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11113,
		gen: 6,
	},
	laprasite: {
		name: "Laprasite",
		spritenum: 575,
		megaStone: { "Lapras": "Lapras-Mega" },
		itemUser: ["Lapras"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11114,
		gen: 6,
	},
	magnezonite: {
		name: "Magnezonite",
		spritenum: 575,
		megaStone: { "Magnezone": "Magnezone-Mega" },
		itemUser: ["Magnezone"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11115,
		gen: 6,
	},
	mrrimite: {
		name: "Mr. Rimite",
		spritenum: 575,
		megaStone: { "Mr. Rime": "Mr. Rime-Mega" },
		itemUser: ["Mr. Rime"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11116,
		gen: 6,
	},
	raichuiteg: {
		name: "Raichuite G",
		spritenum: 575,
		megaStone: { "Raichu": "Raichu-Mega-G" },
		itemUser: ["Raichu"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11117,
		gen: 6,
	},
	revavroomite: {
		name: "Revavroomite",
		spritenum: 575,
		megaStone: { "Revavroom": "Revavroom-Mega" },
		itemUser: ["Revavroom"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11118,
		gen: 6,
	},
	talonflamite: {
		name: "Talonflamite",
		spritenum: 575,
		megaStone: { "Talonflame": "Talonflame-Mega" },
		itemUser: ["Talonflame"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11119,
		gen: 6,
	},
	tropiusite: {
		name: "Tropiusite",
		spritenum: 575,
		megaStone: { "Tropius": "Tropius-Mega" },
		itemUser: ["Tropius"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11120,
		gen: 6,
	},
	rampardosite: {
		name: "Rampardosite",
		spritenum: 575,
		megaStone: { "Rampardos": "Rampardos-Mega" },
		itemUser: ["Rampardos"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11121,
		gen: 6,
	},
	bastiodonite: {
		name: "Bastiodonite",
		spritenum: 575,
		megaStone: { "Bastiodon": "Bastiodon-Mega" },
		itemUser: ["Bastiodon"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11122,
		gen: 6,
	},
	serperiorite: {
		name: "Serperiorite",
		spritenum: 575,
		megaStone: { "Serperior": "Serperior-Mega" },
		itemUser: ["Serperior"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11123,
		gen: 6,
	},
	emboariteg: {
		name: "Emboarite G",
		spritenum: 575,
		megaStone: { "Emboar": "Emboar-Mega-G" },
		itemUser: ["Emboar"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11124,
		gen: 6,
	},
	samurottite: {
		name: "Samurottite",
		spritenum: 575,
		megaStone: { "Samurott": "Samurott-Mega" },
		itemUser: ["Samurott"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11125,
		gen: 6,
	},
	armaldite: {
		name: "Armaldite",
		spritenum: 575,
		megaStone: { "Armaldo": "Armaldo-Mega" },
		itemUser: ["Armaldo"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11126,
		gen: 6,
	},
	chimechiteg: {
		name: "Chimechite",
		spritenum: 575,
		megaStone: { "Chimecho": "Chimecho-Mega" },
		itemUser: ["Chimecho"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11127,
		gen: 6,
	},
	galvantulite: {
		name: "Galvantulite",
		spritenum: 575,
		megaStone: { "Galvantula": "Galvantula-Mega" },
		itemUser: ["Galvantula"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11128,
		gen: 6,
	},
	kingambitite: {
		name: "Kingambitite",
		spritenum: 575,
		megaStone: { "Kingambit": "Kingambit-Mega" },
		itemUser: ["Kingambit"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11129,
		gen: 6,
	},
	sigilyphite: {
		name: "Sigilyphite",
		spritenum: 575,
		megaStone: { "Sigilyph": "Sigilyph-Mega" },
		itemUser: ["Sigilyph"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11130,
		gen: 6,
	},
	tentacruelite: {
		name: "Tentacruelite",
		spritenum: 575,
		megaStone: { "Tentacruel": "Tentacruel-Mega" },
		itemUser: ["Tentacruel"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11131,
		gen: 6,
	},
	kingdrite: {
		name: "Kingdrite",
		spritenum: 575,
		megaStone: { "Kingdra": "Kingdra-Mega" },
		itemUser: ["Kingdra"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11132,
		gen: 6,
	},
	/*
	ite: {
		name: "ite",
		spritenum: 575,
		megaStone: { "": "-Mega" },
		itemUser: [""],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 11,
		gen: 6,
	},
	*/
};
