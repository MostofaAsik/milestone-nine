import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ posts }) => {

    const { id, title, body } = posts
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h5>ID:{id}</h5>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}> <button>Show Details</button></Link>
            <button onClick={handleNavigation}>Details with button</button>
        </div>
    );
};

export default Post; <h3>Post descriptin</h3>