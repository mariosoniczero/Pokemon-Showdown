'use strict';

/**@type {{[k: string]: ModdedTemplateData}} */
let BattlePokedex = {
    butterfree: {
        inherit: true,
        otherFormes: ["butterfreemega"],
    },
    butterfreemega: {
		num: 12,
		species: "Butterfree-Mega",
		baseSpecies: "Butterfree",
		forme: "Mega",
		formeLetter: "M",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 60, atk: 20, def: 80, spa: 150, spd: 40, spe: 145},
		abilities: {0: "Tinted Lens"},
		heightm: 1.1,
		weightkg: 32,
		color: "White",
		eggGroups: ["Bug"],
	},
    arbok: {
        inherit: true,
        otherFormes: ["arbokmega"],
    },
    arbokmega: {
		num: 24,
		species: "Arbok-Mega",
		baseSpecies: "Arbok",
		forme: "Mega",
		formeLetter: "M",
		types: ["Poison", "Dark"],
		baseStats: {hp: 60, atk: 135, def: 94, spa: 55, spd: 94, spe: 110},
		abilities: {0: "Corrosion"},
		heightm: 3.5,
		weightkg: 65,
		color: "Purple",
		eggGroups: ["Field", "Dragon"],
	},
    rapidash: {
        inherit: true,
        otherFormes: ["rapidashgalar", "rapidashmega"],
    }
    rapidashmega: {
		num: 78,
		species: "Rapidash-Mega",
		baseSpecies: "Rapidash",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fire", "Fairy"],
		baseStats: {hp: 65, atk: 120, def: 105, spa: 80, spd: 105, spe: 125},
		abilities: {0: "Pixilate"},
		heightm: 1.7,
		weightkg: 95,
		color: "Yellow",
		eggGroups: ["Field"],
	},
    weezing: {
        inherit: true,
        otherFormes: ["weezinggalar", "weezingmega"],
    }
    weezingmega: {
		num: 110,
		species: "Weezing-Mega",
		baseSpecies: "Weezing",
		forme: "Mega",
		formeLetter: "M",
		types: ["Poison", "Fire"],
		baseStats: {hp: 65, atk: 90, def: 150, spa: 115, spd: 90, spe: 80},
		abilities: {0: "Levitate"},
		heightm: 1.2,
		weightkg: 9.5,
		color: "Purple",
		eggGroups: ["Amorphous"],
	},
    meganium: {
        inherit: true,
        otherFormes: ["meganiummega"],
    },
    meganiummega: {
		num: 154,
		species: "Meganium-Mega",
		baseSpecies: "Meganium",
		forme: "Mega",
		formeLetter: "M",
		types: ["Grass", "Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 87, def: 130, spa: 118, spd: 130, spe: 80},
		abilities: {0: "Misty Surge"},
		heightm: 1.8,
		weightkg: 100.5,
		color: "Green",
		prevo: "bayleef",
		evoLevel: 32,
		eggGroups: ["Monster","Grass"],
	},
    typhlosion: {
        inherit: true,
        otherFormes: ["typhlosionmega"],
    },
    typhlosionmega: {
		num: 157,
		species: "Typhlosion-Mega",
		baseSpecies: "Typhlosion",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fire", "Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 78, atk: 124, def: 88, spa: 129, spd: 95, spe: 120},
		abilities: {0: "Reckless"},
		heightm: 1.7,
		weightkg: 79.5,
		color: "Yellow",
		prevo: "quilava",
		evoLevel: 36,
		eggGroups: ["Field"],
	},
    feraligatr: {
        inherit: true,
        otherFormes: ["feraligatrmega"],
    },
    feraligatrmega: {
		num: 160,
		species: "Feraligatr-Mega",
		baseSpecies: "Feraligatr",
		forme: "Mega",
		formeLetter: "M",
		types: ["Water", "Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 85, atk: 145, def: 110, spa: 99, spd: 98, spe: 93},
		abilities: {0: "Sheer Force"},
		heightm: 2.3,
		weightkg: 88.8,
		color: "Blue",
		prevo: "croconaw",
		evoLevel: 30,
		eggGroups: ["Monster", "Water 1"],
	},
    /*
    ariados: {
        inherit: true,
        otherFormes: ["ariadosmega"],
    },
    ariadosmega: {
		num: 168,
		species: "Ariados-Mega",
		baseSpecies: "Ariados",
		forme: "Mega",
		formeLetter: "M",
		types: ["Bug", "Dark"],
		baseStats: {hp: 70, atk: 140, def: 70, spa: 30, spd: 70, spe: 120},
		abilities: {0: "Hemotoxin"},
		heightm: 1.1,
		weightkg: 33.5,
		color: "Red",
		eggGroups: ["Bug"],
	},
    */
    lanturn: {
        inherit: true,
        otherFormes: ["lanturnmega"],
    },
    lanturnmega: {
		num: 171,
		species: "Lanturn-Mega",
		baseSpecies: "Lanturn",
		forme: "Mega",
		formeLetter: "M",
		types: ["Water", "Electric"],
		baseStats: {hp: 125, atk: 58, def: 98, spa: 96, spd: 116, spe: 67},
		abilities: {0: "Thunderstorm"},
		heightm: 1.2,
		weightkg: 22.5,
		color: "Blue",
		eggGroups: ["Water 2"],
	},
    /*
    xatu: {
        inherit: true,
        otherFormes: ["xatumega"],
    },
    xatumega: {
		num: 178,
		species: "Xatu-Mega",
		baseSpecies: "Xatu",
		forme: "Mega",
		formeLetter: "M",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 65, atk: 95, def: 85, spa: 125, spd: 85, spe: 115},
		abilities: {0: "Magic Bounce"},
		heightm: 1.5,
		weightkg: 15,
		color: "Green",
		eggGroups: ["Flying"],
	},
    */
    bellossom: {
        inherit: true,
        otherFormes: ["bellossommega"],
    },
    bellossommega: {
		num: 182,
		species: "Bellossom-Mega",
		baseSpecies: "Bellossom",
		forme: "Mega",
		formeLetter: "M",
		types: ["Grass", "Fire"],
		baseStats: {hp: 75, atk: 120, def: 100, spa: 110, spd: 105, spe: 80},
		abilities: {0: "Conflagrate"},
		heightm: 0.4,
		weightkg: 5.8,
		color: "Green",
		eggGroups: ["Grass"],
	},
    granbull: {
        inherit: true,
        otherFormes: ["granbullmega"],
    },
    granbullmega: {
		num: 210,
		species: "Granbull-Mega",
		baseSpecies: "Granbull",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fairy", "Fighting"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 90, atk: 160, def: 100, spa: 55, spd: 85, spe: 60},
		abilities: {0: "Guts"},
		heightm: 1.4,
		weightkg: 48.7,
		color: "Purple",
		eggGroups: ["Field", "Fairy"],
	},
    miltank: {
        inherit: true,
        otherFormes: ["miltankmega"],
    },
    miltankmega: {
		num: 241,
		species: "Miltank-Mega",
		baseSpecies: "Miltank",
		forme: "Mega",
		formeLetter: "M",
		types: ["Normal"],
		gender: "F",
		baseStats: {hp: 95, atk: 110, def: 125, spa: 70, spd: 90, spe: 100},
		abilities: {0: "Unaware"},
		heightm: 1.2,
		weightkg: 75.5,
		color: "Pink",
		eggGroups: ["Field"],
	},
    /*
    exploud: {
        inherit: true,
        otherFormes: ["exploudmega"],
    },
	exploudmega: {
		num: 295,
		species: "Exploud-Mega",
		baseSpecies: "Exploud",
		forme: "Mega",
		formeLetter: "M",
		types: ["Normal"],
		baseStats: {hp: 104, atk: 81, def: 83, spa: 161, spd: 88, spe: 73},
		abilities: {0: "Scrappy"},
		heightm: 1.5,
		weightkg: 84,
		color: "Blue",
		eggGroups: ["Monster", "Field"],
	},
	*/
    delcatty: {
        inherit: true,
        otherFormes: ["delcattymega"],
    },
    delcattymega: {
		num: 301,
		species: "Delcatty-Mega",
		baseSpecies: "Delcatty",
		forme: "Mega",
		formeLetter: "M",
		types: ["Normal", "Ghost"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 70, atk: 10, def: 115, spa: 125, spd: 115, spe: 65},
		abilities: {0: "Terrify"},
		heightm: 1.1,
		weightkg: 32.6,
		color: "Purple",
		eggGroups: ["Field", "Fairy"],
	},
    flygon: {
        inherit: true,
        otherFormes: ["flygonmegax", "flygonmegay"],
    },
    flygonmegax: {
		num: 330,
		species: "Flygon-Mega-X",
		baseSpecies: "Flygon",
		forme: "Mega-X",
		formeLetter: "M",
		types: ["Ground", "Dragon"],
		baseStats: {hp: 80, atk: 135, def: 105, spa: 100, spd: 95, spe: 105},
		abilities: {0: "Levitate"},
		heightm: 2,
		weightkg: 82,
		color: "Green",
		eggGroups: ["Bug"],
	},
	flygonmegay: {
		num: 330,
		species: "Flygon-Mega-Y",
		baseSpecies: "Flygon",
		forme: "Mega-Y",
		formeLetter: "M",
		types: ["Bug", "Dragon"],
		baseStats: {hp: 80, atk: 100, def: 95, spa: 135, spd: 105, spe: 105},
		abilities: {0: "Infectate"},
		heightm: 2,
		weightkg: 82,
		color: "Green",
		eggGroups: ["Bug"],
	},
    kecleon: {
        inherit: true,
        otherFormes: ["kecleonmega"],
    },
    kecleonmega: {
		num: 352,
		species: "Kecleon-Mega",
		baseSpecies: "Kecleon",
		forme: "Mega",
		formeLetter: "M",
		types: ["Normal"],
		baseStats: {hp: 60, atk: 110, def: 100, spa: 90, spd: 140, spe: 40},
		abilities: {0: "Protean"},
		heightm: 1,
		weightkg: 2,
		color: "Green",
		eggGroups: ["Field"],
	},
    torterra: {
        inherit: true,
        otherFormes: ["torterramega"],
    },
    torterramega: {
		num: 389,
		species: "Torterra-Mega",
		baseSpecies: "Torterra",
		forme: "Mega",
		formeLetter: "M",
		types: ["Grass", "Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 95, atk: 144, def: 150, spa: 55, spd: 125, spe: 56},
		abilities: {0: "Solid Rock"},
		heightm: 2.2,
		weightkg: 310,
		color: "Green",
		prevo: "grotle",
		evoLevel: 32,
		eggGroups: ["Monster", "Grass"],
	},
    infernape: {
        inherit: true,
        otherFormes: ["infernapemega"],
    },
    infernapemega: {
		num: 392,
		species: "Infernape-Mega",
		baseSpecies: "Infernape",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fire", "Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 76, atk: 134, def: 86, spa: 134, spd: 86, spe: 118},
		abilities: {0: "Infiltrator"},
		heightm: 1.2,
		weightkg: 55,
		color: "Brown",
		eggGroups: ["Field", "Human-Like"],
	},
    empoleon: {
        inherit: true,
        otherFormes: ["empoleonmega"],
    },
    empoleonmega: {
		num: 395,
		species: "Empoleon-Mega",
		baseSpecies: "Empoleon",
		forme: "Mega",
		formeLetter: "M",
		types: ["Water", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 84, atk: 96, def: 118, spa: 131, spd: 131, spe: 70},
		abilities: {0: "Thick Fat"},
		heightm: 1.7,
		weightkg: 84.5,
		color: "Blue",
		prevo: "prinplup",
		evoLevel: 36,
		eggGroups: ["Water 1", "Field"],
	},
    staraptor: {
        inherit: true,
        otherFormes: ["staraptormega"],
    },
    staraptormega: {
		num: 398,
		species: "Staraptor-Mega",
		baseSpecies: "Staraptor",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fighting", "Flying"],
		baseStats: {hp: 85, atk: 140, def: 100, spa: 65, spd: 90, spe: 105},
		abilities: {0: "Terrify"},
		heightm: 1.2,
		weightkg: 24.9,
		color: "Brown",
		eggGroups: ["Flying"],
	},
    luxray: {
        inherit: true,
        otherFormes: ["luxraymega"],
    },
    luxraymega: {
		num: 405,
		species: "Luxray-Mega",
		baseSpecies: "Luxray",
		forme: "Mega",
		formeLetter: "M",
		types: ["Electric", "Dark"],
		baseStats: {hp: 80, atk: 160, def: 94, spa: 105, spd: 94, spe: 90},
		abilities: {0: "Strong Jaw"},
		heightm: 1.4,
		weightkg: 42,
		color: "Blue",
		eggGroups: ["Field"],
	},
    roserade: {
        inherit: true,
        otherFormes: ["roserademega"],
    },
    roserademega: {
		num: 407,
		species: "Roserade-Mega",
		baseSpecies: "Roserade",
		forme: "Mega",
		formeLetter: "M",
		types: ["Grass", "Poison"],
		baseStats: {hp: 60, atk: 70, def: 90, spa: 155, spd: 135, spe: 105},
		abilities: {0: "Merciless"},
		heightm: 0.9,
		weightkg: 14.5,
		color: "Green",
		eggGroups: ["Fairy", "Grass"],
	},
    /*
    vespiquen: {
        inherit: true,
        otherFormes: ["vespiquenmega"],
    },
	vespiquenmega: {
		num: 416,
		species: "Vespiquen-Mega",
		baseSpecies: "Vespiquen",
		forme: "Mega",
		formeLetter: "M",
		types: ["Bug", "Rock"],
		gender: "F",
		baseStats: {hp: 70, atk: 80, def: 122, spa: 100, spd: 127, spe: 75},
		abilities: {0: "Magic Guard"},
		heightm: 1.2,
		weightkg: 38.4,
		color: "Yellow",
		eggGroups: ["Bug"],
	},
	*/
    bronzong: {
        inherit: true,
        otherFormes: ["bronzongmega"],
    },
    bronzongmega: {
		num: 437,
		species: "Bronzong-Mega",
		baseSpecies: "Bronzong",
		forme: "Mega",
		formeLetter: "M",
		types: ["Steel", "Psychic"],
		baseStats: {hp: 67, atk: 119, def: 146, spa: 89, spd: 146, spe: 33},
		abilities: {0: "Persistent"},
		heightm: 1.3,
		weightkg: 187,
		color: "Green",
		eggGroups: ["Mineral"],
	},
    /*
    toxicroak: {
        inherit: true,
        otherFormes: ["toxicroakmega"],
    },
	toxicroakmega: {
		num: 454,
		species: "Toxicroak-Mega",
		baseSpecies: "Toxicroak",
		forme: "Mega",
		formeLetter: "M",
		types: ["Poison", "Fighting"],
		baseStats: {hp: 83, atk: 106, def: 85, spa: 122, spd: 85, spe: 109},
		abilities: {0: "No Guard"},
		heightm: 1.3,
		weightkg: 44.4,
		color: "Blue",
		eggGroups: ["Human-Like"],
	},
	*/
    froslass: {
        inherit: true,
        otherFormes: ["froslassmega"],
    },
    froslassmega: {
		num: 478,
		species: "Froslass-Mega",
		baseSpecies: "Froslass",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ice", "Ghost"],
		gender: "F",
		baseStats: {hp: 70, atk: 80, def: 90, spa: 120, spd: 90, spe: 130},
		abilities: {0: "Snow Warning"},
		heightm: 1.3,
		weightkg: 26.6,
		color: "White",
		eggGroups: ["Fairy", "Mineral"],
	},
    /*
    scolipede: {
        inherit: true,
        otherFormes: ["scolipedemega"],
    },
	scolipedemega: {
		num: 545,
		species: "Scolipede-Mega",
		baseSpecies: "Scolipede",
		forme: "Mega",
		formeLetter: "M",
		types: ["Bug", "Poison"],
		baseStats: {hp: 60, atk: 130, def: 114, spa: 65, spd: 94, spe: 122},
		abilities: {0: "Speed Boost"},
		heightm: 2.5,
		weightkg: 200.5,
		color: "Red",
		eggGroups: ["Bug"],
	},
	*/
    /*
    whimsicott: {
        inherit: true,
        otherFormes: ["whimsicottmega"],
    },
	whimsicottmega: {
		num: 547,
		species: "Whimsicott-Mega",
		baseSpecies: "Whimsicott",
		forme: "Mega",
		formeLetter: "M",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 60, atk: 67, def: 105, spa: 107, spd: 105, spe: 136},
		abilities: {0: "Prankster"},
		heightm: 0.7,
		weightkg: 6.6,
		color: "Green",
		eggGroups: ["Fairy", "Grass"],
	},
	*/
    krookodile: {
        inherit: true,
        otherFormes: ["krookodilemega"],
    },
    krookodilemega: {
		num: 553,
		species: "Krookodile-Mega",
		baseSpecies: "Krookodile",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ground", "Dark"],
		baseStats: {hp: 95, atk: 142, def: 105, spa: 75, spd: 95, spe: 107},
		abilities: {0: "Frisk"},
		heightm: 1.5,
		weightkg: 96.3,
		color: "Red",
		eggGroups: ["Field"],
	},
    druddigon: {
        inherit: true,
        otherFormes: ["druddigonmega"],
    },
    druddigonmega: {
		num: 621,
		species: "Druddigon-Mega",
		baseSpecies: "Druddigon",
		forme: "Mega",
		formeLetter: "M",
		types: ["Dragon", "Steel"],
		baseStats: {hp: 77, atk: 160, def: 125, spa: 50, spd: 125, spe: 48},
		abilities: {0: "Defiant"},
		heightm: 1.6,
		weightkg: 139,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
	},
    golurk: {
        inherit: true,
        otherFormes: ["golurkmega"],
    },
    golurkmega: {
		num: 623,
		species: "Golurk-Mega",
		baseSpecies: "Golurk",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ground", "Ghost"],
		baseStats: {hp: 89, atk: 150, def: 100, spa: 75, spd: 100, spe: 69},
		abilities: {0: "Spectral Battery"},
		heightm: 2.8,
		weightkg: 330,
		color: "Green",
		eggGroups: ["Mineral"],
	},
    /*
    clawitzer: {
        inherit: true,
        otherFormes: ["clawitzermega"],
    },
	clawitzermega: {
		num: 693,
		species: "Clawitzer-Mega",
		baseSpecies: "Clawitzer",
		forme: "Mega",
		formeLetter: "M",
		types: ["Water", "Fighting"],
		baseStats: {hp: 71, atk: 120, def: 125, spa: 155, spd: 99, spe: 30},
		abilities: {0: "Mega Launcher"},
		heightm: 1.3,
		weightkg: 35.3,
		color: "Blue",
		eggGroups: ["Water 1", "Water 3"],
	},
	*/
    /*
    tyrantrum: {
        inherit: true,
        otherFormes: ["tyrantrum"],
    },
    tyrantrummega: {
		num: 697,
		species: "Tyrantrum-Mega",
		baseSpecies: "Tyrantrum",
		forme: "Mega",
		formeLetter: "M",
		types: ["Rock", "Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 82, atk: 151, def: 119, spa: 99, spd: 79, spe: 91},
		abilities: {0: "Rock Head"},
		heightm: 2.5,
		weightkg: 270,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
	},
    */
    avalugg: {
        inherit: true,
        otherFormes: ["avaluggmega"],
    },
    avaluggmega: {
		num: 713,
		species: "Avalugg-Mega",
		baseSpecies: "Avalugg",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ice", "Ground"],
		baseStats: {hp: 95, atk: 122, def: 229, spa: 64, spd: 66, spe: 38},
		abilities: {0: "Refrigerate"},
		heightm: 2,
		weightkg: 505,
		color: "Blue",
		eggGroups: ["Monster"],
	},
    /*
    toucannon: {
        inherit: true,
        otherFormes: ["toucannonmega"],
    },
	toucannonmega: {
		num: 733,
		species: "Toucannon-Mega",
		baseSpecies: "Toucannon",
		forme: "Mega",
		formeLetter: "M",
		types: ["Grass", "Flying"],
		baseStats: {hp: 80, atk: 155, def: 75, spa: 85, spd: 75, spe: 115},
		abilities: {0: "Skill Link"},
		heightm: 1.1,
		weightkg: 26,
		color: "Black",
		eggGroups: ["Flying"],
	},
	*/
};

exports.BattlePokedex = BattlePokedex;
