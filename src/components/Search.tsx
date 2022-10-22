import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import search from "../assets/search.svg"
import DataContext from "../context/DataContext"

const Search = () => {
  const [param, setParam] = useState("")
  const navigate = useNavigate()
  const data = useContext(DataContext)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    data.getItem(param)
    navigate(`/${param}`)
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
