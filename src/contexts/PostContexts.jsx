import React, { createContext, useState, useEffect } from 'react';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const addPost = (post) => {
        fetch('http://localhost:5001/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        })
            .then(response => response.json())
            .then(newPost => setPosts([...posts, newPost]))
            .catch(error => console.error('Error adding post:', error));
    };

    const updatePost = (id, updatedPost) => {
        fetch(`http://localhost:5001/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPost),
        })
            .then(response => response.json())
            .then(() => {
                const updatedPosts = posts.map(post => post.id === id ? updatedPost : post);
                setPosts(updatedPosts);
            })
            .catch(error => console.error('Error updating post:', error));
    };

    const deletePost = (id) => {
        fetch(`http://localhost:5001/posts/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                const filteredPosts = posts.filter(post => post.id !== id);
                setPosts(filteredPosts);
            })
            .catch(error => console.error('Error deleting post:', error));
    };

    return (
        <PostsContext.Provider value={{ posts, addPost, updatePost, deletePost }}>
            {children}
        </PostsContext.Provider>
    );
};