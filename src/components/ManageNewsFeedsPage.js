import React, { useState } from 'react';

const ManageNewsFeedsPage = () => {
    const [newsFeeds, setNewsFeeds] = useState([
        {
            id: 1,
            title: 'News Feed 1',
            category: 'Technology',
            createDate: '2024-03-31',
            status: 'Published'
        },
        {
            id: 2,
            title: 'News Feed 2',
            category: 'Sports',
            createDate: '2024-03-30',
            status: 'Draft'
        }
    ]);

    const handleDeleteNewsFeed = (id) => {
        setNewsFeeds(newsFeeds.filter(feed => feed.id !== id));
    };

    return (
        <div className="manage-news-feeds-container">
            <h2>Manage News Feeds</h2>
            <table className="news-feeds-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Creation Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {newsFeeds.map(newsFeed => (
                        <tr key={newsFeed.id}>
                            <td>{newsFeed.title}</td>
                            <td>{newsFeed.category}</td>
                            <td>{newsFeed.createDate}</td>
                            <td>{newsFeed.status}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={() => handleDeleteNewsFeed(newsFeed.id)}>Delete</button>
                                <button>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageNewsFeedsPage;
