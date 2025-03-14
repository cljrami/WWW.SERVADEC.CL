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
      className="relative pt-30 "
    >
      {/* Encabezado + Flechas de Navegación */}
      <div className="flex flex-col items-center w-full  mx-auto xl:px-0 relative">
        <h2 class="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">
          Clientes Felices
        </h2>
        <p class="text-gray-500 text-xl text-center leading-6 ">
          Nuestros Clientes nos Avalan.
        </p>

        {/* Flechas de navegación alineadas con el título */}
        <div className="absolute top-32  right-4 flex space-x-3 -mt-30 z-10 py-20 hidden sm:flex ">
          <button
            ref={prevRef}
            className="w-12 h-12 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white  shadow-lg transition-all"
          >
            ❮
          </button>
          <button
            ref={nextRef}
            className="w-12 h-12 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg transition-all"
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
          className="max-w-[90%] py-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="w-auto">
              <div className=" shadow-sm rounded-lg transition-transform hover:shadow-lg hover:-translate-y-1 text-left ">
                <div class="mx-auto  rounded-xl p-6 m-2   ">
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
