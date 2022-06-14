import { Navbar } from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import "./Home.css";
import Titulo from "../components/Titulo";
import Moon from "../components/Moon";

export function Home() {
  const { user } = useAuth();

   

  return (
    <>
      <div className="home-contenedor">
        <div className="Home">
		      <Navbar />
          <div className="home-inside">
            <div className="home-filter">
              <div className="home-contenido">
                <h1>Bienvenido/a, {user.displayName || user.displayEmail}</h1>
                   <Titulo />                   
                    <Moon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}