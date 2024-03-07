import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const [usuario, setUsuario] = useState({
    username: '',
    email: '',
    password: '',
  });


  const navigate = useNavigate();



  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', usuario);
      console.log(response.data);
      alert('Usuario registrado con éxito!');

      navigate('/login');

      // Aquí puedes implementar lógica adicional post-registro, como redireccionamiento o actualización de UI
      // Por ejemplo, guardar el token de autenticación si es que se recibe uno:
      // localStorage.setItem('authToken', response.data.token);

    } catch (error) {
      console.error('Hubo un error en el registro', error.response?.data || error.message);
      alert('Error al registrar el usuario.');
    }
  };

  return (
    <div>
      <h1>WELCOME TO REACT</h1>
      <h2>Registro de Usuario</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            name="username"
            value={usuario.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={usuario.password}
            onChange={handleChange}
          />
        </div>
        <button className='button' type="submit">Registrar</button>
      </form>
    </div>
  )
};

export default Registro;

