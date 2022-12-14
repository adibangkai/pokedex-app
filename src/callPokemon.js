function createPokemonObject(results) {
  results.forEach(async (pokemon) => {
    const res = await fetch(pokemon.url);
    const data = await res.json();
    setPokemonList((currentList) => [...currentList, data]);
    await allPokemons.sort((a, b) => a.id - b.id);
  });
}
createPokemonObject(data.results);
