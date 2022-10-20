const Payment = () => {
  const credito =
    "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg"

  const debito =
    "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg"
  const cuotas =
    "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg"
  const efectivo =
    "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg"
  const payment =
    "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg"

  const content = (
    <section className="payment-data">
      <div className="container">
        <div className="payment-data-container">
          <div className="payment-data-group normal">
            <div className="payment-data-section">
              <img src={credito} alt="ico" />
              <div className="payment-data-titles">
                <div className="payment-data-title">Tarjeta de crédito</div>
                <div className="payment-data-subtitle">
                  Ver promociones bancarias
                </div>
              </div>
            </div>
            <div className="payment-data-section">
              <img src={debito} alt="ico" />
              <div className="payment-data-titles">
                <div className="payment-data-title">Tarjeta de débito</div>
                <div className="payment-data-subtitle">Ver más</div>
              </div>
            </div>
            <div className="payment-data-section">
              <img src={cuotas} alt="ico" />
              <div className="payment-data-titles">
                <div className="payment-data-title">Cuotas sin tarjeta</div>
                <div className="payment-data-subtitle">
                  Conocé Mercado Crédito
                </div>
              </div>
            </div>
            <div className="payment-data-section">
              <img src={efectivo} alt="ico" />
              <div className="payment-data-titles">
                <div className="payment-data-title">Efectivo</div>
                <div className="payment-data-subtitle">Ver más</div>
              </div>
            </div>
          </div>

          {/* + button */}
          <div className="payment-data-group trailing">
            <img
              style={{ transform: "scale(0.9)" }}
              src={payment}
              alt="+icon"
            />
          </div>
        </div>
      </div>
    </section>
  )

  return content
}

export default Payment
