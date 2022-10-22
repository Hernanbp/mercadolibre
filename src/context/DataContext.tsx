import { createContext, useState, useEffect } from "react"

const DataContext = createContext({
  data: [],
  getItem: (param: string) => {},
})

interface Props {
  children?: React.ReactNode
}

export const DataProvider = ({ children }: Props) => {
  const [data, setData] = useState([])

  const getItem = async (query: String) => {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    )
    const data = await response.json()
    setData(data.results)
  }

  useEffect(() => {
    getItem("")
  }, [])

  return (
    <DataContext.Provider value={{ data, getItem }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
