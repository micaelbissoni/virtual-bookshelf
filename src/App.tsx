import React from "react";
import { Provider } from "react-redux";

import HomeComponent from "./components/Home";

import store from "./store";

const App = () => (
  <Provider store={store}>
    <HomeComponent />
  </Provider>
);

export default App;
