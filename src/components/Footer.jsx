import React, {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            offset: 100,
            easing: "ease-out-cubic"
        });
    }, [])

    const year = new Date().getFullYear();

    return (
        <footer className="last-section">
            <div className="last-section-container">
                <div className="social-media">
                    <a className="footer-link underline" data-aos="fade" href="https://www.linkedin.com/in/adedotun-alausa" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a className="footer-link underline" data-aos="fade" href="https://github.com/adedotunalausa" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a className="footer-link underline" data-aos="fade" href="https://www.instagram.com/mousebrushstudio/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="footer-right">
                    <a className="footer-link2" data-aos="fade" href="/">Privacy Policy</a>
                    <a className="footer-link2" data-aos="fade" href="/">Terms & Conditions</a>
                    <p className="copyright">© {year} Adedotun Alausa</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
