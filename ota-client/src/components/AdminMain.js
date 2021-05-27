import { useState, useEffect} from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
//import './adminMain.css';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

function AdminMain(state) {
    let history = useHistory();

  const [vacationsList,setVacationsList] = useState([]);

  useEffect(()=> {
    Axios.get('http://localhost:6789/api/vacations').then((response)=> setVacationsList(response.data));
},[])

const onEditClick = (ota_vacation_id) => {
    console.log(ota_vacation_id);
}

const onDeleteClick = (ota_vacation_id) => {
    console.log(ota_vacation_id);
    Axios.delete(`http://localhost:6789/api/deleteVacation/${ota_vacation_id}`);
    window.location.reload(false);
}

const addVacation = () => {
    history.push("./addVacation");
}


    return (
        <div>
            <h1> WELCOME {state.user.user.user.firstName}</h1>
            <Button basic color='teal' onClick={addVacation}>
                Add Vacation
            </Button>
            {console.log(vacationsList)}
            <Card.Group itemsPerRow={3}>
            {vacationsList.map((v)=>{
              return (
                
                <Card key={v.ota_vacation_id}>
              <Card.Content extra>
                <a>
                  <Icon name='edit' onClick={()=>{onEditClick(v.ota_vacation_id)}}/>
                </a>
                <a>
                <Icon name='delete' onClick={()=>{onDeleteClick(v.ota_vacation_id)}}/>
                </a>
                
                
              </Card.Content>
              <Card.Content>
                <Card.Header>{v.ota_vacation_destination} </Card.Header>
                <Card.Meta></Card.Meta>
                <Card.Description>
                  Price: {v.ota_vacation_price}
                </Card.Description>
              </Card.Content>
              <Image src={`http://localhost:6789/${v.ota_vacation_image_url}`} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Dates</Card.Header>
                <Card.Meta>Departure : {v.ota_vacation_departure_date}</Card.Meta>
                <Card.Meta>Return: {v.ota_vacation_return_date}</Card.Meta>
                <Card.Description>
                {v.ota_vacation_description}
                </Card.Description>
              </Card.Content>
              
            </Card>
            
              )
            })}
            </Card.Group>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('the state innthe admin vacations component is - ',state);
    return {
      user: state,
    }
  }

export default connect(mapStateToProps)(AdminMain);
