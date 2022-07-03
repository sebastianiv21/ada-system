import Button from "../components/Button";
const NotFound = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-secondary fw-bold">
        <i className="fa-solid fa-heart-crack me-2" />
        Error 404
      </h1>
      <h3 className="text-secondary">La página que estás buscando no existe</h3>
      <Button
        buttonClass="btn btn-primary text-secondary"
        buttonIcon="heart-crack"
        buttonText="Este es un boton"
      />
    </div>
  );
};

export default NotFound;
