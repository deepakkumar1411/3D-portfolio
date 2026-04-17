import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://github.com/deepakkumar1411"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                GitHub - deepakkumar1411
              </a>
            </p>
            <p>
              <a
                href="https://linkedin.com/in/deepak-kumar1411"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn - deepak-kumar1411
              </a>
            </p>
            <p>
              <a href="mailto:deepakkumarbks44@gmail.com" data-cursor="disable">
                deepakkumarbks44@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/deepakkumar1411"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/deepak-kumar1411"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:deepakkumarbks44@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Gmail <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Deepak Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
