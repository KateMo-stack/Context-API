import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Company_gallery from "../components/Company_gallery";
import Meet_us from "../components/Meet_us";
import Career from "../components/Career";
import Navbar from "../components/Navbar";
import ThemeContext from "../components/ThemeContext";

const App = () => {
  const colorr = "red";
  const h1Styles = {
    color: "pink",
    fontSize: "60px",
  };

  const NavStyles = {
    primaryColor: "yellow",
  };

  const AllStyles = {
    h1Styles,
    NavStyles,
  };

  return (
    <ThemeContext.Provider value={AllStyles}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* <h1>This is a homepage</h1> */}
          <Switch>
            <Route exact path="/gallery" component={Company_gallery} />
            <Route exact path="/meet_us" component={Meet_us} />
            <Route exact path="/career" component={Career} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
