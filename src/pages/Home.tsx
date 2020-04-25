import React from "react";
import { Provider } from "react-redux";

import HomeContainer from "../containers/Home";

import store from "../store";

const Home = () => (
  <Provider store={store}>
    <HomeContainer />
  </Provider>
);

export default Home;
