import React from "react"

const Footer = () => {
    return (
        <footer className="last-section">
            <div className="last-section-container">
                <div className="social-media">
                    <a className="footer-link underline" href="https://www.linkedin.com/in/adedotun-alausa" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a className="footer-link underline" href="https://github.com/adedotunalausa" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a className="footer-link underline" href="https://www.instagram.com/mousebrushstudio/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="footer-right">
                    <a className="footer-link2" href="/">Privacy Policy</a>
                    <a className="footer-link2" href="/">Terms & Conditions</a>
                    <p className="copyright">© 2020 Adedotun Alausa</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
