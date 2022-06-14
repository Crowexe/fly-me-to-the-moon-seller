import "./Alert.css";

export function Alert({ message }) {
    return (
      <div
        className="alerta-container"
        role="alert"
      >
        <span className="alerta">Correo electronico o contraseña invalido</span>

      </div>
    );
  }