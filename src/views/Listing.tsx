import DataContext from "../context/DataContext"
import { useContext } from "react"
import { useParams } from "react-router-dom"

const Listing = () => {
  const data = useContext(DataContext)

  const param = useParams()
  const { id } = param

  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  })

  return (
    <div className="search-main">
      <div className="search-main-products">
        <aside className="search-sidebar">
          <p className="result-keyword">{id}</p>
          <p className="result-length">
            {data?.data.length > 0 ? data.data.length : ""} resultados
          </p>
        </aside>
        <section className="search-results">
          {data.data.length > 0 && (
            <div className="search-options">
              <p>Ordenar por</p>
              <span>Más relevantes </span>
            </div>
          )}
          {data.data.length > 0 ? (
            data.data.map((item: any) => (
              <div className="result-card" key={item.id}>
                <div className="result-img">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="description">
                  <p>{item.title}</p>
                  <span>{formatter.format(item.price)}</span>
                  {item.installments.quantity > 0 ? (
                    <p className="installments">
                      Hasta {item.installments.quantity} cuotas sin interés
                    </p>
                  ) : null}
                  <span className="free-shipping">
                    {item.shipping.free_shipping && "Envio Gratis"}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </div>
    </div>
  )
}

export default Listing
