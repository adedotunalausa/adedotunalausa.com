import React, { useEffect } from "react"
import HeroImg1 from "./images/Adedotun2.png"
import HeroImg2 from "./images/Adedotun1.png"
import { useMediaQuery } from "@react-hook/media-query"
import { Link } from "react-scroll"
import Aos from "aos"
import "aos/dist/aos.css"

const HomeSection1 = () => {
    const matches = useMediaQuery('only screen and (min-width: 768px)')

    useEffect(() => {
        Aos.init({ 
            duration: 1000,
            offset: 100,
            easing: "ease-out-cubic"
        });
    }, [])

    return (
        <div className="first-section">
            <div className="first-section-container">
                <div className="first-section-content">
                    <p data-aos="fade" data-aos-delay="20" className="hello">Hello, I'm Adedotun <span role="img" aria-label="wave">👋🏼</span></p>
                    <h1 data-aos="fade-up" data-aos-delay="100">Full Stack Web Developer</h1>
                    <p data-aos="fade-up" data-aos-delay="200" className="brief-info">
                        I build digital products that meets the expectations of
                        users, help businesses reach their goals and result
                        in an awesome user interaction
                    </p>
                    <Link data-aos="fade-up" data-aos-delay="300" className="butn" to="capabilities" smooth={true} duration={1000}>More about me</Link>
                </div>
                {matches ? (<img data-aos="fade" data-aos-delay="20" className="hero-img2" src={HeroImg2} alt="hero-img" />) : (<img data-aos="fade-up" data-aos-delay="400" className="hero-img1" src={HeroImg1} alt="hero-img" />)}
            </div>
        </div>
    )
}

export default HomeSection1
