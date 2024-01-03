import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import close from "../../assets/icons/icon-menu-close.svg";
import open from "../../assets/icons/icon-menu.svg";
import logoApp from "../../assets/images/logo.svg";
import { ThemContext } from "../../contexts/themContext";
import useClickOutside from "../../hook/useClickOutSide";
import ToggoleSwitch from "../toggleSwitch/ToggoleSwitch";
export default function Header() {
  const [show, setShow] = useState(false);

  const dropdownRef = useClickOutside(() => setShow(false));
  const { darkModeEnable } = useContext(ThemContext);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <header className={`${darkModeEnable ? "dark-bg dark-color" : ""}`}>
      <div className={`overlay ${show ? "show-overlay" : ""}`}></div>
      <img
        src={logoApp}
        alt="logo app"
        className={`logo ${darkModeEnable ? "ligth-svg" : ""}`}
      />
      <button type="button" className="btn-open-mobile">
        <img
          src={open}
          alt="button open"
          onClick={handleClick}
          className={` ${darkModeEnable ? "ligth-svg" : ""}`}
        />
      </button>

      <nav
        ref={dropdownRef}
        className={`nav-mobile ${show ? "show" : ""} ${
          darkModeEnable ? "dark-bg dark-color" : ""
        }`}
      >
        <button type="button">
          <img
            src={close}
            alt="button close"
            onClick={handleClick}
            className={` ${darkModeEnable ? "ligth-svg" : ""}`}
          />
        </button>
        <Link to="/">Home</Link>
        <Link to="/new-page">New</Link>
        <Link to="/popular-page">Popular</Link>
        <Link to="/trending-page">Trending</Link>
        <Link to="/categories-page">Categories</Link>
      </nav>
      <div className="block-toggle-nav">
        <nav className="nav-desktop">
          <Link to="/">Home</Link>
          <Link to="/new-page">New</Link>
          <Link to="/popular-page">Popular</Link>
          <Link to="/trending-page">Trending</Link>
          <Link to="/categories-page">Categories</Link>
        </nav>
        <ToggoleSwitch />
      </div>
    </header>
  );
}
