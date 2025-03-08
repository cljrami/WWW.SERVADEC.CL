// src/components/BasicSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos base de Swiper
import "swiper/css/pagination"; // Estilos para paginación
import "swiper/css/navigation"; // Estilos para navegación
//import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";

export default function TestimonialSlider() {
  return (
    <Swiper
      modules={[Pagination, Navigation]} // Módulos requeridos
      spaceBetween={20} // Espacio entre slides
      slidesPerView="auto" // Ajuste automático del número de slides visibles
      //pagination={{ clickable: true }} // Paginación activa
      navigation // Botones de navegación (flechas)
      className="max-w-[|00%] mx-auto px-4 "
    >
      {/* Slides con contenido */}
      <SwiperSlide>
        <div className="p-6 w-64 h-48 flex items-center justify-center">
          Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" p-6 w-80 h-48 flex items-center justify-center">
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" p-6 w-72 h-48 flex items-center justify-center">
          Slide 3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" p-6 w-96 h-48 flex items-center justify-center">
          Slide 4
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
