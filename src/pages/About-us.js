import { Navbar } from "../components/Navbar";
//import { useAuth } from "../context/AuthContext";
import "./About-us.css";

export function About() {
  //const { logout, user } = useAuth();
//
  //console.log(user);
  //const handleLogout = async () => {
  //  try {
  //    await logout();
  //  } catch (error) {
  //    console.error(error.message);
  //  }
  //};

   

  return (
    <>
      <div className="About-contenedor">
        <div className="About">
		      <Navbar />
          <div className="About-contenido">
            <h1>¿Quienes somos? </h1>
            <div className="cards-contenedor">
              <div className="card">
                <div className="team-img">
                  <img src="https://i.imgur.com/0a8dbo1.png" alt="Alan"/>
                </div>
                <div className="miembro">
                  <h2>Vallejo García Alan Gerardo</h2>
                </div>
              </div>
              <div className="card">
                <div className="team-img">
                  <img src="https://i.imgur.com/NlIiste.png" alt="Chris"/>
                </div>
                <div className="miembro">
                  <h2>Vega Bautista Christian Emanuel</h2>
                </div>
              </div>
              <div className="card">
                <div className="team-img">
                  <img src="https://i.imgur.com/XTKrlJT.png" alt="Soledad"/>
                </div>
                <div className="miembro">
                  <h2>Soledad Hernández Karen Lisset</h2>
                </div>
              </div>
              <div className="card">
                <div className="team-img">
                  <img src="https://i.imgur.com/bfwoAef.png" alt="Viridiana"/>
                </div>
                <div className="miembro">
                  <h2>Solis Hernández Viridiana</h2>
                </div>
              </div>
              <div className="card">
                <div className="team-img">
                  <img src="https://i.imgur.com/hk2HaKG.png" alt="Luis"/>
                </div>
                <div className="miembro">
                  <h2>Venegas Avila Luis Fernando</h2>
                </div>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}