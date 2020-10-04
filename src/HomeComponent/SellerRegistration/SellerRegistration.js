import React, { Component, Fragment } from 'react';
import * as $ from 'jquery';
// import 'jquery.payment'
// import 'bootstrap/dist/css/bootstrap.css'
// import './sellerRegistration.css';

const SellerRegistration = () => {
  return (
    <>
      <div>
        <div className="section supplier-hero">
          <div className="container">
            <div className="description">
              <div className="heading cover">Sell through India's Largest Reseller Platform</div>
              <div className="sub-heading">
                Our 1 Crore+ Resellers can boost your business through 7,00,00,000+ customers
              </div>
              <div className="become-supplier-link">
                <a href="#Register" className="button w-button smoothscroll">
                  Become a Meesho Supplier
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section why-sell-through-us">
          <div className="container">
            <div className="w-row">
              <div className="column w-col w-col-6">
                <div className="about-us-title">Why Sell through Meesho?</div>
              </div>
            </div>
          </div>
          <div className="why-sell-through-us-content container">
            <div className="w-row">
              <div className="column w-col w-col-4">
                <div className="number-heading">7,00,00,000+ Customers</div>
                <div className="number-description">
                  {/* react-text: 35 */}Meesho is the largest distribution network of {/* /react-text */}
                  {/* react-text: 36 */}1{/* /react-text */}
                  {/* react-text: 37 */} Crore+ Resellers, selling to 7,00,00,000+ customers{/* /react-text */}
                </div>
                <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
              </div>
              <div className="column w-col w-col-4">
                <div className="number-heading">Quick &amp; Secure Payments</div>
                <div className="number-description">
                  Meesho charges commission only ‘after’ you make a sale and ensures timely payments
                </div>
                <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
              </div>
              <div className="column w-col w-col-4">
                <div className="number-heading">Lowest Returns</div>
                <div className="number-description">
                  Meesho has the lowest returns in the industry so you get maximum profit on your products
                </div>
                <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
              </div>
              <div className="second-row column w-col w-col-4">
                <div className="number-heading">Delivery Support</div>
                <div className="number-description">
                  Meesho takes care of shipping and delivery so you can focus on your core business
                </div>
                <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
              </div>
              <div className="second-row column w-col w-col-4">
                <div className="number-heading">Account Manager</div>
                <div className="number-description">
                  Meesho provides you a dedicated account manager to grow your sales exponentially
                </div>
                <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
              </div>
            </div>
          </div>
        </div>

        <div className="section supplier-how-to-works">
          <div className="container">
            <div className="w-row">
              <div className="column w-col w-col-6">
                <div className="about-us-title">How it Works?</div>
              </div>
            </div>
          </div>
          <div className="why-sell-through-us-content container">
            <div className="w-row">
              <div className="column w-col w-col-6">
                <div className="number-heading">List Products on Meesho</div>
                <div className="number-description">
                  Our team helps you list your products on Meesho. We give them priority space for maximum visibility as
                  they become popular
                </div>
                <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
              </div>
              <div className="column w-col w-col-6">
                <div className="number-heading">Start Receiving Orders</div>
                <div className="number-description">
                  As your products go Live on the app and our Resellers share them with their WhatsApp, Facebook and
                  Instagram contacts, you will start receiving orders immediately
                </div>
                <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
              </div>
              <div className="second-row column w-col w-col-6">
                <div className="number-heading">Delivery Handled by Meesho</div>
                <div className="number-description">
                  We offer quick and convenient pick-up and delivery across India through our logistics partners! All
                  you need to do is pack the product and we do the rest
                </div>
                <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
              </div>
              <div className="second-row column w-col w-col-6">
                <div className="number-heading">Receive Earnings</div>
                <div className="number-description">
                  Payments are directly deposited to your bank account within a few days of shipping the orders
                </div>
                <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
              </div>
            </div>
          </div>
        </div>

        <div id="Register" className="section seller-form-fill-up">
          <div className="container">
            <div className="seller-stats column w-col w-col-6">
              <div className="seller-form-header">More than 22,000 Suppliers Sell on Meesho</div>
              <div className="seller-form-text">
                Become a Meesho Supplier by filling in the registration form below. Once you submit the form, our
                onboarding team will get in touch with you.
              </div>
              <div className="seller-form-text2">To be a Meesho Supplier, you need:</div>
              <div className="seller-form-list">
                <div>
                  <img src="https://static.meeshosupply.com/web/images/bullet-tick.png" />
                  <div>GST Identification Number (GSTIN)</div>
                </div>
                <div>
                  <img src="https://static.meeshosupply.com/web/images/bullet-tick.png" />
                  <div>PAN Card</div>
                </div>
                <div>
                  <img src="https://static.meeshosupply.com/web/images/bullet-tick.png" />
                  <div>Bank Account</div>
                </div>
              </div>
              <div className="seller-form-text3">Register using the form and we will get in touch with you soon!</div>
            </div>
            <div className="seller-contact-us column w-col w-col-6">
              <form className="seller-form" id="seller-form">
                <div className="form-group">
                  <label className="control-label">Business Name*</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    defaultValue
                    placeholder="Enter your business name"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Phone Number*</label>
                  <div className="input-group">
                    <span className="input-group-addon border-radius-none">+91</span>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      defaultValue
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    defaultValue
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Password*</label>
                  <div className="input-group">
                    <span className="input-group-addon border-radius-none">+91</span>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      defaultValue
                      placeholder="Enter The Password"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label">Confirmation Password*</label>
                  <div className="input-group">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      defaultValue
                      placeholder="Enter Confirmation Password"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label">City*</label>
                  <input type="text" className="form-control" name="city" defaultValue placeholder="Enter your city" />
                </div>
                <div className="form-group">
                  <label className="control-label inline-block" style={{ marginBottom: 0 }}>
                    Do you have a GSTIN?*
                  </label>
                  <div style={{ marginBottom: 0, marginTop: 15 }}>
                    <label className="radio-inline">
                      <input type="radio" name="gstin" defaultValue="on" />
                      {/* react-text: 145 */}Yes{/* /react-text */}
                    </label>
                    <label className="radio-inline">
                      <input type="radio" name="gstin" defaultValue="on" />
                      {/* react-text: 148 */}No{/* /react-text */}
                    </label>
                  </div>
                </div>
                <button className="button w-button supplier-submit" type="submit">
                  Register
                </button>
                <div className="text-center" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerRegistration;
