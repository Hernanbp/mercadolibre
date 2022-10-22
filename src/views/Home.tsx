import Carousel from "../components/Carousel"
import Discovery from "../components/Discovery"
import Loyalty from "../components/Loyalty"
import Partners from "../components/Partners"
import Payment from "../components/Payment"
import Recommendations from "../components/Recommendations"
import Regret from "../components/Regret"
import ShoppingInfo from "../components/ShoppingInfo"

const Home = () => {
  return (
    <>
      <Carousel />
      <Payment />
      <Recommendations amount={8} />
      <Recommendations amount={5} />
      <Loyalty />
      <Partners />
      <Discovery />
      <Recommendations amount={7} />
      <ShoppingInfo />
      <Regret />
    </>
  )
}

export default Home
