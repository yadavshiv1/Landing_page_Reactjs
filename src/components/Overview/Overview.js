import React from "react";
import "./Overview.css";
import Container from "../Container/Container";
import overview from "../../assets/img2.png";
import overview1 from "../../assets/img3.png";


export default function Overview() {
  return (
    <section className="overview4">
      <Container type="smallest">
        <div className="content4">
          <img src={overview} alt="No found" />
          <img src={overview1} alt="No found" />
          
          <div className="right4">
            <h3 className="title4">
            See the world & spend less always.
            </h3>
            <p className="secondary-text4">
            Create custom landing pages with Omega that converts<br/>
             more visitors than any website. With lots of unique blocks,<br/>
              you can easily build a page without coding.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
