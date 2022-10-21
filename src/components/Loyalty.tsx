const Loyalty = () => {
  const benefits = [
    "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg",

    "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/starplus.svg",

    "https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png",
  ]

  return (
    <section className="loyalty">
      <div className="row-container">
        <div className="loyalty-buylevel">
          <div className="loyalty-header">
            <h2>Suscribite al nivel 6</h2>
            <div className="loyalty-price">
              <p>$ 1.439</p>
              <h3>
                $ 499
                <span> /mes</span>
              </h3>
            </div>
          </div>
          <div className="loyalty-body">
            <p className="loyalty-title">
              Conseguí los mejores beneficios en Mercado Libre
            </p>
            <div className="loyalty-benefits">
              <div className="loyalty-benefit">
                <div className="benefit-logo">
                  <img src={benefits[0]} alt="icon1" />
                </div>
                <p>Disney+ sin cargo</p>
              </div>
              <div className="loyalty-benefit">
                <div className="benefit-logo">
                  <img src={benefits[1]} alt="icon1" />
                </div>
                <p>Star+ sin cargo</p>
              </div>
              <div className="loyalty-benefit">
                <div className="benefit-logo">
                  <img src={benefits[2]} alt="icon1" />
                </div>
                <p>
                  Envíos gratis y rápidos desde $ 5.500 y 45% OFF en envíos de
                  menos de <br /> $ 5.500
                </p>
              </div>
            </div>
          </div>
          <div className="loyalty-action">
            <button>Suscribite</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Loyalty
