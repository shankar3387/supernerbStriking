import React, { Component } from 'react';
import $ from 'jquery';

class CartProcess extends Component {
  componentDidMount() {
    $('.proceed_pay').on('click', function() {
      $('.first_cart').addClass('hide_btn');
      $('.cart_active_span').addClass('hide_btn');
      $('.cart_confirm_span').removeClass('hide_btn');
      $('.cart_payment').addClass('cart_first_confirm');
      $('.cart_payment').removeClass('cart_sublist_first');
      $('.map_span').addClass('hide_btn');
      $('.map_active_span').removeClass('hide_btn');
      $('.address_confirm').removeClass('hide_btn');
    });
    $('.address_next').on('click', function() {
      $('.address_confirm').addClass('hide_btn');
      $('.map_active_span').addClass('hide_btn');
      $('.map_confirm_span').removeClass('hide_btn');
      $('.cart_sublist_second').addClass('cart_second_confirm');
      $('.payment_method').removeClass('hide_btn');
      $('.payment_span').addClass('hide_btn');
      $('.payment_active_span').removeClass('hide_btn');
    });
    $('.payment_next').on('click', function() {
      $('.payment_active_span').addClass('hide_btn');
      $('.payment_confirm_span').removeClass('hide_btn');
      $('.confirmed_span').addClass('hide_btn');
      $('.confirmed_active_span').removeClass('hide_btn');
      $('.payment_method').addClass('hide_btn');
      $('.order_confirm').removeClass('hide_btn');
      $('.your_order').removeClass('hide_btn');
      $('.cart_sublist_third').addClass('cart_third_confirm');
    });
    $('.btn-minus1').on('click', function() {
      var now = $('.section_one > div > input').val();
      if ($.isNumeric(now)) {
        if (parseInt(now) - 1 > 0) {
          now--;
        }
        $('.section_one > div > input').val(now);
      } else {
        $('.section_one > div > input').val('1');
      }
    });
    $('.btn-plus1').on('click', function() {
      var now = $('.section_one > div > input').val();
      if ($.isNumeric(now)) {
        $('.section_one > div > input').val(parseInt(now) + 1);
      } else {
        $('.section_one > div > input').val('1');
      }
    });

    let current_fs; var next_fs; var previous_fs; // fieldsets
    let opacity;

    $('.next').click(function() {
      current_fs = $(this).parent();
      next_fs = $(this)
        .parent()
        .next();

      // Add Class Active
      $('#progressbar li')
        .eq($('fieldset').index(next_fs))
        .addClass('active');

      // show the next fieldset
      next_fs.show();
      // hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step(now) {
        // for making fielset appear animation
        opacity = 1 - now;
    
        current_fs.css({
        'display': 'none',
        'position': 'relative'
        });
        next_fs.css({'opacity': opacity});
        },
          duration: 600,
        },
      );
    });

    $('.previous').click(function() {
      current_fs = $(this).parent();
      previous_fs = $(this)
        .parent()
        .prev();

      // Remove class active
      $('#progressbar li')
        .eq($('fieldset').index(current_fs))
        .removeClass('active');

      // show the previous fieldset
      previous_fs.show();

      // hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step(now) {
        // for making fielset appear animation
        opacity = 1 - now;
    
        current_fs.css({
        'display': 'none',
        'position': 'relative'
        });
        previous_fs.css({'opacity': opacity});
        },
          duration: 600,
        },
      );
    });

    $('.radio-group .radio').click(function() {
      $(this)
        .parent()
        .find('.radio')
        .removeClass('selected');
      $(this).addClass('selected');
    });

    $('.submit').click(function() {
      return false;
    });
  }

  render() {
    return (
      <div className="app-container pt-5 mt-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container pt-4">
          <div className="container">
            <div className="center">
              <ul className="no-bullets cart_list d-flex justify-content-between">
                <li className="cart_sublist cart_sublist_first cart_payment">
                  <span className>
                    <img src="images/cart.png" className="img-fluid" />
                  </span>
                  <span className="hide_btn">
                    <i className="cart_circle fa fa-circle-thin" aria-hidden="true" />
                  </span>
                  <span className="cart_active_span">
                    <i className="fa fa-circle cart_active" aria-hidden="true" />
                  </span>
                  <span className="cart_confirm_span hide_btn">
                    <i className="fa fa-check-circle cart_confirm" aria-hidden="true" />
                  </span>
                  <span>
                    <small>Cart</small>
                  </span>
                </li>
                <li className="cart_sublist cart_sublist_second">
                  <span>
                    <img src="images/map.png" className="img-fluid" />
                  </span>
                  <span className="map_span">
                    <i className="cart_circle fa fa-circle-thin" aria-hidden="true" />
                  </span>
                  <span className="map_active_span hide_btn">
                    <i className="fa fa-circle cart_active" aria-hidden="true" />
                  </span>
                  <span className="map_confirm_span hide_btn">
                    <i className="fa fa-check-circle cart_confirm" aria-hidden="true" />
                  </span>
                  <span>
                    <small>Address</small>
                  </span>
                </li>
                <li className="cart_sublist cart_sublist_third">
                  <span>
                    <img src="images/card.png" className="img-fluid" />
                  </span>
                  <span className="payment_span">
                    <i className="cart_circle fa fa-circle-thin" aria-hidden="true" />
                  </span>
                  <span className="payment_active_span hide_btn">
                    <i className="fa fa-circle cart_active" aria-hidden="true" />
                  </span>
                  <span className="payment_confirm_span hide_btn">
                    <i className="fa fa-check-circle cart_confirm" aria-hidden="true" />
                  </span>
                  <span>
                    <small>Payment</small>
                  </span>
                </li>
                <li className="cart_sublist cart_sublist_fourth">
                  <span>
                    <img src="images/confirm.png" className="img-fluid" />
                  </span>
                  <span className="confirmed_span">
                    <i className="cart_circle fa fa-circle-thin" aria-hidden="true" />
                  </span>
                  <span className="confirmed_active_span hide_btn">
                    <i className="fa fa-circle cart_active" aria-hidden="true" />
                  </span>
                  <span className="confirmed_confirm_span hide_btn">
                    <i className="fa fa-check-circle cart_confirm" aria-hidden="true" />
                  </span>
                  <span>
                    <small>Confirmed</small>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="container first_cart">
            <h2>Your Cart</h2>
            <div className="row">
              <div className="col-lg-9">
                <div className="row border_bottom pt-4">
                  <div className="col-lg-2 cart_process">
                    <img src="images/blue1.png" className="img-fluid rounded" />
                  </div>
                  <div className="col-lg-6">
                    <h6>Casual Shirt</h6>
                    <h5>
                      <span className="primary_color">
                        <small>
                          <i className="fa fa-inr" /> <del>379</del>
                        </small>
                      </span>{' '}
                      <i className="fa fa-inr" />
                      341
                    </h5>
                    <table className="table table-borderless cart_price">
                      <tbody>
                        <tr>
                          <td>
                            <small>Units Available</small>
                          </td>
                          <td>
                            <small>15</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Order Units</small>
                          </td>
                          <td>
                            <span>
                              <div className="section_one section first_quantity">
                                <div className>
                                  <div className="btn-minus btn-minus1 bg-secondary text-white">
                                    <i className="fa fa-minus" aria-hidden="true" />
                                  </div>
                                  <input defaultValue={1} />
                                  <div className="btn-plus btn-plus1 bg-secondary text-white">
                                    <i className="fa fa-plus" aria-hidden="true" />
                                  </div>
                                </div>
                                <span className="offer_color">10% off</span>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Color</small>
                          </td>
                          <td>
                            <i className="fa fa-circle" aria-hidden="true" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Size</small>
                          </td>
                          <td>
                            <small>XL</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-4">
                    <ul className="no-bullets d-flex justify-content-end">
                      <li className="pl-3 share">
                        <i className="fa fa-share-alt" aria-hidden="true" />
                      </li>
                      <li className="pl-3 remove">
                        <i className="fa fa-trash" aria-hidden="true" />
                      </li>
                      <li className="pl-3 bookmark">
                        <i className="fa fa-bookmark-o" aria-hidden="true" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row border_bottom pt-4">
                  <div className="col-lg-2 cart_process">
                    <img src="images/4.jpg" className="img-fluid rounded" />
                  </div>
                  <div className="col-lg-6">
                    <h6>T Shirt</h6>
                    <h5>
                      <span className="primary_color">
                        <small>
                          <i className="fa fa-inr" /> <del>379</del>
                        </small>
                      </span>{' '}
                      <i className="fa fa-inr" />
                      341
                    </h5>
                    <table className="table table-borderless cart_price">
                      <tbody>
                        <tr>
                          <td>
                            <small>Units Available</small>
                          </td>
                          <td>
                            <small>15</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Order Units</small>
                          </td>
                          <td>
                            <span>
                              <div className="section_one section first_quantity">
                                <div className>
                                  <div className="btn-minus btn-minus1 bg-secondary text-white">
                                    <i className="fa fa-minus" aria-hidden="true" />
                                  </div>
                                  <input defaultValue={1} />
                                  <div className="btn-plus btn-plus1 bg-secondary text-white">
                                    <i className="fa fa-plus" aria-hidden="true" />
                                  </div>
                                </div>
                                <span className="offer_color">10% off</span>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Color</small>
                          </td>
                          <td>
                            <i className="fa fa-circle" aria-hidden="true" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Size</small>
                          </td>
                          <td>
                            <small>XL</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-4">
                    <ul className="no-bullets d-flex justify-content-end">
                      <li className="pl-3 share">
                        <i className="fa fa-share-alt" aria-hidden="true" />
                      </li>
                      <li className="pl-3 remove">
                        <i className="fa fa-trash" aria-hidden="true" />
                      </li>
                      <li className="pl-3 bookmark">
                        <i className="fa fa-bookmark-o" aria-hidden="true" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card m-4 shadow_box">
                  <div className="card-img py-4">
                    <img src="images/bookmark.png" className="img-fluid mx-auto d-block" />
                  </div>
                  <div className="card-body p-2">
                    <h6 className="pb-2" style={{ borderBottom: '2px dashed #555' }}>
                      Price Details
                    </h6>
                    <table className="table table-borderless card_amount">
                      <tbody>
                        <tr>
                          <td>
                            <small>Subtotal of (6 items)</small>
                          </td>
                          <td>
                            <small>
                              <i className="fa fa-inr"> 8348</i>
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Delivery Fees</small>
                          </td>
                          <td>
                            <small>
                              <i className="fa fa-inr"> 50</i>
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Tax</small>
                          </td>
                          <td>
                            <small>
                              <i className="fa fa-inr"> 128</i>
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Total to be Paid</small>
                          </td>
                          <td>
                            <small>
                              <i className="fa fa-inr"> 8,398</i>
                            </small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button
                    className="btn btn-default bg-warning text-white text-center proceed_pay"
                    type="button"
                    style={{
                      width: '100%',
                      borderRadius: 0,
                      borderBottomRightRadius: '0.5rem!important',
                      borderBottomLeftRadius: '0.5rem!important',
                    }}
                  >
                    PROCEED TO PAY
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container hide_btn address_confirm">
            <div className="row border_bottom_bold py-5">
              <div className="col-lg-12">
                <h2>Confirm Address</h2>
                <div className="row">
                  <div className="col-lg-2">
                    <div className="new_add py-4">
                      <span>
                        <img src="images/plus.png" className="img-fluid" />
                      </span>
                      <span>
                        <small>
                          <b>Add a New Address</b>
                        </small>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-2 d-flex align-items-center justify-content-center">
                    <button className="btn btn-default bg-warning text-white text-center address_next" type="button">
                      NEXT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container hide_btn payment_method">
            <div className="row border_bottom_bold py-4">
              <div className="col-lg-12">
                <h2 className="pb-3">Select Payment Method</h2>
                <h6>Your Saved Credit &amp; Debit Cards</h6>
                <div className="row">
                  <div className="col-lg-3">
                    <div className="card border-0">
                      <div className="d-flex justify-content-between">
                        <label>
                          <small>
                            <b>HDFC Bank Debit Card</b>
                          </small>
                        </label>
                        <label>
                          <input type="radio" className="form-check-input" name="optradio" />
                        </label>
                      </div>
                      <div className="card-body db-card p-2 rounded">
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="form-group col-lg-9 p-0">
                              <label htmlFor="cc-number" className="control-label">
                                <small>Card Number</small>
                              </label>{' '}
                              <input
                                id="cc-number"
                                type="tel"
                                className="input-lg form-control cc-number"
                                autoComplete="cc-number"
                                placeholder="xxxx-xxxx-xxxx-xxxx"
                                required
                              />
                            </div>
                            <div className="form-group col-lg-3 p-0 d-flex justify-content-end pt-3">
                              <i className="fa fa-cc-visa" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-lg-9 p-0">
                          <label htmlFor="numeric" className="control-label">
                            <small>Card Holder</small>
                          </label>
                          <input type="text" className="input-lg form-control" placeholder="Your Name" />
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="row">
                              <div className="col-lg-4 pr-0">
                                <div className="form-group">
                                  {' '}
                                  <label htmlFor="cc-exp" className="control-label">
                                    <small>Card Through</small>
                                  </label>{' '}
                                  <input
                                    id="cc-exp"
                                    type="tel"
                                    className="input-lg form-control cc-exp"
                                    autoComplete="cc-exp"
                                    placeholder="MM - DD"
                                    required
                                  />{' '}
                                </div>
                              </div>
                              <div className="col-lg-4 pr-0">
                                <div className="form-group">
                                  {' '}
                                  <label htmlFor="cc-exp" className="control-label">
                                    <small>Expiry Date</small>
                                  </label>{' '}
                                  <input
                                    id="cc-exp"
                                    type="tel"
                                    className="input-lg form-control cc-exp"
                                    autoComplete="cc-exp"
                                    placeholder="MM - DD"
                                    required
                                  />{' '}
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="form-group">
                                  {' '}
                                  <label htmlFor="cc-cvc" className="control-label">
                                    <small>CVV</small>
                                  </label>{' '}
                                  <input
                                    id="cc-cvc"
                                    type="tel"
                                    className="input-lg form-control cc-cvc"
                                    autoComplete="off"
                                    placeholder="••••"
                                    required
                                  />{' '}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="card border-0">
                      <div className="d-flex justify-content-between">
                        <label>
                          <small>
                            <b>HDFC Bank Credit Card</b>
                          </small>
                        </label>
                        <label>
                          <input type="radio" className="form-check-input" name="optradio" />
                        </label>
                      </div>
                      <div className="card-body db-card p-2 rounded">
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="form-group col-lg-9 p-0">
                              <label htmlFor="cc-number" className="control-label">
                                <small>Card Number</small>
                              </label>{' '}
                              <input
                                id="cc-number"
                                type="tel"
                                className="input-lg form-control cc-number"
                                autoComplete="cc-number"
                                placeholder="xxxx-xxxx-xxxx-xxxx"
                                required
                              />
                            </div>
                            <div className="form-group col-lg-3 p-0 d-flex justify-content-end pt-3">
                              <i className="fa fa-cc-visa" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-lg-9 p-0">
                          <label htmlFor="numeric" className="control-label">
                            <small>Card Holder</small>
                          </label>
                          <input type="text" className="input-lg form-control" placeholder="Your Name" />
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="row">
                              <div className="col-lg-4 pr-0">
                                <div className="form-group">
                                  {' '}
                                  <label htmlFor="cc-exp" className="control-label">
                                    <small>Card Through</small>
                                  </label>{' '}
                                  <input
                                    id="cc-exp"
                                    type="tel"
                                    className="input-lg form-control cc-exp"
                                    autoComplete="cc-exp"
                                    placeholder="MM - DD"
                                    required
                                  />{' '}
                                </div>
                              </div>
                              <div className="col-lg-4 pr-0">
                                <div className="form-group">
                                  {' '}
                                  <label htmlFor="cc-exp" className="control-label">
                                    <small>Expiry Date</small>
                                  </label>{' '}
                                  <input
                                    id="cc-exp"
                                    type="tel"
                                    className="input-lg form-control cc-exp"
                                    autoComplete="cc-exp"
                                    placeholder="MM - DD"
                                    required
                                  />{' '}
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="form-group">
                                  {' '}
                                  <label htmlFor="cc-cvc" className="control-label">
                                    <small>CVV</small>
                                  </label>{' '}
                                  <input
                                    id="cc-cvc"
                                    type="tel"
                                    className="input-lg form-control cc-cvc"
                                    autoComplete="off"
                                    placeholder="••••"
                                    required
                                  />{' '}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 new_add" style={{ marginTop: 28 }}>
                    <span>
                      <img src="images/plus.png" className="img-fluid" />
                    </span>
                    <span>
                      <small>
                        <b>Add a New Card</b>
                      </small>
                    </span>
                  </div>
                  <div className="col-lg-2 d-flex align-items-center justify-content-center">
                    <button className="btn btn-default bg-warning text-white text-center payment_next" type="button">
                      NEXT
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-4 border_bottom_bold">
              <div className="col-lg-12">
                <h6>Another Payment Method</h6>
                <div className="form-check py-1">
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="payment" />
                    <small>Net Banking</small>
                  </label>
                </div>
                <div className="form-check py-1">
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="payment" />
                    <small>EMI</small>
                  </label>
                </div>
                <div className="form-check py-1">
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="payment" />
                    <small>Cash on Delivery</small>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container order_confirm hide_btn">
            <div className="row">
              <h2>Order Confirmed</h2>
              <div className="col-lg-12">
                <div className="row border_bottom_bold pb-2">
                  <span
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <i className="fa fa-certificate cart_color" aria-hidden="true" style={{ fontSize: 25 }} />
                    <i
                      className="fa fa-check text-white"
                      aria-hidden="true"
                      style={{ position: 'absolute', left: 4, top: 5 }}
                    />{' '}
                    <small className="pl-1 font_color">
                      Thank you for shopping. Your order has been accepted. We'll notify you for further information
                      related to your order.
                    </small>
                  </span>
                </div>
                <div className="row border_bottom_bold py-2">
                  <div className="col-lg-3">
                    <table className="table table-borderless card_amount">
                      <tbody>
                        <tr>
                          <td>
                            <small>Subtotal of (6 items)</small>
                          </td>
                          <td>
                            <small>
                              <i className="fa fa-inr"> 8348</i>
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Delivery Fees</small>
                          </td>
                          <td>
                            <small>
                              <i className="fa fa-inr"> 50</i>
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Tax</small>
                          </td>
                          <td>
                            <small>
                              <i className="fa fa-inr"> 128</i>
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>
                              <b>Total to be Paid</b>
                            </small>
                          </td>
                          <td>
                            <small>
                              <b>
                                <i className="fa fa-inr"> 8,398</i>
                              </b>
                            </small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row border_bottom_bold">
                  <div className="col-lg-3">
                    <table className="table table-borderless card_amount">
                      <tbody>
                        <tr>
                          <td>
                            <small>Order ID</small>
                          </td>
                          <td>
                            <small>ORD000001</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row py-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <span>
                    <button className="btn btn-default bg-warning text-white text-center" type="button">
                      CONTINUE
                    </button>
                  </span>
                  <span className="pl-3">
                    <a href>
                      <small>VIEW ORDER</small>
                    </a>
                  </span>
                  <span>
                    <div className="form-group col-lg-12 mb-0">
                      <input
                        type="text"
                        className="input-lg form-control"
                        placeholder
                        defaultValue="Share my cart to community"
                        style={{ width: 250 }}
                      />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-5 border_bottom_bold hide_btn your_order">
            <h2>Your Order</h2>
            <div className="row">
              <div className="col-lg-12">
                <div className="row border_bottom pt-4">
                  <div className="col-lg-2 cart_process">
                    <img src="images/blue1.png" className="img-fluid rounded" />
                  </div>
                  <div className="col-lg-6">
                    <h6>Casual Shirt</h6>
                    <h5>
                      <span className="primary_color">
                        <small>
                          <i className="fa fa-inr" /> <del>379</del>
                        </small>
                      </span>{' '}
                      <i className="fa fa-inr" />
                      341
                    </h5>
                    <table className="table table-borderless cart_price">
                      <tbody>
                        <tr>
                          <td>
                            <small>Units Available</small>
                          </td>
                          <td>
                            <small>15</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Order Units</small>
                          </td>
                          <td>
                            <span>
                              <div className="section_one section first_quantity">
                                <div className>
                                  <div className="btn-minus btn-minus1 bg-secondary text-white">
                                    <i className="fa fa-minus" aria-hidden="true" />
                                  </div>
                                  <input defaultValue={1} />
                                  <div className="btn-plus btn-plus1 bg-secondary text-white">
                                    <i className="fa fa-plus" aria-hidden="true" />
                                  </div>
                                </div>
                                <span className="offer_color">10% off</span>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Color</small>
                          </td>
                          <td>
                            <i className="fa fa-circle" aria-hidden="true" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Size</small>
                          </td>
                          <td>
                            <small>XL</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-4">
                    <ul className="no-bullets d-flex justify-content-end deliver_tooltip">
                      <li>
                        <small>Delivered By 2-3 Days</small>
                      </li>
                      <li className="pl-3 share tooltip">
                        <i className="fa fa-share-alt" aria-hidden="true" />
                        <span className="tooltiptext">Share this product to community</span>
                      </li>
                      <li className="pl-3 remove">
                        <i className="fa fa-trash" aria-hidden="true" />
                      </li>
                      <li className="pl-3 bookmark">
                        <i className="fa fa-bookmark-o" aria-hidden="true" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row border_bottom pt-4">
                  <div className="col-lg-2 cart_process">
                    <img src="images/4.jpg" className="img-fluid rounded" />
                  </div>
                  <div className="col-lg-6">
                    <h6>T Shirt</h6>
                    <h5>
                      <span className="primary_color">
                        <small>
                          <i className="fa fa-inr" /> <del>379</del>
                        </small>
                      </span>{' '}
                      <i className="fa fa-inr" />
                      341
                    </h5>
                    <table className="table table-borderless cart_price">
                      <tbody>
                        <tr>
                          <td>
                            <small>Units Available</small>
                          </td>
                          <td>
                            <small>15</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Order Units</small>
                          </td>
                          <td>
                            <span>
                              <div className="section_one section first_quantity">
                                <div className>
                                  <div className="btn-minus btn-minus1 bg-secondary text-white">
                                    <i className="fa fa-minus" aria-hidden="true" />
                                  </div>
                                  <input defaultValue={1} />
                                  <div className="btn-plus btn-plus1 bg-secondary text-white">
                                    <i className="fa fa-plus" aria-hidden="true" />
                                  </div>
                                </div>
                                <span className="offer_color">10% off</span>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Color</small>
                          </td>
                          <td>
                            <i className="fa fa-circle" aria-hidden="true" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Size</small>
                          </td>
                          <td>
                            <small>XL</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-4">
                    <ul className="no-bullets d-flex justify-content-end deliver_tooltip">
                      <li>
                        <small>Delivered By 2-3 Days</small>
                      </li>
                      <li className="pl-3 share tooltip">
                        <i className="fa fa-share-alt" aria-hidden="true" />
                        <span className="tooltiptext">Share this product to community</span>
                      </li>
                      <li className="pl-3 remove">
                        <i className="fa fa-trash" aria-hidden="true" />
                      </li>
                      <li className="pl-3 bookmark">
                        <i className="fa fa-bookmark-o" aria-hidden="true" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartProcess;
