import imgPopularDescktop from "../../assets/images/image-web-3-desktop.jpg";
import imgPopularMobile from "../../assets/images/image-web-3-mobile.jpg";
import useWidthScreen from "../../hook/useWidthScreen";
import "./popular.css";

export default function Popular() {
  const widthScreen = useWidthScreen();

  return (
    <section className="popular">
      <img
        src={widthScreen <= 768 ? imgPopularMobile : imgPopularDescktop}
        alt=""
      />
      <div className="popular-content">
        <h2>The Bright Futur of Web 3.0?</h2>
        <div className="popular-content-description">
          <p>
            We dive into the next evolution of the web that claims to put power
            of the platforms back into the hands of the people. But is it really
            fulfilling its promise?
          </p>
          <a href="#">READ MORE</a>
        </div>
      </div>
    </section>
  );
}
