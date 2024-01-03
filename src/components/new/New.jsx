import { news } from "../../utils/news";
import "./new.css";

export default function New() {
  return (
    <section className="news">
      <h2>New</h2>
      <ul>
        {news.map(({ id, description, title }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
