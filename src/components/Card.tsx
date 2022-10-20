import { useEffect, useState } from "react"

const Card = () => {
  const [data, setData] = useState([] as any[])

  const offer = async () => {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=celular&limit=5`
    )
    const data = await response.json()
    // console.log("seteando data")
    // console.log(data)
    setData(data.results)
  }

  useEffect(() => {
    offer()
  }, [])

  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  })

  console.log(data[0])

  const content = (
    <>
      {data?.map(({ id, price, thumbnail, title, shipping }) => (
        <div key={id} className="card">
          <div className="card-img">
            <img src={thumbnail} alt="" />
          </div>
          <div className="card-content">
            <div className="card-price">
              {formatter.format(price)}
              <div className="price-discount">20% OFF</div>
            </div>
            <p className="shipping">
              {shipping.free_shipping ? "Envio Gratis" : null}
            </p>
            <div className="card-title">{title}</div>
          </div>
          <div className="card-bookmark"></div>
        </div>
      ))}
    </>
  )

  return content
}

export default Card
