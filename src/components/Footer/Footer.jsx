import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const typewriterTexts = ["Gestión Transparente", "Administración Eficiente"];

const Footer = () => {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted) {
          setAnimationStarted(true);
          setText("");
          setTextIndex(0);
        } else if (!entry.isIntersecting) {
          setAnimationStarted(false);
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [animationStarted]);

  useEffect(() => {
    if (!animationStarted) return;

    let index = 0;
    setText("");

    const interval = setInterval(() => {
      if (index <= typewriterTexts[textIndex].length) {
        setText(typewriterTexts[textIndex].slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          if (textIndex < typewriterTexts.length - 1) {
            setTextIndex((prev) => prev + 1);
          }
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [animationStarted, textIndex]);

  return (
    <footer
      ref={footerRef}
      className="relative bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 px-10 md:px-30 py-16 w-full"
    >
      {/* Encabezado del Footer */}
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-gray-900 dark:text-white">Gestionamos</span>{" "}
            <span className="text-indigo-600 dark:text-indigo-400">{text}</span>
            <span className="text-indigo-600 dark:text-indigo-400 cursor-blink">
              |
            </span>
          </h2>
        </motion.div>

        <motion.a
          href="#"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 md:mt-0 bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg transition duration-300 hover:bg-indigo-700 dark:hover:bg-indigo-400"
        >
          Agenda una reunión
        </motion.a>
      </div>

      {/* Sección de enlaces con Copyright */}
      <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Primera columna de enlaces */}
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-md">
            {[
              { name: "Inicio", href: "#" },
              { name: "Servicios", href: "#" },
              { name: "Mantenimiento", href: "#" },
              { name: "Auditorías", href: "#" },
              { name: "Blog", href: "#" },
            ].map((link) => (
              <li key={link.name} className="group relative">
                <a
                  href={link.href}
                  className="relative transition-all duration-300 ease-in-out group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:-translate-y-1"
                >
                  {link.name}
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Segunda columna de enlaces */}
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-md">
            {[
              { name: "Agendar reunión", href: "#" },
              { name: "Transparencia", href: "#" },
              { name: "Reglamentos", href: "#" },
              { name: "Sobre Nosotros", href: "#" },
              { name: "Contacto", href: "#" },
            ].map((link) => (
              <li key={link.name} className="group relative">
                <a
                  href={link.href}
                  className="relative transition-all duration-300 ease-in-out group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:-translate-y-1"
                >
                  {link.name}
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Redes Sociales */}
        </div>

        {/* Copyright Dinámico */}
        <div className="mt-8 md:mt-0 text-gray-500 dark:text-gray-400 text-md text-center md:text-right">
          © {currentYear} Todos los derechos reservados.
        </div>
      </div>

      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }
          .cursor-blink {
            display: inline-block;
            animation: blink 0.8s step-end infinite;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
