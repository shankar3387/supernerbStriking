import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import Admin from './admin';
import LayoutHome from '../layout/HomeLayout/LayoutHome';
import ProtectedRoute from '../components/utilities/protectedRoute';
import HomeLayoutRouter from '../layout/HomeLayout/HomeLayoutRouter';

const HomeLayout = lazy(() => import('../layout/HomeLayout/HomeLayout'));

const NotFound = () => {
  return <Redirect to="/" />;
};

const FrontendRoutes = () => {
  return (
      
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <Route path="/">
          <HomeLayout />
        </Route>
        {/* <Route exact path="*" component={NotFound} /> */}
      </Suspense>
    </Switch>
  );
};

export default LayoutHome(FrontendRoutes);
