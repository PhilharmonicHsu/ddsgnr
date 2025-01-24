import './AboutUs.module.css'
import ManCleaningKitchen from "../../assets/images/man-kitchen-cleaning.jpeg"

export default function AboutUs() {
  return <main>
    <div className="containerOne">
      <p className="about">About Us</p>
      <h2 className="hedAbout">
        Let us take care of all your cleaning service needs.
      </h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis
        viverra ornare, eros dolor interdum nulla, ut commodo diam libero
        vitae erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
        quis viverra ornare, eros dolor interdum nulla, ut commodo diam
        libero vitae erat.Lo
      </p>

      <button>Request a quote</button>
    </div>

    <div className="containerTwo">
      <img
        src={ManCleaningKitchen}
        alt="Cleaning Man"
        className="side_image"
      />
    </div>
  </main>
}