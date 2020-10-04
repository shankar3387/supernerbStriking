import React, { Component } from 'react'

export class ProductDetails extends Component {
        
      constructor(props) {
        super(props);
        console.log(this.props)
        
      }
      
   state = this.props.location.state

    buyHandler = (e) =>{
        console.log(e)
        
        this.props.history.push('/cartProcess')
    }
    render() {
      console.log(this.props.location.state,)
        return (
            <div>
                <div className="app-container pt-5 mt-5" style={{backgroundColor: '#ffffff'}}>
  <div className="container pt-4">
    <div className>
      <div className="container-fliud">
        <div className="wrapper row">
          <div className="preview col-md-4">
            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1"><img src={this.state.ImageSrc} /></div>
              <div className="tab-pane" id="pic-2"><img src="images/banner3.png" /></div>
              <div className="tab-pane" id="pic-3"><img src="images/bannermain.png" /></div>
              <div className="tab-pane" id="pic-4"><img src="images/bike.png" /></div>
              <div className="tab-pane" id="pic-5"><img src="images/blue1.png" /></div>
            </div>
            <ul className="preview-thumbnail nav nav-tabs">
              <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={this.state.ImageSrc} /></a></li>
              <li><a data-target="#pic-2" data-toggle="tab"><img src="images/banner3.png" /></a></li>
              <li><a data-target="#pic-3" data-toggle="tab"><img src="images/bannermain.png" /></a></li>
              <li><a data-target="#pic-4" data-toggle="tab"><img src="images/bike.png" /></a></li>
              <li><a data-target="#pic-5" data-toggle="tab"><img src="images/blue1.png" /></a></li>
            </ul>
            <div className="row pt-4 customer_review">
              <div className="col-lg-12">
                <h6><b>Customer Review</b></h6>
                <div className="row media_scroll p-0 m-0">
                  <div className="media pt-2 pb-3 idea_media">
                    <div className="d-flex mr-1">
                      <a href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></a>
                    </div>
                    <div className="media-body">
                      <small><span className="m-0 on_name"><b>Benjamin Robinson</b></span></small>
                      <div className="star_rating">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small><br />
                      <small><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</span></small>
                    </div>
                  </div>{/*/ media */}
                  <div className="media pt-2 pb-3 idea_media">
                    <div className="d-flex mr-1">
                      <a href><img className="img-fluid rounded-circle" src="images/4.jpg" alt="User" /></a>
                    </div>
                    <div className="media-body">
                      <small><span className="m-0 on_name"><b>Benjamin Robinson</b></span></small>
                      <div className="star_rating">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <small><span className="on_date">14 Aug 2020, 09:00 PM</span></small><br />
                      <small><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></small>
                    </div>
                  </div>{/*/ media */}
                </div>	
                <div className="form-group pt-3 comment_input">
                  <input type="text" className="form-control " placeholder="Comment Something..." id />
                  <span><a href><i className="fa fa-paper-plane" aria-hidden="true" /></a></span>
                </div>
              </div>	
            </div>
          </div>
          <div className="details col-md-8">
            <ul className="breadcrumb">
              <li><a href="#">Products</a></li>
              <li><a href="#">Fashion</a></li>
              <li>Casual Shirt</li>
            </ul>
            <h4 className="product-title">{this.state.title}</h4>
            <div className="rating">
              <div className="stars">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
            </div>
            <ul className="no-bullets d-flex border_bottom pt-2 pb-2">
              <li className="pr-md-5"><h4><i className="fa fa-inr" />{this.state.discount_price}</h4></li>
              <li className="ml-5">
                <button className="btn btn-default bg-warning text-white mr-3" type="button"><span className="fa fa-shopping-cart mr-2" />add to cart</button>
                <button onClick={this.buyHandler} className="btn btn-default bg-warning text-white" type="button">Buy Now</button>
              </li>
            </ul>
            <div className="border_bottom pb-2 pt-2">
              <span><small>Units Available</small></span><span className="ml-5"><small className="text-warning ml-5">15</small></span>
            </div>
            <div className="row d-flex">
              <ul className="d-flex no-bullets col-lg-12">
                <li className="col-lg-4 text-warning"><span><small>Units</small></span></li>
                <li className="col-lg-3 text-warning"><span><small>Price</small></span></li>
              </ul>
            </div>
            <div className="row border-bottom">
              <div className="col-lg-12 p-0">
                <ul className="d-flex no-bullets py-2 row">
                  <li className="col-lg-4 align-items-center">
                    <span>
                      <small>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio" />Individual Buy
                          </label>
                        </div>
                      </small>
                    </span>
                  </li>
                  <li className="col-lg-3"><span><small><i className="fa fa-inr" />379</small></span></li>
                  <li className="col-lg-5"><span><small>2-3 Days</small></span></li>
                </ul>
                <ul className="row no-bullets d-flex align-items-center py-2">
                  <li className="col-lg-4 d-flex pr-0 align-items-center">
                    <span>
                      <small>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input first_group" name="optradio" />Group Buy = 10 items
                          </label>
                        </div>
                      </small>
                    </span>
                    <span className="order_far hide_btn first_order"><small className="order_far_first">16/10 </small><small>Ordered so far</small></span>
                  </li>
                  <li className="col-lg-3 pr-0">
                    <ul className="row no-bullets">
                      <li className="col-lg-7 p-0">
                        <span><i className="fa fa-inr" /> 341</span><span className="pl-3 text-primary">10% off</span>
                      </li>
                      <li className="col-lg-5 p-0">
                        <span>
                          <div className="section_one section hide_btn first_quantity">
                            <div className>
                              <div className="btn-minus btn-minus1 bg-secondary text-white"><i className="fa fa-minus" aria-hidden="true" /></div>
                              <input defaultValue={1} />
                              <div className="btn-plus btn-plus1 bg-secondary text-white"><i className="fa fa-plus" aria-hidden="true" /></div>
                            </div>
                          </div>
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="col-lg-5">
                    <span className="hide_btn first_detail"><small>Order by Tue (01 SEP 2020)</small><small> Delivery by Tue (04 SEP 2020)</small></span>
                  </li>
                </ul>
                <ul className="row no-bullets d-flex align-items-center py-2">
                  <li className="col-lg-4 d-flex pr-0 align-items-center">
                    <span>
                      <small>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input second_group" name="optradio" />Group Buy = 20 items
                          </label>
                        </div>
                      </small>
                    </span>
                    <span className="order_far hide_btn second_order"><small className="order_far_first">16/20 </small><small>Ordered so far</small></span>
                  </li>
                  <li className="col-lg-3 pr-0">
                    <ul className="row no-bullets">
                      <li className="col-lg-7 p-0">
                        <span><i className="fa fa-inr" /> 341</span><span className="pl-3 text-primary">20% off</span>
                      </li>
                      <li className="col-lg-5 p-0">
                        <span>
                          <div className="section_two section hide_btn second_quantity">
                            <div className>
                              <div className="btn-minus btn-minus2 bg-secondary text-white"><i className="fa fa-minus" aria-hidden="true" /></div>
                              <input defaultValue={1} />
                              <div className="btn-plus btn-plus2 bg-secondary text-white"><i className="fa fa-plus" aria-hidden="true" /></div>
                            </div>
                          </div>
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="col-lg-5">
                    <span className="hide_btn second_detail"><small>Order by Tue (01 SEP 2020)</small><small> Delivery by Tue (04 SEP 2020)</small></span>
                  </li>
                </ul>
                <ul className="row no-bullets d-flex align-items-center py-2">
                  <li className="col-lg-4 d-flex pr-0 align-items-center">
                    <span>
                      <small>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input third_group" name="optradio" />Group Buy = 30 items
                          </label>
                        </div>
                      </small>
                    </span>
                    <span className="order_far hide_btn third_order"><small className="order_far_first">16/30 </small><small>Ordered so far</small></span>
                  </li>
                  <li className="col-lg-3 pr-0">
                    <ul className="row no-bullets">
                      <li className="col-lg-7 p-0">
                        <span><i className="fa fa-inr" /> 341</span><span className="pl-3 text-primary">30% off</span>
                      </li>
                      <li className="col-lg-5 p-0">
                        <span>
                          <div className="section_three section hide_btn third_quantity">
                            <div className="hide_btn">
                              <div className="btn-minus btn-minus3 bg-secondary text-white"><i className="fa fa-minus" aria-hidden="true" /></div>
                              <input defaultValue={1} />
                              <div className="btn-plus btn-plus3 bg-secondary text-white"><i className="fa fa-plus" aria-hidden="true" /></div>
                            </div>
                          </div>
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="col-lg-5">
                    <span className="hide_btn third_detail"><small>Order by Tue (01 SEP 2020)</small><small> Delivery by Tue (04 SEP 2020)</small></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <ul className="no-bullets">
                  <li className="row py-1">
                    <span className="col-lg-4"><small>Delivery Date Range</small></span>
                    <span className="col-lg-8 text-warning"><small>2-3 Days</small></span>
                  </li>
                  <li className="row py-1">
                    <span className="col-lg-4"><small>Seller</small></span>
                    <span className="col-lg-8 text-primary"><small>Karthik Fashion</small></span>
                  </li>
                  <li className="row py-1">
                    <span className="col-lg-4"><small>Promotional Offers</small></span>
                    <span className="col-lg-8"><small>No Promotional Offers</small></span>
                  </li>
                  <li className="row py-1">
                    <span className="col-lg-4"><small>Colors</small></span>
                    <span className="col-lg-8" style={{letterSpacing: 3}}>
                      <small><i className="fa fa-circle text-primary" aria-hidden="true" /></small>
                      <small><i className="fa fa-circle text-warning" aria-hidden="true" /></small>
                      <small><i className="fa fa-circle text-primary" aria-hidden="true" /></small>
                      <small><i className="fa fa-circle text-warning" aria-hidden="true" /></small>
                    </span>
                  </li>
                  <li className="row py-1">
                    <span className="col-lg-4"><small>Order Units</small></span>
                    <span className="col-lg-8 text-primary">
                      <small className="order_units">M</small>
                      <small className="order_units">L</small>
                      <small className="order_units">XL</small>
                      <small className="order_units">2XL</small>
                      <small className="order_units">3XL</small>
                      <small className="text-warning">Please Select a size</small>
                    </span>
                  </li>
                  <li className="row py-1">
                    <span className="col-lg-4"><small>Share On</small></span>
                    <span className="col-lg-8" style={{letterSpacing: 3}}>
                      <small><i className="fa fa-whatsapp" aria-hidden="true" /></small>
                      <small><i className="fa fa-facebook" aria-hidden="true" /></small>
                      <small><i className="fa fa-twitter" aria-hidden="true" /></small>
                      <small><i className="fa fa-linkedin" aria-hidden="true" /></small>
                      <small><i className="fa fa-instagram" aria-hidden="true" /></small>
                      <small><i className="fa fa-google-plus" aria-hidden="true" /></small>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row p-3">
              <button className="btn btn-default bg-warning text-white mr-3" type="button"><span className="fa fa-shopping-cart mr-2" />Add to Wishlist</button>
              <button className="btn btn-default bg-warning text-white" type="button">Add to Closet</button>
            </div>
            <div className="row p-3">
              <ul className="media no-bullets align-items-center d-flex">
                <li><img src="images/4.jpg" className="img-fluid rounded-circle" /></li>
                <li><img src="images/4.jpg" className="img-fluid rounded-circle" /></li>
                <li><img src="images/4.jpg" className="img-fluid rounded-circle" /></li>
                <li><a href>420 people</a> Own this 10 People in Your Community</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <h6>Description</h6>
                <span><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</small></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*---------Fashion -----------*/}
    <div className="row pt-5">
      <div className="col-md-12">
        <h4 className="fashion">Related Style Look</h4>
        <button type="button" className="btn btn-primary mr-2 view_all">View All</button>
        <div className="row pt-4">
          <div className="col-lg-2">	
            <div className="post-slide9">
              <div className="post-img">
                <img src="images/lady.png" alt className="img-fluid" />
                <ul className="d-flex justify-content-end pr-2 pt-2 shopping_cart" style={{listStyle: 'none'}}>
                  <li className="pr-2"><a href><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                  <li><a href><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <div className="post-review">
                <small><b>Solid Fashion Cotton Silk</b></small>
                <ul className="d-flex justify-content-between no-bullets">
                  <li>1 Piece</li>
                  <li>
                    <i className="fa fa-circle text-warning" aria-hidden="true" />
                    <i className="fa fa-circle" aria-hidden="true" />
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li><s>₹ 899</s></li>
                  <li className="text-info">
                    20% off
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li className="text-warning">
                    ₹ 799
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><a href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        <li><a href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></a></li>
                        <li><a href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                      </ul>
                    </div>
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2">	
            <div className="post-slide9">
              <div className="post-img">
                <img src="images/lady.png" alt className="img-fluid" />
                <ul className="d-flex justify-content-end pr-2 pt-2 shopping_cart" style={{listStyle: 'none'}}>
                  <li className="pr-2"><a href><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                  <li><a href><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <div className="post-review">
                <small><b>Solid Fashion Cotton Silk</b></small>
                <ul className="d-flex justify-content-between no-bullets">
                  <li>1 Piece</li>
                  <li>
                    <i className="fa fa-circle text-warning" aria-hidden="true" />
                    <i className="fa fa-circle" aria-hidden="true" />
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li><s>₹ 899</s></li>
                  <li className="text-info">
                    20% off
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li className="text-warning">
                    ₹ 799
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><a href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        <li><a href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></a></li>
                        <li><a href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                      </ul>
                    </div>
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2">	
            <div className="post-slide9">
              <div className="post-img">
                <img src="images/lady.png" alt className="img-fluid" />
                <ul className="d-flex justify-content-end pr-2 pt-2 shopping_cart" style={{listStyle: 'none'}}>
                  <li className="pr-2"><a href><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                  <li><a href><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <div className="post-review">
                <small><b>Solid Fashion Cotton Silk</b></small>
                <ul className="d-flex justify-content-between no-bullets">
                  <li>1 Piece</li>
                  <li>
                    <i className="fa fa-circle text-warning" aria-hidden="true" />
                    <i className="fa fa-circle" aria-hidden="true" />
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li><s>₹ 899</s></li>
                  <li className="text-info">
                    20% off
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li className="text-warning">
                    ₹ 799
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><a href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        <li><a href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></a></li>
                        <li><a href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                      </ul>
                    </div>
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2">	
            <div className="post-slide9">
              <div className="post-img">
                <img src="images/lady.png" alt className="img-fluid" />
                <ul className="d-flex justify-content-end pr-2 pt-2 shopping_cart" style={{listStyle: 'none'}}>
                  <li className="pr-2"><a href><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                  <li><a href><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <div className="post-review">
                <small><b>Solid Fashion Cotton Silk</b></small>
                <ul className="d-flex justify-content-between no-bullets">
                  <li>1 Piece</li>
                  <li>
                    <i className="fa fa-circle text-warning" aria-hidden="true" />
                    <i className="fa fa-circle" aria-hidden="true" />
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li><s>₹ 899</s></li>
                  <li className="text-info">
                    20% off
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li className="text-warning">
                    ₹ 799
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><a href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        <li><a href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></a></li>
                        <li><a href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                      </ul>
                    </div>
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2">	
            <div className="post-slide9">
              <div className="post-img">
                <img src="images/lady.png" alt className="img-fluid" />
                <ul className="d-flex justify-content-end pr-2 pt-2 shopping_cart" style={{listStyle: 'none'}}>
                  <li className="pr-2"><a href><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                  <li><a href><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <div className="post-review">
                <small><b>Solid Fashion Cotton Silk</b></small>
                <ul className="d-flex justify-content-between no-bullets">
                  <li>1 Piece</li>
                  <li>
                    <i className="fa fa-circle text-warning" aria-hidden="true" />
                    <i className="fa fa-circle" aria-hidden="true" />
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li><s>₹ 899</s></li>
                  <li className="text-info">
                    20% off
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li className="text-warning">
                    ₹ 799
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><a href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        <li><a href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></a></li>
                        <li><a href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                      </ul>
                    </div>
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2">	
            <div className="post-slide9">
              <div className="post-img">
                <img src="images/lady.png" alt className="img-fluid" />
                <ul className="d-flex justify-content-end pr-2 pt-2 shopping_cart" style={{listStyle: 'none'}}>
                  <li className="pr-2"><a href><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                  <li><a href><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <div className="post-review">
                <small><b>Solid Fashion Cotton Silk</b></small>
                <ul className="d-flex justify-content-between no-bullets">
                  <li>1 Piece</li>
                  <li>
                    <i className="fa fa-circle text-warning" aria-hidden="true" />
                    <i className="fa fa-circle" aria-hidden="true" />
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li><s>₹ 899</s></li>
                  <li className="text-info">
                    20% off
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li className="text-warning">
                    ₹ 799
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><a href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        <li><a href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></a></li>
                        <li><a href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                      </ul>
                    </div>
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        )
    }
}

export default ProductDetails
