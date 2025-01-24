import "./Header.module.scss"
import ddsgnr from "../../assets/logos/ddsgnr.png"
import {useState} from "react";

export default function Header() {
  const [isClickHamburger, setIsClickHamburger] = useState(false);

  function handleClickRequestQuate() {
    window.location.href = "/contact";
  }

  function handleClickHamburger() {
    setIsClickHamburger(!isClickHamburger);
  }

  return <header>
    <nav>
      <img src={ddsgnr} alt="Logo" width={130.6}/>
      <div className="desktop_links">
        <a href="/">Home</a>
        <a href="/about-us">About</a>
        <a href="/services">Services</a>
        <a href="/team">Teams</a>
        <a href="/contact">Contact</a>
        <button onClick={handleClickRequestQuate} className="request_quote">Request A Quote</button>
      </div>
      <div onClick={handleClickHamburger}
           className={ isClickHamburger ? "hamburger_menu" : "hamburger_menu active" }
           id="hamburger"
      >
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
    </nav>
    <div className={ isClickHamburger ? "dropdown_menu" : "dropdown_menu active" }
         id="dropdown"
    >
      <div className="links">
        <a href="/">Home</a>
        <a href="/about-us">About</a>
        <a href="/services">Services</a>
        <a href="/team">Teams</a>
        <a href="/contact">Contact</a>
        <button onClick={handleClickRequestQuate} className="request_quote">Request A Quote</button>
      </div>
      <div className="informations">
        <div><strong>For emergency cases: 567 123 45 67</strong></div>
        <div>Location: 121 Wallstreet Street, NY , USA</div>
        <div>Open hours: 9.00-24.00 Mon-Sat</div>
        <div>Email:info@ddsgnr.com</div>
      </div>
    </div>
  </header>
}