const Pokedex = [
  {
    num: 1,
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    baseStats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
  },
  {
    num: 2,
    name: "Ivysaur",
    types: ["Grass", "Poison"],
    baseStats: { hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60 },
  },
  {
    num: 3,
    name: "Venusaur",
    types: ["Grass", "Poison"],
    baseStats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
  },
  {
    num: 4,
    name: "Charmander",
    types: ["Fire"],
    baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
  },
  {
    num: 5,
    name: "Charmeleon",
    types: ["Fire"],
    baseStats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
  },
  {
    num: 6,
    name: "Charizard",
    types: ["Fire", "Flying"],
    baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
  },
  {
    num: 7,
    name: "Squirtle",
    types: ["Water"],
    baseStats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43 },
  },
  {
    num: 8,
    name: "Wartortle",
    types: ["Water"],
    baseStats: { hp: 59, atk: 63, def: 80, spa: 65, spd: 80, spe: 58 },
  },
  {
    num: 9,
    name: "Blastoise",
    types: ["Water"],
    baseStats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
  },
];

// bulbasaur: {
//   num: 1,
//   name: "Bulbasaur",
//   types: ["Grass", "Poison"],
//   baseStats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
// },
// ivysaur: {
//   num: 2,
//   name: "Ivysaur",
//   types: ["Grass", "Poison"],
//   baseStats: { hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60 },
// },
// venusaur: {
//   num: 3,
//   name: "Venusaur",
//   types: ["Grass", "Poison"],
//   baseStats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
// },
// charmander: {
//   num: 4,
//   name: "Charmander",
//   types: ["Fire"],
//   baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
// },
// charmeleon: {
//   num: 5,
//   name: "Charmeleon",
//   types: ["Fire"],
//   baseStats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
// },
// charizard: {
//   num: 6,
//   name: "Charizard",
//   types: ["Fire", "Flying"],
//   baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
// },
// squirtle: {
//   num: 7,
//   name: "Squirtle",
//   types: ["Water"],
//   baseStats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43 },
// },
// wartortle: {
//   num: 8,
//   name: "Wartortle",
//   types: ["Water"],
//   baseStats: { hp: 59, atk: 63, def: 80, spa: 65, spd: 80, spe: 58 },
// },
// blastoise: {
//   num: 9,
//   name: "Blastoise",
//   types: ["Water"],
//   baseStats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
// },
// caterpie: {
//   num: 10,
//   name: "Caterpie",
//   types: ["Bug"],
//   baseStats: { hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45 },
// },
// metapod: {
//   num: 11,
//   name: "Metapod",
//   types: ["Bug"],
//   baseStats: { hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30 },
// },
// butterfree: {
//   num: 12,
//   name: "Butterfree",
//   types: ["Bug", "Flying"],
//   baseStats: { hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70 },
// },
// weedle: {
//   num: 13,
//   name: "Weedle",
//   types: ["Bug", "Poison"],
//   baseStats: { hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50 },
// },
// kakuna: {
//   num: 14,
//   name: "Kakuna",
//   types: ["Bug", "Poison"],
//   baseStats: { hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35 },
// },
// beedrill: {
//   num: 15,
//   name: "Beedrill",
//   types: ["Bug", "Poison"],
//   baseStats: { hp: 65, atk: 90, def: 40, spa: 45, spd: 80, spe: 75 },
// },
// pidgey: {
//   num: 16,
//   name: "Pidgey",
//   types: ["Normal", "Flying"],
//   baseStats: { hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56 },
// },
// pidgeotto: {
//   num: 17,
//   name: "Pidgeotto",
//   types: ["Normal", "Flying"],
//   baseStats: { hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71 },
// },
// pidgeot: {
//   num: 18,
//   name: "Pidgeot",
//   types: ["Normal", "Flying"],
//   baseStats: { hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 101 },
// },
// rattata: {
//   num: 19,
//   name: "Rattata",
//   types: ["Normal"],
//   baseStats: { hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72 },
// },
// raticate: {
//   num: 20,
//   name: "Raticate",
//   types: ["Normal"],
//   baseStats: { hp: 55, atk: 81, def: 60, spa: 50, spd: 70, spe: 97 },
// },
// spearow: {
//   num: 21,
//   name: "Spearow",
//   types: ["Normal", "Flying"],
//   baseStats: { hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70 },
// },
// fearow: {
//   num: 22,
//   name: "Fearow",
//   types: ["Normal", "Flying"],
//   baseStats: { hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100 },
// },
// ekans: {
//   num: 23,
//   name: "Ekans",
//   types: ["Poison"],
//   baseStats: { hp: 35, atk: 60, def: 44, spa: 40, spd: 54, spe: 55 },
// },
// arbok: {
//   num: 24,
//   name: "Arbok",
//   types: ["Poison"],
//   baseStats: { hp: 60, atk: 95, def: 69, spa: 65, spd: 79, spe: 80 },
// },
// pikachu: {
//   num: 25,
//   name: "Pikachu",
//   types: ["Electric"],
//   baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
// },
// raichu: {
//   num: 26,
//   name: "Raichu",
//   types: ["Electric"],
//   baseStats: { hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 110 },
// },
// sandshrew: {
//   num: 27,
//   name: "Sandshrew",
//   types: ["Ground"],
//   baseStats: { hp: 50, atk: 75, def: 85, spa: 20, spd: 30, spe: 40 },
// },
// sandslash: {
//   num: 28,
//   name: "Sandslash",
//   types: ["Ground"],
//   baseStats: { hp: 75, atk: 100, def: 110, spa: 45, spd: 55, spe: 65 },
// },
// nidoranf: {
//   num: 29,
//   name: "Nidoran-F",
//   types: ["Poison"],
//   baseStats: { hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41 },
// },
// nidorina: {
//   num: 30,
//   name: "Nidorina",
//   types: ["Poison"],
//   baseStats: { hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56 },
// },
// nidoqueen: {
//   num: 31,
//   name: "Nidoqueen",
//   types: ["Poison", "Ground"],
//   baseStats: { hp: 90, atk: 92, def: 87, spa: 75, spd: 85, spe: 76 },
// },
// nidoranm: {
//   num: 32,
//   name: "Nidoran-M",
//   types: ["Poison"],
//   baseStats: { hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50 },
// },
// nidorino: {
//   num: 33,
//   name: "Nidorino",
//   types: ["Poison"],
//   baseStats: { hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65 },
// },
// nidoking: {
//   num: 34,
//   name: "Nidoking",
//   types: ["Poison", "Ground"],
//   baseStats: { hp: 81, atk: 102, def: 77, spa: 85, spd: 75, spe: 85 },
// },
// clefairy: {
//   num: 35,
//   name: "Clefairy",
//   types: ["Normal"],
//   baseStats: { hp: 70, atk: 45, def: 48, spa: 60, spd: 65, spe: 35 },
// },
// clefable: {
//   num: 36,
//   name: "Clefable",
//   types: ["Normal"],
//   baseStats: { hp: 95, atk: 70, def: 73, spa: 95, spd: 90, spe: 60 },
// },
// vulpix: {
//   num: 37,
//   name: "Vulpix",
//   types: ["Fire"],
//   baseStats: { hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65 },
// },
// ninetales: {
//   num: 38,
//   name: "Ninetales",
//   types: ["Fire"],
//   baseStats: { hp: 73, atk: 76, def: 75, spa: 81, spd: 100, spe: 100 },
// },
// jigglypuff: {
//   num: 39,
//   name: "Jigglypuff",
//   types: ["Normal"],
//   baseStats: { hp: 115, atk: 45, def: 20, spa: 45, spd: 25, spe: 20 },
// },
// wigglytuff: {
//   num: 40,
//   name: "Wigglytuff",
//   types: ["Normal"],
//   baseStats: { hp: 140, atk: 70, def: 45, spa: 85, spd: 50, spe: 45 },
// },
// zubat: {
//   num: 41,
//   name: "Zubat",
//   types: ["Poison", "Flying"],
//   baseStats: { hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55 },
// },
// golbat: {
//   num: 42,
//   name: "Golbat",
//   types: ["Poison", "Flying"],
//   baseStats: { hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 90 },
// },
// oddish: {
//   num: 43,
//   name: "Oddish",
//   types: ["Grass", "Poison"],
//   baseStats: { hp: 45, atk: 50, def: 55, spa: 75, spd: 65, spe: 30 },
// },
// gloom: {
//   num: 44,
//   name: "Gloom",
//   types: ["Grass", "Poison"],
//   baseStats: { hp: 60, atk: 65, def: 70, spa: 85, spd: 75, spe: 40 },
// },
// vileplume: {
//   num: 45,
//   name: "Vileplume",
//   types: ["Grass", "Poison"],
//   baseStats: { hp: 75, atk: 80, def: 85, spa: 110, spd: 90, spe: 50 },
// },
// paras: {
//   num: 46,
//   name: "Paras",
//   types: ["Bug", "Grass"],
//   baseStats: { hp: 35, atk: 70, def: 55, spa: 45, spd: 55, spe: 25 },
// },
// parasect: {
//   num: 47,
//   name: "Parasect",
//   types: ["Bug", "Grass"],
//   baseStats: { hp: 60, atk: 95, def: 80, spa: 60, spd: 80, spe: 30 },
// },
// venonat: {
//   num: 48,
//   name: "Venonat",
//   types: ["Bug", "Poison"],
//   baseStats: { hp: 60, atk: 55, def: 50, spa: 40, spd: 55, spe: 45 },
// },
// venomoth: {
//   num: 49,
//   name: "Venomoth",
//   types: ["Bug", "Poison"],
//   baseStats: { hp: 70, atk: 65, def: 60, spa: 90, spd: 75, spe: 90 },
// },
// diglett: {
//   num: 50,
//   name: "Diglett",
//   types: ["Ground"],
//   baseStats: { hp: 10, atk: 55, def: 25, spa: 35, spd: 45, spe: 95 },
// },
// dugtrio: {
//   num: 51,
//   name: "Dugtrio",
//   types: ["Ground"],
//   baseStats: { hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 120 },
// },
// meowth: {
//   num: 52,
//   name: "Meowth",
//   types: ["Normal"],
//   baseStats: { hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90 },
// },
// persian: {
//   num: 53,
//   name: "Persian",
//   types: ["Normal"],
//   baseStats: { hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115 },
// },
// psyduck: {
//   num: 54,
//   name: "Psyduck",
//   types: ["Water"],
//   baseStats: { hp: 50, atk: 52, def: 48, spa: 65, spd: 50, spe: 55 },
// },
// golduck: {
//   num: 55,
//   name: "Golduck",
//   types: ["Water"],
//   baseStats: { hp: 80, atk: 82, def: 78, spa: 95, spd: 80, spe: 85 },
// },
// mankey: {
//   num: 56,
//   name: "Mankey",
//   types: ["Fighting"],
//   baseStats: { hp: 40, atk: 80, def: 35, spa: 35, spd: 45, spe: 70 },
// },
// primeape: {
//   num: 57,
//   name: "Primeape",
//   types: ["Fighting"],
//   baseStats: { hp: 65, atk: 105, def: 60, spa: 60, spd: 70, spe: 95 },
// },
// growlithe: {
//   num: 58,
//   name: "Growlithe",
//   types: ["Fire"],
//   baseStats: { hp: 55, atk: 70, def: 45, spa: 70, spd: 50, spe: 60 },
// },
// arcanine: {
//   num: 59,
//   name: "Arcanine",
//   types: ["Fire"],
//   baseStats: { hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95 },
// },
// poliwag: {
//   num: 60,
//   name: "Poliwag",
//   types: ["Water"],
//   baseStats: { hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90 },
// },
// poliwhirl: {
//   num: 61,
//   name: "Poliwhirl",
//   types: ["Water"],
//   baseStats: { hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90 },
// },
// poliwrath: {
//   num: 62,
//   name: "Poliwrath",
//   types: ["Water", "Fighting"],
//   baseStats: { hp: 90, atk: 95, def: 95, spa: 70, spd: 90, spe: 70 },
// },
// abra: {
//   num: 63,
//   name: "Abra",
//   types: ["Psychic"],
//   baseStats: { hp: 25, atk: 20, def: 15, spa: 105, spd: 55, spe: 90 },
// },
// kadabra: {
//   num: 64,
//   name: "Kadabra",
//   types: ["Psychic"],
//   baseStats: { hp: 40, atk: 35, def: 30, spa: 120, spd: 70, spe: 105 },
// },
// alakazam: {
//   num: 65,
//   name: "Alakazam",
//   types: ["Psychic"],
//   baseStats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120 },
// },
// machop: {
//   num: 66,
//   name: "Machop",
//   types: ["Fighting"],
//   baseStats: { hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35 },
// },
// machoke: {
//   num: 67,
//   name: "Machoke",
//   types: ["Fighting"],
//   baseStats: { hp: 80, atk: 100, def: 70, spa: 50, spd: 60, spe: 45 },
// },
// machamp: {
//   num: 68,
//   name: "Machamp",
//   types: ["Fighting"],
//   baseStats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55 },
// },
// bellsprout: {
//   num: 69,
//   name: "Bellsprout",
//   types: ["Grass", "Poison"],
//   baseStats: { hp: 50, atk: 75, def: 35, spa: 70, spd: 30, spe: 40 },
// },
// weepinbell: {
//   num: 70,
//   name: "Weepinbell",
//   types: ["Grass", "Poison"],
//   baseStats: { hp: 65, atk: 90, def: 50, spa: 85, spd: 45, spe: 55 },
// },
// victreebel: {
//   num: 71,
//   name: "Victreebel",
//   types: ["Grass", "Poison"],
//   baseStats: { hp: 80, atk: 105, def: 65, spa: 100, spd: 70, spe: 70 },
// },
// tentacool: {
//   num: 72,
//   name: "Tentacool",
//   types: ["Water", "Poison"],
//   baseStats: { hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70 },
// },
// tentacruel: {
//   num: 73,
//   name: "Tentacruel",
//   types: ["Water", "Poison"],
//   baseStats: { hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100 },
// },
// geodude: {
//   num: 74,
//   name: "Geodude",
//   types: ["Rock", "Ground"],
//   baseStats: { hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 },
// },
// graveler: {
//   num: 75,
//   name: "Graveler",
//   types: ["Rock", "Ground"],
//   baseStats: { hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35 },
// },
// golem: {
//   num: 76,
//   name: "Golem",
//   types: ["Rock", "Ground"],
//   baseStats: { hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45 },
// },
// ponyta: {
//   num: 77,
//   name: "Ponyta",
//   types: ["Fire"],
//   baseStats: { hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90 },
// },
// rapidash: {
//   num: 78,
//   name: "Rapidash",
//   types: ["Fire"],
//   baseStats: { hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105 },
// },
// slowpoke: {
//   num: 79,
//   name: "Slowpoke",
//   types: ["Water", "Psychic"],
//   baseStats: { hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15 },
// },
// slowbro: {
//   num: 80,
//   name: "Slowbro",
//   types: ["Water", "Psychic"],
//   baseStats: { hp: 95, atk: 75, def: 110, spa: 100, spd: 80, spe: 30 },
// },
// magnemite: {
//   num: 81,
//   name: "Magnemite",
//   types: ["Electric"],
//   baseStats: { hp: 25, atk: 35, def: 70, spa: 95, spd: 55, spe: 45 },
// },
// magneton: {
//   num: 82,
//   name: "Magneton",
//   types: ["Electric"],
//   baseStats: { hp: 50, atk: 60, def: 95, spa: 120, spd: 70, spe: 70 },
// },
// farfetchd: {
//   num: 83,
//   name: "Farfetch'd",
//   types: ["Normal", "Flying"],
//   baseStats: { hp: 52, atk: 90, def: 55, spa: 58, spd: 62, spe: 60 },
// },
// doduo: {
//   num: 84,
//   name: "Doduo",
//   types: ["Normal", "Flying"],
//   baseStats: { hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75 },
// },
// dodrio: {
//   num: 85,
//   name: "Dodrio",
//   types: ["Normal", "Flying"],
//   baseStats: { hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 110 },
// },
// seel: {
//   num: 86,
//   name: "Seel",
//   types: ["Water"],
//   baseStats: { hp: 65, atk: 45, def: 55, spa: 45, spd: 70, spe: 45 },
// },
// dewgong: {
//   num: 87,
//   name: "Dewgong",
//   types: ["Water", "Ice"],
//   baseStats: { hp: 90, atk: 70, def: 80, spa: 70, spd: 95, spe: 70 },
// },
// grimer: {
//   num: 88,
//   name: "Grimer",
//   types: ["Poison"],
//   baseStats: { hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25 },
// },
// muk: {
//   num: 89,
//   name: "Muk",
//   types: ["Poison"],
//   baseStats: { hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50 },
// },
// shellder: {
//   num: 90,
//   name: "Shellder",
//   types: ["Water"],
//   baseStats: { hp: 30, atk: 65, def: 100, spa: 45, spd: 25, spe: 40 },
// },
// cloyster: {
//   num: 91,
//   name: "Cloyster",
//   types: ["Water", "Ice"],
//   baseStats: { hp: 50, atk: 95, def: 180, spa: 85, spd: 45, spe: 70 },
// },
// gastly: {
//   num: 92,
//   name: "Gastly",
//   types: ["Ghost", "Poison"],
//   baseStats: { hp: 30, atk: 35, def: 30, spa: 100, spd: 35, spe: 80 },
// },
// haunter: {
//   num: 93,
//   name: "Haunter",
//   types: ["Ghost", "Poison"],
//   baseStats: { hp: 45, atk: 50, def: 45, spa: 115, spd: 55, spe: 95 },
// },
// gengar: {
//   num: 94,
//   name: "Gengar",
//   types: ["Ghost", "Poison"],
//   baseStats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
// },
// onix: {
//   num: 95,
//   name: "Onix",
//   types: ["Rock", "Ground"],
//   baseStats: { hp: 35, atk: 45, def: 160, spa: 30, spd: 45, spe: 70 },
// },
// drowzee: {
//   num: 96,
//   name: "Drowzee",
//   types: ["Psychic"],
//   baseStats: { hp: 60, atk: 48, def: 45, spa: 43, spd: 90, spe: 42 },
// },
// hypno: {
//   num: 97,
//   name: "Hypno",
//   types: ["Psychic"],
//   baseStats: { hp: 85, atk: 73, def: 70, spa: 73, spd: 115, spe: 67 },
// },
// krabby: {
//   num: 98,
//   name: "Krabby",
//   types: ["Water"],
//   baseStats: { hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50 },
// },
// kingler: {
//   num: 99,
//   name: "Kingler",
//   types: ["Water"],
//   baseStats: { hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 },
// },
// voltorb: {
//   num: 100,
//   name: "Voltorb",
//   types: ["Electric"],
//   baseStats: { hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100 },
// },
// electrode: {
//   num: 101,
//   name: "Electrode",
//   types: ["Electric"],
//   baseStats: { hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150 },
// },
// exeggcute: {
//   num: 102,
//   name: "Exeggcute",
//   types: ["Grass", "Psychic"],
//   baseStats: { hp: 60, atk: 40, def: 80, spa: 60, spd: 45, spe: 40 },
// },
// exeggutor: {
//   num: 103,
//   name: "Exeggutor",
//   types: ["Grass", "Psychic"],
//   baseStats: { hp: 95, atk: 95, def: 85, spa: 125, spd: 75, spe: 55 },
// },
// cubone: {
//   num: 104,
//   name: "Cubone",
//   types: ["Ground"],
//   baseStats: { hp: 50, atk: 50, def: 95, spa: 40, spd: 50, spe: 35 },
// },
// marowak: {
//   num: 105,
//   name: "Marowak",
//   types: ["Ground"],
//   baseStats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45 },
// },
// hitmonlee: {
//   num: 106,
//   name: "Hitmonlee",
//   types: ["Fighting"],
//   baseStats: { hp: 50, atk: 120, def: 53, spa: 35, spd: 110, spe: 87 },
// },
// hitmonchan: {
//   num: 107,
//   name: "Hitmonchan",
//   types: ["Fighting"],
//   baseStats: { hp: 50, atk: 105, def: 79, spa: 35, spd: 110, spe: 76 },
// },
// lickitung: {
//   num: 108,
//   name: "Lickitung",
//   types: ["Normal"],
//   baseStats: { hp: 90, atk: 55, def: 75, spa: 60, spd: 75, spe: 30 },
// },
// koffing: {
//   num: 109,
//   name: "Koffing",
//   types: ["Poison"],
//   baseStats: { hp: 40, atk: 65, def: 95, spa: 60, spd: 45, spe: 35 },
// },
// weezing: {
//   num: 110,
//   name: "Weezing",
//   types: ["Poison"],
//   baseStats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60 },
// },
// rhyhorn: {
//   num: 111,
//   name: "Rhyhorn",
//   types: ["Ground", "Rock"],
//   baseStats: { hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25 },
// },
// rhydon: {
//   num: 112,
//   name: "Rhydon",
//   types: ["Ground", "Rock"],
//   baseStats: { hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40 },
// },
// chansey: {
//   num: 113,
//   name: "Chansey",
//   types: ["Normal"],
//   baseStats: { hp: 250, atk: 5, def: 5, spa: 35, spd: 105, spe: 50 },
// },
// tangela: {
//   num: 114,
//   name: "Tangela",
//   types: ["Grass"],
//   baseStats: { hp: 65, atk: 55, def: 115, spa: 100, spd: 40, spe: 60 },
// },
// kangaskhan: {
//   num: 115,
//   name: "Kangaskhan",
//   types: ["Normal"],
//   baseStats: { hp: 105, atk: 95, def: 80, spa: 40, spd: 80, spe: 90 },
// },
// horsea: {
//   num: 116,
//   name: "Horsea",
//   types: ["Water"],
//   baseStats: { hp: 30, atk: 40, def: 70, spa: 70, spd: 25, spe: 60 },
// },
// seadra: {
//   num: 117,
//   name: "Seadra",
//   types: ["Water"],
//   baseStats: { hp: 55, atk: 65, def: 95, spa: 95, spd: 45, spe: 85 },
// },
// goldeen: {
//   num: 118,
//   name: "Goldeen",
//   types: ["Water"],
//   baseStats: { hp: 45, atk: 67, def: 60, spa: 35, spd: 50, spe: 63 },
// },
// seaking: {
//   num: 119,
//   name: "Seaking",
//   types: ["Water"],
//   baseStats: { hp: 80, atk: 92, def: 65, spa: 65, spd: 80, spe: 68 },
// },
// staryu: {
//   num: 120,
//   name: "Staryu",
//   types: ["Water"],
//   baseStats: { hp: 30, atk: 45, def: 55, spa: 70, spd: 55, spe: 85 },
// },
// starmie: {
//   num: 121,
//   name: "Starmie",
//   types: ["Water", "Psychic"],
//   baseStats: { hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115 },
// },
// mrmime: {
//   num: 122,
//   name: "Mr. Mime",
//   types: ["Psychic"],
//   baseStats: { hp: 40, atk: 45, def: 65, spa: 100, spd: 120, spe: 90 },
// },
// scyther: {
//   num: 123,
//   name: "Scyther",
//   types: ["Bug", "Flying"],
//   baseStats: { hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105 },
// },
// jynx: {
//   num: 124,
//   name: "Jynx",
//   types: ["Ice", "Psychic"],
//   baseStats: { hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 95 },
// },
// electabuzz: {
//   num: 125,
//   name: "Electabuzz",
//   types: ["Electric"],
//   baseStats: { hp: 65, atk: 83, def: 57, spa: 95, spd: 85, spe: 105 },
// },
// magmar: {
//   num: 126,
//   name: "Magmar",
//   types: ["Fire"],
//   baseStats: { hp: 65, atk: 95, def: 57, spa: 100, spd: 85, spe: 93 },
// },
// pinsir: {
//   num: 127,
//   name: "Pinsir",
//   types: ["Bug"],
//   baseStats: { hp: 65, atk: 125, def: 100, spa: 55, spd: 70, spe: 85 },
// },
// tauros: {
//   num: 128,
//   name: "Tauros",
//   types: ["Normal"],
//   baseStats: { hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110 },
// },
// magikarp: {
//   num: 129,
//   name: "Magikarp",
//   types: ["Water"],
//   baseStats: { hp: 20, atk: 10, def: 55, spa: 15, spd: 20, spe: 80 },
// },
// gyarados: {
//   num: 130,
//   name: "Gyarados",
//   types: ["Water", "Flying"],
//   baseStats: { hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81 },
// },
// lapras: {
//   num: 131,
//   name: "Lapras",
//   types: ["Water", "Ice"],
//   baseStats: { hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60 },
// },
// ditto: {
//   num: 132,
//   name: "Ditto",
//   types: ["Normal"],
//   baseStats: { hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48 },
// },
// eevee: {
//   num: 133,
//   name: "Eevee",
//   types: ["Normal"],
//   baseStats: { hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55 },
// },
// vaporeon: {
//   num: 134,
//   name: "Vaporeon",
//   types: ["Water"],
//   baseStats: { hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65 },
// },
// jolteon: {
//   num: 135,
//   name: "Jolteon",
//   types: ["Electric"],
//   baseStats: { hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130 },
// },
// flareon: {
//   num: 136,
//   name: "Flareon",
//   types: ["Fire"],
//   baseStats: { hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65 },
// },
// porygon: {
//   num: 137,
//   name: "Porygon",
//   types: ["Normal"],
//   baseStats: { hp: 65, atk: 60, def: 70, spa: 85, spd: 75, spe: 40 },
// },
// omanyte: {
//   num: 138,
//   name: "Omanyte",
//   types: ["Rock", "Water"],
//   baseStats: { hp: 35, atk: 40, def: 100, spa: 90, spd: 55, spe: 35 },
// },
// omastar: {
//   num: 139,
//   name: "Omastar",
//   types: ["Rock", "Water"],
//   baseStats: { hp: 70, atk: 60, def: 125, spa: 115, spd: 70, spe: 55 },
// },
// kabuto: {
//   num: 140,
//   name: "Kabuto",
//   types: ["Rock", "Water"],
//   baseStats: { hp: 30, atk: 80, def: 90, spa: 55, spd: 45, spe: 55 },
// },
// kabutops: {
//   num: 141,
//   name: "Kabutops",
//   types: ["Rock", "Water"],
//   baseStats: { hp: 60, atk: 115, def: 105, spa: 65, spd: 70, spe: 80 },
// },
// aerodactyl: {
//   num: 142,
//   name: "Aerodactyl",
//   types: ["Rock", "Flying"],
//   baseStats: { hp: 80, atk: 105, def: 65, spa: 60, spd: 75, spe: 130 },
// },
// snorlax: {
//   num: 143,
//   name: "Snorlax",
//   types: ["Normal"],
//   baseStats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 },
// },
// articuno: {
//   num: 144,
//   name: "Articuno",
//   types: ["Ice", "Flying"],
//   baseStats: { hp: 90, atk: 85, def: 100, spa: 95, spd: 125, spe: 85 },
// },
// zapdos: {
//   num: 145,
//   name: "Zapdos",
//   types: ["Electric", "Flying"],
//   baseStats: { hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100 },
// },
// moltres: {
//   num: 146,
//   name: "Moltres",
//   types: ["Fire", "Flying"],
//   baseStats: { hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90 },
// },
// dratini: {
//   num: 147,
//   name: "Dratini",
//   types: ["Dragon"],
//   baseStats: { hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50 },
// },
// dragonair: {
//   num: 148,
//   name: "Dragonair",
//   types: ["Dragon"],
//   baseStats: { hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70 },
// },
// dragonite: {
//   num: 149,
//   name: "Dragonite",
//   types: ["Dragon", "Flying"],
//   baseStats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
// },
// mewtwo: {
//   num: 150,
//   name: "Mewtwo",
//   types: ["Psychic"],
//   baseStats: { hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130 },
// },
// mew: {
//   num: 151,
//   name: "Mew",
//   types: ["Psychic"],
//   baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
// },
