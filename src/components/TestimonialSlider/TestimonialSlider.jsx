import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";

// Datos de testimonios
const testimonials = [
  {
    name: "María López",
    empresa: "Condominio Empresa",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "¡Increíble servicio! Nos ayudaron en todo el proceso y la auditoría fue muy clara.",
  },
  {
    name: "Carlos Pérez",
    empresa: "Edificio Central",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    feedback: "La gestión ha sido impecable, siempre atentos a cada detalle.",
  },
  {
    name: "Andrea Torres",
    empresa: "Residencial Los Álamos",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    feedback: "Excelente experiencia, muy profesionales y confiables.",
  },
  {
    name: "Javier Gómez",
    empresa: "Conjunto Cerrado San Luis",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    feedback:
      "Recomiendo totalmente sus servicios, han hecho una gran diferencia.",
  },
];

export default function TestimonialSlider({
  imgSize = "w-16 h-16 rounded-full",
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Inicializa la navegación del carrusel
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="relative py-16 /*bg-[url(https://images.squarespace-cdn.com/content/v1/5bf47279b27e397e0aeefb5d/1545866445284-D2N9L6KA2RXC41MR9UPH/testimonials_banner-14783a85da9c0229ff28bdaddd9440f3.png)]*/">
      {/* Título y descripción */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 animate-fadeIn">
          ❤️ Lo que dicen nuestros clientes
        </h2>
        <p className="text-lg text-gray-600 mt-2 animate-slideUp">
          Nuestros clientes nos avalan con su confianza.
        </p>
      </div>

      {/* Contenedor del Swiper */}
      <div className="relative max-w-9xl mx-auto mt-10 px-6">
        {/* Flecha izquierda */}
        <button
          ref={prevRef}
          aria-label="Anterior testimonio"
          className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 flex items-center justify-center bg-white hover:bg-gray-200 text-gray-800 rounded-full shadow-xl transition-all z-10 scale-105 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Carrusel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          centeredSlides={false}
          loop={false}
          onSwiper={setSwiperInstance}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          className="py-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center w-auto min-w-[80%] sm:min-w-[50%] md:min-w-[40%] lg:min-w-[30%]"
            >
              <div className="relative bg-white border border-gray-200 shadow-lg rounded-2xl p-8 w-full max-w-md text-left transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-2">
                {/* Cita */}
                <p className="text-gray-700 italic text-lg">
                  "{testimonial.feedback}"
                </p>

                {/* Perfil */}
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    className={`${imgSize} border-2 border-gray-300 shadow-md`}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {testimonial.empresa}
                    </p>
                  </div>
                </div>

                {/* Animación de fondo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 opacity-0 hover:opacity-30 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flecha derecha */}
        <button
          ref={nextRef}
          aria-label="Siguiente testimonio"
          className="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 flex items-center justify-center bg-white hover:bg-gray-200 text-gray-800 rounded-full shadow-xl transition-all z-10 scale-105 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
