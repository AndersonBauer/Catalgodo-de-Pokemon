export default function PokemonCard({ pokemon, onSelect }) {
  return (
    <div
      onClick={() => onSelect(pokemon)}
      className="bg-gray-800 rounded-xl p-4 cursor-pointer hover:scale-105 transition"
    >
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-32 h-32 mx-auto"
      />

      <h2 className="text-center capitalize text-xl font-bold mt-2">
        {pokemon.name}
      </h2>

      <div className="flex justify-center gap-2 mt-2">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className="bg-blue-500 px-2 py-1 rounded text-sm"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  )
}