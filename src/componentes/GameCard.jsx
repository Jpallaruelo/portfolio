import React, { useEffect, useState } from 'react';

const GameCard = ({ title, onClick, image }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Ajusta el tiempo según cuándo quieres que la carta aparezca

    return () => clearTimeout(timer);
  }, []);

  const cardStyle = {
    cursor: 'pointer',
    // border: '1px solid #ccc',
    borderRadius: '15px',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    background: 'black',
    width: '600px',  // Ajusta según tus necesidades
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 1s ease-out, transform 1s ease-out', // Aplica transición suave
  };

  return (
    <div
      style={cardStyle}
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '5px',
          maxHeight: '300px',  // Ajusta según tus necesidades
        }}
      />
      <h3>{title}</h3>
    </div>
  );
};

export default GameCard;
