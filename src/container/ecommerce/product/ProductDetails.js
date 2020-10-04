import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Rate } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import Heading from '../../../components/heading/heading';
import { filterSinglePage, updateWishList } from '../../../redux/product/actionCreator';
import { ProductDetailsWrapper } from '../Style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();

  const { products, product } = useSelector(state => {
    return {
      product: state.product.data,
      products: state.products.data,
    };
  });

  const [state, setState] = useState({
    quantity: 1,
  });

  useEffect(() => {
    if (filterSinglePage) {
      dispatch(filterSinglePage(parseInt(match.params.id, 10), products));
    }
  }, [match.params.id, dispatch, products]);

  const { name, rate, price, oldPrice, description, img, category, brand, popular } = product[0];
  const { quantity } = state;

  const incrementQuantity = e => {
    e.preventDefault();
    if (quantity !== 5)
      setState({
        ...state,
        quantity: quantity + 1,
      });
  };

  const decrementQuantity = e => {
    e.preventDefault();
    if (quantity !== 1)
      setState({
        ...state,
        quantity: quantity - 1,
      });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Product Details"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Cards headless>
          <ProductDetailsWrapper>
            <div className="product-details-box">
              <Row gutter={30}>
                <Col xs={24} lg={10}>
                  <div className="product-details-box__left pdbl">
                    <figure>
                      <img style={{ width: '100%' }} src={require(`../../../${img}`)} alt="" />
                    </figure>
                    <div className="pdbl__slider pdbs">
                      <Row gutter={5}>
                        {products.length
                          ? products
                              .filter(value => {
                                return value.category === category;
                              })
                              .map((value, index) => {
                                return (
                                  index <= 3 && (
                                    <Col md={4} key={value.id}>
                                      <div className="pdbl__image">
                                        <figure>
                                          <Link to={`/admin/ecommerce/productDetails/${value.id}`}>
                                            <img
                                              style={{ width: '100%' }}
                                              src={require(`../../../${value.img}`)}
                                              alt=""
                                            />
                                          </Link>
                                        </figure>
                                      </div>
                                    </Col>
                                  )
                                );
                              })
                          : null}
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col xs={24} lg={14}>
                  <div className="product-details-box__right pdbr">
                    <Heading className="pdbr__title" as="h2">
                      {name}
                    </Heading>
                    <Rate allowHalf defaultValue={rate} disabled />
                    <span className="pdbr__rating">{rate}</span>
                    <span className="pdbr__review-count"> 778 Reviews</span>
                    <p>
                      <span className="pdbr__brand-text">Brand :</span>{' '}
                      <span className="pdbr__brand-name">{brand}</span>
                    </p>
                    <Heading className="pdbr__new-price" as="h3">
                      <span className="pdbr__currency">$</span>
                      <span className="pdbr__price">{price}</span>
                    </Heading>
                    {oldPrice && (
                      <Heading className="pdbr__old-price" as="h6">
                        <del>${oldPrice}</del> <span className="pdbr__offer-price">30% Off</span>
                      </Heading>
                    )}
                    <p className="pdbr__desc">{description}</p>
                    <div className="pdbr__current-status">
                      <p>
                        <span className="current-status-title">Available:</span>
                        <span className="stock-status in-stock"> In Stock</span>
                      </p>
                      <p>
                        <span className="current-status-title"> Shipping: </span>
                        <span className="shipping-cost">Free</span>
                      </p>
                      <p className="pdbr__quantity">
                        <span className="current-status-title">Quantity:</span>

                        <Button className="btn-inc" onClick={decrementQuantity} type="default">
                          -
                        </Button>
                        {quantity}
                        <Button className="btn-dec" onClick={incrementQuantity} type="default">
                          +
                        </Button>
                        <span className="pdbr__availability">540 pieces available</span>
                      </p>
                    </div>

                    <div className="pdbr__Actions d-flex align-items-center">
                      <div className="pdbr__product-action">
                        <Button className="btn-buy" size="default" type="primary">
                          Buy Now
                        </Button>
                        <Button className="btn-cart" size="default" type="secondary">
                          <FeatherIcon icon="shopping-bag" size={14} /> Add To Cart
                        </Button>
                        <Button
                          onClick={() => dispatch(updateWishList(parseInt(match.params.id, 10)))}
                          className="btn-icon"
                          size="default"
                          raised
                          type="white"
                          shape="circle"
                        >
                          <FeatherIcon
                            icon="heart"
                            size={14}
                            color={popular ? '#FF4D4F' : '#9299B8'}
                            fill={popular ? '#FF4D4F' : 'none'}
                          />
                        </Button>
                        <Button className="btn-icon" size="default" raised type="white" shape="circle">
                          <FeatherIcon icon="share-2" size={14} />
                        </Button>
                      </div>
                      <div className="pdbr__socials">
                        <NavLink to="#">
                          <FontAwesome
                            className="super-crazy-colors"
                            name="facebook"
                            size="1x"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                          />
                        </NavLink>
                        <NavLink to="#">
                          <FontAwesome
                            className="super-crazy-colors"
                            name="twitter"
                            size="1x"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                          />
                        </NavLink>
                        <NavLink to="#">
                          <FontAwesome
                            className="super-crazy-colors"
                            name="pinterest-p"
                            size="1x"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                          />
                        </NavLink>
                        <NavLink to="#">
                          <FontAwesome
                            className="super-crazy-colors"
                            name="linkedin"
                            size="1x"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                          />
                        </NavLink>
                        <NavLink to="#">
                          <FontAwesome
                            className="super-crazy-colors"
                            name="send"
                            size="1x"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                          />
                        </NavLink>
                      </div>
                    </div>
                    <ul className="pdbr__list">
                      <li>
                        <span>Category:</span>
                        <span>{category}</span>
                      </li>
                    </ul>
                    <ul className="pdbr__list">
                      <li>
                        <span>Tags:</span>
                        <span>Blue, Green, Light</span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </ProductDetailsWrapper>
        </Cards>
      </Main>
    </>
  );
};

ProductDetails.propTypes = {
  match: PropTypes.shape(PropTypes.object).isRequired,
};

export default ProductDetails;
