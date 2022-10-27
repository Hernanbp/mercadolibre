import DataContext from "../context/DataContext"
import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Listing = () => {
  const data = useContext(DataContext)

  const param = useParams()
  const { id } = param

  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  })

  const navigate = useNavigate()

  const itemDetails = (id: any) => {
    navigate(`/item/${id}`)
  }

  return (
    <div className="search-main">
      <div className="search-main-products">
        <aside className="search-sidebar">
          <div className="search-kw-container">
            <p className="result-keyword">{id}</p>
            <p className="result-length">
              {data?.data.length > 0 ? data.data.length : ""} resultados
            </p>
          </div>
          <section className="search-filters">
            <div className="shipping">
              <form className="filter-container">
                <button type="submit" className="filter-button">
                  <span>Llegan hoy</span>
                </button>
                <div className="switch-container">
                  <input type="checkbox" />
                </div>
              </form>
            </div>
            <div className="shipping">
              <form className="filter-container f-full">
                <button type="submit" className="filter-button">
                  <div className="filter-full">
                    <p className="full">
                      <span>FULL</span>
                      te ahorra envios
                    </p>
                    <p>Con tu carrito de compras</p>
                  </div>
                </button>
                <div className="switch-container">
                  <input type="checkbox" />
                </div>
              </form>
            </div>
            <div className="shipping">
              <form className="filter-container">
                <button type="submit" className="filter-button">
                  <span>Envio gratis</span>
                </button>
                <div className="switch-container">
                  <input type="checkbox" />
                </div>
              </form>
            </div>
            <div className="filter">
              <h4>Condición</h4>
              <p>Nuevo</p>
              <p>Usado</p>
              <p>Reacondicionado</p>
            </div>
            <div className="filter">
              <h4>Pago</h4>
              <p>Cuotas sin interés</p>
            </div>
            <div className="filter">
              <h4>Costo de envío</h4>
              <p>Gratis</p>
            </div>
          </section>
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
              <div
                onClick={() => itemDetails(item.id)}
                className="result-card"
                key={item.id}
              >
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
