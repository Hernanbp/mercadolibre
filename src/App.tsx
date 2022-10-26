import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { DataProvider } from "./context/DataContext"
import Home from "./views/Home"
import Listing from "./views/Listing"
import ProductDetail from "./views/ProductDetail"

const App = () => {
  return (
    <DataProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Listing />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </DataProvider>
  )
}

export default App
