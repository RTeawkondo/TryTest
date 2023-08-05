import React, { useEffect, useState } from 'react'

export default function Async() {
    const [posts,setPost] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> res.json())
        .then((data) => {
            setPost(data)
        })
    }, [])
  return (
    <div>
        <ul>
            {
                posts.map((post) =>  <li key={post.id}>{post.title}</li>
                )
            }
        </ul>
    </div>
  )
}
