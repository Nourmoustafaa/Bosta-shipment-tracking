/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Divider, Container } from '@mui/material';
import DataTable from '../components/DataTable';
import Navbar from '../components/Navbar';
import { Card } from 'react-bootstrap';
import { translateState,translateData, formatTimestamp, formatDate } from '../utils/translate';
import ShipmentStepper from '../components/ShipmentStepper';
import DeliveryAddress from '../components/DeliveryAddress';

const ShipmentTrack = () => {
    const [transitEvents, setTransitEvents] = useState([]);
    const [shipmentData, setShipmentData] = useState({});
    const [english,setEnglish]=useState(false);
    const columns = [
        { field: 'state', headerName:translateState (english,'Details'), width: 288, sortable: false },
        { field: 'formattedTime', headerName: translateState (english,'Time'), width: 170, sortable: false },
        { field: 'formattedDate', headerName: translateState (english,'Date'), width: 170, sortable: false },
        { field: 'hub', headerName: translateState (english,'Hub'), width: 170, sortable: false },
    ];

    return (
        <Box 
        
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            sx={{  padding: '20px' }}  
        >
            <Box 
                width='90%' 
                sx={{  borderRadius: '8px' }}
            >
                <Navbar setTrackingDatatable={setTransitEvents} setShipmentData={setShipmentData} setEnglish={setEnglish}english={english}/>
                <Grid spacing={0}>
                    <Card>
                        <Grid container sx={{ color: 'grey', margin: '20px' }} spacing={37}>
                           
                            <Grid item xs={3}>
                                <h6><strong> {translateState(english,('Estimated_Delivery_Date'))}</strong></h6>
                            </Grid>
                            <Grid item xs={3}>
                                <h6><strong>{translateState(english,('Seller_Name'))} </strong></h6>
                            </Grid>
                            <Grid item xs={3}>
                                <h6><strong>{translateState(english,('Last_Update'))} </strong></h6>
                            </Grid>
                            <Grid item xs={3}>
                                <h6><strong>{shipmentData.TrackingNumber} {translateState(english,('Tracking_Number'))} </strong></h6>
                            </Grid>
                        </Grid>
                        
                        <Grid container sx={{ fontSize: 19, margin: '20px' }} spacing={31}>
                         
                            <Grid item xs={3}>
                                <strong>{shipmentData.PromisedDate? formatDate(shipmentData?.PromisedDate) :" "}</strong>
                            </Grid>
                            <Grid item xs={3} paddingLeft={8}>
                                <strong>SOUQ.COM</strong>
                            </Grid>
                            <Grid item xs={3}>
                                <strong>{formatTimestamp(shipmentData.CurrentStatus?.timestamp)}</strong>
                            </Grid>
                            <Grid item xs={3}>
                                <strong style={{ 
                                    color: shipmentData.CurrentStatus?.state === 'CANCELLED' ? 'red' :
                                    shipmentData.CurrentStatus?.state === 'DELIVERED_TO_SENDER'  ? 'yellow': 'inherit'
                                    }}>
                                        {translateState(english,shipmentData.CurrentStatus?.state)}
                                </strong>
                            </Grid>
                        </Grid>

                        <Divider sx={{ backgroundColor: 'lightgrey' }}></Divider>
                        <Grid container sx={{ margin: '40px' }}>
                            <ShipmentStepper currentState={shipmentData.CurrentStatus?.state} english={english}/>
                        </Grid>
                    </Card>

                    <Grid container pt={5} spacing={34}>
                       
                        <Grid item xs={5}>
                            <DeliveryAddress english={english}/>
                        </Grid>

                        
                        <Grid item xs={7} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                            <h4><strong>{translateState(english,'Shipment_Details') }</strong></h4>
                            {transitEvents.length > 0 ? (
                                <DataTable columns={columns} rows={translateData(english,transitEvents)} />
                            ) : (
                                <p> {translateState(english,'No_Data_Available_Please_Enter_a_Tracking_Number')} </p>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ShipmentTrack;
