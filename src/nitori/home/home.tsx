import React from "react";
import { Route, Routes } from "react-router-dom";
import NitoriHomePage from "../homepage/homepage";

//import CreditCard from "../../mypage/creditCard/task.component";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<NitoriHomePage />} />
    </Routes>
  );
};

export default Home;
