import React from "react";
import Container from "../Container/Container";
import image from "../../assets/image.png";

export default function sec() {
  return (
    <section className="specs">
      <Container>
        <div className="content">
          <div className="col-1">
            <h2 className="title">
              Improving your<br /> travel experience.
            </h2>
            <p>Create custom landing pages with Omega that converts<br />
              more visitors than any website. With lots of unique blocks,<br />
              you can easily build a page without coding.</p><br />
            <button className="inbtn">Get This App</button>

          </div>
          <div className="col-2">
            <div className="spec_image">
              <img src={image} alt="Specifications" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
