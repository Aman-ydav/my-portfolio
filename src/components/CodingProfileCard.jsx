import React from "react";

const CodingProfileCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center p-6 sm:p-8 bg-[#0f0f1b] rounded-2xl text-white hover:scale-[1.02] transition-all duration-300 border border-white/10 overflow-hidden">
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-300 text-sm mt-2 text-center" >{description}</p>
    </div>
  );
};

export default CodingProfileCard;
