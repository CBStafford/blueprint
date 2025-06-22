"use client"

import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getTrips } from "../../../api";
import CreateNewTripFormModal from '../modals/CreateNewTripFormModal';

// import GoogleMapApp from '../googleMaps/googleMaps';

const GetTrips = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const trips = getTrips();
    const userID = localStorage.getItem("userID")

    return (
      <Container>
        <Button variant="primary" onClick={handleShow}>
        Create New Trip
      </Button>

      <CreateNewTripFormModal
        isOpen={show}
        onClose={handleClose}
        setClose = {setShow}
        content={<p>You selected: MODAL!!!!!</p>}          
      />

        {trips ? 
          trips?.map((trip, index)=>(
            <Accordion key={index}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Col xs lg="2" className="trip-list-text-col" md="auto"><span className='trip-list-name'>{trip.date} </span> </Col> 
                      <Col xs lg="2" className="trip-list-text-col" md="auto"><span className='trip-list-name'>{trip.leaveTime} - {trip.returnTime}</span>  </Col> 
                      <Col xs lg="2" className="trip-list-text-col" md="auto"><span className='trip-list-name'>{trip.groupTitle} </span> </Col> 
                      <Col xs lg="2" className="trip-list-text-col" md="auto"><span className='trip-list-name'>{trip.destination} </span> </Col> 
                      {trip.driverId ?
                        <Col xs lg="2" className="trip-list-text-col" md="auto"><span className='trip-list-name'>Driver: {trip.driverName} </span> </Col> 
                        :
                        null
                      }
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row>
                          <Col>
                          <div className='TripInfoHeader'>Trip Contact Info</div>
                          <span className="trip-list-item">Requested By:</span> {trip.requestedByID}<br />
                          <span className="trip-list-item">Trip Contact Name:</span> {trip.contactName}<br />
                          <span className="trip-list-item">Contact Info:</span> P: {trip.contactPhone} / E: {trip.contactEmail}<br />
                        </Col>
                        <hr />
                        </Row>
                        <Row>
                          <Col>
                            <div className='TripInfoHeader'>Destination Information</div>
                            <span className="trip-list-item">Destination: </span>{trip.destination} <br />
                            <span className="trip-list-item">Address: </span>{trip.address}<br />
                            {trip.apt ?
                              <div> 
                                {trip.apt} <br />
                              </div>
                              :
                              null
                            }
                            {trip.city}, {trip.state}<br />
                            {trip.zip}<br />
                            <span className="trip-list-item">Distance</span> {trip.miles} <br />
                            <span className="trip-list-item">Travel Time</span> {trip.duration}<br />
                          </Col>
                          <Col>
                            <div className='TripInfoHeader'>Pickup Information</div>
                            <span className="trip-list-item">Pickup Location:</span> {trip.pickupLocation} <br />
                            <span className="trip-list-item">Number of Students:</span> {trip.numStudents}<br />
                            <span className="trip-list-item">Number of Chaperones:</span> {trip.numChaperones}<br />
                            <span className="trip-list-item">Any Equipment/Bagage:</span> {trip.equipment}
                          </Col>  
                        </Row>
                        <hr />
                        <Row>
                          <div className='TripInfoHeader'>Food Stop Details</div>
                          <span className="trip-list-item">Number of Food Stops: </span>{trip.foodStops} <br />
                          <span className="trip-list-item">Food Stop Details:</span> {trip.foodStopsDetails}<br />
                        </Row>
                        <hr />
                        <Row>
                        <div className='TripInfoHeader'>Notes/Special Instructions</div>
                        {trip.notes} 
                        </Row>
                        
                    </Accordion.Body>                   
                </Accordion.Item>
            </Accordion>
        ))
        :
            null
        } 

    </Container>    
    )
}
export default GetTrips