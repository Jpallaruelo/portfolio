// PortfolioSection.js

import React, { useState } from "react";
import "../presentacion.css";
import { useNavigate } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const PortfolioSection = () => {
  const navigate = useNavigate();

  const togglenavigate = () => {
    navigate("/portfolio");
  };
  const togglenavigategame = () => {
    navigate("/juegos");
  };

  //   const [formData,setformData] = useState({

  //    name:"",
  //    email:"",
  //    message:""

  //   });

  //   const handleChange = (e) =>{

  //     setformData({...formData,[e.target.name]:e.target.value})

  //   }

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     console.log(formData)
  //   };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a9m3hle", "template_spqa9pf", form.current, {
        publicKey: "d8hjWuzKI5ptdSg7O",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="portfolio-section">
      <h3 className="name">HI, I'M JONATHAN</h3>
      <div className="profile-image-container">
        <img
          src="IMAGES/perfil.png"
          alt="Imagen de perfil"
          className="profile-image"
        />
      </div>
      <div className="phrases">
        <p>Junior Frontend Developer with expertise in React</p>
        <p>Passionate about building user-friendly interfaces</p>
        <p>GitHub Star Alumni | Contributor to Open Source Projects</p>
      </div>
      <button className="button" onClick={togglenavigate}>
        PORTFOLIO
      </button>

      {/* Nueva sección con tres cartas */}
      <div className="info-section">
        <div className="info-card">
          <h4 className="p-sobremi">SKILSS</h4>
          <p>
            React, JavaScript, HTML5/CSS3{" "}
            {/* Agrega más habilidades según sea necesario */}
          </p>
          <p>
            Git,Boostrap,Wordpress{" "}
            {/* Agrega más habilidades según sea necesario */}
          </p>
        </div>

        <div className="info-card">
          <h4 className="p-sobremi">EXPERIENCE</h4>
          <p>
            Network Systems Technician{" "}
            {/* Agrega más experiencias según sea necesario */}
          </p>
          <p>
            Junior Frontend Developer/ fullStack{" "}
            {/* Agrega más experiencias según sea necesario */}
          </p>
        </div>

        <div className="info-card">
          <h4 className="p-sobremi">ACADEMY</h4>
          <p>DAW, DAM, ASIR {/* Agrega más estudios según sea necesario */}</p>
        </div>
      </div>
      <div className="midle-section">
        <button className="button" onClick={togglenavigategame}>
          🎮 GAMES-PROJECTS 🕹️
        </button>

        <h3>CONTACT ME!</h3>
        <p>
          Excited to hear from you! Reach out to me for collaborations, job
          opportunities, or any inquiries related to web development.
        </p>
        <p>
          I'll be delighted to discuss projects and explore possibilities of
          working together. Let's talk!
        </p>
      </div>

      <div className="contact-section">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" className="responsive-input" />

            <label>Email</label>
            <input
              type="email"
              name="user_email"
              className="responsive-input"
            />

            <label>Message</label>
            <textarea name="message" className="responsive-textarea"></textarea>

            <button className="button" type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="contact-info">
          {/* Agrega la imagen aquí */}
          <img
            className="responsive-image"
            src="images/git.png"
            alt="Imagen de contacto"
          />
          <img
            className="responsive-image"
            src="images/linkein.png"
            alt="Imagen de contacto"
          />
          {/* <img className='responsive-image' src="images/logoapps.png" alt="Imagen de contacto" /> */}
        </div>

        <div className="contact-info">
          <p>📧 jonathanpallarueloelvira92@gmail.com</p>
          <p> 📲657357740</p>

          <a href={"/images/CV.JonathanP.pdf"} download="MiCV.pdf">
            <button className="button">GET-CV</button>
          </a>
        </div>
        <div>
          <img src="images/" alt="" />
        </div>
      </div>
    </div>
  );
};
export default PortfolioSection;
