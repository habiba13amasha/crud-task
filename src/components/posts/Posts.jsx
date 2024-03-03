/* eslint-disable no-unused-vars */
import { useEffect, useState   } from "react";
import swal from "sweetalert2";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import React from 'react';

export default function Posts() {
    const [posts,setposts]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        getAllPosts();
    },[]);
    const getAllPosts=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response)=>response.json())
            .then((data)=>setposts(data))
    }
    const deletePost=(id)=>{
        swal.fire({
            title:`Are you sure you want to delete this post ?`,
            showCancelButton:true,
        })
         .then((data)=>{
            if(data.isConfirmed){
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
                    method:"DELETE",
                  })
                    .then((response)=>response.json())
                    .then((data)=>{getAllPosts();});
            }});};
    const editPost=(id)=>{
      navigate(`/post/edit/${id}`)
    };

  return (
    <>
<div className="container my-5"><strong>Posts Page</strong></div>
 <div className="container">
  <div className="card-body p-0">
    <div className="table-responsive">
      <table className="table my-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Post Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {posts.map((post)=>(
             <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td className=" d-flex ">
                  <button className="btn btn-primary btn-sm m-2" onClick={()=>editPost(post.id)}>Edit</button>
                  <button className="btn btn-danger btn-sm m-2" onClick={()=>deletePost(post.id)}>Delete</button>
                </td>
             </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div>
     <Link to="/post/add" className="btn btn-success mt-3 float-right"  >Add Post</Link>
    </div>
  </div>
</div>
    </>
  );
}

