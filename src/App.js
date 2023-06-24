import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import Home from './Components/Home';
import Show from './Components/Show';
import Gallery from './Components/Gallery';
import GalleryDetails from './Components/GalleryDetails';
const App = () => {

  return (
    <div className='container mt-5 m-auto'>
      <nav className='d-flex justify-content-evenly'>
        <Link to="/">Home</Link>
        <Link to="/add">Add User</Link>
        <Link to="/show" > Show User</Link>
        <Link to="/gallery" >Show Gallery</Link>
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/show' element={<Show/>} />
        <Route path='/gallery' element={<Gallery/>} >
          <Route path='/gallery/:id' element={<GalleryDetails/>} />
          </Route>
      </Routes>
    </div>
  )
}

export default App