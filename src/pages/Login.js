import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div></div>
        <div><Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <Button color="danger">danger</Button>
        </Form></div>
        <div></div>
      </div>
    )
  }
}
