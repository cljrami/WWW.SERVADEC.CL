import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

// Datos personalizados para los testimonios
const testimonials = [
  {
    name: "María López",
    username: "@marialopez",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "¡Increíble servicio! Nos ayudaron en todo el proceso y la auditoría fue muy clara.",
  },
  {
    name: "Carlos Pérez",
    username: "@carlosperez",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    feedback:
      "La mejor experiencia que he tenido con una empresa de auditoría. Totalmente recomendado.",
  },
  {
    name: "Ana Fernández",
    username: "@anafernandez",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    feedback: "Profesionales y eficientes. Me sentí muy segura con su equipo.",
  },
  {
    name: "Jorge Ramírez",
    username: "@jorgeramirez",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    feedback:
      "Muy buen trabajo. La transparencia y la comunicación fueron clave en el proceso.",
  },
  {
    name: "Lucía Gómez",
    username: "@luciagomez",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    feedback:
      "No podría estar más contenta con el servicio. Los recomendaría sin dudar.",
  },
];

export default function TestimonialSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="relative"
    >
      {/* Encabezado + Flechas de Navegación */}
      <div className="flex flex-col items-center w-full p-6 mx-auto xl:px-0 relative">
        <div className="text-sm font-bold tracking-wider text-indigo-500 uppercase">
          Testimonios
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
          Opiniones de Clientes
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Información verídica entregada por nuestros clientes en Condominios
          Auditados.
        </p>

        {/* Flechas de navegación alineadas con el título */}
        <div className="absolute top-40 right-6 flex space-x-3 mt-1 z-10">
          <button
            ref={prevRef}
            className="w-10 h-10 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-lg transition-all"
          >
            ❮
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-lg transition-all"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Contenedor del Swiper */}
      <div className="relative w-full max-w-9xl mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="max-w-[100%] py-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="w-auto">
              <div className="p-6 bg-white shadow-md rounded-lg transition-transform hover:shadow-lg hover:-translate-y-1 text-left max-w-sm">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.username}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">"{testimonial.feedback}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
