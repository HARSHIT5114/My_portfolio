import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  function sendEmail(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;
    window.location.href = `mailto:megh.p.professional@gmail.com?subject=Contact&body=${encodeURIComponent(
      message,
    )}`;
  }

  return (
    <section class="contact-me">
      <div class="container">
        <h1 data-text="Contact Me">Contact Me</h1>
        <p class="contact-text">
          Have a project in mind? Let's collaborate! Feel free to reach out.
        </p>

        <div class="contact-info">
          <p>
            📧 Email:{' '}
            <a href="mailto:megh.p.professional@gmail.com">
              megh.p.professional@gmail.com
            </a>
          </p>
          <p>
            📞 Phone: <a href="tel:+1234567890">+91 9824066186</a>
          </p>
          <p>
            🔗{' '}
            <a href="https://github.com/Meghhhhh" target="_blank">
              GitHub
            </a>{' '}
            |{' '}
            <a
              href="https://www.linkedin.com/in/megh-prajapati-ab13a82b3/"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <form class="contact-form" onSubmit={sendEmail}>
          <textarea
            id="message"
            placeholder="Type your message here..."
            required
          ></textarea>
          <button type="submit" class="btn-contact">
            🚀 Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
