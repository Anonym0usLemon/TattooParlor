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
          <section class="contact-page">	

          <div class="secondary-banner">
            <img src="/images/Contact/background.jpg" alt=""/>
            <div class="paper-gradient"></div>
          </div>

            <div class="contact-section1"/>

              <div class="contact-form-section">
                <picture>
                  <img class="contact-section1-background" src="/images/Contact/desktop-section.png" />
                </picture>

                <div class="contact-form padding-inline"> 
                    <form className="ContactForm" onSubmit={onSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={form.name}
                          onChange={(e) => updateForm({ name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          value={form.email}
                          onChange={(e) => updateForm({ email: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          value={form.phone}
                          onChange={(e) => updateForm({ phone: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="msg">Message</label>
                        <input
                          type="text"
                          className="form-control"
                          id="msg"
                          value={form.msg }
                          onChange={(e) => updateForm({ msg: e.target.value })}
                        />
                      </div>
                    
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Create person"
                          className="btn btn-primary"
                        />
                      </div>
                    </form>					
                  </div>
                </div>
                
                <div class="contact-info padding-inline">			
                  <div class="contact-hours-box">
                    <h3>Our Hours</h3>
                    <a class="address" href="https://goo.gl/maps/NdhzhcsqTSQry8QT8" target="_blank">1430 E Moreland Blvd, Waukesha, WI</a>
                    <div class="phone-number active">
                      <div class="desktop-phone active"><img class="desktop-phone" src="/images/Home/phone-icon.png" border="0" alt="" /></div>
                      <p class="phone-number active">262.574.9400</p>
                    </div>
                    <div class="contact-hours">
                      <div class="weekdays"><span>Sunday:</span> <span>Monday:</span> <span>Tuesday:</span> <span>Wednesday:</span> <span>Thursday:</span> <span>Friday:</span> <span>Saturday:</span></div>
                      <div class="hours"><span>Closed</span> <span>12pm - 11pm</span> <span>12pm - 11pm</span> <span>12pm - 11pm</span> <span>12pm - 11pm</span> <span>12pm - 11pm</span> <span>9am - 9pm</span></div>
                    </div>
                  </div>
                </div>
            </section>
            <div class="map-container">
              {/* <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.781697748084!2d-88.21021378426045!3d43.024981900842285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805a8f54cae141b%3A0x36d7f009ed58944e!2s1430%20E%20Moreland%20Blvd%2C%20Waukesha%2C%20WI%2053186!5e0!3m2!1sen!2sus!4v1678896879064!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>			 */}
            </div>
        </>
      );
}