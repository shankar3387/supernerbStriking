import actions from './actions';

const {
  changeLayoutBegin,
  changeLayoutSuccess,
  changeLayoutErr,
  changeRtlBegin,
  changeRtlSuccess,
  changeRtlErr,
} = actions;

const changeLayoutMode = value => {
  return async dispatch => {
    try {
      dispatch(changeLayoutBegin());
      dispatch(changeLayoutSuccess(value));
    } catch (err) {
      dispatch(changeLayoutErr(err));
    }
  };
};

const changeRtlMode = value => {
  return async dispatch => {
    try {
      dispatch(changeRtlBegin());
      dispatch(changeRtlSuccess(value));
    } catch (err) {
      dispatch(changeRtlErr(err));
    }
  };
};

export { changeLayoutMode, changeRtlMode };
