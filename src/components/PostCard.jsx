import React, { useEffect } from 'react'
import PostImg from "./images/post-img.svg"
import Aos from "aos"
import "aos/dist/aos.css";


const PostCard = (props) => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: "ease-out-cubic"
        });
    }, [])

    return (
        <div className="post-card" data-aos="fade-up">
            <img className="postcard-img" src={PostImg} alt="post-img" />
            <div>
                <h3>{props.title}</h3>
                <p className="post-link post-date">{props.date}</p>
                <p className="post-link">{props.body.substring(0, 30) + " ......."}</p>
            </div>
        </div>
    )
}

export default PostCard
