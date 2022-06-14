import { useAuth } from "../context/AuthContext";
import "./Profile.css";

export function Profile() {
  const { user } = useAuth();
 

  return (
    <>
      <div className="Profile-card">    
        <div className="Profile-card-header"> 
          <div className="name-user">
            {user.displayName}
            </div>
          </div>
        </div>
    </>
  );
}