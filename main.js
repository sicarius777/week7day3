async function fetchPokemonData() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error('Pokemon not found.');
        }

        const data = await response.json();

        document.getElementById('pokemonNameDisplay').textContent = data.name;
        document.getElementById('pokemonImage').src = data.sprites.front_default;

        const abilitiesList = document.getElementById('pokemonAbilities');
        abilitiesList.innerHTML = '';

        data.abilities.forEach(ability => {
            const listItem = document.createElement('li');
            listItem.textContent = ability.ability.name;
            abilitiesList.appendChild(listItem);
        });

        const statsList = document.getElementById('pokemonStats');
        statsList.innerHTML = '';

        data.stats.forEach(stat => {
            const listItem = document.createElement('li');
            listItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
            statsList.appendChild(listItem);
        });

    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        alert('Pokemon not found. Please try again.');
    }
}


