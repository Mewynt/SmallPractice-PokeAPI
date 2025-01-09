
function fetchPokemon() { 
fetch('https://pokeapi.co/api/v2/pokemon?limit=48')
.then(function (response) {
  return response.json(); 
})
.then(function (data) {
  const cardGrid = document.getElementById('card-grid');
  data.results.forEach(function (pokemon) {
    fetch(pokemon.url) 
      .then(function (pokemonResponse) {
        return pokemonResponse.json();
      })
      .then(function (pokemonData) {
        const card = document.createElement('div');
        card.classList.add('col'); 
        const pokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
        const pokemonImage = pokemonData.sprites.front_default;
        card.innerHTML = `
            <div class="card h-200">
            <img src="${pokemonImage}" class="card-img-top" alt="${pokemonName}">
            <div class="card-body">
            <h5 class="card-title d-flex">${pokemonName}</h5>
              </div>
            </div>
              `;
        cardGrid.appendChild(card);
      })
      .catch(function (error) {
        console.error('Error en los detalles del Pokemon: ', error);
      });
  });
})
.catch(function (error) {
console.error('Error al obtener los Pokemones: ', error);
})
}
window.onload = fetchPokemon;