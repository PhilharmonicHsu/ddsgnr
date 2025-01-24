import "./Contact.module.css"
import Layout from "../../layouts/Layout.jsx"
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import GirlCleaningTable from "../../assets/images/girl-cleaning-table.jpeg";

export default function Contact() {
  return <Layout>
    <div className="contact-wrapper">
      <ContactForm />
      <div className="image-container">
        <img
          src={GirlCleaningTable}
          alt="girl cleaning table"
          className="side-image"
        />
      </div>
    </div>

    <section className="help-section">
      <div className="help-content">
        <h1>How we can help...</h1>
        <p>
          We offer a wide range of procedures to help you get the perfect smile.
        </p>
        <a href="#" className="request-link">Request a quote</a>
      </div>
      <div className="help-button">
        <a href="#" className="request-button">Request a quote</a>
      </div>
    </section>
  </Layout>
}