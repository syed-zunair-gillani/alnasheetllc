import React from 'react';

function Card({ card }) {
  return (
    <div className="border rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 hover:text-white">
      <img src={card.image} alt={`Card ${card.id}`} className="w-32 h-32 object-cover mb-4 mx-auto" />
      <p className="text-center">{card.text}</p>
    </div>
  );
}

export default Card;
