'use strict';

/**@type {{[k: string]: {learnset: {[k: string]: MoveSource[]}}}} */
let BattleLearnsets = {
	tomohawk: {learnset: {
		acrobatics: ["7M", "5M"],
		aerialace: ["7M", "7L17", "5M", "5L17"],
		airslash: ["7L33", "5L37"],
		aquatail: ["7T"],
		attract: ["7M", "5M"],
		aurasphere: ["7L1", "5L1"],
		batonpass: ["7E", "5E"],
		brickbreak: ["7E", "5M"],
		bulkup: ["7M", "5M"],
		bulldoze: ["7M", "5M"],
		confide: ["7M"],
		confuseray: ["7M", "5E"],
		doubleteam: ["7M", "5M"],
		earthpower: ["5L33"],
		earthquake: ["7M", "5M"],
		echoedvoice: ["7M", "5M"],
		facade: ["7M", "5M"],
		falseswipe: ["7M", "5M"],
		flash: ["6M", "5M"],
		fling: ["7M", "5M"],
		fly: ["7M", "5M"],
		focusblast: ["7M", "5M"],
		focusenergy: ["7E", "5E"],
		frustration: ["7E", "5M"],
		furyswipes: ["7L1", "5L1"],
		gigaimpact: ["7M", "5M"],
		grassknot: ["7M", "5M"],
		harden: ["7L1", "5L1"],
		haze: ["7E", "5E"],
		healingwish: ["7L60", "5L60"],
		heatwave: ["7L42", "5L45"],
		helpinghand: ["7T"],
		hiddenpower: ["7M", "5M"],
		hurricane: ["7L51", "5L55"],
		hyperbeam: ["7M", "5M"],
		hypervoice: ["7L45", "5L49"],
		incinerate: ["6M", "5M"],
		irontail: ["7T"],
		memento: ["7E", "5E"],
		morningsun: ["7L20", "5L20"],
		naturepower: ["7E", "5E"],
		poweruppunch: ["6L99"],
		protect: ["7M", "5M"],
		quash: ["7M", "5M"],
		raindance: ["7M", "7L29", "5M", "5L29"],
		rapidspin: ["7E", "5E"],
		reflect: ["5M"],
		rest: ["7M", "7L53", "5M", "5L53"],
		retaliate: ["6M", "5M"],
		return: ["7M", "5M"],
		roar: ["7M", "5M"],
		rockslide: ["7M", "5M"],
		rocksmash: ["6M", "5M"],
		rocktomb: ["7M", "5M"],
		roost: ["7M", "7E", "5E"],
		round: ["7M", "5M"],
		safeguard: ["7M", "5M"],
		scratch: ["7L4"],
		secretpower: ["7M"],
		skyattack: ["7L55"],
		skydrop: ["7M", "7L49", "5M", "5L50"],
		snore: ["7T"],
		solarbeam: ["7M", "5M"],
		stealthrock: ["7E", "5E"],
		steelwing: ["7M"],
		strength: ["6M", "5M"],
		submission: ["7L37", "5L42"],
		substitute: ["7M", "5M"],
		sunnyday: ["7M", "7L1", "5M", "5L1"],
		superpower: ["7L50", "5L51"],
		swagger: ["7M", "5M"],
		taunt: ["7M", "5M"],
		thief: ["7M", "5M"],
		toxic: ["7M", "5M"],
		whirlwind: ["7L23", "5L23"],
		workup: ["7M", "5M"],
		yawn: ["7E", "5E"],
	}},
	aurumoth: {learnset: {
		allyswitch: ["5M"],
		ancientpower: ["7L47", "5L47"],
		attract: ["7M", "5M"],
		blizzard: ["7M", "5M"],
		bugbite: ["7T", "5T"],
		bugbuzz: ["7E", "5E"],
		closecombat: ["7E", "5E"],
		confide: ["7M"],
		counter: ["7E", "5E"],
		cut: ["6M", "5M"],
		disable: ["7E", "5E"],
		doubleteam: ["7M", "5M"],
		dragondance: ["7L1", "5L1"],
		dreameater: ["7M", "5M"],
		echoedvoice: ["7M", "5M"],
		electroweb: ["7T", "5T"],
		facade: ["7M", "5M"],
		feint: ["7E", "5E"],
		finalgambit: ["5L41", "5L41"],
		flash: ["6M", "5M"],
		fling: ["7M", "5M"],
		focusblast: ["7M", "5M"],
		frustration: ["7M", "5M"],
		gigaimpact: ["7M", "5M"],
		hail: ["7M", "5M"],
		healingwish: ["7L61", "5L61"],
		healpulse: ["7L21", "5L21"],
		helpinghand: ["7T", "5T"],
		hiddenpower: ["7M", "5M"],
		hydropump: ["7E", "5E"],
		hyperbeam: ["7M", "5M"],
		icebeam: ["7M", "5M"],
		icywind: ["7T", "5T"],
		infestation: ["7M"],
		lightscreen: ["7M", "5M"],
		magiccoat: ["7T", "5T"],
		magicroom: ["7T", "5T"],
		megahorn: ["7E", "5E"],
		ominouswind: ["7L27", "5L27"],
		overheat: ["7M", "5M"],
		protect: ["7M", "5M"],
		psychic: ["7M", "5M"],
		psychicterrain: ["7L1"],
		psychup: ["7M", "5M"],
		psyshock: ["7M", "5M"],
		quiverdance: ["5L1"],
		raindance: ["7M", "5M"],
		recycle: ["7T", "5T"],
		reflect: ["7M", "5M"],
		rest: ["7M", "5M"],
		retaliate: ["5M"],
		return: ["7M", "5M"],
		roleplay: ["7T", "5T"],
		round: ["7M", "5M"],
		safeguard: ["7M", "7E", "5M", "5E"],
		secretpower: ["7M"],
		shadowball: ["7M", "5M"],
		shockwave: ["7M"],
		signalbeam: ["7T"],
		silverwind: ["7L1", "5L1"],
		skillswap: ["7T", "5T"],
		sleeptalk: ["7M"],
		snore: ["7T"],
		solarbeam: ["7M", "5M"],
		spotlight: ["7L1"],
		steelwing: ["7M"],
		stringshot: ["7L1", "5L1"],
		strugglebug: ["5M"],
		substitute: ["7M", "5M"],
		sunnyday: ["7M", "7L1", "5M", "5L1"],
		surf: ["7M", "5M"],
		swagger: ["7M", "5M"],
		tackle: ["7L1", "5L1"],
		tailglow: ["7L67", "5L67"],
		telekinesis: ["5M"],
		thunder: ["7M", "5M"],
		thunderbolt: ["7M", "5M"],
		toxic: ["7M", "5M"],
		trick: ["7T", "5T"],
		waterpulse: ["7T"],
		willowisp: ["7M", "7L34", "5M", "5L34"],
		wingattack: ["7E", "5E"],
		wish: ["7L54", "5L54"],
		wonderroom: ["7T", "5T"],
		xscissor: ["7M", "5M"],
		zenheadbutt: ["7T", "5T"],
	}},
	crucibelle: {learnset: {
		acidarmor: ["7L32", "6L32"],
		astonish: ["7L1", "6L1"],
		attract: ["7M", "6M"],
		block: ["6T"],
		coil: ["7E", "6E"],
		confuseray: ["7L16", "6L16"],
		confusion: ["7L14", "6L14"],
		defensecurl: ["7E", "6E"],
		doubleteam: ["7M", "6M"],
		embargo: ["7M", "6M"],
		endure: ["7L1", "6L1"],
		explosion: ["7M", "7L60", "6M", "6L60"],
		facade: ["7M", "6M"],
		faketears: ["7L10", "6L10"],
		frustration: ["7M", "6M"],
		gigaimpact: ["7M", "6M"],
		grassknot: ["7M", "6M"],
		gravity: ["6T"],
		gunkshot: ["7L56", "6T", "6L56"],
		headsmash: ["6L1"],
		helpinghand: ["6T"],
		hex: ["7L44", "6L44"],
		hiddenpower: ["7M", "6M"],
		hyperbeam: ["7M", "6M"],
		infestation: ["7M", "6M"],
		ironhead: ["6T"],
		lowkick: ["6T"],
		magicroom: ["6T"],
		payback: ["7M", "6M"],
		poisonjab: ["7M", "6M"],
		protect: ["7M", "7L1", "6M", "6L1"],
		psybeam: ["7L40", "6L40"],
		psychic: ["7M", "6M"],
		reflect: ["7M", "7L25", "6M", "6L25"],
		rest: ["7M", "6M"],
		return: ["7M", "6M"],
		rockblast: ["7L52", "6L52"],
		rockpolish: ["7M", "6M"],
		rockslide: ["7M", "7L36", "6M", "6L36"],
		rocksmash: ["7M", "6M"],
		rockthrow: ["7L5", "6L5"],
		rocktomb: ["7M", "6M"],
		rollout: ["7E", "6E"],
		round: ["7M", "6M"],
		safeguard: ["7M", "6M"],
		sandstorm: ["7M", "6M"],
		secretpower: ["7M"],
		shadowball: ["7M", "6M"],
		skillswap: ["6T"],
		sleeptalk: ["7M", "6M"],
		sludge: ["7L28", "6L28"],
		sludgebomb: ["7M", "6M"],
		sludgewave: ["7M", "6M"],
		smackdown: ["7M", "7L23", "6M", "6L23"],
		snatch: ["6T"],
		snore: ["6T"],
		stealthrock: ["6T"],
		stoneedge: ["7M", "6M"],
		substitute: ["7M", "6M"],
		swagger: ["7M", "6M"],
		torment: ["7M", "7L48", "6M", "6L48"],
		toxic: ["7M", "7L7", "6M", "6L7"],
		toxicspikes: ["7L19", "6L19"],
		trick: ["6T"],
		uturn: ["7M", "6M"],
		venoshock: ["7M", "6M"],
		withdraw: ["7L1", "6L1"],
		wonderroom: ["6T"],
		woodhammer: ["7E", "6E"],
		zenheadbutt: ["6T"],
	}},
};

exports.BattleLearnsets = BattleLearnsets;
