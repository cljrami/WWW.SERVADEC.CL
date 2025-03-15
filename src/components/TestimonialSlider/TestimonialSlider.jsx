import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";

// Datos personalizados para los testimonios
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
  imgSize = "w-16 h-16 rounded-full border-4 border-indigo-500",
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section
      data-aos="fade-up"
      className="relative py-20 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Clientes Felices
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Nuestros clientes nos avalan con su confianza.
        </p>
      </div>

      {/* Contenedor del Swiper con flechas de navegación */}
      <div className="relative max-w-6xl mx-auto mt-10">
        {/* Flecha izquierda */}
        <button
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 flex items-center justify-center bg-indigo-500 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-all z-10"
        >
          ❮
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="py-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 text-left transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                {/* Comillas decorativas */}
                <span className="absolute top-4 left-4 text-5xl text-indigo-500 dark:text-indigo-400 opacity-20">
                  ❝
                </span>

                {/* Testimonio */}
                <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.feedback}"
                </p>

                {/* Perfil del usuario */}
                <div className="mt-6 flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    className={testimonial.imageClass || imgSize}
                    alt={testimonial.name}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.empresa}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flecha derecha */}
        <button
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 flex items-center justify-center bg-indigo-500 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-all z-10"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
