import React from "react";

const ExperienceCard = ({ icon, title, description }) => {
  return (
    <div className="relative z-20 p-6 grid grid-cols-1 justify-center items-center sm:p-8 bg-[#0f0f1b] rounded-2xl text-white w-full sm:w-[90%] lg:w-[48%] hover:scale-[1.02] transition-all duration-300 border border-white/10 overflow-hidden">

      <div className="relative z-20 flex items-start gap-4">
        <img src={icon} alt={title} className="w-30 h-30 object-contain" />

        <div>
          <h3 className="text-xl sm:text-xl font-bold mb-1">{title}</h3>
          <p className="text-xs text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard; 