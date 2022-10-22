const Discovery = () => {
  return (
    <section className="discovery">
      <div className="container-row">
        <div className="discovery-header">Descubrí</div>
        <div className="discovery-body">
          <div className="advertising">
            <div className="text">
              <p>REFRIGERACIÓN</p>
              <span>HASTA 20% OFF</span>
              <span>Y 12X SIN INTERÉS</span>
              <button>Ver más</button>
            </div>
            <div className="adv-img">
              <img
                src="https://http2.mlstatic.com/D_NQ_672657-MLA51966548817_102022-C.webp"
                alt="adv"
              />
            </div>
          </div>
          <div className="advertising">
            <div className="text">
              <p>¡CALENTÁ MOTORES!</p>
              <span>HASTA 40% OFF</span>
              <span>Y 12X SIN INTERÉS</span>
              <button>Ver más</button>
            </div>
            <div className="adv-img">
              <img
                src="https://http2.mlstatic.com/D_NQ_919109-MLA51163280375_082022-C.webp"
                alt="adv"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discovery
