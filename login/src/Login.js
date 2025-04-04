import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Importa o hook de navegação
import "./Login.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = () => {
    console.log("Usuário:", user);
    console.log("Senha:", password);
  };

  return (
    <div className="container">
      <div className="login-box">
        <img src="/logo.png" alt="PraPets Logo" className="logo" />
        <h1 className="title">Bem-vindo!</h1>

        <div className="input-group">
          <label htmlFor="user">Usuário</label>
          <input
            id="user"
            type="text"
            placeholder="Digite seu usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="forgot-password">Esqueci minha senha</button>

        <button className="login-btn" onClick={handleLogin}>
          ENTRAR
        </button>

        <div className="separator">
          <hr />
          <span>ou use:</span>
          <hr />
        </div>

        <div className="social-buttons">
          <button className="google">
            <FaGoogle />
          </button>
          <button className="facebook">
            <FaFacebook />
          </button>
        </div>

        {/* Botão "Criar conta" igual ao de "Entrar" */}
        <button className="create-account" onClick={() => navigate("/register")}>
          CRIAR CONTA
        </button>
      </div>
    </div>
  );
}
