import React from 'react';
import {useForm} from "react-hook-form";
import "./InputCoordinates.css";
import Button from 'calcite-react/Button';
import TextField from 'calcite-react/TextField';
import Form, {
  FormControl,
  FormControlLabel,
  } from 'calcite-react/Form';
  import Card, {
    CardTitle,
    CardContent,
  } from 'calcite-react/Card';



//Used the useFormHook - Look at this site for reference
//https://react-hook-form.com/
const InputCoordinates = (props) => {

  //Form-hook, allows us to retrieve the information from the form
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    //retrieving the props functions to push information to the WebMapView file
    props.setCoordinates(data.longCoor, data.latCoor);
  } 

return (
<div className="InputCoordinates">
  {/* Form to retrieve the input of the coordinates. 
      when button is clicked, it sends the ref info
      to the onSumbit function. */}


<Card >
  <CardContent>
    <CardTitle>Coordinates</CardTitle>
    <p>
      Enter the Longitude and Latitude of the area you are interested in viewing with. 
     
    </p>

    <Form onSubmit={handleSubmit(onSubmit)}>
      
      <FormControl>
        <FormControlLabel>Longitude</FormControlLabel>
          <TextField fullWidth name="longCoor" ref={register} />
        </FormControl>

        <FormControl>
        <FormControlLabel>Latitude</FormControlLabel>
          <TextField fullWidth name="latCoor" ref={register} />
        </FormControl>
        
        <Button clear type = "submit">
           Submit Coordinate
        </Button>
    </Form>

  </CardContent>
</Card>

   

</div>
  );
}

export default InputCoordinates;
