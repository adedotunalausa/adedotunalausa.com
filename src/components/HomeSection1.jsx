import React from 'react'
import HeroImg1 from "./images/Adedotun2.png"
// import HeroImg2 from "./images/Adedotun1.png"

const HomeSection1 = () => {

    return (
        <div className="first-section">
            <div className="first-section-container">
                <div className="first-section-content">
                    <p className="hello">Hello, I'm Adedotun <span role="img" aria-label="wave">👋🏼</span></p>
                    <h1>Full Stack Web Developer</h1>
                    <p className="brief-info">
                        I build digital products that meets the expectations of
                        users, help businesses reach their goals and result
                        in an awesome user interaction
                    </p>
                    <a className="butn" href="#abilities">More about me</a>
                </div>
                <img className="hero-img1" src={HeroImg1} alt="hero-img" />
                {/* <img className="hero-img2" src={HeroImg2} alt="hero-img" /> */}
            </div>
        </div>
    )
}

export default HomeSection1
