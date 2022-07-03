

const Button = ({ buttonClass, buttonIcon, buttonText }) => {
  return (
    <button
      className={buttonClass}
      data-bs-toggle="tooltipCerrarSesion"
      data-bs-placement="bottom"
      title="Cerrar Sesión"
    >
      <i className={`fa-solid fa-${buttonIcon} me-1`} />{buttonText}
    </button>
  );
};

export default Button;
