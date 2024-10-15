import React from 'react';
import Header from './Header'
import Footer from './Footer'
import {Routes, Route} from 'react-router-dom'
import Startpage from './Startpage';



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Startpage />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
