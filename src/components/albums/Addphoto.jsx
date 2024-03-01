import { useState ,useNavigate } from "react";
import {Link,useParams} from "react-router-dom";
import axios from "axios";
export default function Addphoto() {
    const[newId,setnewId]=useState("");
    const[newTitel,setnewTitel]=useState("");
    const[newPhotoURL,setnewPhotoURL]=useState("");
    let {albumid}=useParams();

    const navigate=useNavigate();
    const handelSubmit=(e)=>{
        e.preventDefault(); 
        axios.post(`https://jsonplaceholder.typicode.com/photos${albumid}`,{
            newPhotoURL})
         .then((res)=>{alert("Saved Done!");navigate("/album/photo")});
    }
  return (
    <>
     <div className="row">
     <div className="offest-lg-3 col-lg-6">
        <form className="container" onSubmit={handelSubmit()}>
          <div className="card" >
           <div className="card-titel">
            <h3>Add New Photo</h3>
           </div>
           <div className="card-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                     <lable>ID</lable>
                     <input value={newId} required onChange={(e)=>setnewId(e.target.value)} className="form-control"></input>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                     <lable>Name</lable>
                     <input value={newTitel} required onChange={(e)=>setnewTitel(e.target.value)} className="form-control"></input>
                    </div>
                </div>   
                <div className="col-lg-12">
                    <div className="form-group">
                     <lable>Photo URL</lable>
                     <input value={newPhotoURL} required onChange={(e)=>setnewPhotoURL(e.target.value)} className="form-control"></input>
                    </div>
                </div>
            </div>
           </div>
          </div>
        </form>
      </div>
     </div>
     <Link to="/album/photo" className="btn btn-success mt-3 ">Back</Link>

    </>
  )
}