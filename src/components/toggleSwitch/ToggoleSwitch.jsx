import { useContext } from "react";

import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";
import { ThemContext } from "../../contexts/themContext";
import "./toggleSwitch.css";

export default function ToggoleSwitch() {
  const { darkModeEnable, setDarkModeEnable } = useContext(ThemContext);
  const handleClick = () => {
    setDarkModeEnable(!darkModeEnable);
  };
  return (
    <div className="darkmod-toggle">
      <button onClick={handleClick}>
        {darkModeEnable ? (
          <img
            src={moon}
            alt="moon"
            className={`moon ${darkModeEnable ? "ligth-svg" : ""}`}
          />
        ) : (
          <img src={sun} alt="sun" className="sun" />
        )}
      </button>
    </div>
  );
}
