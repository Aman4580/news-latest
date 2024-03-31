import React, { useState } from 'react';

const CreateNewsFeedPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add code to submit the news feed data to your backend
        // For example, you can use fetch or axios to send a POST request
        // to your API endpoint to save the news feed data
        console.log('Title:', title);
        console.log('Content:', content);
        // Clear input fields after submission
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <h2>Create a News Feed</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateNewsFeedPage;
