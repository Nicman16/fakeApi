import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            alert("Usuario o contraseña no válido");
        } else {
            navigate("/");
        }
    };

    return (
        <div className="login-container">
            {/* Pokébola SVG */}
            <svg className="pokeball" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="#fff" stroke="#3b4cca" strokeWidth="6"/>
                <path d="M5 50h90" stroke="#3b4cca" strokeWidth="8"/>
                <path d="M5 50a45 45 0 0 1 90 0" fill="#ea1a1a"/>
                <circle cx="50" cy="50" r="18" fill="#fff" stroke="#3b4cca" strokeWidth="6"/>
                <circle cx="50" cy="50" r="8" fill="#fff" stroke="#3b4cca" strokeWidth="4"/>
            </svg>
            <h2>Login Pokémon</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar sesión</button>
            </form>
            <p style={{ margin: "18px 0 8px 0", color: "#3b4cca" }}>
                ¿No tienes cuenta?
            </p>
            <button
                style={{ background: "#ea1a1a" }}
                onClick={() => navigate("/registro")}
            >
                Registrarse
            </button>
        </div>
    );
}

export default Login;
