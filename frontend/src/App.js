import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  useEffect(() => {});

  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
