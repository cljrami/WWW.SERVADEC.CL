import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* Fondo con degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-gray-900 opacity-80"></div>

      {/* Contenedor principal */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center px-6 lg:px-20">
        {/* Texto con animaciones */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-white text-center md:text-left max-w-2xl"
        >
          <h1 className="text-6xl font-extrabold leading-tight">
            Gestión y Auditoría <br />
            <span className="text-blue-500">para Condominios</span>
          </h1>
          <p className="text-xl text-gray-300 mt-4 max-w-md">
            Optimizamos la administración y auditoría de condominios con
            soluciones innovadoras y seguras. Confía en nosotros para la gestión
            eficiente de tu comunidad.
          </p>
          <motion.a
            href="#contacto"
            className="mt-6 inline-block px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-500 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos
          </motion.a>
        </motion.div>

        {/* Imagen con animaciones */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
          className="md:w-1/2 mt-8 md:mt-0 relative"
        >
          <img
            src="https://source.unsplash.com/600x400/?building,city"
            alt="Edificio empresarial"
            className="rounded-lg shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 1.2, ease: "easeOut" },
            }}
            className="absolute -top-10 -right-10 bg-blue-500 p-4 rounded-lg shadow-lg text-white text-lg font-bold"
          >
            +10 Años de Experiencia
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
