import Layout from "../../layouts/Layout.jsx"
import GirlCleaningTable from "../../assets/images/girl-cleaning-table.jpeg";
import ManCleaningKitchen from "../../assets/images/man-kitchen-cleaning.jpeg"
import SimpleContactComponent from "../../components/SimpleContactComponent/SimpleContactComponent.jsx"
import Services from "../../components/Services/Services.jsx"
import AboutUs from "../../components/AboutUs/AboutUs.jsx"
import OurTeam from "../../components/OurTeam/OurTeam.jsx"
import ContactForm from "../../components/ContactForm/ContactForm.jsx"
import NewsletterComponent from "../../components/NewsletterComponent/NewsletterComponent.jsx"

export default function Index() {
  return <Layout>
    <main>
      <div className="containerOne">
        <h2 className="hedAbout">
          Let us take care of all your cleaning service needs.
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique. Duis
          cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
          commodo diam libero vitae erat.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Suspendisse varius enim in eros
          elementum tristique. Duis cursus, mi quis viverra ornare, eros
          dolor interdum nulla, ut commodo diam libero vitae erat.Lo
        </p>
        <div className="buttons">
          <button className="request_a_quote">Request a quote</button>
          <button className="learn-more">Learn more</button>
        </div>
      </div>

      <div className="containerTwo">
        <img
          src={ManCleaningKitchen}
          alt="Cleaning Man"
          className={"side_image"}
        />
      </div>
    </main>
    <SimpleContactComponent />
    <Services />
    <AboutUs />
    <OurTeam />
    <div className="contact-wrapper">
      <ContactForm />
      <div className="image-container">
        <img
          src={GirlCleaningTable}
          alt={"girl cleaning table"}
          className="side-image"
        />
      </div>
    </div>

    <section className="help-section">
      <div className="help-content">
        <h1>How we can help...</h1>
        <p>
          We offer a wide range of procedures to help you get the perfect
          smile.
        </p>
        <a href="#" className="request-link">Request a quote</a>
      </div>
      <div className="help-button">
        <a href="#" className="request-button">Request a quote</a>
      </div>
    </section>

    <NewsletterComponent />
  </Layout>
}