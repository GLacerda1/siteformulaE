import Nav from "./components/Header.jsx";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
