import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane, FaSpinner } from 'react-icons/fa'; // Added FaPaperPlane and FaSpinner for button icons
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null); // State for success/error messages
  const [isSending, setIsSending] = useState(false); // State to track email sending status

  const sendEmail = async (e) => { // Made the function async
    e.preventDefault();
    setIsSending(true); // Set sending state to true

    const serviceId = 'service_1xyv672';
    const templateId = 'template_3ytu92x';
    const publicKey = '451MKPcC-ZjP2ZDRf';

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      console.log('Email successfully sent!');
      setMessageStatus({ type: 'success', text: 'Your message has been sent successfully! I will get back to you soon.' });
      form.current.reset();
    } catch (error) {
      console.error('Failed to send email:', error.text || error); // Log full error
      setMessageStatus({ type: 'error', text: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSending(false); // Reset sending state
      setTimeout(() => setMessageStatus(null), 5000); // Clear message after 5 seconds
    }
  };

  // Correct Google Maps embed URL for "Pattukkottai, Tamil Nadu, India"
  // You can generate this from Google Maps -> Share -> Embed a map
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15705.516769032738!2d79.31758655!3d10.42886765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0606411d79c6d3%3A0x629555c82662c5e5!2sPattukkottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"; // Replace with your actual embed URL

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact Me</h2>
        <div className="contact-content">
          {/* Left column: Contact Info and Map */}
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p className="subtext">Feel free to reach out for collaborations or just a friendly hello!</p>

            <div className="icons">
              <div className="row">
                <div className="icon" aria-label="Name icon"><FaUser /></div>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Rajarajeshwaran</div>
                </div>
              </div>

              <div className="row">
                <div className="icon" aria-label="Location icon"><FaMapMarkerAlt /></div>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Pattukkottai, Tamil Nadu, India</div>
                </div>
              </div>

              <div className="row">
                <div className="icon" aria-label="Email icon"><FaEnvelope /></div>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">
                    <a href="mailto:kannarajesh057@gmail.com" aria-label="Email Rajarajeshwaran">kannarajesh057@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="icon" aria-label="Phone icon"><FaPhone /></div>
                <div className="info">
                  <div className="head">Phone</div>
                  <div className="sub-title">
                    <a href="tel:+919025274332" aria-label="Call Rajarajeshwaran">+91 90252 74332</a>
                  </div>
                </div>
              </div>
            </div>

           <div className="map-embed">
          <div className="map-heading">Find Me Here</div>
          <iframe
            src={googleMapsEmbedUrl}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location of Pattukkottai, Tamil Nadu, India"
            aria-label="Google Maps showing the location of Pattukkottai, Tamil Nadu, India"
          ></iframe>
        </div>
          </div>

          {/* Right column: Form */}
          <div className="column right">
            <div className="text">Message Me</div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    aria-label="Your Name"
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    aria-label="Your Email"
                  />
                </div>
              </div>

              <div className="field">
                <input
                  type="text"
                  name="title"
                  placeholder="Subject"
                  required
                  aria-label="Subject"
                />
              </div>

              <div className="field textarea">
                <textarea
                  name="message"
                  rows="10"
                  placeholder="Your Message"
                  required
                  aria-label="Your Message"
                ></textarea>
              </div>

              <div className="button-area">
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSending} // Disable button while sending
                  aria-live="polite" // Announce changes to screen readers
                >
                  {isSending ? (
                    <>
                      <FaSpinner className="spinner" /> Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </div>

              {/* Message Status Display */}
              {messageStatus && (
                <div
                  className={`message-status ${messageStatus.type}`}
                  role="status" // Indicate this is a status message for accessibility
                  aria-live="assertive" // Announce immediately to screen readers
                >
                  {messageStatus.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;