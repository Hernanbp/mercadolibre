import { useContext, useState } from "react"
import search from "../assets/search.svg"
import DataContext from "../context/DataContext"

const Search = () => {
  const [param, setParam] = useState("")

  const data = useContext(DataContext)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    data.getItem(param)
  }

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        value={param}
        onChange={(e) => setParam(e.target.value)}
        type="text"
        placeholder="Buscar productos, marcas y mas..."
      />
      <button type="submit">
        <img src={search} alt="search" />
      </button>
    </form>
  )
}

export default Search
