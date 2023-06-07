import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
const Container = document.getElementById("root");
const root = createRoot(Container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
