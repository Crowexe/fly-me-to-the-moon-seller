import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "../components/Alert";
import Titulo from "../components/Titulo";
import "./Login.css";

export function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { login, loginWithGoogle, resetPassword } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
        await login(user.email, user.password);
        navigate("/");
        } catch (error) {
        setError(error.message);
        }
    };

    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const handleGoogleSignin = async () => {
        try {
        await loginWithGoogle();
        navigate("/");
        } catch (error) {
        setError(error.message);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setError("Write an email to reset password");
        try {
        await resetPassword(user.email);
        setError('We sent you an email. Check your inbox')
        } catch (error) {
        setError(error.message);
        }
    };

    const divStyle = {
        backgroundImage: "url(https://i.imgur.com/9V62Mkn.png)"
    }

    return (
        <div className="Login">                   
            <div style={divStyle} alt="Background" className="imgBG" >
                <div className="leftScreen">
                    <div>
                        <Titulo/>
                        <br />
                        <p className="subtitulo">El lugar para volar a donde sea al alcance de tan sólo un clic.</p>
                    </div>
                </div>
            </div>
            <div className="rightScreen">
                <div className="top-login-box">
                    <h2 className="titulo-login">
                        Iniciar sesión
                    </h2>
                    <p className="alert-box">{error && <Alert message={error} />}</p>                        
                </div>
                <div className="form-box">              
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label
                                htmlFor="email"
                                className="label-login"
                            >
                                Correo electronico
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                className="input-data"
                                placeholder="ejemplo@ejemplo.com"
                            />
                        </div>

                        <div className="mt-6">
                            <div className="password-box">
                                <label
                                    htmlFor="password"
                                    className="label-login"
                                >
                                    Contraseña
                                </label>
                                <a
                                    className="forgot-password"
                                    href="#!"
                                    onClick={handleResetPassword}
                                >
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>

                            <input
                                type="password"
                                name="password"
                                id="password" 
                                onChange={handleChange}
                                className="input-data"
                                placeholder="Contraseña"
                            />
                        </div>

                        <div className="mt-6">
                            <button
                                className="enter-button"
                                type="submit"
                            >
                                Entrar
                            </button>
                        </div>
                    </form>

                    <div class="mt-6">
                        <button
                            onClick={handleGoogleSignin}
                            className="login-google"
                        >
                            Inicia sesión con Google
                        </button>
                    </div>
                    <p className="go-to">
                        ¿No tienes cuenta?&nbsp;&nbsp;
                        <Link to="/register" className="register-link">
                            Registrate
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}