import React, { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./config/particles-config.json";

const ParticlesBackground = () => {
  useEffect(() => {
    document.querySelector("canvas").style.position = "absolute !important";
  });

  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  return <Particles options={particlesOptions} init={particlesInit} />;
};

export default ParticlesBackground;
