import React, { useState } from 'react'
import './AdminButton.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faMobile, faUser} from "@fortawesome/free-solid-svg-icons";
import AddMobile from './AddMobiles' 
import AddCat from './AddCategory'
import AddUser from './AddUser'

const AdminButton = () => {
  const [mobilewindow, setMobileWindow] = useState(false);
  const toggleMobileWindow = (e) => {
    e.preventDefault();
    setMobileWindow(!mobilewindow);
  }

  const [categorywindow, setCategoryWindow] = useState(false);
  const toggleCatWindow = (e) => {
    e.preventDefault();
    setCategoryWindow(!categorywindow);
    
  }

  const [userwindow, setUserWindow] = useState(false);
  const toggleUserWindow = (e) => {
    e.preventDefault();
    setUserWindow(!userwindow);
    
  }
  return (
    <div>      
    <div className='parent1'>
      <div className='float'>
        <div className="wrapper">
        <input type="checkbox" />
            <div className="fab"></div>
                <div className="fac">
                    <a onClick={(e) =>{toggleMobileWindow(e);}} href='#'><FontAwesomeIcon icon={faMobile} /></a>
                    <a onClick={(e) =>{toggleCatWindow(e);}} href="#"><FontAwesomeIcon icon={faEdit} /></a>
                    <a onClick={(e) =>{toggleUserWindow(e);}} href="#"><FontAwesomeIcon icon={faUser} /></a>
                </div>
            </div>
      </div>
      <div className={mobilewindow ? 'overlay_form showWindow': 'overlay_form hideWindow'} onClick={(e)=>toggleMobileWindow(e)} >
      </div>
        <div className={mobilewindow ? 'TeamForm showWindow': 'TeamForm hideWindow'}>
          <AddMobile isOpen={mobilewindow} toggle={toggleMobileWindow}/>
          </div>  
        
      <div className={categorywindow ? 'overlay_form showWindow': 'overlay_form hideWindow'} onClick={(e)=>toggleCatWindow(e)} >
      </div>
        <div className={categorywindow ? 'TeamForm showWindow': 'TeamForm hideWindow'}>
          <AddCat isOpen={categorywindow} toggle={toggleCatWindow}/>
          </div> 

      <div className={userwindow ? 'overlay_form showWindow': 'overlay_form hideWindow'} onClick={(e)=>toggleUserWindow(e)} >
      </div>
        <div className={userwindow ? 'TeamForm showWindow': 'TeamForm hideWindow'}>
          <AddUser isOpen={userwindow} toggle={toggleUserWindow}/>
          </div> 
    </div>
    </div>
  )
}

export default AdminButton;