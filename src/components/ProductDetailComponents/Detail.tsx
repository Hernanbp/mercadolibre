const Detail = () => {
  return (
    <div className="detail-wrapper">
      <div className="detail-container">
        <section className="detail-top">
          <div className="detail-images">a</div>
          <div className="detail-heading">
            <p className="detail-heading-condition">Nuevo / 118 vendidos</p>
            <h2>Airpods Pro Max</h2>
            <div className="rating"></div>
            <h2>$ 15.115</h2>
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
              <p className="detail-quantity">Cantidad: 1 unidad</p>
              <div className="detail-actions-buttons">
                <button className="buynow">Comprar ahora</button>
                <button className="addtocart">Agregar al carrito</button>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}

export default Detail
