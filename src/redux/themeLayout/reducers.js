import actions from './actions';
import staticData from '../../config/config';

const initialState = {
  data: staticData.darkMode,
  rtlData: staticData.rtl,
  loading: false,
  rtlLoading: false,
  error: null,
};

const {
  CHANGE_LAYOUT_MODE_BEGIN,
  CHANGE_LAYOUT_MODE_SUCCESS,
  CHANGE_LAYOUT_MODE_ERR,

  CHANGE_RTL_MODE_BEGIN,
  CHANGE_RTL_MODE_SUCCESS,
  CHANGE_RTL_MODE_ERR,
} = actions;

const LayoutChangeReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CHANGE_LAYOUT_MODE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_LAYOUT_MODE_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case CHANGE_LAYOUT_MODE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case CHANGE_RTL_MODE_BEGIN:
      return {
        ...state,
        rtlLoading: true,
      };
    case CHANGE_RTL_MODE_SUCCESS:
      return {
        ...state,
        rtlData: data,
        rtlLoading: false,
      };
    case CHANGE_RTL_MODE_ERR:
      return {
        ...state,
        error: err,
        rtlLoading: false,
      };
    default:
      return state;
  }
};

export default LayoutChangeReducer;
