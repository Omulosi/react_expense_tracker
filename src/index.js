import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";
import { Provider } from "./context/context";
import "./index.css";

const APP_ID = process.env.REACT_APP_SPEECHLY_ID;

console.log(APP_ID);

ReactDOM.render(
  <SpeechProvider appId={APP_ID} language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
