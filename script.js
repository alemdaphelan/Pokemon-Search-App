const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const pokemonImg = document.getElementById('pokemon-img');
const typesContainer = document.getElementById('types');
const pokemonHP = document.getElementById('hp');
const pokemonAttack = document.getElementById('attack');
const pokemonDef = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDef = document.getElementById('special-defense');
const pokemonSpeed = document.getElementById('speed');


const allPokemon = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/';

const fetchData = async () => {
    try {
        const nameOrId = searchInput.value.toLowerCase();
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`);
        const data = await res.json();
        pokemonId.textContent = `#${data.id}`
        pokemonName.textContent = `${data.name.toUpperCase()} #${data.id}`;
        pokemonWeight.textContent = `Weight: ${data.weight}`;
        pokemonHeight.textContent = `Height: ${data.height}`;
        pokemonImg.innerHTML = ` <img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">`;

        typesContainer.innerHTML = data.types.map(obj => {
            return `<div class="type ${obj.type.name}">${obj.type.name.toUpperCase()}</div>`;
        }).join("");

        pokemonHP.textContent = `${data.stats[0].base_stat}`;
        pokemonAttack.textContent = `${data.stats[1].base_stat}`;
        pokemonDef.textContent = `${data.stats[2].base_stat}`;
        specialAttack.textContent = `${data.stats[3].base_stat}`;
        specialDef.textContent = `${data.stats[4].base_stat}`;
        pokemonSpeed.textContent = `${data.stats[5].base_stat}`;
    }
    catch (err) {
        alert('Pokémon not found');
        searchInput.value = "";
    }
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!searchInput.value) {
        alert('Please provide pokemon name or id.');
        return;
    }
    fetchData();
    searchInput.value = "";
})

searchInput.addEventListener('keydown', ({ key }) => {
    if (key === "Enter") {
        if (!searchInput.value) {
            alert('Please provide pokemon name or id.');
            return;
        }
        fetchData();
        seachInput.value = "";
    }
})