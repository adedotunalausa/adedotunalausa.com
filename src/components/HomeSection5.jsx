import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";

const HomeSection5 = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: "ease-out-cubic"
        });
    }, [])

    return (
        <div>
            <section className="fifth-section">
                <div className="fifth-section-container">
                    <div className="contact1">
                        <h3 data-aos="fade-up">Have ideas flooding your mind and would love to see them come alive?</h3>
                        <p data-aos="fade-up">Let's discuss and create amazing solutions to problems.</p>
                        <a className="butn" data-aos="fade-up" href="mailto:adedotunalausa@gmail.com">Send an email</a>
                    </div>
                    <div className="contact2">
                        <p data-aos="fade-up">+234 813 964 9118</p>
                        <p data-aos="fade-up">adedotunalausa@gmail.com</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeSection5
