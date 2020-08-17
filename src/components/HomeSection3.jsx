import React from "react"
import FrontEndImg from "./images/frontend-img.svg"
import BackEndImg from "./images/backend-img.svg"

const HomeSection3 = () => {
    return (
        <div>
            <div className="capabilities" id="capabilities">
                <h2>Capabilities</h2>
                <div className="second-section-container">
                    <div>
                        <img className="web-development-img fade-in" src={FrontEndImg} alt="frontend-img" />
                        <h3>Front-End Development</h3>
                        <ul>
                            <li>Animations</li>
                            <li>Web Applications</li>
                            <li>Platform Solutions</li>
                            <li>Responsive & Mobile Websites</li>
                        </ul>
                    </div>

                    <div>
                        <img className="data-sci-img fade-in" src={BackEndImg} alt="backend-img" />
                        <h3>Back-End Development</h3>
                        <ul>
                            <li>API</li>
                            <li>Database</li>
                            <li>Cloud Computing</li>
                            <li>Application Logic</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection3
