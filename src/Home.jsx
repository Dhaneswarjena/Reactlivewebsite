import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/image/img1.svg'
import Common from './Common';
const Home = () => {
  return (
    <>
      <Common 
      name="Grow Your Business With"
      img={web}
      visit="/service"
      btnname="Get Started"
      />
    </>
  );
};
export default Home;
