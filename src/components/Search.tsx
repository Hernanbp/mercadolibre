import search from "../assets/search.svg"

const Search = () => {
  return (
    <form className="search">
      <input type="text" placeholder="Buscar productos, marcas y mas..." />
      <button type="submit">
        <img src={search} alt="search" />
      </button>
    </form>
  )
}

export default Search
