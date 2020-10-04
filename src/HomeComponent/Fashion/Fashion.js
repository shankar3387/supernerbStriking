import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

export class Fashion extends Component {
        constructor(props) {
            super(props);
         this.clickHandler = this.clickHandler.bind(this)
        }
        ImageSrc = this.props.fashion.ImageSrc;
        title = this.props.fashion.title
        quantity = this.props.fashion.quantity
        discount_price = this.props.fashion.discount_price
        offers = this.props.fashion.offers
        price = this.props.fashion.price
     price = this.props.fashion.price

     clickHandler = (e) =>{
        this.props.history.push({pathname: '/productDetails',
        state: this.props.fashion})
     }
    render() {
        return (
            <div className="col-lg-2" onClick= {this.clickHandler}>	
            <div className="post-slide9">
              <div className="post-img">
                <img src={this.ImageSrc} alt='Test' className="img-fluid" />
                <ul className="d-flex justify-content-end pr-2 pt-2 shopping_cart" style={{listStyle: 'none'}}>
                  <li className="pr-2"><Link href><i className="fa fa-heart-o" aria-hidden="true" /></Link></li>
                  <li><Link href><i className="fa fa-shopping-cart" aria-hidden="true" /></Link></li>
                </ul>
              </div>
              <div className="post-review">
                <small><b>{this.title}</b></small>
                <ul className="d-flex justify-content-between no-bullets">
                  <li>{this.quantity} Piece</li>
                  <li>
                    <i className="fa fa-circle text-warning" aria-hidden="true" />
                    <i className="fa fa-circle" aria-hidden="true" />
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li><s>{this.discount_price}</s></li>
                  <li className="text-info">
                    {this.offers}
                  </li>
                </ul>
                <ul className="d-flex justify-content-between no-bullets">
                  <li className="text-warning">
                   {this.price}
                  </li>
                  <li>
                    <div className="tooltip"><i className="fa fa-share-alt" aria-hidden="true" />
                      <ul className="tooltiptext d-flex justify-content-around no-bullets">
                        <li><Link href className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></Link></li>
                        <li><Link href className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></Link></li>
                        <li><Link href className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                        <li><Link href className="google_plus"><i className="fa fa-google-plus" aria-hidden="true" /></Link></li>
                      </ul>
                    </div>
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}

export default withRouter(Fashion)
