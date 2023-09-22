import React, { useEffect } from "react";
import {
  Navbar,
  Filter,
  Footer,
  ProductContainer,
  PageButtonContainer,
} from "../components";
import { useAppContext } from "../context/appContext";
import LoadingBar from 'react-top-loading-bar'


const Products = () => {

  const { fetchProducts, category, rating, price, types, brands, sort, page, search, progress } =
    useAppContext();

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [category, rating, price, types, brands, sort, page, search]);

  return (
    <div>
    <LoadingBar color='#f11946' progress={progress} transitionTime={100} />
      <Navbar />
      <div className="filterAndProductContainer">
        <Filter />
        <div className="productAndPaginationContainer">
          <ProductContainer />
          <PageButtonContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
