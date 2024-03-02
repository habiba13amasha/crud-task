import { useState  } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
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
    <div className="row">
     <div className="offest-lg-3 col-lg-6">
        <form className="container" onSubmit={handelSubmit}>
          <div className="card" >
           <div className="card-titel">
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
                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-sm">Save</button>
                    <Link to="/post" className="btn btn-success mt-3 "  >Back</Link>

                </div>
            </div>
           </div>
          </div>
        </form>
     </div>
    </div>
  )
}
