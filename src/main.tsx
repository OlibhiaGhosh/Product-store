import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <App />
        <Toaster
          toastOptions={{
            className: "",
            style: {
              padding: "12px",
              color: "#691c1c",
              fontSize: "16px",
            },
          }}
          containerStyle={{
            top: 70,
            left: 20,
            bottom: 20,
            right: 20,
          }}
        />
      </Provider>
    </StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
