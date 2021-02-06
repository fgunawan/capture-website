import React from "react"; //don't need to import react anymore in react 17 version
import GlobalStyle from "./components/GlobalStyle";
//import pgs
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
