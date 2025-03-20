import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Hook para efecto de máquina de escribir
const useTypewriter = (text, isVisible, speed = 100) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      setDisplayText(""); // Reiniciar el texto
      setIndex(0);

      intervalRef.current = setInterval(() => {
        setIndex((prevIndex) => {
          if (prevIndex < text.length) {
            setDisplayText(text.slice(0, prevIndex + 1));
            return prevIndex + 1;
          } else {
            clearInterval(intervalRef.current);
            return prevIndex;
          }
        });
      }, speed);
    }

    return () => clearInterval(intervalRef.current);
  }, [text, isVisible, speed]);

  return displayText;
};

const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { threshold: 0.3 });

  const typedText = useTypewriter("Auditoría para Condominios", isInView, 100);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-20 min-h-screen overflow-hidden pt-30"
    >
      {/* Contenido Izquierdo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:w-1/2 text-center lg:text-left"
      >
        <span className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
          Administración de Condominios
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-black drop-shadow-lg">
          {typedText}
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Optimizamos la administración y auditoría de condominios con
          soluciones innovadoras y seguras. Confía en nosotros para la gestión
          eficiente de tu comunidad.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-medium shadow-lg transition-transform hover:shadow-xl"
          >
            Comienza ahora →
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-gray-700 transition"
          >
            <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center hover:scale-105">
              ▶️
            </div>
            Ver Demo
          </motion.button>
        </div>
      </motion.div>

      {/* Imagen Derecha con Animación Zoom */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="relative lg:w-1/2 flex justify-center mt-12 lg:mt-0"
      >
        <div className="relative w-[400px] h-[400px] overflow-hidden rounded-xl shadow-lg">
          <img
            src="/assets/imagenes/logos/servadec.png"
            alt="Auditoría de Condominios"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
