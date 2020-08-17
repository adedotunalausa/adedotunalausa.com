import React from "react"
import Hamburger from "./Hamburger"
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
                    <span className="my-name">Adedotun</span>
                    <span className="my-surname">Adedotun Alausa</span>
                </div>
                <Hamburger />
            </div>
        </nav>
    )
}

export default Header;
