import React from 'react';
import Button from 'calcite-react/Button';
import './DistanceButtons.css'
import Card, {
  CardTitle,
  CardContent,
} from 'calcite-react/Card';


import "./DistanceButtons.css";


const DistanceButtons = (props) => {


return (
<div className="DistanceButtons">

<Card>
  <CardContent className = "distanceButtonsCardHeight">
    <CardTitle>Select Distance Buttons</CardTitle>
    <p>
      The Distance Buttons allows a user to choose which explosion raidus is to be shown or not shown at all.
      If a specific button is pressed, the map will rerender and the radius will be shown / not shown. {' '}
      
    </p>

    <div className = "buttonGroup">
    <Button clear fullWidth
    onClick={props.isOuterCircleMethod}>
    9 Kilometer
  </Button>

  <Button clear fullWidth
  onClick={props.isMiddleCircleMethod}>
    5 Kilometer
  </Button>
  <Button clear fullWidth
  onClick={props.isInnerCircleMethod}>
    3.2 Kilometer
  </Button>

  </div>
  </CardContent>
</Card>


</div>
  );
}

export default DistanceButtons;
