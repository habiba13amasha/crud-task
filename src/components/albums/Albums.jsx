/* eslint-disable no-unused-vars */
import { useEffect, useState   } from "react";
import swal from "sweetalert2";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import React from 'react';

export default function Albums() {
  const [albums,setalbums]=useState([]);
  const navigate=useNavigate();

  useEffect(()=>{
      getAllAlbums();
  },[]);
  const getAllAlbums=()=>{
      fetch("https://jsonplaceholder.typicode.com/albums")
          .then((response)=>response.json())
          .then((data)=>setalbums(data));
  };

  const deleteAlbum=(id)=>{
    swal.fire({
        title:`Are you sure you want to delete this album ?`,
        showCancelButton:true,
    })
     .then((data)=>{
        if(data.isConfirmed){
            fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{
                method:"DELETE",
              })
                .then((response)=>response.json())
                .then((data)=>{getAllAlbums();})
        }});};
const editAlbum=(id)=>{
  navigate(`/album/edit/${id}`)
}
const albumPhotos=(id)=>{
  navigate(`/album/photo?albumId=${id}`)
}
  return (
    <>
<div className="container my-5"><strong>Albums Page</strong></div>
 <div className="container">
  <div className="card-body p-0">
    <div className="table-responsive">
      <table className="table my-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Album Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {albums.map((album)=>(
          
             <tr key={album.id}>
                <td>{album.id}</td>
                <td>{album.title}</td>
                <td className="m-2 ">
                  <button className="btn btn-primary btn-sm m-2 " onClick={()=>editAlbum(album.id)}>Edit</button>
                  <button className="btn btn-danger btn-sm m-2" onClick={()=>deleteAlbum(album.id)}>Delete</button>
                  <button  className="btn btn-success btn-sm m-1" onClick={()=>albumPhotos(album.id)}>Photos</button>
                </td>
             </tr>
             
          ))}
          </tbody>
      </table>
    </div>
    <div>
     <Link to="/album/add" className="btn btn-success m-5 float-right">Add Album</Link>
     <Link to="/album/photo/add" className="btn btn-success m-5 ">Add Photo</Link> 

    </div>
  </div>
</div>
    </>
);
}
