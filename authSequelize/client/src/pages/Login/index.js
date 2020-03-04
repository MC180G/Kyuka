import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import "./style.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  login = event => {
    event.preventDefault();
    API.login({
      username: this.state.username.toLowerCase(),
      password: this.state.password
    })
      .then(res => {
        if (res.status && res.status === 200 && !res.data.errors) {
          console.log("login successful")
          this.props.isAuthorized();
        } else {
          this.setState({
            error: "A server error has occured."
          });
        }
      })
      .catch(err => {
        console.log(err);
        if (err.response.data === "Unauthorized") {
          this.setState({ error: "Username or password incorrect!" });
        } else {
          this.setState({error: "A server error has occured."});
        };
      });

    this.setState({ password: "" });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value.trim()
    });
  };

  render() {
    return (
      <Container
        classes="loginContainer"
      >
        <form>
          <FormGroup>
            <Label text="Username" />
            <Input
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label text="Password" />
            <Input
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
          </FormGroup>
          {this.state.error ? <Small text={this.state.error} /> : ""}
          <FormBtn
            disabled={
              this.state.username && this.state.password ? "" : "disabled"
            }
            text="Login"
            onClick={this.login}
            classes="btn-primary"
          />
          <Link to="/register">Not registered? Click here.</Link>
        </form>
      </Container>
    );
  }
}

export default Login;
