import React from "react";
import ReactDOM from "react-dom/client";
import { store } from './redux/store';
import { Provider } from 'react-redux';

import { App } from "./components";

import "./assets/styles/_index.sass";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);