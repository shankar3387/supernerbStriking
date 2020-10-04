import React, { Component } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AuthSer from '../../Server/server';
// import store from 'store';
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {
        email: '',
      },
      errorMessage: '',
    };
    //  this.refs;
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    const { history } = this.props;
    // console.log(this)
    e.preventDefault();
    history.push('/admin');
    // console.log(e);
    // const { username, password } = this.state;

    // // this.setState({ error: false });

    // if (!(username === 'george' && password === 'foreman')) {
    //   //   return this.setState({ error: true });
    // }
    // let login = await AuthSer.postLogin(this.state.items);
    // console.log("you're logged in. yay!");
    // // store.set('loggedIn', true);
    // console.log('login', login);
    // if (!login.error) {
    //   localStorage.setItem('admin', true);
    //   this.props.history.push('/admin/');
    // } else {
    //   this.setState({ errorMessage: login.message });
    // }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ items: { [name]: value } });
  };

  render() {
    return (
      <div className="app-container" style={{ backgroundColor: '#cedaf3' }}>
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-4">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Community Login</h5>
                  <form onSubmit={this.onSubmit} className="form-signin">
                    {/* <div className="form-group">
                          <select className="form-control">
                            <option>Select Community</option>
                            <option>Community 1</option>
                            <option>Community 2</option>
                            <option>Community 3</option>
                            <option>Community 4</option>
                          </select>
                        </div> */}
                    {/* <div className="form-group">
                          <input type="text" id className="form-control" placeholder="Your Name" required autofocus />
                        </div> */}
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        name="email"
                        type="text"
                        id
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-row form-group">
                      <div className="col">
                        <input type="password" className="form-control" id placeholder="Password" name="password" />
                      </div>
                      {/* <div className="col">
                            <div className="row">
                              <div className="col-lg-9">
                                <input type="text" className="form-control" placeholder="OTP" name />
                              </div>
                              <div className="col-lg-3 d-flex justify-content-center align-items-center">
                                <i className="fa fa-refresh" aria-hidden="true" />
                              </div>	
                            </div>	
                          </div> */}
                    </div>
                    <div>{this.state.errorMessage}</div>

                    <button className="btn btn-lg btn-warning text-white btn-block text-uppercase" type="submit">
                      Login
                    </button>

                    <div className="mt-4">
                      <div className="float-right pr-2">
                        <a href>
                          <i
                            className="fa fa-arrow-circle-right"
                            aria-hidden="true"
                            style={{ fontSize: 30, color: '#ffa500' }}
                          />
                        </a>
                      </div>
                      <p className="mb-0 pt-1">Want to Login as a SuperNebr Seller?</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
