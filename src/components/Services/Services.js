import React from "react";
import "./Services.css";
import Container from "../Container/Container";

export default function Services() {
  return (
    <section className="service" style={{
      backgroundColor: '#5454d4'
    }}>
      <Container>
        <div className="content">

          <div className="sec-1">
            <h3 className="title"><span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </h3>
            <p className="description">
              “OMG! I cannot believe that I have got a brand new landing page after getting Omega.
              It was super easy to edit and publish. Everyone should try it!”
            </p>
          </div>&nbsp;&nbsp;&nbsp;

          <div className="sec-2">
            <h3 className="title"><span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </h3>
            <p className="description">
              “You made it so simple. My new site is so much faster and easier to work with than my old site.
              I just choose the page, make the change and click save.”.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
