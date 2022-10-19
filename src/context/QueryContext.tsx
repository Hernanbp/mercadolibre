import { createContext, useState, useEffect } from "react"

const QueryContext = createContext("")

interface Props {
  children?: React.ReactNode
}

export const DataProvider = ({ children }: Props) => {
  const [query, setQuery] = useState("")

  return <QueryContext.Provider value={query}>{children}</QueryContext.Provider>
}

export default QueryContext
