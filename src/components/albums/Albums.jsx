/* eslint-disable no-unused-vars */
import { useEffect, useState   } from "react";
import swal from "sweetalert2";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

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
  navigate(`/album/photo/${id}`)
}
  return (
    <>
<div className="container my-5">Albums Page</div>
 <div className="container">
  <div className="card-body p-0">
    <div className="table-responsive">
      <table className="table m-0">
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
                <td>
                  <button className="btn btn-primary btn-sm" onClick={()=>editAlbum(album.id)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={()=>deleteAlbum(album.id)}>Delete</button>
                  <button  className="btn btn-success btn-sm" onClick={()=>albumPhotos(album.id)}>Photos</button>
                </td>
             </tr>
             
          ))}
          </tbody>
      </table>
    </div>
    <div>
     <Link to="/album/add" className="btn btn-success mt-3 float-right">Add Album</Link>
     <Link to="/album/photo/add" className="btn btn-success mt-3 ">Add Photo</Link> 

    </div>
  </div>
</div>
    </>
);
}
