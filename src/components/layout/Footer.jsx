import { useContext } from "react";
import { ThemContext } from "../../contexts/themContext";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const { darkModeEnable } = useContext(ThemContext);
  return (
    <footer className={`${darkModeEnable ? "dark-bg dark-color" : ""}`}>
      © {year} - Réalisé avec ❤️ - Session Remote - 1023
    </footer>
  );
}
