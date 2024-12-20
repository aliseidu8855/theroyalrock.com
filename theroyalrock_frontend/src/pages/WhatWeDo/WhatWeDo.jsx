import React from "react";
import Hero from "../../components/Hero/Hero";
import Title from "../../components/Title/Title";
import hero3 from "../../assets/images/hero3.jpg";

const WhatWeDo = () => {
  return (
    <div>
      <Hero header="What we Do " subheader="More text here" heroBg={hero3} />
      <div className="container">
        <Title
          subTitle="What We Do"
          title="Training for a Sustainable Future"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
