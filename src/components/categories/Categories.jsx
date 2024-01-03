import { categories } from "../../utils/categories";
import Category from "./Category";
import "./categories.css";

export default function Categories() {
  return (
    <div className="cards">
      {categories.map(({ id, title, description, src }) => (
        <Category
          key={id}
          id={id}
          title={title}
          description={description}
          src={src}
        />
      ))}
    </div>
  );
}
