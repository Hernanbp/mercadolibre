import { useEffect, useContext, useState } from "react"
import { useParams } from "react-router-dom"
import DataContext from "../../context/DataContext"

const Detail = () => {
  const [item, setItem] = useState<any>({})

  const data = useContext(DataContext)
  // console.log(data)

  const params = useParams()
  const { id } = params

  const getItemById = async (id: any) => {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
    const data = await response.json()
    // console.log(data)
    setItem(data)
  }

  const pic = item.pictures?.map((pic: any) => pic.url)
  console.log(pic)

  useEffect(() => {
    getItemById(id)
  }, [id])

  const filtrado: any = data.data.filter((item: any) => item.id === id)

  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  })

  return (
    <div className="detail-wrapper">
      <div className="detail-container">
        <section className="detail-top">
          <div className="detail-images">
            <div className="thumbnails">
              <ul>
                {pic?.map((pic: any) => (
                  <li>
                    <img src={pic} alt="" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="current-image">
              {/* set current image from api */}
              <img src={pic} alt="" />
            </div>
          </div>
          <div className="detail-heading">
            <p className="detail-heading-condition">
              {item.condition === "new" && "Nuevo "}{" "}
              {item.sold_quantity > 0
                ? ` / ${item.sold_quantity} vendidos`
                : null}
            </p>
            <h2 className="item-title">{item.title}</h2>
            <div className="item-rating"></div>
            <h2 className="item-price">
              {item.price && formatter.format(item.price)}
            </h2>
            <p className="item-installments">
              en {filtrado[0].installments.quantity}x{" "}
              {formatter.format(filtrado[0].installments.amount)}
            </p>
            <p className="item-paymentMethods">Ver los medios de pago</p>
          </div>
          <aside className="detail-actions">
            <div className="detail-actions-buy">
              <p className="arrive-free">LLega gratis</p>
              <p className="detail-shipp-adress">Enviar a Capital Federal</p>
              <div className="detail-actions-seller">
                <p>
                  Vendido por: <span> VENDEDOR</span>
                </p>
                <p>MercadoLíder | 7.586 ventas</p>
              </div>
              <h3 className="detail-stock">Stock disponible</h3>
              <p className="detail-quantity">
                Cantidad:
                <b style={{ fontWeight: 500, padding: "0 .3em" }}>1 unidad</b>
                <span>({item.available_quantity} disponibles)</span>
              </p>
              <div className="detail-actions-buttons">
                <button className="buynow">Comprar ahora</button>
                <button className="addtocart">Agregar al carrito</button>
              </div>
              <div className="benefits">
                <p>
                  Devolución gratis. {""}
                  <span>Tenés 30 días desde que lo recibís.</span>
                </p>
                <p>
                  Compra Protegida, {""}
                  <span>
                    recibí el producto que esperabas o te devolvemos tu dinero.
                  </span>
                </p>
                <p>
                  Mercado Puntos. {""}
                  <span>Sumás 2307 puntos.</span>
                </p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}

export default Detail
