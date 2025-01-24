import EmailSender from "../../scripts/EmailSender.js";
import "./ContactForm.module.scss"

export default function ContactForm() {
  async function sendEmail(event) {
    event.preventDefault();

    const form = document.getElementById("contact-form");
    const formData = new FormData(form);

    const full_name = formData.get("full_name");
    const phone_number = formData.get("phone_number");
    const service = formData.get("service");
    const time = formData.get("time");

    const emailSender = new EmailSender();
    await emailSender
      .setSubject(`New Quote Request from ${full_name}`)
      .setText(
        `
        Full Name: ${full_name}
        Phone Number: ${phone_number}
        Service: ${service}
        Time: ${time}
        Message: ${formData.get("message")}
      `,
      )
      .send();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", sendEmail);
  });

  return <div className="contact-container">
    <section>
      <h1>Contact us</h1>
      <h2>Request a quote</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <form className="form" id="contact-form">
        <div className="form-row">
          <div className="input-container">
            <label htmlFor="full_name">Full Name</label>
            <input type="text" name="full_name" required/>
          </div>
          <div className="input-container">
            <label htmlFor="phone_number">Phone Number</label>
            <input type="tel" name="phone_number" required/>
          </div>
        </div>

        <div className="form-row">
          <div className="dropdown-container">
            <label htmlFor="service">Select service</label>
            <select id="service" className="dropdown" name="service" required>
              <option value="" disabled selected></option>
              <option value="general_cleaning">General Cleaning</option>
              <option value="deep_cleaning">Deep Cleaning</option>
              <option value="move_in_out_cleaning"
              >Move-In/Move-Out Cleaning
              </option
              >
              <option value="carpet_cleaning">Carpet Cleaning</option>
              <option value="window_cleaning">Window Cleaning</option>
              <option value="kitchen_cleaning">Kitchen Cleaning</option>
              <option value="bathroom_cleaning">Bathroom Cleaning</option>
              <option value="laundry_services">Laundry Services</option>
              <option value="organization_services">Organization Services</option>
              <option value="custom_cleaning">Custom Cleaning</option>
            </select>
          </div>
          <div className="dropdown-container">
            <label htmlFor="time">Select time</label>
            <select id="time" className="dropdown" name="time" required>
              <option value="" disabled selected></option>
              <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
              <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
              <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
              <option value="weekend">Weekend (10:00 AM - 6:00 PM)</option>
            </select>
          </div>
        </div>

        <div className="message-box">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type your message..." name="message"
          ></textarea>
        </div>

        <div className="checkbox-row">
          <input type="checkbox" name="terms" id="terms" required/>
          <label htmlFor="terms">I accept the <a href="#">Terms</a></label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
}