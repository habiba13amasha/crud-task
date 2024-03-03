/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState   } from "react";
import{Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from 'react';
import { useParams } from "react-router-dom";

function Editalbum(){
  const[newId,setnewId]=useState("");
    const[newName,setnewName]=useState("");
    const {albumid}=useParams();
    const navigate=useNavigate();
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumid}`)
            .then((response)=>response.json())
            .then((album)=>{setnewId(album.id);setnewName(album.title); })
    },[]);
    const handelSubmit=(e)=>{
      e.preventDefault(); 
      axios.put(`https://jsonplaceholder.typicode.com/albums/${albumid}`,{
        id: newId,
        title: newName,})
       .then((res)=>{alert("Edit Done!");navigate("/album")});
  };
   return (
    <>
      
       <div className=" col-lg-6  container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <form className="container" onSubmit={handelSubmit}>
          <div className="card align-content-center " >
           <div className="card-titel m-3 p-2">
            <h3>Edit Album</h3>
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
                     <label>Name</label>
                     <input value={newName} required onChange={(e)=>setnewName(e.target.value)} className="form-control"></input>
                    </div>
                </div>  
                <div className="form-group d-flex  justify-content-between p-2">
                    <button type="submit" className="btn btn-success btn-sm ">
                      Save Changes
                    </button>
                    <Link to="/album" className="btn btn-success ml-5">
                        Cancel
                    </Link>
                </div>
            </div>
           </div>
          </div>
        </form>
     </div>
    
    
    </>
   );
}
export default Editalbum;
