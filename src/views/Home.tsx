import { useContext } from "react"
import Carousel from "../components/Carousel"
import Navbar from "../components/Navbar"
import Payment from "../components/Payment"
import Recommendations from "../components/Recommendations"
import DataContext from "../context/DataContext"

const Home = () => {
  const data = useContext(DataContext)

  return (
    <>
      <Navbar />
      <Carousel />
      <Payment />
      <Recommendations />
      <Recommendations />
      <Recommendations />

      {/* if data not empty then show */}
      {data.data.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>resultados:</h1>
        </div>
      )}
      {data.data.map((item: any) => (
        <div
          style={{
            display: "flex",
            background: "#fff",
            borderBottom: "1px solid #f1f1f1",
            boxShadow: "0 5px 10px #ccc",
            margin: "0 auto",
            padding: "1em",
            maxWidth: "1200px",
            marginBottom: ".5em",
          }}
          key={item.id}
        >
          <img src={item.thumbnail} alt={item.title} />
          <div
            style={{
              borderLeft: "1px solid #f1f1f1",
              paddingLeft: "1em",
            }}
            className="description"
          >
            <p>{item.title}</p>
            <h1>{item.price}</h1>
          </div>
        </div>
      ))}
    </>
  )
}

export default Home
