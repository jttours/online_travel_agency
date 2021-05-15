import { useState } from 'react';
import connect from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logoReact from './logoReact.jpeg';

function LoginForm() {
  let history = useHistory();

  function handleRegister() {
    history.push("/register");
  }
  
  return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={logoReact} /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
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

export default LoginForm