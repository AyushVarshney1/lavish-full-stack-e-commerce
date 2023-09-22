import React, { useState, useReducer, useContext } from "react";
import axios from "axios";
import reducer from "./reducer.js";
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

const initialState = {
  user: null,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  products: [],
  totalProducts: 0,
  category: "",
  rating: 1,
  price: "all",
  types: [],
  brands: [],
  sort: '',
  search: '',
  numOfPages: 1,
  page: 1,
  wishlisted: []
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [progress, setProgress] = useState(0);
  // const authFetch = axios.create({
  //   baseURL: '/api/v1',
  // })

  // authFetch.interceptors.response.use((response) => {
  //   return response
  // },(error)=>{
  //   console.log('Hi')
  // })

  const setupUser = async ({ currentUser, endPoint }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      // setProgress(30)
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );
      setProgress(70);
      const { user } = data;
      dispatch({ type: SETUP_USER_SUCCESS, payload: user });
      setProgress(100);
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };

  const closeAlert = () => {
    dispatch({ type: CLOSE_ALERT });
  };

  const fetchProducts = async () => {
    const { category, rating, price, types, brands, sort, page, search } = state;
    dispatch({ type: FETCH_PRODUCTS_BEGIN });
    setProgress(30)
    let URL = `/api/v1/products?rating=${rating}`;
    if (category) {
      URL = URL + `&category=${category}`;
    }
    if (price) {
      URL = URL + `&price=${price}`;
    }
    if (types.length > 0) {
      const updatedTypes = types.join(",");
      console.log(updatedTypes);
      URL = URL + `&types=${updatedTypes}`;
    }
    if (brands.length > 0) {
      const updatedBrands = brands.join(",");
      console.log(updatedBrands);
      URL = URL + `&brands=${updatedBrands}`;
    }
    if(sort){
      URL = URL + `&sort=${sort}`
    }
    if(page){
      URL = URL + `&page=${page}`
    }
    if(search){
      URL = URL + `&search=${search}`
    }

    try {
      setProgress(70)
      const { data } = await axios.get(URL);
      const { product, productCount, numOfPages } = data;
      if(page>numOfPages){
        dispatch({type: CHANGE_PAGE, payload: numOfPages})
        window.scrollTo({
          top: 0,
          behavior: "smooth", // You can use 'auto' for instant scrolling
        });
      }
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: { data: product, count: productCount, pages: numOfPages },
      });
      setProgress(100)
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const removeFilters = () => {
    dispatch({ type: REMOVE_FILTERS });
  };

  const changePage = (page) =>{
    dispatch({ type: CHANGE_PAGE, payload: page })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        progress,
        setupUser,
        displayAlert,
        setProgress,
        closeAlert,
        fetchProducts,
        handleChange,
        removeFilters,
        changePage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
