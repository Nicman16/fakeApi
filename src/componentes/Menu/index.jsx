import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../supabase";
import { AppContext } from "../../contexto/contexto";
import "./style.css";

function Menu() {
  const { usuario } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <nav className="c-menu">
      <Link to="/">Listas</Link>
      <Link to="/Capturados">Capturados</Link>
      <Link to="/Aleatorios">Aleatorios</Link>
      <Link to="/Usuarios">Usuarios</Link>
      <Link to="/Favoritos">Favoritos</Link>
      {usuario && usuario.roll === "admin" && (
        <Link to="/admin">Admin</Link>
      )}
      <button className="logout-btn" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </nav>
  );
}

export default Menu;