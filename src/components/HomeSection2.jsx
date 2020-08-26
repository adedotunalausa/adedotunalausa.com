import React, { useEffect } from "react"
import ContineryImg from "./images/continery-img.png"
import HaiyoImg from "./images/haiyo-img.png"
import SimonImg from "./images/simon-img.png"
import SassieImg from "./images/sassie-img1.png"
import Aos from "aos"
import "aos/dist/aos.css";

const HomeSection2 = () => {

    useEffect(() => {
        Aos.init({ 
            duration: 1000, 
            offset: 100,
            easing: "ease-out-cubic"
        });
    }, [])

    return (
        <div className="second-section">
            <div className="projects">
                <h2 data-aos="fade-up">Projects</h2>
                <p data-aos="fade-up">
                    Digital Products (Apps, Website, SaaS solutions) which are visually pleasing,
                    functional and easy to use
                </p>
                <p data-aos="fade-up" className="project-details">Click on each project for details</p>
                <div className="projects-container">
                    <a href="https://continery.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div data-aos="zoom-in" className="card">
                            <div className="card-heading">
                                <h4>CONTINERY</h4>
                                <h3 className="continery-h3">Explore the world around you</h3>
                            </div>
                            <img className="card-img1" src={ContineryImg} alt="continery-img" />
                        </div>
                    </a>
                    <a href="https://haiyo.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <div data-aos="zoom-in" className="card card-haiyo card-dark">
                            <img className="card-img2" src={HaiyoImg} alt="haiyo-img" />
                            <div className="card-heading">
                                <h4 className="haiyo-h4">HAIYO</h4>
                                <h3 className="haiyo-h3">Search Nigerian names and get their meanings</h3>
                            </div>
                        </div>
                    </a>
                    <a href="https://simon-game-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div data-aos="zoom-in" className="card card-simon simon-bg">
                            <img className="card-img2" src={SimonImg} alt="simon-img" />
                            <div className="card-heading">
                                <h4 className="simon-h4">SIMON</h4>
                                <h3 className="simon-h3">Based on an electric game of memory skills</h3>
                            </div>
                        </div>
                    </a>
                    <a href="https://sassiesaent.com/" target="_blank" rel="noopener noreferrer">
                        <div data-aos="zoom-in" className="card">
                            <div className="card-heading">
                                <h4>SASSIE SA ENTERTAINMENT</h4>
                                <h3 className="sassie-h3">Event planning, hosting, Games and Talks</h3>
                            </div>
                            <img className="card-img1" src={SassieImg} alt="sassie-img" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeSection2
