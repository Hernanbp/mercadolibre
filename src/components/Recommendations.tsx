import Card from "./Card"

const Recommendations = ({ amount }: any) => {
  return (
    <section className="recommendations">
      <div className="row-container">
        <div className="section-header">
          <h2>Ofertas</h2>
          <p>Ver todas</p>
        </div>
        <div className="products-display">
          <Card amount={amount} />
        </div>
      </div>
    </section>
  )
}

export default Recommendations
