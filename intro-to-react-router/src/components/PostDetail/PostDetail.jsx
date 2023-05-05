import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData()
    const { id, userId, title, body } = post;

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>Details about your post.{id}</h2>

            <h4>{title}</h4>
            <p><span>{body}</span></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;