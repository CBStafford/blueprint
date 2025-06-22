'use client';

import { useState } from 'react';
import { setNewLeague } from '../../../api';
import ColorPicker from '../colorPicker/colorPicker';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function UploadForm() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const[primeColor, setPrimeColor] = useState("#ffffff");
  const[secondColor, setSecondColor] = useState("#ffffff");
  const[triColor, setTriColor] = useState("#ffffff");

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const imgFolder = "league"

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setNewLeague(name, setName, file, setFile, setError, setSuccess, primeColor,secondColor,triColor, imgFolder)
  };

  return (
    <form onSubmit={onSubmit}>
      <Container className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
      <input
         type="hidden"
         id="commissioner_id"
         value="1"
         onChange={(e) => setName(e.target.value)}
      />
      <Row>
        <label htmlFor="name">League Name</label> <br /> 
        <input
         type="text"
         id="name"
         value={name}
         onChange={(e) => setName(e.target.value)}
        />
      </Row>
      <Row>
          <Col>
            <label htmlFor="displayName">Primary Color</label> <br />                       
            <ColorPicker  color={primeColor} setColor={setPrimeColor} />
          </Col>
          <Col>
            <label htmlFor="secondaryColor">Secondary Color</label> <br /> 
            <ColorPicker  color={secondColor} setColor={setSecondColor} />
          </Col>
          <Col>
            <label htmlFor="triciaryColor">Triciary Color</label> <br /> 
            <ColorPicker  color={triColor} setColor={setTriColor} />
          </Col>
      </Row>
      <Row>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      </Row>
     
      <input type="submit" value="Upload" />
      </Container>
    </form>
  );
}
