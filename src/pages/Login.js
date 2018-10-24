import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { CustomButtom, CustomInput } from '../styled/Components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends Component {

  login = (event) => {

    event.preventDefault();

    console.log(event);

    toast.error("Toast Successfully!");

    console.log("okokok");

  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 mt-5">
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <CustomInput type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <CustomInput type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <CustomButtom onClick={this.login} color="danger col-12">danger</CustomButtom>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
