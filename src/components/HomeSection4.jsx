import React, { useEffect } from "react"
import HtmlImg from "./images/html5-logo.png"
import CssImg from "./images/css3-logo.png"
import JsImg from "./images/js5-logo.png"
import BootstrapImg from "./images/bootstrap-logo.png"
import JqueryImg from "./images/jquery-logo.png"
import ReactImg from "./images/react-logo.png"
import GitImg from "./images/git-logo.png"
import NodejsImg from "./images/nodejs-logo.png"
import ExpressjsImg from "./images/expressjs-logo.png"
import SqlImg from "./images/sql-logo.png"
import MongodbImg from "./images/mongodb-logo.png"
import PythonImg from "./images/python-logo.png"
import GcpImg from "./images/google-cloud-logo.png"
import Aos from "aos"
import "aos/dist/aos.css";


const HomeSection4 = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: "ease-out-cubic"
        });
    }, [])

    return (
        <div>
            <div className="fourth-section">
                <div className="fourth-section-container">
                    <h2 data-aos="fade-up">SKills & Tools</h2>
                    <span className="butn" data-aos="fade-up">Front-End Dev</span>
                    <div className="row tools-container">
                        <div className="box" data-aos="fade-up">
                            <div className="box-inner">
                                <img src={HtmlImg} alt="html-img" />
                                <p>HTML(5)</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="box-inner">
                                <img className="css" src={CssImg} alt="css-img" />
                                <p>CSS(3)</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="box-inner">
                                <img className="bs" src={BootstrapImg} alt="bootstrap-img" />
                                <p>Bootstrap</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="box-inner">
                                <img className="js" src={JsImg} alt="js-img" />
                                <p>Javascript</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="box-inner">
                                <img className="jq" src={JqueryImg} alt="jquery-img" />
                                <p>JQuery</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="box-inner">
                                <img className="react" src={ReactImg} alt="react-img" />
                                <p>React</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="box-inner">
                                <img className="git" src={GitImg} alt="git-img" />
                                <p>Git</p>
                            </div>
                        </div>
                    </div>

                    <span className="butn" data-aos="fade-up">Back-End Dev</span>
                    <div className="row tools-container">
                        <div className="box" data-aos="fade-up">
                            <div className="box-inner">
                                <img className="node" src={NodejsImg} alt="node-img" />
                                <p>NodeJs</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="box-inner">
                                <img className="express" src={ExpressjsImg} alt="express-img" />
                                <p>ExpressJs</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="box-inner">
                                <img className="sql" src={SqlImg} alt="sql-img" />
                                <p>SQL</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="box-inner">
                                <img className="mongodb" src={MongodbImg} alt="mongo-img" />
                                <p>mongoDB</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="box-inner">
                                <img className="python" src={PythonImg} alt="python-img" />
                                <p>Python</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="box-inner">
                                <img src={GcpImg} alt="gcp-img" />
                                <p>GCP</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeSection4
