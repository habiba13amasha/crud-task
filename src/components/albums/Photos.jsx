
import{Link,useParams} from "react-router-dom";
import { useState ,useEffect } from "react";
import React from 'react';

export default function Photos() {
    const [photos,setphotos]=useState([]);
    const {albumId}=useParams();
    useEffect(()=>{
        getAllPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const getAllPhotos = () => {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((data) => {
              setphotos(data);
          })
    }
  return (
    <>
     <h2 className="m-3 text-center">Photos</h2>
     <div className="row">
      {photos.map((photo)=>(
       <div className="card " style={{ width: "18rem" }} key={photo.id} >
        <img src={photo.thumbnailUrl} className="card-img-top " alt=""/>
        <div className="card-body">
         <p className="card-text">{photo.title}</p>
        </div>
     </div>
     ))}
      
    </div>
    <div className="d-flex justify-content-between">
      <Link to="/album/photo/add" className="btn btn-success m-5 ">Add Photo</Link>
      <Link to="/album" className="btn btn-success m-5 ">Back</Link>
    </div>
    </>
  )
}
