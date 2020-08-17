import React from 'react'
import HeroImg1 from "./images/Adedotun2.png"
import { motion } from "framer-motion"
import HeroImg2 from "./images/Adedotun1.png"
import { useMediaQuery } from '@react-hook/media-query'
import { Link } from "react-scroll"

const pageVariants = {
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: "1%"
    }
}

const pageTransition = {
    duration: .8
}

const HomeSection1 = () => {
    const matches = useMediaQuery('only screen and (min-width: 768px)')

    return (
        <div className="first-section">
            <div className="first-section-container">
                <div className="first-section-content">
                    <p className="hello">Hello, I'm Adedotun <span role="img" aria-label="wave">👋🏼</span></p>
                    <h1>Full Stack Web Developer</h1>
                    <motion.p
                        className="brief-info"
                        initial="out"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                    >
                        I build digital products that meets the expectations of
                        users, help businesses reach their goals and result
                        in an awesome user interaction
                    </motion.p>
                    <Link className="butn" to="capabilities" smooth={true} duration={1000}>More about me</Link>
                </div>
                {matches ? (<img className="hero-img2" src={HeroImg2} alt="hero-img" />) : (<img className="hero-img1" src={HeroImg1} alt="hero-img" />)}
            </div>
        </div>
    )
}

export default HomeSection1
