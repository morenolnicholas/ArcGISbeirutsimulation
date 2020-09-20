import React, { useState } from 'react';
import WebMapView from './components/WebMapView/WebMapView';
import InputCoordinates from './components/InputCoordinates/InputCoordinates';
import DistanceButtons from './components/DistanceButtons/DistanceButtons';
import NavBar from './components/NavBar/NavBar.js';
//bootstrap import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = (props) => {

  const [coordinates, setCoordinates] = useState({longitude:-117.426392, latitude: 33.930370});

  const[outerCircle, setOuterCircle] = useState(true);
  const[middleCircle, setMiddleCircle] = useState(true);
  const[innerCircle, setInnerCircle] = useState(true);

  const viewOuterCircle = () =>{
    setOuterCircle(!outerCircle);
   
  }

  const viewMiddleCircle = () =>{
    setMiddleCircle(!middleCircle);
  }

  const viewInnerCircle = () =>{
    setInnerCircle(!innerCircle);
  }

  const setLocation = (longCoor, latCoor) =>{
    setCoordinates(prevCoordinates => ({
      longitude: longCoor,
      latitude: latCoor
    }));
    
  }


  
    return (
      <div className="App">
  {/* NavBar component */}  
<NavBar />

  {/* Container of the map itself */}  
<Container>
      <WebMapView 
      isOuterCircle = {outerCircle} isMiddleCircle = {middleCircle} isInnerCircle = {innerCircle}
      fullCoordinates = {coordinates}
      />
</Container>



  {/* Container of both the input coordinates and the distance buttons*/}
<Container className = "interactiveContainer">
  <Row>
      <Col md = "6">
      <InputCoordinates setCoordinates = {setLocation} />
      </Col>
      <Col md = "6">
      <DistanceButtons isOuterCircleMethod = {viewOuterCircle} isMiddleCircleMethod = {viewMiddleCircle}
        isInnerCircleMethod = {viewInnerCircle}/>
      </Col>
  </Row>
</Container>
      </div>
    );
  
}

export default App;
