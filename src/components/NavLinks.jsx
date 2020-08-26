import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import NavImg from "./images/nav_img.svg"

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    li {
        padding: 0.5rem 1.5rem;
        font-size: 1.2rem;
    }

    img {
        display: none;
    }

    .nav-contact-details {
        display: none;
    }

    @media (max-width: 768px) {
        background-color: hsl(0, 0%, 98%);
        flex-flow: column nowrap;
        align-items: center;
        position: fixed;
        top: 4.3rem;
        right: 0;
        height: 100vh;
        width: 100vw;
        padding-top: 3rem;
        z-index: -15;
        transform: ${({ open }) => open ? "tranlateX(60%)" : "translateX(100%)"};
        opacity: ${({ open }) => open ? 1 : 0.6};
        transition: transform 0.4s ease-in-out;

        li {
            padding: 0.6rem 1.5rem;
        }

        img {
            display: flex;
        }

        .nav-contact-details {
            position: absolute;
            bottom: 4rem;
            background: #f6f5f5;
            display: flex;
            flex-direction: column;
            text-align: center;
            font-size: 1.1rem;
            width: 100vw;
            padding: 2rem 1rem;
        }
    }   
`;

export const NavLinks = ({ open, setOpen }) => {
    return (
        <div>
            <Ul open={open} className="navlinks">
                <Link className="link navlink" to={"/"} onClick={() => setOpen(!open)}><li>Home</li></Link>
                <Link className="link navlink" to={"/Journal"} onClick={() => setOpen(!open)}><li>Journal</li></Link>
                <a className="link navlink contact" href="mailto:adedotunalausa@gmail.com" onClick={() => setOpen(!open)}><li>Contact</li></a>
                <img className="nav-img" src={NavImg} alt="nav-img" />
                <div className="nav-contact-details">
                    <p className="currently-available">Currently available</p>
                    <p>+234 813 964 9118</p>
                    <p>adedotunalausa@gmail.com</p>
                </div>
            </Ul>
        </div>
    )
}
