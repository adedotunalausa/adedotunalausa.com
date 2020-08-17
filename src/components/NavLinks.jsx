import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    li {
        padding: 0.5rem 1.5rem;
        margin-top: 0.5rem;
    }

    img {
        display: none;
    }

    @media (max-width: 768px) {
        background-color: hsl(0, 0%, 98%);
        flex-flow: column nowrap;
        align-items: center;
        position: fixed;
        top: 2.9rem;
        right: 0;
        height: 100vh;
        width: 100vw;
        padding-top: 2rem;
        z-index: -5;
        transform: ${({ open }) => open ? "tranlateX(0)" : "translateX(100%)"};
        transition: transform 0.3s ease-in-out;

        li {
        padding: 1rem 1.5rem;
    }

        img {
            display: flex;
        }
    }   
`;

export const NavLinks= ({ open, setOpen }) => {
    return (
        <Ul open={open} className="navlinks">
            <Link className="link navlink" to={"/"} onClick={() => setOpen(!open)}><li>Home</li></Link>
            <Link className="link navlink" to={"/Journal"} onClick={() => setOpen(!open)}><li>Journal</li></Link>
            <a className="link navlink contact" href="mailto:adedotunalausa@gmail.com" onClick={() => setOpen(!open)}><li>Contact</li></a>
        </Ul>
    )
}
