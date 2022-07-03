import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">
      <div className="text-center text-dark mt-4 mb-3">
        <h1 className="fw-bold">ADA Health</h1>
        <h3 className="fw-bold">Sistema Hospitalario del Huila</h3>
        <h6>
          El sistema de información para administrar las pruebas ADA en los
          hospitales del departamento del Huila
        </h6>
      </div>
      <img
        src="./home-img.jpg"
        className="rounded mx-auto d-block img-fluid mb-3"
        width="450"
        alt="home-img"
      />
      <Footer />
    </div>
  );
};

export default Home;
