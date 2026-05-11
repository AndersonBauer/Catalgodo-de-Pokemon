const BASE_URL = 'https://pokeapi.co/api/v2'

export async function fetchPokemons() {
  const response = await fetch(`${BASE_URL}/pokemon?limit=50`)
  const data = await response.json()

  return data.results
}

export async function fetchPokemonDetails(url) {
  const response = await fetch(url)
  return response.json()
}