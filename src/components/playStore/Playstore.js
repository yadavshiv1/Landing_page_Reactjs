import React from "react";
import "./Playstore.css"
import Container from "../Container/Container";
import logo1 from "../../assets/play-store.png";
import logo2 from "../../assets/app-store.png";

export default function Playstore() {
  return (
    <section className="service1">
      <Container>
        <div className="content1">
            <h1 className="title1">Get the app now</h1><br/>
            <h5>
            Create custom landing pages with Omega that converts
            <br/> more visitors than any website.</h5>
         
          </div>
        <div className="playlogo">
                <div>
                <img src={logo2} alt="Specifications" />
                </div>&nbsp;&nbsp;&nbsp;
                <div>
                <img src={logo1} alt="Specifications" />
                </div>
        </div>
            
        
      </Container>
    </section>
  );
}
