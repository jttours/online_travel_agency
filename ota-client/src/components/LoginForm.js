import { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logoReact from './logoReact.jpeg';
import { loginUser } from '../redux/actions';

function LoginForm(props) {
  let history = useHistory();

  const [loginState, setLoginState] = useState({});
  const {user,login} = props;

  function handleRegister() {
    history.push("/register");
  }
  
  return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={logoReact} /> Log-in to your account
      </Header>
      <Form size='large' onSubmit={(event) => {
                event.preventDefault();
                console.log('loginState is - ',loginState);
                login(loginState, history);
              }}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(event) => {
                    const userName = event.target.value;
                    setLoginState({ ...loginState, ...{ userName } });
                  }}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={(event) => {
                    const userPassword = event.target.value;
                    setLoginState({ ...loginState, ...{ userPassword } });
                  }}
          />

          <Button type="submit" color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <button type="button" onClick={handleRegister}>Sign Up</button>
      </Message>
    </Grid.Column>
  </Grid>
)
}

const mapStateToProps = (state) => {
  console.log('the state is - ',state);
  return {
    user: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginState,history) => {
      dispatch (loginUser(loginState,history));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);