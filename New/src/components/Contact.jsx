import React from "react";
import "./Contact.css";
import meg_icon from "../assets/msg-icon.png";
import location_icon from "../assets/location-icon.png";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import white_arrow from "../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8506cfa1-ec2a-4f24-9922-7aea1c121b47");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={meg_icon} alt="Message Icon" />
        </h3>
        <p>
          Feel free to communicate with us, as we will be so happy to help you.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="Mail Icon" /> Mohamedgabel1@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="Phone Icon" />
            000023029300
          </li>
          <li>
            <img src={location_icon} alt="Location Icon" />
            Aden, Yemen
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            <img src={white_arrow} alt="Arrow Icon" />
            Submit
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
