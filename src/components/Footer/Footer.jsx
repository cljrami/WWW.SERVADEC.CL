import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const textRef = useRef(null);
  const [text, setText] = useState("");
  const fullText = "Transformemos tu negocio.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let index = 0;
          setText(""); // Reiniciar el texto antes de empezar
          const interval = setInterval(() => {
            if (index <= fullText.length) {
              setText(fullText.slice(0, index));
              index++;
            } else {
              clearInterval(interval);
            }
          }, 100);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="relative bg-white text-blue-900 py-16 px-8 md:px-20 overflow-hidden ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Izquierda - Texto con efecto de máquina de escribir */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="md:w-1/2"
        >
          <h2
            ref={textRef}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-oblue-900">{text}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Impulsa el crecimiento de tu empresa con estrategias efectivas y
            asesoría profesional.
          </p>
        </motion.div>

        {/* Derecha - CTA con un texto atractivo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="md:w-1/3 mt-8 md:mt-0 flex flex-col items-center md:items-start"
        >
          <p className="text-lg text-gray-700 mb-4">
            ¿Listo para llevar tu negocio al siguiente nivel? Reserva una
            reunión con nuestros expertos ahora.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-900 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transition duration-300 hover:bg-orange-600"
          >
            Agendar una reunión
          </motion.a>
        </motion.div>
      </div>

      {/* Links y Copyright */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-9xl mx-auto mt-10 border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        {/* Navegación con efecto de hover */}
        <div className="flex gap-3 text-gray-600 font-bold ">
          {[
            { name: "Inicio", href: "#" },
            { name: "Servicios", href: "#" },
            { name: "Casos de Éxito", href: "#" },
            { name: "Clientes", href: "#" },
            { name: "Contacto", href: "#" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative hover:text-oblue-900 transition duration-300 hover:text-orange-600"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-oblue-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Copyright con año automático */}
        <div className="mt-6 md:mt-0 text-gray-600 text-sm">
          © {currentYear} Todos los derechos reservados.
        </div>
      </motion.div>
    </footer>
  );
}
