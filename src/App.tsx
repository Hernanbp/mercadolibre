import { Routes, Route } from "react-router-dom"
import { DataProvider } from "./context/DataContext"
import Home from "./views/Home"

const App = () => {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </DataProvider>
  )
}

export default App
