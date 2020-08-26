import React from "react"
import Hamburger from "./Hamburger"
import LogoImg from "./images/adedotun_logo.svg"
import { animateScroll as Scroll } from "react-scroll"

function Header(props) {
    return (
        <nav>
            <div className="nav-container">
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
