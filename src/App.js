import React from "react"; //don't need to import react anymore in react 17 version
import GlobalStyle from "./components/GlobalStyle";
//import pgs
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
//router
//switch component will stop once it matches first url/path and won't go search for anything else; you wrap your routes in a switch tag
//router will render anything with a "/", but if you have duplicate paths with a "/" you must use prop "exact" so that it will render specific unique paths
import {Switch, Route} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
