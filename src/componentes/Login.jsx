import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentiales, setCredentiales] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // const handleLoginSuccess = () => {
  //   navigate('/juego'); // Asegúrate de que esta ruta coincida con la definida para GameSelectionPage en tu App.js
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentiales({ ...credentiales, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!credentiales.email || !credentiales.password) {
        alert("Por favor, ingresa un email y una contraseña.");
        return;
      }

      const response = await axios.post("http://localhost:3001/login", credentiales);

      if (response.status === 200) {
        console.log("Autenticación correcta");
        alert("Inicio de sesión exitoso!");


        //localstorage para guardar el nombre dewl usuario 

        localStorage.setItem('username', response.data.username);
        // Ajusta según tu API

        console.log("Redirigiendo a /juegos");
        // handleLoginSuccess()
        navigate('/juegos');
      } else {
        console.error("Credenciales incorrectas");
        alert("Error al iniciar sesión. Verifica tus credenciales.");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Credenciales incorrectas. Por favor, intenta de nuevo.");
      } else {
        alert("Error al iniciar sesión.");
      }
      console.error("Error en el inicio de sesión", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form className="registration-form " onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentiales.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={credentiales.password}
            onChange={handleChange}
          />
        </div>
        <button className="button" type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;

