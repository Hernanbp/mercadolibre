import { useEffect, useContext, useState } from "react"
import { useParams } from "react-router-dom"
import DataContext from "../../context/DataContext"
import ReactImageMagnify from "react-image-magnify"

const Detail = () => {
  const [item, setItem] = useState<any>({})

  const data = useContext(DataContext)

  const params = useParams()
  const { id } = params

  const getItemById = async (id: any) => {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
    const data = await response.json()
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
                {pic?.map((pic: any, index: any) => (
                  <li key={index}>
                    <img src={pic} alt="" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="current-image">
              {/* set current image from api */}
              <ReactImageMagnify
                lensStyle={{
                  background: "#37373751",
                  width: "100px",
                  height: "500px",
                }}
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: pic,
                  },
                  largeImage: {
                    src: pic,
                    width: 1200,
                    height: 1800,
                  },
                  enlargedImageContainerDimensions: {
                    width: "180%",
                    height: "150%",
                  },

                  shouldUsePositiveSpaceLens: true,
                }}
              />
            </div>
          </div>
          <div className="detail-heading">
            <p className="detail-heading-condition">
              {item.condition === "new" && "Nuevo "}{" "}
              {item.sold_quantity > 0
                ? `  |  ${item.sold_quantity} vendidos`
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

            <div className="detail-actions-buy">
              <p className="detail-actions-title">
                Información sobre el vendedor
              </p>
              <div className="detail-actions-seller">
                <p className="seller-category">
                  <span>
                    <img
                      src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg"
                      alt=""
                    />
                  </span>
                  MercadoLíder Platinum
                </p>
                <p className="seller-best">¡Es uno de los mejores del sitio!</p>
              </div>
              <div className="detail-bars">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <div className="seller-stats">
                <div className="total-sales">
                  <h2>1923</h2>
                  <p>Ventas en los últimos 60 días</p>
                </div>
                <div className="atenttion">
                  <img
                    src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg"
                    alt=""
                  />
                  <p>Brinda buena atención</p>
                </div>
                <div className="delivery-time">
                  <img
                    src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg"
                    alt=""
                  />
                  <p>
                    Despacha sus productos a <br /> tiempo
                  </p>
                </div>
              </div>
              <p className="seller-more">Ver más datos de este vendedor</p>
            </div>

            <div className="detail-actions-buy">
              <p className="detail-payment-title">Medios de pago</p>
              <div className="payment-mp">
                <p className="detail-payment-subtitle">
                  Hasta 12 cuotas sin tarjeta
                </p>
                <img
                  src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg"
                  alt=""
                />
              </div>
              <div className="payment-credit">
                <p className="detail-payment-subtitle">Tarjetas de crédito</p>
                <p className="detail-body">
                  ¡Cuotas sin interés con bancos <br /> seleccionados!
                </p>
                <div className="payment-credit-cards">
                  <ul className="payment-credit-cards-list">
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="payment-credit">
                <p className="detail-payment-subtitle">Tarjetas de débito</p>
                <div className="payment-credit-cards">
                  <ul
                    style={{ flexWrap: "wrap", maxWidth: "250px" }}
                    className="payment-credit-cards-list"
                  >
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="payment-credit">
                <p className="detail-payment-subtitle">Efectivo</p>
                <div className="payment-credit-cards">
                  <ul className="payment-credit-cards-list">
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <p className="seller-more">Conocé otros medios de pago</p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}

export default Detail
