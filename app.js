const pokedex = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

const pokemons = [];

fetch(pokedex)
	.then(blob => blob.json())
	.then(data => pokemons.push(...data.pokemon))

console.log(pokemons);


function trouverPokemon(recherche, pokemons) {
	return pokemons.filter(pokemon => {
		const regex = new RegExp(recherche, 'gi');
		return pokemon.name.match(regex) || pokemon.type.find(type => type.match(regex));
	});
}

function afficherResultat() {
	const tableauResultat = trouverPokemon(this.value, pokemons);
	const html = tableauResultat.map(pokemon => {
			return `
				<li>
				<img src='${pokemon.img}' width="100" height="90"/>
				<span>${pokemon.name}</span>
				<span>${pokemon.height}</span>
				<span>${pokemon.weight}</span>
				<span>${pokemon.type[0]}</span>
				</li>
			`;	
	}).join('');
	result.innerHTML = html;
}

const input = document.querySelector('input');
const result = document.querySelector('ul');

input.addEventListener('change', afficherResultat);
input.addEventListener('keyup', afficherResultat);