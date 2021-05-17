import { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import logoReact from './logoReact.jpeg';
import { addUser } from '../redux/actions';

function RegisterForm(props) {

  console.log('the props are - ',props);
  const {user,register} = props;
  const [userState, setUserState] = useState({});
  const history = useHistory();
  


    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={logoReact} /> Register a new account
      </Header>
      <Form size='large' onSubmit={(event) => {
                event.preventDefault();
                register(userState, history);
                history.push("/");
              }}>
        <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' onChange={(event) => {
                        const firstName = event.target.value;
                        setUserState({ ...userState, ...{ firstName } });
                      }} />
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Last Name' onChange={(event) => {
                        const lastName = event.target.value;
                        setUserState({ ...userState, ...{ lastName } });
                      }} />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(event) => {
                        const userName = event.target.value;
                        setUserState({ ...userState, ...{ userName } });
                      }} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password' onChange={(event) => {
                    const userPassword = event.target.value;
                    setUserState({ ...userState, ...{ userPassword } });
                  }}
          />

          <Button color='teal' type="submit" fluid size='large'>
            Register
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
    )
}

const mapStateToProps = (state) => {
  console.log('the register state is - ',state);
  return {
    user: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userState) => {
      dispatch (addUser(userState));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm);
