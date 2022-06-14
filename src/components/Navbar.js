import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import { Profile } from "./Profile";

export function Navbar() {
const { logout, user } = useAuth();

	console.log(user);
	const handleLogout = async () => {
		try {
			await logout();
		} catch (error) {
			console.error(error.message);
		}
	};
	return (    
		<>
			<div className="nav-header">
				<div className="nav-menu">					
					<a className="nav-links" href="/">
						<img src="https://i.imgur.com/H8SICQB.png" alt="home" />
						Inicio
					</a>
					<a className="nav-links" href="/boletos">
						<img className="ticket" src="https://i.imgur.com/E0GO04k.png" alt="ticket" />
						Boletos
					</a>
					<a className="nav-links" href="/about">
						Nosotros
					</a>
				</div>
				<div className="nav-search-bar">
					<input type="text" placeholder="Buscar"/>
				</div>
				<div className="nav-user">					
					<a className="nav-links">
						<img src="https://i.imgur.com/e9IXWE1.png" alt="profile"/>						
						Perfil
						<button className="dropdown"><Profile /></button>			
					</a>
					<a className="nav-links" href="/about" onClick={handleLogout}>
						<img className="logout-icon" src="https://i.imgur.com/zNCUO9b.png" alt="logout"/>
						Cerrar sesión
					</a>
				</div>
			</div>
		</>
	);
}