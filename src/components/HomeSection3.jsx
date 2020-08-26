import React, { useEffect } from "react"
import FrontEndImg from "./images/frontend-img.svg"
import BackEndImg from "./images/backend-img.svg"
import Aos from "aos"
import "aos/dist/aos.css";

const HomeSection3 = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: "ease-out-cubic"
        });
    }, [])

    return (
        <div>
            <div className="capabilities" id="capabilities">
                <h2 data-aos="fade-up">Capabilities</h2>
                <div className="second-section-container">
                    <div>
                        <img className="web-development-img" data-aos="fade-up" src={FrontEndImg} alt="frontend-img" />
                        <h3 data-aos="fade-up">Front-End Development</h3>
                        <ul>
                            <li data-aos="fade-up">Animations</li>
                            <li data-aos="fade-up">Web Applications</li>
                            <li data-aos="fade-up">Platform Solutions</li>
                            <li data-aos="fade-up">Responsive & Mobile Websites</li>
                        </ul>
                    </div>

                    <div>
                        <img className="data-sci-img" data-aos="fade-up" src={BackEndImg} alt="backend-img" />
                        <h3 data-aos="fade-up">Back-End Development</h3>
                        <ul>
                            <li data-aos="fade-up">API</li>
                            <li data-aos="fade-up">Database</li>
                            <li data-aos="fade-up">Cloud Computing</li>
                            <li data-aos="fade-up">Application Logic</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection3
