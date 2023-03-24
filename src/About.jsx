import React from "react";
import { NavLink } from "react-router-dom";
import webb from '../src/image/img2.svg'
import Common from './Common';
const Home = () => {
  return (
    <>
      <Common 
      name="Welcome to about page"
      img={webb}
      visit="/contact"
      btnname="Contact Now"
      />
    </>
  );
};
export default Home;
