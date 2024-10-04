/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './DeliveryAddress.css'; 
import enquiryIcon from '../assets/images/enquiryIcon.png';
import { translateState } from '../utils/translate';

const DeliveryAddress = ({english}) => {
  return (
    <div className="delivery-address-container">
      
      <h2 className="header">{translateState(english,'Delivery_Address')} </h2>
      
      <div className="address-box">
        <p>  امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك ٢٣، Cairo </p>
      </div>
        <p className="bold-text">{translateState(english,'Is_there_a_Problem_With_Your_Shipment')} </p>
      < div className="issue-content">
        <button className="report-button"> {translateState(english,'Report_a_problem')} </button>
        <img src={enquiryIcon} alt="Logo" className='logo' />

      </div>
    </div>
  );
};

export default DeliveryAddress;