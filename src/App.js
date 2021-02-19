import React from "react"; //don't need to import react anymore in react 17 version
import GlobalStyle from "./components/GlobalStyle";
//import pgs
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//router
//switch component will stop once it matches first url/path and won't go search for anything else; you wrap your routes in a switch tag
//router will render anything with a "/", but if you have duplicate paths with a "/" you must use prop "exact" so that it will render specific unique paths
import { Switch, Route, useLocation } from "react-router-dom";
//animation
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            {" "}
            {/*adding a :id is a dynamic way to route a pg to another one using the url*/}
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
