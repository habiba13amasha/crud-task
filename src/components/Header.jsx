import { Link } from "react-router-dom"
export default function Header() {
  return (
  <>
<div >
  <nav className=" navbar navbar-expand navbar-white navbar-light d-flex justify-content-between">
     <Link class="navbar-brand" to="/">
      <img src="../CRUD.png" alt="" width="40" height="35" style={{borderRadius:"5px"}}/>
     </Link>
    
    <ul className="navbar-nav">
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/post" className="nav-link">Posts</Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/album" className="nav-link">Albums</Link>
      </li>
    </ul>
   
  </nav>
</div>

  </>
    
  )
}



