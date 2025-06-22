import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateTripForm from '../forms/createTripForm';


const CreateNewTripFormModal = ({ isOpen, onClose, content}) => {

  return (
    <Modal show={isOpen} >
         <Modal.Header closeButton onClick={()=>onClose()}>
           <Modal.Title>Create a new trip! </Modal.Title>
         </Modal.Header>
         <Modal.Body> 
            Modal Open!<br />
            <CreateTripForm />
    
         </Modal.Body>
         <Modal.Footer>
           <Button variant="danger" onClick={onClose}>
             Close
           </Button>
         </Modal.Footer>
       </Modal> 
  );
};

export default CreateNewTripFormModal;
