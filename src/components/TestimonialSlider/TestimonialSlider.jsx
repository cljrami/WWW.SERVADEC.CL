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

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="relative py-20  bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold  text-white">Clientes Felices</h2>
        <p className="text-lg  text-gray-300 mt-2">
          Nuestros clientes nos avalan con su confianza.
        </p>
      </div>

      {/* Contenedor del Swiper */}
      <div className="relative max-w-8xl mx-auto mt-10 px-4">
        {/* Flecha izquierda */}
        <button
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-md transition-all z-10"
        >
          ❮
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView="auto"
          centeredSlides={false}
          watchOverflow={true}
          loop={false}
          onSwiper={setSwiperInstance}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          className="py-10 pr-10" // Agregamos padding-right
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center w-auto min-w-[80%] sm:min-w-[50%] md:min-w-[40%] lg:min-w-[30%]"
            >
              <div className=" bg-gray-800 shadow-lg rounded-xl p-10 w-full max-w-md text-left transform transition duration-300 hover:shadow-2xl">
                <p className=" text-gray-300 ">"{testimonial.feedback}"</p>
                <div className="mt-5 flex items-center">
                  <img
                    src={testimonial.image}
                    className={`${imgSize} border-2 border-indigo-500`}
                    alt={testimonial.name}
                  />
                  <div className="ml-3">
                    <h3 className="font-semibold  text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500">{testimonial.empresa}</p>
                  </div>
                </div>
                0
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flecha derecha */}
        <button
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-md transition-all z-10"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
