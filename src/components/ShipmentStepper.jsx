 
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Stepper, Step, StepLabel, Box} from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; 
import PackageIcon from '@mui/icons-material/MoveToInbox'; 
import DoneAllIcon from '@mui/icons-material/DoneAll'; 
import CancelIcon from '@mui/icons-material/Cancel';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { translateState } from '../utils/translate'; 

const steps = [
  'TICKET_CREATED',
   'PACKAGE_RECEIVED',
   'OUT_FOR_DELIVERY',
   'DELIVERED'
];
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#008900',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#008900',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 4,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 4,
  },
}));

const ShipmentStepper = ({ currentState,english }) => {
  
  const stateToIndex = {
    TICKET_CREATED: 0,
    PACKAGE_RECEIVED: 1,
    OUT_FOR_DELIVERY: 2,
    DELIVERED_TO_SENDER:2,
    CANCELLED:2,
    DELIVERED: 3,
    
  };
  const StepIcon = ({ icon, active, completed }) => {
    
    const icons = {
      1: <AddShoppingCartIcon />,
      2: <PackageIcon />,
      3: <LocalShippingIcon  />,
      4: <DoneAllIcon />
    };
    let displayIcon;
    if (currentState === 'CANCELLED'  ) {
      displayIcon = <CancelIcon fontSize="large" sx={{color:'red'}}/>;
    } else if (currentState === 'DELIVERED') {
      displayIcon = <CheckCircleIcon fontSize="large" sx={{color:'green'}}/>;
    } else if( currentState === 'DELIVERED_TO_SENDER'){
      displayIcon= <ReportProblemIcon fontSize="large"sx={{color:'yellow' }}/>
    }else {
      displayIcon =  < AddShoppingCartIcon fontSize="large"/> ;
    }
    return (
      <div >
        {completed ?<CheckCircleIcon sx={{color:'green'}}/>: active?displayIcon: icons[icon] }
      </div>
    );
  };
  
  const activeStep = stateToIndex[currentState];

  return (
    <Box sx={{ width: '100%'  }}>
      <Stepper sx={{'& .MuiStepLabel-label.Mui-active ':{fontFamily:'cairo',fontSize:'1rem',fontWeight:'700'}}} alternativeLabel activeStep={activeStep} connector={<CustomConnector />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel  sx={{ '& .MuiStepLabel-label': { fontFamily: 'cairo',fontSize:'1rem',fontWeight:'700' } }} 
              StepIconComponent={(props) => ( <StepIcon icon={index + 1} active={props.active} completed={props.completed} />)}
            >
              {translateState(english,label)}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
export default  ShipmentStepper;