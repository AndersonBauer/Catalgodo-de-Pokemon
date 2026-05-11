export default function PokemonDetails({ pokemon }) {
  if (!pokemon) return null

  return (
    <div className="bg-gray-800 p-6 rounded-xl mb-6">
      <h2 className="text-3xl font-bold capitalize mb-4">
        {pokemon.name}
      </h2>

      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-40"
      />

      <p className="mt-4">
        Altura: {pokemon.height}
      </p>

      <p>
        Peso: {pokemon.weight}
      </p>
    </div>
  )
}