import React from "react";

import { Navigation } from "../components";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Navigation>
      <Component {...pageProps} />
    </Navigation>
  );
}

export default App;
