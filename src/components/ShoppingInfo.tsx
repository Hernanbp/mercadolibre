const ShoppingInfo = () => {
  return (
    <section className="shopping-info">
      <div className="container">
        <div className="info-slide">
          <div className="img-container">
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg"
              alt=""
            />
          </div>
          <h2>Elegí cómo pagar</h2>
          <p className="info-body">
            Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin
            tarjeta con Mercado Crédito.
          </p>
          <p className="info-link">Cómo pagar tus compras</p>
        </div>
        <span className="separator"></span>
        <div className="info-slide">
          <div className="img-container">
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg"
              alt="shipping"
            />
          </div>
          <h2>Envío gratis desde $ 5.500</h2>
          <p className="info-body">
            Solo por estar registrado en Mercado Libre tenés envíos gratis en
            miles de productos. Es un beneficio de Mercado Puntos.
          </p>
          <p className="info-link">Conocé más sobre este beneficio</p>
        </div>
        <span className="separator"></span>
        <div className="info-slide">
          <div className="img-container">
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg"
              alt="protected"
            />
          </div>
          <h2>Seguridad, de principio a fin</h2>
          <p className="info-body">
            ¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no
            puedas hacer, porque estás siempre protegido.
          </p>
          <p className="info-link">Cómo te protegemos</p>
        </div>
      </div>
    </section>
  )
}

export default ShoppingInfo
