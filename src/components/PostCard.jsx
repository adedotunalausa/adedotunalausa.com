import React from 'react'
import PostImg from "./images/post-img.svg"


const PostCard = (props) => {
    return (
        <div className="post-card">
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
