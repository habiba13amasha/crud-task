import { useEffect, useState } from "react";
import{useParams,Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Editpost(){
  const[newId,setnewId]=useState("");
    const[newName,setnewName]=useState("");
    const[newDescription,setnewDescription]=useState("");
    let {postid}=useParams();
    const navigate=useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [post,setpost]=useState(null);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
            .then((response)=>response.json())
            .then((data)=>setpost(data));
    },[postid]);
    const handelSubmit=(e)=>{
      e.preventDefault(); 
      axios.put(`https://jsonplaceholder.typicode.com/posts/${postid}`,{
        id: newId,
        title: newName,
        body: newDescription})
       .then((res)=>{alert("Edit Done!");navigate("/post")});
  };
   return (
    <>
      <div className="row">
     <div className="offest-lg-3 col-lg-6">
        <form className="container" onSubmit={handelSubmit}>
          <div className="card" >
           <div className="card-titel">
            <h3>Edit Post</h3>
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
                     <lablabelle>Name</lablabelle>
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
                    <button type="submit" className="btn btn-success btn-sm">Save Changes</button>
                    <Link to="/post" className="btn btn-success mt-3 "  >Back</Link>

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
