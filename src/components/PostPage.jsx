import React, { useState, useEffect } from 'react'
import Axios from "axios"
import Aos from "aos"
import "aos/dist/aos.css";
import { Link } from "react-router-dom"

const PostPage = ({ match }) => {
    const [postDetails, setPostDetails] = useState([])

    useEffect(() => {
        Axios.get(`https://adedotunalausa-website.uc.r.appspot.com/journal/posts/${match.params.title}`)
            .then(res => {
                setPostDetails(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [match])

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: "ease-out-cubic"
        });
    }, [])

    return (
        <div className="post-page">
            <div>
                <img className="post-img" data-aos="fade-up" src={postDetails.image} alt="post-img" />
                <h1 className="post-title" data-aos="fade-up">{postDetails.title}</h1>
                <p className="post-body" data-aos="fade-up">{postDetails.content}</p>
            </div>
            <Link className="keep-reading-btn" to={"/Journal"}><i className="fas fa-arrow-left"></i> Keep reading</Link>
        </div>
    )
}

export default PostPage
