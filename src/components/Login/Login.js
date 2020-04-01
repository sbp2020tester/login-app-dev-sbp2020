import React from "react";
import PostData from "../../services/PostData";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if (this.state.username && this.state.password) {
      PostData("login", this.state).then(result => {
        let responseJSON = result;
        if (responseJSON.userData) {
          sessionStorage.setItem("userData", responseJSON);
          this.setState({ redirect: true });
          console.log(responseJSON);
        } else {
          console.log("Login error");
        }
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={"/home"} />;
    }

    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }
    return (
      <div className="container mt-4 col-lg-4">
        <div className="card col-sm-10">
          <div className="card-body">
            <div className="form-group text-center">
              <img
                src="https://www.scotiabank.com/content/dam/scotiabank/images/logos/2019/scotiabank-logo-red-desktop-200px.svg"
                alt="70"
                width="170"
              />
            </div>
            <div className="form-group">
              <label className="font-weight-bold">User</label>
              <input
                type="text"
                name="username"
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="font-weight-bold">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="Login"
              onClick={this.login}
              className="btn btn-danger btn-block font-weight-bold"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
