import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthSer from '../../Server/server';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {
        user_name: '',
        email: '',
        phone: '',
        otp: '',
      },
      errorMessage: '',
      isExist: true,
    };
  }

  updateChanges = async e => {
    const nam = e.target.name;
    const val = e.target.value;
    if (nam === 'email') {
      let res = await AuthSer.postEmailValidation({ email: val });
      this.setState({
        isExist: res.error,
        errorMessage: res.message,
      });
    }
    this.setState({ items: { [nam]: val } });
  };

  onSubmit = async e => {
    e.preventDefault();
    if (!this.state.isExist) {
      const res = await AuthSer.postRegistration(this.state.items);
      if (res.error) {
        this.setState({
          errorMessage: res.message,
        });
      }
    }

    // console.log(res);
    // let result = await AuthSer.getRegistration()
    // console.log('result', result)
    // console.log('object', this.state)
  };

  render() {
    return (
      <div className="app-container" style={{ backgroundColor: '#cedaf3' }}>
        <div className="container reg_form mt-5">
          <div className="row mt-5">
            <div className="col-sm-9 col-md-7 col-lg-10 mx-auto mt-4">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Community Signup</h5>
                  <form className="form-signin">
                    <div className="form-group">
                      <select className="form-control">
                        <option>Select Community</option>
                        <option>Community 1</option>
                        <option>Community 2</option>
                        <option>Community 3</option>
                        <option>Community 4</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        id
                        className="form-control"
                        name="user_name"
                        onChange={this.updateChanges}
                        placeholder="Your Name"
                        required
                        autofocus
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        id
                        className="form-control"
                        onChange={this.updateChanges}
                        placeholder="Email"
                        required
                      />
                      <div>{this.state.errorMessage}</div>
                    </div>
                    <div className="form-row form-group">
                      <div className="col">
                        <input
                          required
                          name="phone"
                          type="text"
                          className="form-control"
                          onChange={this.updateChanges}
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col-lg-9">
                            <input
                              required
                              name="otp"
                              type="text"
                              className="form-control"
                              onChange={this.updateChanges}
                              placeholder="OTP"
                            />
                          </div>
                          <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <i className="fa fa-refresh" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={this.onSubmit}
                      className="btn btn-lg btn-warning text-white btn-block text-uppercase"
                      type="submit"
                    >
                      Continue
                    </button>
                    <div className="mt-4">
                      <div className="float-right pr-2">
                        <Link>
                          <i
                            className="fa fa-arrow-circle-right"
                            aria-hidden="true"
                            style={{ fontSize: 30, color: '#ffa500' }}
                          />
                        </Link>
                      </div>
                      <p className="mb-0 pt-1">Want to Login as a SuperNebr Seller?</p>
                    </div>
                    <p>{this.state.user_name}</p>
                    <p>{this.state.email}</p>
                    <p>{this.state.otp}</p>
                    <p>{this.state.phone}</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  con
}
