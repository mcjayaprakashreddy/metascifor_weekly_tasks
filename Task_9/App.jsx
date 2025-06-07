import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Hello from './components/Function'
import HelloComponent from './components/weektask6/HelloComponent'
import Welcome from './components/weektask6/Welcome'
import Toggle from './components/Weektask8/Toggle'
import StudentProvider from './components/Dailytask16/StudentContext'
import StudentInfo from './components/Dailytask16/StudentInfo'
import FeedbackForm from './components/dailytask17/FeedbackForm'
import AddUserForm from './components/Weektask9/AddUserForm'


function App() {
  

  return (
    <>
     {/* <Hello/> */}
     {/* <Welcome name="Jayaprakash"/>
     <HelloComponent/>
     <Counter/> */}
   {/* <Toggle/> */}
   {/* <StudentProvider>
    <StudentInfo/>
   </StudentProvider> */}
   {/* <FeedbackForm/> */}
   <AddUserForm/>
    </>
  )
}

export default App
