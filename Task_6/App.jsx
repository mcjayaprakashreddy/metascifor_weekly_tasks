import { useState } from 'react'

import './App.css'
import Hello from './components/Function'
import HelloComponent from './components/weektask6/HelloComponent'
import Welcome from './components/weektask6/Welcome'

function App() {
  

  return (
    <>
     {/* <Hello/> */}
     <Welcome name="Jayaprakash"/>
     <HelloComponent/>
    </>
  )
}

export default App
