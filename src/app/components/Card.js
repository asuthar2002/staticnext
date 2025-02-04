// src/app/card/card.js
export default function Card({ image, name}) {
    return (
      <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <img 
          className="w-full h-80 object-cover" 
          src={image}
          loading="lazy" 
          alt={name} 
          quality={70}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <div className="mt-2 flex items-center space-x-2">
          </div>
        </div>
      </div>
    );
  }
  