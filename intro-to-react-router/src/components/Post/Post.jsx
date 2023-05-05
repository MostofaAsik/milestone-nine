import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h2>ID:{id}</h2>
            <h3>title:{title}</h3>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}>  <button>Show post Details</button></Link>
            <button onClick={handleNavigation}>with button handler</button>

        </div>
    );
};

export default Post;