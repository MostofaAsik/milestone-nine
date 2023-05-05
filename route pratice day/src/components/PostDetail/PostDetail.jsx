import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postDetail = useLoaderData();
    const { body, id, title } = postDetail
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>Post Details about id :{id}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;