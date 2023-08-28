import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'popper.js'


import { NewForm } from "./components/newForm"
import { TasksList } from "./components/tasksList"

import{ Navbar } from "./components/navbar";
import Tasks from './components/tasks';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import BasicButtonExample from './components/button';


export default function App() {


  return (
    <>
    <BasicButtonExample/>
    
       <Router>
      <div className="App">
        <Sidebar />   
        <style>{'body { background-color: lightgray; }'}</style>
      </div>
    </Router>  
        
    
      
    </>
  
  )
}

