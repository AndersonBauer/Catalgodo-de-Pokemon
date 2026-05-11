export default function SearchForm({ search, setSearch }) {
  return (
    <form className="mb-6">
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600"
      />
    </form>
  )
}