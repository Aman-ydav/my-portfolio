import React from "react";

const ProjectCard = ({ title, description, imageUrl, techStack, link }) => {
  return (
    <div className="bg-[#0d0c1b] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 animate-float">
      <div className="p-5">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-60 object-cover pointer-events-none select-none rounded-t-xl"
        />
      </div>
      <div className="px-5 py-4 flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 text-md">{description}</p>
        <div className="flex justify-between">
          <div className="flex flex-wrap gap-2 mt-2 text-2xl text-gray-300 cursor-pointer">
            {techStack?.map((iconClass, idx) => (
              <i key={idx} className={`${iconClass} `}></i>
            ))}
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-400 hover:text-white text-md mt-3 font-medium transition-all duration-300 relative group"
            >
              <span className="relative z-10">🔗 Check Live Site</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded"></span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
