import axios from 'axios';
import { useState, useEffect } from 'react';
import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';

export function PostsPage() {
  const [posts, setPost] = useState([]);

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

  // calls handleIndex whenever the page loads
  useEffect(handleIndex, []);

  return (
    <main>
      <PostsNew onCreate={handleCreate} />
      <PostsIndex posts={posts}/>
    </main>
  )
}
