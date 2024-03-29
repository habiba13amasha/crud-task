import { useState  } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from 'react';

export default function Addpost() {
    const[newId,setnewId]=useState("");
    const[newName,setnewName]=useState("");
    const[newDescription,setnewDescription]=useState("");
    const navigate=useNavigate();
    const handelSubmit=(e)=>{
        e.preventDefault(); 
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            newId,newName,newDescription})
         .then((res)=>{alert("Saved Done!");navigate("/post")});
    }
  return (
   
     <div className="col-lg-6  container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <form className="container" onSubmit={handelSubmit}>
          <div className="card" >
           <div className="card-titel m-3 p-2">
            <h3>Add New Post</h3>
           </div>
           <div className="card-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                     <label>ID</label>
                     <input value={newId} required onChange={(e)=>setnewId(e.target.value)} className="form-control"></input>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                     <label>Name</label>
                     <input value={newName} required onChange={(e)=>setnewName(e.target.value)} className="form-control"></input>
                    </div>
                </div>  
                <div className="col-lg-12">
                    <div className="form-group">
                     <label>Description</label>
                     <input value={newDescription} required onChange={(e)=>setnewDescription(e.target.value)} className="form-control"></input>
                    </div>
                </div> 
                <div className="form-group d-flex justify-content-between">
                    <button type="submit" className="btn btn-success  mr-5  ">Save</button>
                    <Link to="/post" className="btn btn-success ml-5 "  >Cancel</Link>

                </div>
            </div>
           </div>
          </div>
        </form>
     </div>
    
  )
}
