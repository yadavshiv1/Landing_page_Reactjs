import React, { useState } from "react";
import "./brand.css";
import Container from "../Container/Container";

import img1 from "../../assets/image.png";


export default function Brand() {
  const [toggle, setToggle] = useState(false);
  return (
    
    <section className="brand">
    
        <Container>
          <nav>
            <h1 className="logo">Omega</h1>
            <ul className={`header-links ${toggle ? "header-links-show" : ""}`}>
              <li>
                <a href="/">Demo</a>
              </li>
              <li>
                <a href="/">Page</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
               <button> <a href="/">Get Started</a></button>
              </li>
            </ul>
            
            <div className="toggle" onClick={() => setToggle(!toggle)}>
              <i class="fas fa-sliders-h"></i>
            </div>
          </nav>
          <section className="overview">
          <div className="content">
          <img src={img1} style={{ width: 300, height: 500 }} alt="No found"  />
          <div className="right">
            <h3 className="title">
                Travel the world &<br/> meet new friends.
            </h3>
            <p className="secondary-text">
            Create custom landing pages with Omega that convert<br/>
             more visitors than any website. With lots of unique blocks,<br/>
              you can easily build a page without coding.
            </p>
            <input placeholder="Email address" /><button className="inbtn">I want to join</button>
          </div>
        </div>
    </section>
        </Container>
 
    </section>
  );
}
