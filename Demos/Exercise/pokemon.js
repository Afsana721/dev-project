const pokemon = require("pokemon");

const pokemonArray = [];

for (let i = 0; i < 5; i++) {
  const randomPokemon = pokemon.random();
  pokemonArray.push(randomPokemon);
}

console.log(pokemonArray);
