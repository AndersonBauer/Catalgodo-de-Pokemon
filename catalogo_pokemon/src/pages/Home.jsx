import { useEffect, useState } from 'react'

import { useFetch } from '../hooks/useFetch'
import { fetchPokemons, fetchPokemonDetails } from '../services/api'

import PokemonList from '../components/PokemonList'
import SearchForm from '../components/SearchForm'
import PokemonDetails from '../components/PokemonDetails'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Home() {
  const { data, loading } = useFetch(fetchPokemons)

  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    async function loadDetails() {
      const pokemonData = await Promise.all(
        data.map(async (pokemon) => {
          const details = await fetchPokemonDetails(pokemon.url)

          return {
            name: details.name,
            image: details.sprites.front_default,
            types: details.types.map((t) => t.type.name),
            height: details.height,
            weight: details.weight,
          }
        })
      )

      setPokemons(pokemonData)
    }

    if (data.length > 0) {
      loadDetails()
    }
  }, [data])

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Catálogo Pokémon
      </h1>

      <SearchForm
        search={search}
        setSearch={setSearch}
      />

      <PokemonDetails pokemon={selectedPokemon} />

    {filteredPokemons.length === 0 && (
        <p className="text-center font-bold">
            Nenhum Pokémon encontrado.
        </p>
    )}

      <PokemonList
        pokemons={filteredPokemons}
        onSelect={setSelectedPokemon}
      />
    </div>
  )
}