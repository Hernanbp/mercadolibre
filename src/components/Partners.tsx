import PartnersCard from "./PartnersCard"

const Partners = () => {
  const partners = [
    {
      image:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disney/hub-widget-disney-star/Widget_Multicontent_Latam_768-x-566px.jpg",
      badge:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/comboplus-square.jpg",
      title: "Sin cargo con el nivel 6",
      subtitle: "Disney+ y Star+",
      id: 1,
    },
    {
      image:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mla_@2x.webp",
      badge:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
      title: "Hasta 50% OFF",
      subtitle: "HBO MAX",
      id: 2,
    },
    {
      image:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widget-multip/paramount_widgetmulti_mobdsk_mla_@2x.jpg",
      badge:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png",
      title: "Hasta 50% OFF",
      subtitle: "Paramount+",
      id: 3,
    },
  ]

  return (
    <section className="partners">
      <div className="row-container">
        <div className="partners-title">
          <h2>Beneficios de Mercado Puntos</h2>
          <p>Ver todos los beneficios</p>
        </div>
        <div className="partners-body">
          <div className="partners-cards">
            {partners.map(({ image, badge, title, subtitle, id }: any) => (
              <PartnersCard
                key={id}
                image={image}
                badge={badge}
                title={title}
                subtitle={subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
