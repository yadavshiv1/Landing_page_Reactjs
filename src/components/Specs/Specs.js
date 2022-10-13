import React from "react";
import "./Specs.css";
import Container from "../Container/Container";

import midsection3 from "../../assets/img-1.png";

export default function Specs() {
  return (
    <section className="specs">
      <Container>
        <div className="content">
          <div className="col-1">
            <h2 className="title">
            Making trip is fun. <br/>Travel with friends.
            </h2>
            <p>Create custom landing pages with Omega that converts<br/>
             more visitors than any website. With lots of unique blocks,<br/>
            you can easily build a page without coding.</p><br/>

               <h3> <span className="Oval">1</span>Find your trip partner</h3>
              &nbsp;<p>With lots of unique blocks, you can easily build<nr/>
               a page without coding. Build your next <br/>
               landing page quickly.</p><br/>
               <h3><span className="Oval">2</span>Plan trip with easy steps</h3>&nbsp;
              <p>With lots of unique blocks, you can easily build<nr/>
               a page without coding. Build your next <br/>
               landing page quickly.</p>
               
          </div>
          <div className="col-2">
            <div className="spec_image">
              <img src={midsection3} alt="Specifications" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
