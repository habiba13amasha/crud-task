import { useEffect, useState,useNavigate  } from "react";
import{useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";

function Editpost(){
  const[newId,setnewId]=useState("");
    const[newName,setnewName]=useState("");
    let {albumid}=useParams();
    const navigate=useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [post,setpost]=useState();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/albums${albumid}`)
            .then((response)=>{response.json()})
            .then((post)=>{setpost(post); })
    },[albumid]);
    const handelSubmit=(e)=>{
      e.preventDefault(); 
      axios.put("https://jsonplaceholder.typicode.com/posts",{
          newId,newName})
       .then((res)=>{alert("Edit Done!");navigate("/post")});
  }
   return (
    <>
      <div className="row">
     <div className="offest-lg-3 col-lg-6">
        <form className="container" onSubmit={handelSubmit()}>
          <div className="card" >
           <div className="card-titel">
            <h3>Edit Album</h3>
           </div>
           <div className="card-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                     <lable>ID</lable>
                     <input value={newId} onChange={(e)=>setnewId(e.target.value)} className="form-control"></input>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                     <lable>Name</lable>
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
   )
}
export default Editpost;
