import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ContactSection.css';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-10% 0px', once: false });

  function sendEmail(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;
    window.location.href = `mailto:megh.p.professional@gmail.com?subject=Contact&body=${encodeURIComponent(
      message,
    )}`;
  }

  return (
    <section ref={ref} className="contact-me">
      <motion.div
        className="container"
        initial={{ scale: 0.9 }}
        animate={isInView ? { scale: 1 } : { scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          data-text="Contact Me"
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h1>

        <motion.p
          className="contact-text"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Have a project in mind? Let's collaborate! Feel free to reach out.
        </motion.p>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p>
            📧 Email:{' '}
            <a href="mailto:harshitrajput.professional@gmail.com" id='email'>
            harshitrajput.professional@gmail.com
            </a>
          </p>
          <br />
          <p>
            📞 Phone: <a href="tel:+1234567890">+91 9925011915</a>
          </p>
          <br />
          <p>
            🔗{' '}
            <a
              href="https://github.com/HARSHIT5114"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{' '}
            |
            <a
              href="https://www.linkedin.com/in/harshit-rajput-268132250/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}LinkedIn
            </a>
          </p>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <motion.textarea
            id="message"
            placeholder="Type your message here..."
            required
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            type="submit"
            className="btn-contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
