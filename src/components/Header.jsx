import React from "react"
import { Link } from "react-router-dom"
import Hamburger from "./Hamburger"

function Header(props) {
    return (
        <nav>
            <div className="nav-content">
                <Link className="link" to={"/"}>
                    <h1>Adedotun</h1>
                </Link>
                <Hamburger />
            </div>
        </nav>
    )
}

export default Header;
