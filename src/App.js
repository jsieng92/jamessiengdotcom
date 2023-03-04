import React from 'react';
import './App.css';
import {Navbar} from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
//import { BrowserRouter} from 'react-router-dom';
import Home from './Pages/index3';
import About from './Pages/about';
import Blogs from './Pages/blogs';
import SignUp from './Pages/signup';
import Contact from './Pages/contact';
import {Colors} from './Pages/colors';
import {Test} from './Pages/test';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/about' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/colors' element={<Colors/>} />
        <Route path='/test' element={<Test/>} />
    </Routes>
    </Router>
);
}
  
export default App;