import React from 'react';
import { useState  } from "react";
import {Link,useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
export default function Addphoto() {
    const[newId,setnewId]=useState("");
    const[newTitel,setnewTitel]=useState("");
    const[newPhotoURL,setnewPhotoURL]=useState("");
    let {albumid}=useParams();
    const navigate=useNavigate();
    
    const handelSubmit=(e)=>{
        e.preventDefault(); 
        axios.post(`https://jsonplaceholder.typicode.com/photos/${albumid}`,{
          id: newId,
          title: newTitel,
          url: newPhotoURL})
         .then((res)=>{alert("Saved Done!");navigate("/album/photo")});
    }
  return (
    <>
    
     <div className="col-lg-6  container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <form className="container" onSubmit={handelSubmit}>
          <div className="card" >
           <div className="card-titel m-3 p-2">
            <h3>Add New Photo</h3>
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
                     <input value={newTitel} required onChange={(e)=>setnewTitel(e.target.value)} className="form-control"></input>
                    </div>
                </div>   
                <div className="col-lg-12">
                    <div className="form-group">
                     <label>Photo URL</label>
                     <input value={newPhotoURL} required onChange={(e)=>setnewPhotoURL(e.target.value)} className="form-control"></input>
                    </div>
                   < div className='d-flex justify-content-between'>
                     <Link to="/album/photo" className="btn btn-success mt-3 ">Save</Link>
                     <Link to="/album" className="btn btn-success mt-3 ">Cancel</Link>
                   </ div >
                </div>
            </div>
           </div>
          </div>
        </form>
      </div>
    
    

    </>
  )
}
