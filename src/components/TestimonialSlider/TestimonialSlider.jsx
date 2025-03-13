import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

// Datos personalizados para los testimonios
const testimonials = [
  {
    name: "María López",
    empresa: "condominio empresa",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "¡Increíble servicio! Nos ayudaron en todo el proceso y la auditoría fue muy clara.",
  },
  {
    name: "María López",
    empresa: "condominio empresa",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "¡Increíble servicio! Nos ayudaron en todo el proceso y la auditoría fue muy clara.",
  },
  {
    name: "María López",
    empresa: "condominio empresa",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "¡Increíble servicio! Nos ayudaron en todo el proceso y la auditoría fue muy clara.",
  },
  {
    name: "María López",
    empresa: "condominio empresa",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "¡Increíble servicio! Nos ayudaron en todo el proceso y la auditoría fue muy clara.",
  },
  {
    name: "María López",
    empresa: "condominio empresa",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "¡Increíble servicio! Nos ayudaron en todo el proceso y la auditoría fue muy clara.",
  },
  {
    name: "María López",
    empresa: "condominio empresa",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "¡Increíble servicio! Nos ayudaron en todo el proceso y la auditoría fue muy clara.",
  },
  {
    name: "María López",
    empresa: "condominio empresa",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "¡Increíble servicio! Nos ayudaron en todo el proceso y la auditoría fue muy clara.",
  },
  {
    name: "María López",
    empresa: "condominio empresa",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "¡Increíble servicio! Nos ayudaron en todo el proceso y la auditoría fue muy clara.",
  },
  {
    name: "María López",
    empresa: "condominio empresa",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "¡Increíble servicio! Nos ayudaron en todo el proceso y la auditoría fue muy clara.",
  },
];

export default function TestimonialSlider({
  imgSize = "w-20 h-20 rounded-full",
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="relative bg-gray-900"
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
      <div className="relative w-full max-w-9xl mx-auto ">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
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
              <div className=" shadow-md rounded-lg transition-transform hover:shadow-lg hover:-translate-y-1 text-left ">
                <div class="mx-auto bg-white/80 rounded-xl p-6 shadow-2xl m-2 backdrop-blur-md  ">
                  <p>{testimonial.feedback}</p>
                  <div class="mt-5 flex items-center">
                    <img
                      src={testimonial.image}
                      class={testimonial.imageClass || imgSize}
                      alt={testimonial.name}
                    />
                    <div class="ml-3">
                      <h3 class="font-semibold">{testimonial.name} </h3>
                      <p class="text-gray-500">{testimonial.empresa} </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
