import React from 'react';
import "./Loader.css";
import {useSelector} from "react-redux";

const Loader = () => {
  const isLoading = useSelector(state => state.loading);
  if(isLoading) {
    return (
      <div className="loader-wrapper">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Loader;