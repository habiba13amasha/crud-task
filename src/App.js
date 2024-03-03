import Header from "./components/Header";
import Home from "./components/Home";
import Albums from "./components/albums/Albums";
import Posts from "./components/posts/Posts";
import Addpost from "./components/posts/Addpost";
import Editpost from "./components/posts/Editpost";
import Addalbum from "./components/albums/Addalbum";
import Editalbum from "./components/albums/Editalbum";
import Photos from "./components/albums/Photos";
import Addphoto from "./components/albums/Addphoto";
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div  className="wrapper">
      <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post" element={<Posts/>}/>
        <Route path="/post/add" element={<Addpost/>}/>
        <Route path="/post/edit/:postid" element={<Editpost/>}/>
        <Route path="/album" element={<Albums/>}/>
        <Route path="/album/add" element={<Addalbum/>}/>
        <Route path="/album/edit/:albumid" element={<Editalbum/>}/>
        <Route path="/album/photo" element={<Photos/>}/>
        <Route path="/album/photo/add" element={<Addphoto/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
