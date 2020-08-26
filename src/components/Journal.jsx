import React, { useState, useEffect } from "react"
import Axios from "axios"
import PostCard from "./PostCard"
import { Link } from "react-router-dom"

const Journal = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        Axios.get("https://adedotunalausa-website.uc.r.appspot.com/journal")
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <div className="journal-page-content-wrapper">
                <div className="startingContent-wrapper">
                    <h1 className="journal-heading">The Epiphany Journal</h1>
                    <h4>Tech, Education & Lifestyle</h4>
                </div>
                <div>
                    {(posts).map((post) => (
                        <Link key={post._id} to={`/journal/posts/${post.title}`}>{
                            <PostCard                               
                                title={post.title}
                                date={post.date}
                                body={post.content}
                            />
                        }</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Journal
