import React, { useState, useEffect } from 'react'
import Axios from "axios"

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

    return (
        <div className="post-page">
            <div className="journal-page-content-wrapper">
                <img className="post-img" src={postDetails.image} alt="post-img" />
                <h1 className="post-title">{postDetails.title}</h1>
                <p className="post-body">{postDetails.content}</p>
            </div>
        </div>
    )
}

export default PostPage
