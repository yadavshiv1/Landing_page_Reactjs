import React from "react";

import Brand from "./components/Brand/Brand";
import Services from "./components/Services/Services";
import Specs from "./components/Specs/Specs";
import Overview from "./components/Overview/Overview";
import Footer from "./components/Footer/Footer";
import Sec from "./components/sec/Sec";
import Playstore from "./components/playStore/Playstore";
import Bg from "./components/bg/Bg";


function App() {
  return (
    <>
  
      <Brand />
      <Services />
      <Specs />
      <Overview />
      <Sec />
      <Playstore /><br/>
      <Bg/>
      <Footer />
    </>
  );
}

export default App;
