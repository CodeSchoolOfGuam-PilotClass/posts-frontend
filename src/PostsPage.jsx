import axios from 'axios';
import { useState, useEffect } from 'react';
import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';
import { PostsShow } from './PostsShow';
import { Modal } from './Modal';

export function PostsPage() {
  const [posts, setPost] = useState([]);
  const [isPostShowVisible, setIsPostShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({})

  const handleIndex = () => {
    console.log("In the handleIndex function");
    axios.get("http://localhost:3000/posts")
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
  }

  const handleCreate = (params, successCallback) => {
    console.log("In the handleCreate function");
    axios.post("http://localhost:3000/posts", params)
      .then((response) => {
        setPost([...posts, response.data]);
        successCallback();
      })
  }

  const handleShow = (post) => {
    console.log("In the handleShow function");
    console.log(post);
    setIsPostShowVisible(true);
    setCurrentPost(post)
  };

  const handleUpdate = (post, params, successCallback) => {
    console.log("in the handleUpdate function");
    axios.patch(`http://localhost:3000/posts/${post.id}`, params)
      .then((response) => {
        console.log(response.data);
        setPost(posts.map(post => post.id === response.data.id ? response.data : post));
        successCallback();
        setIsPostShowVisible(false);
      })
  };

  const handleDestroy = (post) => {
    console.log("in the handleDestroy method");
    console.log(post);
    axios.delete(`http://localhost:3000/posts/${post.id}`)
      .then(() => {
        setPost(posts.filter((p) => p.id !== post.id));
        setIsPostShowVisible(false);
      })
  }

  // calls handleIndex whenever the page loads
  useEffect(handleIndex, []);

  return (
    <main>
      <PostsNew onCreate={handleCreate} />
      <PostsIndex posts={posts} onShow={handleShow} />
      <Modal show={isPostShowVisible} onClose={() => setIsPostShowVisible(false)}>
        <PostsShow post={currentPost} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  )
}
