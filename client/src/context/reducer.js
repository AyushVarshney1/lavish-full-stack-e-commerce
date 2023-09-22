import {
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  DISPLAY_ALERT,
  CLOSE_ALERT,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  HANDLE_CHANGE,
  REMOVE_FILTERS,
  CHANGE_PAGE
} from "./actions.js";

// import { initialState } from "./appContext.js";

const reducer = (state, action) => {
  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      showAlert: true,
      alertText: action.payload.msg,
    };
  }
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values",
    };
  }
  if (action.type === CLOSE_ALERT) {
    return {
      ...state,
      showAlert: false,
    };
  }
  if (action.type === FETCH_PRODUCTS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      products: action.payload.data,
      totalProducts: action.payload.count,
      numOfPages: action.payload.pages
    };
  }
  if (action.type === FETCH_PRODUCTS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === REMOVE_FILTERS) {
    return {
      ...state,
      category: "",
      rating: 1,
      price: "all",
      types: [],
      brands: [],
      search: ''
    };
  }
  if(action.type === CHANGE_PAGE){
    return {
      ...state,
      page: action.payload
    }
  }
};

export default reducer;
