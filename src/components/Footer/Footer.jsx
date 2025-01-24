import "./Footer.css"
import ddsgnr from "../../assets/logos/ddsgnr.png"
import facebook from "../../assets/icons/Facebook.png"
import twitter from "../../assets/icons/Twitter.png"
import linkedin from "../../assets/icons/Linkedin.png"
import instagram from "../../assets/icons/Instagram.png"
import {useEffect, useState} from "react";

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);



  return <>
    {windowWidth >= 1024 &&
      <footer className="desktop_footer">
        <div className="footer_container">
          <div className="subscribe">
            <img src={ddsgnr} alt="Astro Logo" width={120} height={40}/>
            <p>Join our newsletter to stay up to date on features and releases.</p>
            <div className="form">
              <form action="/subscribe">
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email address"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
            By subscribing you agree to with our Privacy Policy and provide consent to
            receive updates from our company.
          </div>
          <div className="links">
            <ul className="list">
              <p className="about">About us</p>
              <li className="list-item"><a href="/">Home</a></li>
              <li className="list-item"><a href="/about-us">About</a></li>
              <li className="list-item"><a href="/services">Services</a></li>
              <li className="list-item"><a href="/team">Teams</a></li>
              <li className="list-item"><a href="/contact">Contact</a></li>
            </ul>

            <ul className="list">
              <p className="services">Services</p>
              <li className="list-item"><a href="windows">Windows</a></li>
              <li className="list-item"><a href="residential">Residential</a></li>
              <li className="list-item"><a href="commercial">Commercial</a></li>
              <li className="list-item"><a href="apartment">Apartment</a></li>
              <li className="list-item"><a href="residential">Residential</a></li>
            </ul>

            <ul className="list">
              <p className="follow">Follow Us</p>
              <li className="list-item">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="Facebook icon" width={24} height={24}/>
                  Facebook
                </a>
              </li>

              <li className="list-item">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Instagram" width={24} height={24}/>
                  Instagram
                </a>
              </li>
              <li className="list-item">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="Twitter" width={24} height={24}/>
                  Twitter
                </a>
              </li>
              <li className="list-item">
                <a
                  href="https://www.LinkedIn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" width={24} height={24}/>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-info">
          <span className="copy_right">2023 Ddsgnr. All rights reserved.</span>
          <nav>
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms-of-service">Terms of Service</a>
            <a href="#cookies-settings">Cookies Settings</a>
          </nav>
        </div>
      </footer>}

    {windowWidth < 1024 && <footer className="mobile_footer">
      <div className="footer_container">
        <div className="footer-logo">
          <img src={ddsgnr} alt="Astro Logo" className="logo"/>
        </div>

        <nav className="footer-nav">
          <a href="/about-us">About</a>
          <a href="/project">Project</a>
          <a href="/contact">Contact</a>
          <a href="/services">Services</a>
        </nav>
        <div className="footer-social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook icon" width={24} height={24}/>
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" width={24} height={24}/>
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" width={24} height={24}/>
          </a>

          <a
            href="https://www.LinkedIn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" width={24} height={24}/>
          </a>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-info">
          <p className="copy_right">2023 Ddsgnr. All rights reserved.</p>
          <nav>
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms-of-service">Terms of Service</a>
            <a href="#cookies-settings">Cookies Settings</a>
          </nav>
        </div>
      </div>
    </footer>}
  </>
}