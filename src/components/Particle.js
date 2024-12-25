import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";

function Particle() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {/* Partículas de fondo */}
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 850,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              opacity: 0.4,
              color: "rgba(255, 0, 0, 0.5)",
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.3,
              attract: {
                enable: true,
                rotateX: 800,
                rotateY: 1200,
              },
            },
            size: {
              value: 2,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 300,
                line_linked: {
                  opacity: 1,
                },
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: mousePosition.y - 10,
          left: mousePosition.x - 10,
          width: 20,
          height: 20,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: "50%",
          pointerEvents: "none",
          boxShadow: "0 0 10px rgba(255, 0, 0, 0.7)",
        }}
      ></div>
    </div>
  );
}

export default Particle;
