import React, { useEffect } from "react"
import Hamburger from "./Hamburger"
import LogoImg from "./images/adedotun_logo.svg"
import { animateScroll as Scroll } from "react-scroll"
import Aos from "aos"
import "aos/dist/aos.css";

function Header(props) {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: "ease-out-cubic"
        });
    }, [])

    return (
        <nav>
            <div className="nav-container" data-aos="fade">
                <div
                    className="logo-wrapper"
                    onClick={() => {
                        Scroll.scrollToTop()
                    }}
                >
                    <img src={LogoImg} alt="logo-img" />
                    <span className="my-name">Adedotun</span>
                    <span className="my-surname">Adedotun Alausa</span>
                </div>
                <Hamburger />
            </div>
        </nav>
    )
}

export default Header;
