import React from "react";
import "./Playstore.css"
import Container from "../Container/Container";
import logo1 from "../../assets/play-store.png";
import logo2 from "../../assets/app-store.png";

export default function Playstore() {
  return (
    <section className="service1">
      <Container>
        <div className="content">
            <h1 className="title">Get the app now
            <p className="description"><span>
            Create custom landing pages with Omega that converts
            <br/> more visitors than any website.</span>
            </p></h1><br/>
            <div className="playlogo">
                <div>
                <img src={logo2} alt="Specifications" />
                </div>&nbsp;&nbsp;&nbsp;
                <div>
                <img src={logo1} alt="Specifications" />
                </div>
            </div>
            
          </div>
      </Container>
    </section>
  );
}
