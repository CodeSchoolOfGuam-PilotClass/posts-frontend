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

  // calls handleIndex whenever the page loads
  useEffect(handleIndex, []);

  return (
    <main>
      <PostsNew onCreate={handleCreate} />
      <PostsIndex posts={posts} onShow={handleShow} />
      <Modal show={isPostShowVisible} onClose={() => setIsPostShowVisible(false)}>
        <PostsShow post={currentPost}/>
      </Modal>
    </main>
  )
}
