import "./Banner.module.scss"
import facebook from "../../assets/icons/Facebook.png"
import twitter from "../../assets/icons/Twitter.png"
import linkedin from "../../assets/icons/Linkedin.png"
import instagram from "../../assets/icons/Instagram.png"

export default function Banner() {
  return <section id="banner">
    <div className="container">
      <div className="informations">
        <div><strong>For emergency cases: 567 123 45 67</strong></div>
        <div>Location: 121 Wallstreet Street, NY , USA</div>
        <div>Open hours: 9.00-24.00 Mon-Sat</div>
        <div>Email:info@ddsgnr.com</div>
      </div>
      <div className="contacts">
        <img src={facebook} alt="Facebook Logo" width={24} height={24}/>
        <img src={instagram} alt="Instagram Logo" width={24} height={24}/>
        <img src={linkedin} alt="Linked In Logo" width={24} height={24}/>
        <img src={twitter} alt="Twitter Logo" width={24} height={24}/>
      </div>
    </div>
  </section>
}