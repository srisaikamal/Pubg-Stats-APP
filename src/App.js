import React, { useEffect } from "react";
import Home from "./Pages/Home";
import PubgState from "./Context/PubgState";
import ReactGA from "react-ga";

const GoogleAnalytics = () => {
  ReactGA.initialize("UA-137410114-6");
  ReactGA.pageview(window.location.pathname + window.location.search);
};

const App = () => {
  useEffect(() => {
    GoogleAnalytics();
  }, []);

  return (
    <PubgState>
      <Home />
    </PubgState>
  );
};

export default App;
