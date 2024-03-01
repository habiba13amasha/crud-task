/* eslint-disable react-hooks/exhaustive-deps */
import{useParams,Link} from "react-router-dom";
import { useState ,useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Photos() {
    const [photos,setphotos]=useState([]);
    let {albumid}=useParams();
    useEffect(()=>{
        getAllPhotos();
    },[albumid]);
    const getAllPhotos=()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos${albumid}`)
            .then((response)=>{response.json()})
            .then((data)=>{setphotos(data)})
    }
  return (
    <>
     <Card sx={{ maxWidth: 345 }}>
      
        {photos.map((photo)=>{
            return(
             <CardActionArea key={photo.id}>
                <CardMedia
                component="img"
                height="140"
                image={photo.url}
                alt={photo.titel}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {photo.titel}
                </Typography>
              </CardContent>
             </CardActionArea>
            )
        })}
    </Card>
    <Link to="/album/photo/add" className="btn btn-success mt-3 ">Add Photo</Link>
    <Link to="/album" className="btn btn-success mt-3 ">Back</Link>
    </>
  )
}
