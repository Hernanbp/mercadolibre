interface pCard {
  image: string
  badge: string
  title: string
  subtitle: string
}

const PartnersCard = ({ image, badge, title, subtitle }: pCard) => {
  return (
    <div className="partner-card">
      <div className="partner-card-img">
        <img src={image} alt="img" />
        <div className="badge">
          <div className="badge-img">
            <img src={badge} alt="badge" />
          </div>
          <div className="titles">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnersCard
