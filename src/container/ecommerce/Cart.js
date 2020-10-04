import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Row, Col, Table, Form, Input, Select, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FigureCart, ProductTable, CouponForm, OrderSummary } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { cartGetData, cartUpdateQuantity, cartDelete } from '../../redux/cart/actionCreator';

const Checkout = lazy(() => import('./overview/CheckOut'));

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cartData, isLoading, rtl } = useSelector(state => {
    return {
      cartData: state.cart.data,
      isLoading: state.cart.loading,
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });
  const { path, isExact } = useRouteMatch();
  const [form] = Form.useForm();
  const [state, setState] = useState({
    coupon: 0,
    promo: 0,
    current: 0,
  });

  useEffect(() => {
    if (cartGetData) {
      dispatch(cartGetData());
    }
  }, [dispatch]);

  const incrementUpdate = (id, quantity) => {
    const data = parseInt(quantity, 10) + 1;
    dispatch(cartUpdateQuantity(id, data, cartData));
  };

  const decrementUpdate = (id, quantity) => {
    const data = parseInt(quantity, 10) >= 2 ? parseInt(quantity, 10) - 1 : 1;
    dispatch(cartUpdateQuantity(id, data, cartData));
  };

  const cartDeleted = id => {
    const confirm = window.confirm('Are you sure to delete this product?');
    if (confirm) dispatch(cartDelete(id, cartData));
  };

  const productTableData = [];
  let subtotal = 0;

  if (cartData !== null) {
    cartData.map(data => {
      const { id, img, name, quantity, price, size, color } = data;
      subtotal += parseInt(quantity, 10) * parseInt(price, 10);
      return productTableData.push({
        key: id,
        product: (
          <div className="cart-single">
            <FigureCart>
              <img style={{ width: 80 }} src={require(`../../${img}`)} alt="" />
              <figcaption>
                <div className="cart-single__info">
                  <Heading as="h6">{name}</Heading>
                  <ul className="info-list">
                    <li>
                      <span className="info-title">Size :</span>
                      <span>{size}</span>
                    </li>
                    <li>
                      <span className="info-title"> Color :</span>
                      <span>{color}</span>
                    </li>
                  </ul>
                </div>
              </figcaption>
            </FigureCart>
          </div>
        ),
        price: <span className="cart-single-price">${price}</span>,
        quantity: (
          <div className="cart-single-quantity">
            <Button onClick={() => decrementUpdate(id, quantity)} className="btn-dec" type="default">
              <FeatherIcon icon="minus" size={12} />
            </Button>
            {quantity}
            <Button onClick={() => incrementUpdate(id, quantity)} className="btn-inc" type="default">
              <FeatherIcon icon="plus" size={12} />
            </Button>
          </div>
        ),
        total: <span className="cart-single-t-price">${quantity * price}</span>,
        action: (
          <div className="table-action">
            <Button
              onClick={() => cartDeleted(id)}
              className="btn-icon"
              to="#"
              size="default"
              type="danger"
              shape="circle"
              transparented
            >
              <FeatherIcon icon="trash-2" size={16} />
            </Button>
          </div>
        ),
      });
    });
  }

  const productTableColumns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const submitCoupon = values => {
    setState({ ...state, coupon: values });
  };

  const submitPromo = values => {
    setState({ ...state, promo: values });
  };

  const { Option } = Select;

  const onHandleCurrent = current => {
    setState({
      ...state,
      current,
    });
  };

  const onSubmit = () => {
    document.querySelectorAll('button span').forEach(item => {
      if (item.innerHTML === 'Done') {
        item.click();
      }
    });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Shopping Cart"
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
        <div className={isExact ? 'cartWraper' : 'checkoutWraper'}>
          <Row gutter={15}>
            <Col md={24}>
              <Cards headless>
                <Row gutter={30}>
                  <Col xxl={17} xs={24}>
                    <Switch>
                      <Suspense
                        fallback={
                          <div className="spin">
                            <Spin />
                          </div>
                        }
                      >
                        <Route
                          path={`${path}/checkout`}
                          render={() => <Checkout onCurrentChange={onHandleCurrent} />}
                        />
                        <Route
                          exact
                          path={path}
                          component={() => {
                            return (
                              <>
                                <ProductTable>
                                  {isLoading ? (
                                    <div className="sd-spin">
                                      <Spin />
                                    </div>
                                  ) : (
                                    <div className="table-cart table-responsive">
                                      <Table
                                        pagination={false}
                                        dataSource={productTableData}
                                        columns={productTableColumns}
                                      />
                                    </div>
                                  )}
                                </ProductTable>

                                <CouponForm>
                                  <Form form={form} name="submitCoupon" onFinish={submitCoupon}>
                                    <Row gutter={15}>
                                      <Col lg={4} sm={8} xs={24}>
                                        <Form.Item name="coupon" label="">
                                          <Input placeholder="Coupon Code" />
                                        </Form.Item>
                                      </Col>
                                      <Col lg={4} sm={8} xs={24}>
                                        <Button htmlType="submit" size="default" type="primary">
                                          Apply Coupon
                                        </Button>
                                      </Col>
                                    </Row>
                                  </Form>
                                </CouponForm>
                              </>
                            );
                          }}
                        />
                      </Suspense>
                    </Switch>
                  </Col>
                  <Col xxl={7} xs={24}>
                    <Cards
                      bodyStyle={{
                        backgroundColor: '#F8F9FB',
                        borderRadius: '20px',
                      }}
                      headless
                    >
                      <OrderSummary>
                        <Heading className="summary-table-title" as="h4">
                          Order Summary
                        </Heading>
                        <Cards
                          bodyStyle={{
                            backgroundColor: '#ffffff',
                            borderRadius: '20px',
                          }}
                          headless
                        >
                          <div className="order-summary-inner">
                            <ul className="summary-list">
                              <li>
                                <span className="summary-list-title">Subtotal :</span>
                                <span className="summary-list-text">{`$${subtotal}`}</span>
                              </li>
                              <li>
                                <span className="summary-list-title">Discount :</span>
                                <span className="summary-list-text">{`$${-20}`}</span>
                              </li>
                              <li>
                                <span className="summary-list-title">Shipping Charge :</span>
                                <span className="summary-list-text">{`$${30}`}</span>
                              </li>
                            </ul>
                            <Form form={form} name="promo" onFinish={submitPromo}>
                              <Form.Item name="couponType" initialValue="" label="">
                                <Select style={{ width: '100%' }}>
                                  <Option value="">
                                    <img src={require('../../static/img/Subtraction1.png')} alt="" /> Select Coupon
                                  </Option>
                                  <Option value="one">
                                    <img src={require('../../static/img/Subtraction1.png')} alt="" /> Coupon one
                                  </Option>
                                  <Option value="tow">
                                    <img src={require('../../static/img/Subtraction1.png')} alt="" /> Coupon tow
                                  </Option>
                                </Select>
                              </Form.Item>
                              <div className="promo-apply-form">
                                <Form.Item name="promoCode" label="Promo Code">
                                  <Input style={{ width: '72%' }} placeholder="Promo Code" />
                                  <Button htmlType="submit" size="default" type="success" outlined>
                                    Apply
                                  </Button>
                                </Form.Item>
                              </div>
                            </Form>
                            <Heading className="summary-total" as="h4">
                              <span className="summary-total-label">Total : </span>
                              <span className="summary-total-amount">{`$${subtotal + 30 - 20}`}</span>
                            </Heading>
                            {isExact && (
                              <Button className="btn-proceed" type="secondary" size="large">
                                <Link to={`${path}/checkout`}>
                                  Proceed To Checkout
                                  <FeatherIcon icon={!rtl ? 'arrow-right' : 'arrow-left'} size={14} />
                                </Link>
                              </Button>
                            )}
                            {state.current === 3 && (
                              <Button onClick={onSubmit} className="btn-proceed" type="secondary" size="large">
                                <Link to="#">Place Order</Link>
                              </Button>
                            )}
                          </div>
                        </Cards>
                      </OrderSummary>
                    </Cards>
                  </Col>
                </Row>
              </Cards>
            </Col>
          </Row>
        </div>
      </Main>
    </>
  );
};

export default ShoppingCart;
