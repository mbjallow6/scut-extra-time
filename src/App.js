import React, { useState, useEffect} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Presentation_ppt from './components/Presentation_ppt'
import Navbar from './Navbar/Navbar'


function App(){
  
  return(
    <BrowserRouter>
    <Navbar/>
    <Route>
      <Presentation_ppt/>
    </Route>
    
    </BrowserRouter>
  )

};

export default App
