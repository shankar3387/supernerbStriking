import React, { lazy, Suspense } from 'react';
import { Switch ,useRouteMatch } from 'react-router-dom';
import { Spin } from 'antd';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

const Header = lazy(() => import('./Header/Header'));
const HomeLayoutRouter = lazy(() => import('./HomeLayoutRouter'));

const Home = lazy(() => import('../../HomeComponent/Home/Home'));

const Login = lazy(() => import('../../HomeComponent/Authentication/Login/Login'));

const Register = lazy(() => import('../../HomeComponent/Authentication/Register/Register'));

const CartProcess = lazy(() => import('../../HomeComponent/Cart/CartProcess'));

const CreateBlogs = lazy(() => import('../../HomeComponent/BlogBoard/CreateBlogs'));
const ProductDetails = lazy(() => import('../../HomeComponent/Fashion/ProductDetails/ProductDetails'));

const CreatePolls = lazy(() => import('../../HomeComponent/Polls/CreatePolls'));
const SellerRegistration = lazy(() => import('../../HomeComponent/SellerRegistration/SellerRegistration'));

const HomeLayout = () => {
    const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact  path={`${path}/`} component={Home} />
        <Route exact restricted={false}  path='/login' component={Login} />
        <Route exact restricted={false} path="/register" component={Register} />
        <Route restricted={false} path="/cartProcess" component={CartProcess} />
        <Route restricted={false} path="/createBlogs" component={CreateBlogs} />
        <Route exact restricted={false} path="/productDetails" component={ProductDetails} />
        <Route restricted={false} path="/createPolls" component={CreatePolls} />
        <Route restricted={false} path="/seller_account" component={SellerRegistration} />
      </Switch>
    </div>
  );
};

export default HomeLayout;
