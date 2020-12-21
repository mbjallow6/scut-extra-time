import React, { useState, useEffect} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Presentation_ppt from './components/Presentation_ppt'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Navbar from './Navbar/Navbar'


function App(){
  
  return(
    <BrowserRouter>
    <Navbar/>
    <Route exact path = '/' component = {Home}/>
    <Route path='/activities' component={Presentation_ppt}/>
    <Route path='/gallery' component={Gallery} />
    </BrowserRouter>
  )

};

export default App
