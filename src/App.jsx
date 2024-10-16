import React from 'react';
import Header from './Header'
import Footer from './Footer'
import {Routes, Route} from 'react-router-dom'
import Startpage from './Startpage';
import Slidepage from './Slidepage';



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Startpage />}/>
      <Route path="/slidepage" element={<Slidepage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
