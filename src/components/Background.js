import React from "react";
// [#] Import The Four Background Images
/* eslint-disable no-unused-vars */
import desLight from "../images/desLight.jpg";
import desDark from "../images/desDark.jpg";
import moDark from "../images/moDark.jpg";
import moLight from "../images/moLight.jpg";
const backgroundList = { desLight, desDark, moDark, moLight };

function Background(props) {
  return (
    <section className="background-sec">
      <img
        src={`${
          props.isDark ? backgroundList.desDark : backgroundList.desLight
        } `}
        alt="background"
      />
    </section>
  );
}

export default Background;
