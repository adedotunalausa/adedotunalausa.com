import React from "react"
import { Link } from "react-router-dom"
import Hamburger from "./Hamburger"

function Header(props) {
    return (
        <nav>
            <div className="nav-container">
                <Link className="name-link" to={"/"}>
                    <div className="logo-wrapper name-link">
                        <span className="my-name">Adedotun</span>
                        <span className="my-surname">Adedotun Alausa</span>
                    </div>
                </Link>
                <Hamburger />
            </div>
        </nav>
    )
}

export default Header;
