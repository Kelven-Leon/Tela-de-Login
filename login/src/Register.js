import { useState } from "react";
import "./Register.css"; // Importa o CSS

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="container">
      <div className="register-box">
        <img src="/logo.png" alt="PraPets Logo" className="logo" />
        <h1 className="title">Criar Conta</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nome</label>
            <input type="text" name="name" placeholder="Digite seu nome" required onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Digite seu e-mail" required onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input type="password" name="password" placeholder="Digite sua senha" required onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Confirmar Senha</label>
            <input type="password" name="confirmPassword" placeholder="Confirme sua senha" required onChange={handleChange} />
          </div>

          <button type="submit" className="register-btn">CADASTRAR</button>
        </form>

        <button className="back-to-login" onClick={() => window.location.href = "/login"}>
          VOLTAR AO LOGIN
        </button>
      </div>
    </div>
  );
}
