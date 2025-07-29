import React from "react";
import "../index.css"; 

const ExperienceCard = ({ icon, title, description }) => {
  return (
      <div className="relative z-20 p-6 sm:p-8 bg-[#0f0f1b] rounded-2xl text-white w-full sm:w-[48%] md:w-[48%] lg:w-[45%] hover:scale-[1.02] transition-all duration-300 border border-white/10 overflow-hidden">
        <span className="glow-orb"></span>
        <div className="relative z-20 flex flex-row items-start gap-4 mt-6">
          <img src={icon} alt={title} className="w-30 h-30 object-contain" />
          <div>
            <h3 className="text-xl sm:text-xl font-bold mb-1">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </div>
    </div>
  );
};

export default ExperienceCard;
