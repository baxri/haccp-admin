import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { CustomButtom, CustomInput } from '../styled/Components';
import { ToastContainer, toast } from 'react-toastify';
import Mmc from '../gateway/Mmc';

export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      grantType: 'password',
      username: 'admin@haccp.com',
      password: 'xCM9kj2xNtx4)Kr4',
      clientId: 2,
      clientSecret: 'N8y1JBLpijxodiNe8JjuqBGqO9XWEeIbuLEJG3md',
    }
  }


  login = async (event) => {

    event.preventDefault();

    try {

      await Mmc.login(
        this.state.grantType,
        this.state.username,
        this.state.password,
        this.state.clientId,
        this.state.clientSecret
      );

      this.props.history.push('/dashboard');
    } catch (error) {
      toast.error(error.message);
    }
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
        <ToastContainer />
      </div>
    )
  }
}
