import { useEffect, useState  } from "react";
import{useParams,Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Editalbum(){
  const[newId,setnewId]=useState("");
    const[newName,setnewName]=useState("");
    let {albumid}=useParams();
    const navigate=useNavigate();
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumid}`)
            .then((response)=>response.json())
            .then((album)=>{setnewId(album.id);setnewName(album.title); })
    },[albumid]);
    const handelSubmit=(e)=>{
      e.preventDefault(); 
      axios.put(`https://jsonplaceholder.typicode.com/albums/${albumid}`,{
        id: newId,
        title: newName,})
       .then((res)=>{alert("Edit Done!");navigate("/album")});
  };
   return (
    <>
      <div className="row">
     <div className="offest-lg-3 col-lg-6">
        <form className="container" onSubmit={handelSubmit}>
          <div className="card" >
           <div className="card-titel">
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
                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-sm">Save Changes</button>
                    <Link to="/album" className="btn btn-success mt-3 ">Back</Link>
                </div>
            </div>
           </div>
          </div>
        </form>
     </div>
    </div>
    
    </>
   );
}
export default Editalbum;
