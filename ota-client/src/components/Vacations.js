import { useState, useEffect} from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

function Vacations(state) {

  const [vacationsList,setVacationsList] = useState([]);

  useEffect(()=> {
    Axios.get('http://localhost:6789/api/vacations').then((response)=> setVacationsList(response.data));
},[])





    return (
        <div>
            <h1> WELCOME {state.user.user.user.firstName}</h1>
            {console.log(vacationsList)}
            <Card.Group itemsPerRow={3}>
            {vacationsList.map((v)=>{
              return (
                
                <Card key={v.ota_vacation_id}>
              <Card.Content extra>
              <a>
                <Icon name='star outline'/>
                10 followers
                </a>
                <Button basic color='teal'>
                  Teal
                </Button>
              </Card.Content>
              <Card.Content>
                <Card.Header>{v.ota_vacation_destination}</Card.Header>
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

export default connect(mapStateToProps)(Vacations);
