import Search from "./Search"
import ad from "../assets/ad1.png"
import location from "../assets/location.svg"
import cart from "../assets/Shopping-cart.svg"

const Navbar = () => {
  const logo =
    "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__large_plus.png"

  const mobile =
    "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__small.png"

  return (
    <header className="nav-header ">
      <div className="nav-bounds">
        <div className="nav-top">
          <a className="logo" href="/">
            <img className="logo-dsk" src={logo} alt="logo" />
          </a>
          <a className="logo" href="/">
            <img className="mobile-logo" src={mobile} alt="logo" />
          </a>
          <Search />
          <a className="ad" href="/">
            <img src={ad} alt="ad" />
          </a>
        </div>
        <div className="nav-bottom">
          <div className="nav-adress">
            <span className="nav-icon">
              <img src={location} alt="location" />
            </span>
            <div className="adress">
              <p>Enviar a</p>
              <p>Capital Federal</p>
            </div>
          </div>
          <div className="nav-links">
            <ul>
              <li>Categorias</li>
              <li>Ofertas</li>
              <li>Historial</li>
              <li>Supermercado</li>
              <li>Moda</li>
              <li>Vender</li>
              <li>Ayuda</li>
            </ul>
          </div>
          <div className="nav-user">
            <ul>
              <li>Crea tu cuenta</li>
              <li>Ingresa</li>
              <li>Mis compras</li>
              <li>
                <img src={cart} alt="cart" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
