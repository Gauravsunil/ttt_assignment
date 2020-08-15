import React, { Component } from "react";
import axios from "axios";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      str: "",
      valid: "true",
      count: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      str: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { str } = this.state;
    if (!isNaN(str)) {
      this.setState({
        valid: "String",
      });
    } else if (str === str.toUpperCase()) {
      this.setState({
        valid: "LowerCase",
      });
    } else {
      axios
        .get(`/users/string/${str}`)
        .then((res) => {
          console.log(res);

          this.setState({ count: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
      this.setState({ valid: "true" });
    }
  }
  render() {
    return (
      <>
        <div className="container">
          <div
            className="col-xs-10 col-md-5 col-xs-offset-1 col-md-offset-4 block"
            id="banner-content1"
          >
            <center>
              <img src="logo123.jpg" alt="" width="72" height="72" />
              <h2>Terribly Tiny Tales</h2>
            </center>
            <form method="post" onSubmit={this.handleSubmit}>
              {(() => {
                if (
                  this.state.valid === "String" ||
                  this.state.valid === "LowerCase"
                ) {
                  return (
                    <div class="alert alert-danger" role="alert">
                      Enter {this.state.valid} Only!
                    </div>
                  );
                }
              })()}
              <div className="form-group">
                <label htmlFor="num">Enter String</label>
                <input
                  type="text"
                  name="str"
                  id="str"
                  value={this.state.str}
                  onChange={this.handleChange}
                  className="form-control"
                  required
                  //pattern="[0-9]+"
                  autoFocus
                />
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Submit
              </button>
            </form>
            {/* ---------------------------------------Displaying Encoded/Decoded Text------------------------------------- */}
            {(() => {
              if (this.state.count != null) {
                return (
                  <>
                    <div className="result">
                      <h2>{this.state.count}</h2>
                    </div>
                  </>
                );
              }
            })()}
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
