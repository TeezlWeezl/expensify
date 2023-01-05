import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./App";
import myStore from "./redux/store";

myStore.subscribe(() => console.log(myStore.getState().myCounter.count))

const rootElement = document.getElementById('app-root')
const reactRoot = ReactDOM.createRoot(rootElement)
reactRoot.render(
  <Provider store={myStore}>
    <App />
  </Provider>
)