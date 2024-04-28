import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.Suspense fallback="loading...">
          <App />
        </React.Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
