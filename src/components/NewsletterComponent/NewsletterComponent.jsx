import EmailSender from "../../scripts/EmailSender.js";
import "./NewsletterComponent.module.scss"

export default function NewsletterComponent() {
  async function sendEmail(event) {
    event.preventDefault();

    const form = document.getElementById("newsletterForm");
    const formData = new FormData(form);

    const email = formData.get("email");

    const emailSender = new EmailSender();
    await emailSender
      .setTo(email)
      .setSubject("New Subscriber")
      .setText(`New subscriber with email: ${email}`)
      .send();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("newsletterForm");
    if (!form) return;
    form.addEventListener("submit", sendEmail);
  });

  return <div className="newsletter-container">
    <h1>Subscribe to our newsletter</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
      enim in eros elementum tristique.
    </p>
    <form id="newsletterForm">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
    <p className="terms">
      By clicking Sign Up you're confirming that you agree with our Terms and
      Conditions.
    </p>
  </div>;
}