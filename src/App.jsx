import { useContext } from "react";
import "./App.css";
import Categories from "./components/categories/Categories";
import New from "./components/new/New";
import Popular from "./components/popular/Popular";
import { ThemContext } from "./contexts/themContext";
function App() {
  const { darkModeEnable } = useContext(ThemContext);
  return (
    <main className={`${darkModeEnable ? "dark-bg dark-color" : ""}`}>
      <div className="container-popular-new">
        <Popular />
        <New />
      </div>
      <Categories />
    </main>
  );
}

export default App;
