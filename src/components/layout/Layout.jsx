/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";
import "./layout.css";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
