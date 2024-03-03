/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import{Link,useParams} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from 'react';

function Editpost(){
  const[newId,setnewId]=useState("");
    const[newName,setnewName]=useState("");
    const[newDescription,setnewDescription]=useState("");
    let {postid}=useParams();
    const navigate=useNavigate();
    const [post,setpost]=useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
            .then((response)=>response.json())
            .then((data)=>setpost(data));
    },[]);
    const handelSubmit=(e)=>{
      e.preventDefault(); 
      axios.put(`https://jsonplaceholder.typicode.com/posts/${postid}`,{
        id: newId,
        title: newName,
        body: newDescription})
       .then((res)=>{alert("Edit Done!");navigate("/post")});
  };
   return (
    <>
      
     <div className="col-lg-6  container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <form className="container" onSubmit={handelSubmit}>
          <div className="card" >
           <div className="card-titel m-3 p-2">
            <h3>Edit Post</h3>
           </div>
           <div className="card-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                     <label>ID</label>
                     <input value={newId} onChange={(e)=>setnewId(e.target.value)} className="form-control"></input>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                     <lablabelle>Name</lablabelle>
                     <input value={newName} required onChange={(e)=>setnewName(e.target.value)} className="form-control"></input>
                    </div>
                </div>  
                <div className="col-lg-12">
                    <div className="form-group">
                     <label>Description</label>
                     <input value={newDescription} required onChange={(e)=>setnewDescription(e.target.value)} className="form-control"></input>
                    </div>
                </div> 
                <div className="form-group">
                    <button type="submit" className="btn btn-success mr-5">Save Changes</button>
                    <Link to="/post" className="btn btn-success ml-3 "  >Back</Link>

                </div>
            </div>
           </div>
          </div>
        </form>
     </div>
   
    
    </>
   )
}
export default Editpost;
