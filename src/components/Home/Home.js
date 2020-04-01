import React from "react";
import { Redirect } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      console.log("Call User Fedd");
    } else {
      this.setState({ redirect: true });
    }
  }

  logout() {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <img
              src="https://www.scotiabank.com/content/dam/scotiabank/images/logos/2019/scotiabank-logo-red-desktop-200px.svg"
              alt=""
              style={{
                width: "50%",
                position: "fixed",
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%"
              }}
            />
            <button
              type="button"
              onClick={this.logout}
              className="btn btn-secondary btn-lg float-right"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
