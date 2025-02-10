const Card = ({ image, name }) => {
  return (
    <div className="w-[160px] h-[240px] md:max-w-sm md:w-80 md:h-auto bg-gradient-to-r from-[#FFC300] via-[#FF8D4D] to-[#FF5733] shadow-lg rounded-lg overflow-hidden border border-gray-200 flex flex-col relative">
      {/* Image Section - Fixed size for mobile, original aspect ratio for desktop */}
      <div className="h-[160px] md:aspect-[4/3] md:h-80 relative">
        <img
          className="w-full h-full object-cover"
          src={image}
          loading="lazy"
          alt={name}
        />
      </div>

      {/* Card Content */}
      <div className="p-2 md:p-4 flex-1 relative z-10">
        <h2 className="text-sm md:text-lg font-semibold text-white line-clamp-2">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Card;
