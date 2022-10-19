import { useContext } from "react"
import Carousel from "../components/Carousel"
import Navbar from "../components/Navbar"
import DataContext from "../context/DataContext"

const Home = () => {
  const data = useContext(DataContext)

  return (
    <>
      <Navbar />
      <Carousel />

      {/* if data not empty then show */}
      {data.data.length > 0 && (
        <div style={{ display: "flex" }}>
          <h1>Paula los resultados:</h1>
          <img src="https://i.imgur.com/Vm4XkMi.png" alt="" />
        </div>
      )}
      {data.data.map((item: any) => (
        <div
          style={{
            background: "#fff",
            borderBottom: "1px solid grey",
            margin: ".5em 0",
          }}
          key={item.id}
        >
          <img src={item.thumbnail} alt={item.title} />
          <p>{item.title}</p>
          <h1>{item.price}</h1>
        </div>
      ))}
    </>
  )
}

export default Home
