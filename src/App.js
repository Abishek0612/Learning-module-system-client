import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateCourse from './pages/CreateCourse';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as  Router, Routes,Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

const App=()=> {
  return (
  <>
  <Router>
    <div>
  <Header/>
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={ <Register/>}/>
    <Route path="/createcourse" element={ <CreateCourse/>}/>
    <Route path="/courses" element={ <Courses/>}/>
    <Route path="/courses/:id" element={ <CourseDetail/>}/>
    <Route path="/about" element={ <About/>}/>
    <Route path="/contact" element={ <Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  <Footer/>
  </Router>

  </>
  );
}

export default App;


