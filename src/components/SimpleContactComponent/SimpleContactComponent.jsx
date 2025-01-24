import "./SimpleContactComponent.module.scss"
import EmailSender from "../../scripts/EmailSender.js";

export default function SimpleContactComponent() {
  async function sendEmail(event) {
    event.preventDefault();

    const form = document.getElementById("quoteForm");
    const formData = new FormData(form);

    const fullName = formData.get("fullName");
    const phoneNumber = formData.get("phoneNumber");
    const comment = formData.get("comment");

    const emailSender = new EmailSender();
    await emailSender
      .setSubject(`New Quote Request from ${fullName}`)
      .setText(
        `
        Full Name: ${fullName}
        Phone Number: ${phoneNumber}
        Comment: ${comment}
        Message: ${formData.get("message")}
      `,
      )
      .send();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quoteForm");
    if (!form) return;
    form.addEventListener("submit", sendEmail);
  });

  return <section id="simple_contact">
    <div className="form-container">
      <form id="quoteForm">
        <div className="column_group">
          <span>Full name</span>
          <input type="text" id="fullName" name="fullName" required/>
        </div>
        <div className="column_group">
          <span>Phone Number</span>
          <input type="tel" id="phoneNumber" name="phoneNumber" required/>
        </div>
        <div className="column_group">
          <span>Comment</span>
          <input type="text" id="comment" name="comment"/>
        </div>
        <button type="submit">Request A Quote</button>
      </form>
    </div>
  </section>

}