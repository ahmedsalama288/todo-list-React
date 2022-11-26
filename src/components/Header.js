import React from "react";

// [#] Get The Icons images
import moon from "../images/iconMoon.svg";
import sun from "../images/iconSun.svg";

function Header(props) {
  function handleClick() {
    props.setIsDark((prev) => !prev);
  }
  return (
    <header>
      <h1>TODO</h1>
      <div className="mode" onClick={handleClick}>
        <img src={props.isDark ? sun : moon} alt="mode" />
      </div>
    </header>
  );
}

export default Header;
