import actions from './actions';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;

const login = () => {
  return async dispatch => {
    try {
      dispatch(loginBegin());
      setTimeout(() => {
        window.localStorage.setItem('logedIn', true);
        return dispatch(loginSuccess(true));
      }, 1000);
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = () => {
  return async dispatch => {
    try {
      dispatch(logoutBegin());
      window.localStorage.removeItem('logedIn');
      dispatch(logoutSuccess(null));
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut };
