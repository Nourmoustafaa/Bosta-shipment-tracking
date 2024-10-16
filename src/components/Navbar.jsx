/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React , { useState }from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {Popover, OverlayTrigger} from 'react-bootstrap'; 
import { red } from '@mui/material/colors';
import logo from '../assets/images/logo-bosta.jpg'; 
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import {translateState} from '../utils/translate'; 
import CloseIcon from '@mui/icons-material/Close';
const Navbar = ({setTrackingDatatable ,setShipmentData,setEnglish,english}) => {
    
    const [trackingNumber, setTrackingNumber] = useState(''); 
    const [showPopover, setShowPopover] = useState(false); 
    const baseUrl = 'https://tracking.bosta.co/shipments/track/';
    
    
    const handleClose = () => {
      setShowPopover(false); 
    };  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = baseUrl + trackingNumber; 
            const response = await axios.get(url);
            setShipmentData(response.data);
            const transitEvents=response.data.TransitEvents;
            setTrackingDatatable(transitEvents);
            
        } catch (error) {
            console.error("Error fetching tracking data:", error);
        }
    };
    
    const popover = (
    <Popover >
        <Popover.Header className="popover-header" as="h3"> 
              {translateState(english,'Track_Shipment')} 
              <CloseIcon onClick={handleClose}/>
        </Popover.Header>
        <Popover.Body >
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="input-container">
                <button type="submit" className="submit-button">
                <SearchIcon sx={{ color: 'white' }}/>
                </button>
                <input
                type="text"
                placeholder={translateState(english,'Tracking_Number')} 
                className="search-input"
                required
                value={trackingNumber}
                
                onChange={(e) => setTrackingNumber(e.target.value)}
                />
            </div>
            
        </form>
        </Popover.Body>
    </Popover>
    );
  return (
    <nav className="navbar">
      <div className="navbar-section left-section">
        <ul className="nav-links">
          <li>
          <Link to="/shipment" onClick={() => setEnglish(!english)}>
           {english ? 'عربي' : 'ENG'}
          </Link>
          </li>
          <li>
            <Link to="/">{translateState(english,'Sign_In')}  </Link>
          </li>
          </ul>
          
            <OverlayTrigger
                trigger="click" 
                placement="bottom" 
                overlay={popover} 
                show={showPopover}
                  >
                    <button className="custom-button" onClick={() => setShowPopover(!showPopover)}>
                        <KeyboardArrowLeftIcon sx={{color:red }}/>
                        {translateState(english,'Track_Shipment')}  
                    </button>
            </OverlayTrigger>

      </div>

      <div className="navbar-section center-section">
        <ul className="nav-links">
          <li>
            <Link to="/">{translateState(english,'Call_Sales')}  </Link>
          </li>
          <li>
            <Link to="/">{translateState(english,'Prices')} </Link>
          </li>
          <li>
            <Link to="/">{translateState(english,'Home')} </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-section right-section">
        
        <h1 className='navtitle' >{translateState(english,'Bosta')} </h1> 
        <div>
            <img src={logo} alt="Logo" height="120" width="120" />
        </div>
        
       
      </div>
    </nav>
  );
};

export default Navbar;

