import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./REDUX2/redux/store";
import { AuthContextProvider } from "./AuthContext";
// import { store } from "./Redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </AuthContextProvider>
    </Provider>
  </BrowserRouter>
);
