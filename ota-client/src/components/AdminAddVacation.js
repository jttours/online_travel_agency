import { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button, Divider, Form, TextArea, Select } from 'semantic-ui-react';




const countryOptions = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', text: 'Australia' },
    { key: 'at', value: 'at', text: 'Austria' },
    { key: 'az', value: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', text: 'Benin' },
  ]



function AdminAddVacation(state, props) {

  const serverURL = 'http://localhost:6789';
    // const {addVacation} = props;
    let history = useHistory();
    const [vacationDescription,setVacationDescription] = useState("");
    const [vacationDestination,setVacationDestination] = useState("");
    const [vacationImage, setVacationImage] = useState("");
    const [vacationDepartureDate,setVacationDepartureDate] = useState("");
    const [vacationReturnDate,setVacationReturnDate] = useState("");
    const [vacationPrice,setVacationPrice] = useState();

    const onSubmit=(e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      formData.append('destination', vacationDestination);
      console.log('trying to submit -',vacationDestination,vacationImage,vacationDepartureDate,vacationReturnDate,vacationPrice,vacationDescription);


      fetch(`${serverURL}/api/vacation`, {
         method: 'POST',
         body: formData, vacationDestination
      }).then(r => console.log(r));
        setVacationDestination("");
        setVacationImage("");
        setVacationDepartureDate("");
        setVacationReturnDate("");
        setVacationPrice("");

      /*axios
          .post(`${serverURL}/api/vacation`, (formData))
          .then((res) => {

      setVacationDestination("");
      setVacationImage("");
        setVacationDepartureDate("");
        setVacationReturnDate("");
        setVacationPrice("");
        setVacationDescription("");  
         
          console.log("File Upload success",res);
          })
          .catch((err) => console.log("File Upload ERROR",err));*/

                  
      }

    
    

    // let vacationImage;
    
    
    return (
        <div>
            <h1> WELCOME {state.user.user.user.firstName}</h1>

    
      <Form size='large' 
          encType="multipart/form-data"
          action={`${serverURL}/api/vacation`}
          method="POST"
          onSubmit={onSubmit}
            >
        <Form.Group widths='equal'>
          
        <Select placeholder='Select your destination' label='Destinatiom' options={countryOptions} name = 'destination' onChange = {(e)=> {
                setVacationDestination(e.target.innerText)}}/>
          <Form.Field
            label='Destinatiom Image'
            type="file"
            name="image"
            control='input'
            accept="image/*"
            multiple={false}
            placeholder='Destination Image'
            onChange={(e) => {setVacationImage(e.target.files[0])}}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            label='Departure Date'
            control='input'
            name = 'departureDate'
            type="datetime-local"
            placeholder='Departure Date'
            
            onChange = {(e)=> {
                setVacationDepartureDate(e.target.value)}}
            value={vacationDepartureDate}
          />
          <Form.Field
            label='Return Date'
            control='input'
            type="datetime-local"
            name = 'returnDate'
            placeholder='Return Date'
            onChange = {(e)=> {
                setVacationReturnDate(e.target.value)}}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            label='Price'
            control='input'
            name = 'price'
            type="number"
            placeholder='Price'
            onChange = {(e)=> {
                setVacationPrice(e.target.value)}}
          />
          <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Vacation Description'
      name = 'description'
      placeholder='Vacation Description'
      onChange = {(e)=> {
                setVacationDescription(e.target.value)}}
    />
        </Form.Group>
        <Button color='teal' type="submit" fluid size='large'>
            Add Vacation</Button>
        <Divider hidden />
      </Form>
      
  

        </div>
    )
}


const mapStateToProps = (state) => {
    console.log('the state innthe admin component is - ',state);
    return {
      user: state,
    }
  }

export default connect(mapStateToProps)(AdminAddVacation);
