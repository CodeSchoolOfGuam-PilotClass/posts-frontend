import axios from 'axios';
import { useState, useEffect } from 'react';
import { PostsIndex } from './PostsIndex';

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

  // calls handleIndex whenever the page loads
  useEffect(handleIndex, []);

  return (
    <main>
      <PostsIndex posts={posts}/>
    </main>
  )
}
