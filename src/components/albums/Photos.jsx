/* eslint-disable react-hooks/exhaustive-deps */
import{Link,useParams} from "react-router-dom";
import { useState ,useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React from 'react';

export default function Photos() {
    const [photos,setphotos]=useState([]);
    const {albumid}=useParams();
    useEffect(()=>{
        getAllPhotos();
    },[albumid]);
    const getAllPhotos=()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumid}`)
            .then((response)=>response.json())
            .then((data)=>setphotos(data))
    }
  return (
    <>
     <h2>Photos</h2>
     <div className="row">
      {photos.map((photo)=>(
       <Card sx={{ maxWidth:300 }} key={photo.id}>
             <CardActionArea >
              <CardMedia
                component="img"
                height="140"
                image={photo.thumbnailUrl}
                alt={photo.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {photo.title}
                </Typography>
              </CardContent>
             </CardActionArea>
      </Card>
     ))}
      
    </div>
    <Link to="/album/photo/add" className="btn btn-success mt-3 ">Add Photo</Link>
    <Link to="/album" className="btn btn-success mt-3 ">Back</Link>
    </>
  )
}
