import React from "react"
import HomeSection1 from "./HomeSection1"
import HomeSection2 from "./HomeSection2"
import HomeSection3 from "./HomeSection3"
import HomeSection4 from "./HomeSection4"
import HomeSection5 from "./HomeSection5"
import { motion } from "framer-motion"

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

const Home = () => {
    return (
        <motion.div
            className="home"
            initial="out"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
            <HomeSection5 />
        </motion.div>
    )
}

export default Home