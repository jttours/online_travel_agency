import { useState, useEffect} from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react'

function Vacations(state) {

  const [vacationsList,setVacationsList] = useState([]);

  useEffect(()=> {
    Axios.get('http://localhost:6789/api/vacations').then((response)=> setVacationsList(response.data));
},[])


// {teamList.map((val)=>{
//   return (
//   <div key={val.team_id} className="card">
//       <h1>Team ID: {val.team_id}</h1> 
//       <h1> Team Name: {val.team_name}</h1>
//       <button onClick={()=>{selectTeam(val.team_id)}}>Show meetings</button>
  
      
//   </div>);
// })}


    return (
        <div>
            <h1> WELCOME {state.user.user.user.firstName}</h1>
            {console.log(vacationsList)}
            {/* {vacationsList.map((vacation)=>{
              return (
                <Card>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  10 followers
                </a>
              </Card.Content>
              <Card.Content>
                <Card.Header>Daniel</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                  Daniel is a comedian living in Nashville.
                </Card.Description>
              </Card.Content>
              <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Dates</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                  dates displayed here
                </Card.Description>
              </Card.Content>
              
            </Card>
              )
            })} */}
            
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
