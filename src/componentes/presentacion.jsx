// PortfolioSection.js

import React, { useRef, useState } from "react";
import "../presentacion.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";

const PortfolioSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const numeroTelefono = "657357740"; // Reemplaza con el número de teléfono deseado

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${numeroTelefono}`;
    window.open(url, "_blank");
  };
  const [errors, setErrors] = useState({});
  const form = useRef();

  const closeModal = () => {
    console.log("sale modal");
  };

  const [isSent, setIsSent] = useState(false); // Nuevo estado

  const togglenavigate = () => {
    navigate("/portfolio");
  };

  const togglenavigategame = () => {
    navigate("/juegos");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
      isValid = false;
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = "Invalid email format";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm("service_a9m3hle", "template_spqa9pf", form.current, {
          publicKey: "d8hjWuzKI5ptdSg7O",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form.current.reset();
            setFormData({
              user_name: "",
              user_email: "",
              message: "",
            });

            setIsSent(true); // Actualiza el estado para mostrar el mensaje
            setTimeout(() => {
              setIsSent(false); // Oculta el mensaje después de unos segundos
            }, 5000);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
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

      <div className="info-section">
        <div className="info-card">
          <h4 className="p-sobremi">SKILLS</h4>
          <p>
            React, JavaScript, HTML5/CSS3{" "}
            {/* Agrega más habilidades según sea necesario */}
          </p>
          <p>
            Git, Boostrap, Wordpress{" "}
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
            Junior Frontend Developer/Full Stack{" "}
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
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className={`responsive-input ${errors.user_name ? "error" : ""}`}
            />
            
            {errors.user_name && (
              <span className="error-message">{errors.user_name}</span>
            )}

            <label>Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className={`responsive-input ${errors.user_email ? "error" : ""}`}
            />
            {errors.user_email && (
              <span className="error-message">{errors.user_email}</span>
            )}

            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`responsive-textarea ${errors.message ? "error" : ""}`}
            ></textarea>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}

            <button className="button" type="submit">
              Send
            </button>
           
          </form>
          <Modal
            isOpen={isSent}
            contentLabel="Game Completed Modal"
            className="custom-modal"
            overlayClassName="custom-overlay"
          >
            <img className="yodaimage" src="images/thanks.jpg" alt="" />
          </Modal>
        </div>

        <div className="contact-info">
          <a
            href="https://github.com/Jpallaruelo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="responsive-image img-fluid"
              src="images/git.png"
              alt="Imagen de contacto"
            />
          </a>
          <img
            className="responsive-image"
            src="images/linkein.png"
            alt="Imagen de contacto"
          />
          
           <a className="responsive-image" href="#" onClick={handleWhatsAppClick}>
            <img src="images/logoapps.png" alt="Icono de WhatsApp" />
          </a>
          

         
        </div>

        <div className="contact-info">
          <p>📧 jonathanpallarueloelvira92@gmail.com</p>
          <p> 📲657357740</p>
          <a href={"/images/CV.JonathanP.pdf"} download="MiCV.pdf">
            <button className="buttonContact">GET-CV</button>
          </a>
        
         
          
        </div>

       
      </div>
       
     
    </div>
  );
};

export default PortfolioSection;
