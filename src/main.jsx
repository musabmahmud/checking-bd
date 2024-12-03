import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx';
import './index.css';
import {
  BrowserRouter
} from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContext.jsx";
import { Provider } from "react-redux";
import store from "./stores/index.js";



ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </BrowserRouter>
  </Provider>,
);