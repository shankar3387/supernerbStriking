import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { ConfigProvider } from 'antd';
import store, { rrfProps } from './redux/store';
import Admin from './routes/admin';
import Auth from './routes/auth';
import './static/css/style.css';
import config from './config/config';
import ProtectedRoute from './components/utilities/protectedRoute';
import HomeLayout from './layout/HomeLayout/HomeLayout';
import LayoutHome from './layout/HomeLayout/LayoutHome';
import Home from './routes/Home';

const { theme } = config;

const ProviderConfig = () => {
  const { rtl, isLoggedIn } = useSelector(state => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      isLoggedIn: state.auth.login,
    };
  });

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setPath(window.location.pathname);
    }
    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true);
  }, [setPath]);

  return (
    // <Router basename={process.env.PUBLIC_URL}>
    //   <Route path="/" component={Home} />
    // </Router>
    <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={{ ...theme, rtl }}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router basename={process.env.PUBLIC_URL}>
            <div>
              <Switch>
                <ProtectedRoute path="/admin" component={Admin} />
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>

            {/* {!isLoggedIn ?  : <ProtectedRoute path="/admin" component={Admin} />}
            {isLoggedIn && (path === process.env.PUBLIC_URL || path === `${process.env.PUBLIC_URL}/`) && (
              <Redirect to="/" />
            )} */}
          </Router>
        </ReactReduxFirebaseProvider>
      </ThemeProvider>
    </ConfigProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ProviderConfig />
    </Provider>
  );
}

export default hot(App);
