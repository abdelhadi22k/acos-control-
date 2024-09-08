import { Container } from "react-bootstrap";
import React, { useState } from "react";
import { domain } from "../utils/stn";

const ContactMe = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [err, setErr] = useState("");



  const sanitizeInput = (input) => {
    // نستخدم تعبيراً منتظماً لإزالة الرموز الخاصة
    return input.replace(/[#$<>&*(){}]/g, '');
  };
 
  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${domain}/api/message/addMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email, 
          phoneNumber,
          subject,
          message,
        }),
      });

      const contentType = response.headers.get("Content-Type");
      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (response.ok) {
        setSuccess("Your message has been sent");

        setTimeout(() => {
          setSuccess("");
        }, 3500);
      } else {
        setErr(data.message || data || "An error occurred, please try again");
        setTimeout(() => {
          setErr("");
        }, 3500);
      }
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contactMe" id="Contact">
      <Container>
        <h1 className="main_info_h1">- Contact Us</h1>
        <h5 className="main_info_h5">
          Let’s connect & collaborate. Our official <span>accounts</span> to
          connect with us.
        </h5>
        <p className="main_info_p">
          We will try to answer all your questions here.
        </p>
      </Container>
      <Container className="contactMeContainer">
        <div className="ContactInfo">
          <div className="infoHolder">
            <div className="infoBox">
              <div>
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/sjpyphsk.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "60px", height: "60px" }}
                ></lord-icon>
              </div>
              <h2>
                Our WhatsApp number
                <br />
                <span>+213 (774823948)</span>
              </h2>
            </div>

            <div className="infoBox">
              <div>
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/acydszgh.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "60px", height: "60px" }}
                ></lord-icon>
              </div>
              <h2>
                Email to contact us
                <br />
                <span>abdelhadikaba64@gmail.com</span>
              </h2>
            </div>

            <div className="infoBox">
              <div>
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/cjhlqtae.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "60px", height: "60px" }}
                ></lord-icon>
              </div>
              <h2>
                Location Algeria - Algeria
                <br />
                <span>(UTC+01:00)</span>
              </h2>
            </div>

            <div className="infoBox">
              <div>
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/amjaykqd.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "60px", height: "60px" }}
                ></lord-icon>
              </div>
              <h2>
                Official accounts
                <br />
                <span>
                  <a
                    target="blank"
                    href="https://www.instagram.com/acos.ag/?hl=ar"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    target="blank"
                    href="https://www.facebook.com/profile.php?id=100091746498169"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/a-cos-701331300/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="ContactForm">
        <form onSubmit={submitHandler}>
        <div>
          <input
            className="mainForm"
            required
            type="text"
            id="firstName"
            name="firstName"
            onChange={(e) => setFirstName(sanitizeInput(e.target.value))}  // تعقيم الإدخال
            placeholder="First Name"
          />
          <input 
            className="mainForm"
            required
            type="text"
            id="lastName"
            name="lastName"
            onChange={(e) => setLastName(sanitizeInput(e.target.value))}  // تعقيم الإدخال
            placeholder="Last Name"
          />
        </div>
      
        <div>
          <input
            className="mainForm"
            required
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(sanitizeInput(e.target.value))}  // تعقيم الإدخال
            placeholder="Email"
          />
          <input
            className="mainForm"
            required
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            onChange={(e) => setPhoneNumber(sanitizeInput(e.target.value))}  // تعقيم الإدخال
            placeholder="Phone Number"
          />
        </div>
      
        <div>
          <input
            className="mainForm1"
            required
            type="text"
            id="subject"
            name="subject"
            onChange={(e) => setSubject(sanitizeInput(e.target.value))}  // تعقيم الإدخال
            placeholder="Subject"
          />
        </div>
      
        <div>
          <textarea
            className="mainForm2"
            required
            id="message"
            name="message"
            onChange={(e) => setMessage(sanitizeInput(e.target.value))}  // تعقيم الإدخال
            placeholder="Message"
          />
        </div>
      
        {err && <span className="errorM">{err}</span>}
        <br />
        {success && <span className="successM">{success}</span>}
        <br />
        <button disabled={isSubmitting} className="mainBtn1" type="submit">
          {isSubmitting
            ? "Your message is being sent..."
            : "Send Your Message"}
        </button>
      </form>
      
        </div>
      </Container>
    </section>
  );
};

export default ContactMe;
