import { useState, useEffect } from "react";

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-100 h-100 rounded-full pointer-events-none z-11 blur-3xl bg-purple-900 opacity-10"
      style={{
        transform: `translate(${position.x - 72}px, ${position.y - 72}px)`,
        transition: "transform 0.8s linear",
      }}
    />
  );
};

export default CursorCircle;
