import { useContext } from "react"
import Navbar from "../components/Navbar"
import DataContext from "../context/DataContext"

const Home = () => {
  const data = useContext(DataContext)

  return (
    <>
      <Navbar />
      <h1>resultados</h1>
      {data.data.map((item: any) => (
        <div key={item.id}>
          <img src={item.thumbnail} alt={item.title} />
          <p>{item.title}</p>
          <h1>{item.price}</h1>
        </div>
      ))}
    </>
  )
}

export default Home
