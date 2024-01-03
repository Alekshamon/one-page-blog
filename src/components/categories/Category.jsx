/* eslint-disable react/prop-types */
export default function Category({ id, title, description, src }) {
  return (
    <section className="card">
      <img src={src} alt={title} />
      <div className="content">
        <span>{`0${id}`}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
}
