/* TODO: Capitalize first letter in name, email, phone, and msg across the application */

import React, { useState } from "react"; 
import { useNavigate } from "react-router";

export default function Create() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        msg: "",
    });

    const navigate = useNavigate();

    // These methods will update the state properties
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission
    async function onSubmit(e) {
        e.preventDefault(); 

        // When a post request is sent to the create url, we'll add a new record to the database
        const newPerson = { ...form };

        await fetch("http://localhost:5050/record", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({ name: "", email: "", phone: "", msg: "" });
        navigate("/");
    }

    // This following section will display the form that takes input from the user.
    return (

      <>
        <section className="contact-page">
          
          <div className="secondary-banner">
            <img src="/images/Contact/background.jpg" alt="" /> 
            <div className="paper-gradient"></div>
          </div>

          <div className="contact-section1">

            <div className="contact-form-section">
              <picture>
                <img className="contact-section1-background" src="/images/Contact/desktop-section.png" />
              </picture>

              <div className="contact-form padding-inline">
                <form className="ContactForm js-ContactForm" onSubmit={onSubmit} id="ContactForm">
                  <div className="form-title">
                    <h3>CONTACT US</h3>
                  </div>
                  <span className="required-field-text">* indicates required field</span>
                  <div>
                    <label htmlFor="Name">Name*</label>
                    <input
                      type="text"
                      id="Name"
                      value={form.Name}
                      onChange={(e) => updateForm({ Name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="Email">Email</label>
                    <input
                      type="text"
                      id="Email"
                      value={form.Email}
                      onChange={(e) => updateForm({ Email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="Phone">Phone*</label>
                    <input
                      type="text"
                      id="Phone"
                      value={form.Phone}
                      onChange={(e) => updateForm({ Phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="Msg">Message*</label>
                    <input
                      type="text"
                      id="Msg"
                      value={form.Msg }
                      onChange={(e) => updateForm({ Msg: e.target.value })}
                    />
                  </div>
                
                  <div className="button-container">
                    <input
                      type="submit"
                      value="Send"
                      className="submit schedule-apt-button"
                    />
                  </div>

{/* TODO: Uncomment this and see if it will still submit the form... if it does, delete the old "button-container" and use this one instead.

                  <div class="button-container">
                    <button class="submit schedule-apt-button" type="submit">
                      <img src="/images/Contact/btn-left.png" alt=""/> 
                      Send 
                      <img src="/images/Contact/btn-right.png" alt=""/>
                    </button>
                  </div> */}

                </form>	
              </div>
            </div>

            <div class="contact-info padding-inline"> 
              <div class="contact-hours-box">
                <h3>Our Hours</h3>
                <a class="address" href="https://goo.gl/maps/NdhzhcsqTSQry8QT8" target="_blank">1430 E Moreland Blvd, Waukesha, WI</a>
                <div class="phone-number active">
                  <div class="desktop-phone active"><img class="desktop-phone" src="/images/Home/phone-icon.png" alt="" border="0"/></div>
                  <p class="phone-number active">262.574.9400</p>
                </div>
                <div class="contact-hours">
                  <div class="weekdays"><span>Sunday:</span> <span>Monday:</span> <span>Tuesday:</span> <span>Wednesday:</span> <span>Thursday:</span> <span>Friday:</span> <span>Saturday:</span></div>
                  <div class="hours"><span>Closed</span> <span>12pm - 11pm</span> <span>12pm - 11pm</span> <span>12pm - 11pm</span> <span>12pm - 11pm</span> <span>12pm - 11pm</span> <span>9am - 9pm</span></div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <div class="map-container">
          <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.781697748084!2d-88.21021378426045!3d43.024981900842285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805a8f54cae141b%3A0x36d7f009ed58944e!2s1430%20E%20Moreland%20Blvd%2C%20Waukesha%2C%20WI%2053186!5e0!3m2!1sen!2sus!4v1678896879064!5m2!1sen!2sus" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="600" height="450"></iframe> 
        </div>
      </>

      );
}