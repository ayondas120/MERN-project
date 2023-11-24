import React from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Corousel from "../components/Corousel";
const Home = () => {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <Corousel />
      </div>
      <div className="m-3"></div>
      <div className="d-inline">
        <Card />
      </div>
      <div className="d-inline">
        <Card />
      </div>
      <div className="d-inline">
        <Card />
      </div>
      <div className="d-inline">
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
