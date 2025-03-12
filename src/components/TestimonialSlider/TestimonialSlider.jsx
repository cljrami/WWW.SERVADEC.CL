import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos base de Swiper
import "swiper/css/pagination"; // Estilos para paginación
import "swiper/css/navigation"; // Estilos para navegación
//import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";

export default function TestimonialSlider() {
  return (
    <div className="slider-container">
      {/* Encabezado agregado */}
      <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto  xl:px-0">
        <div className="text-sm font-bold tracking-wider text-indigo-500 uppercase">
          Testimonios
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
          Opiniónes de Clientes
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Informaciòn veridica entregada por nuestros clientes en Condominios
          Auditados
        </p>
      </div>

      <Swiper
        modules={[Pagination, Navigation]} // Módulos requeridos
        spaceBetween={-10} // Espacio entre slides
        slidesPerView="auto" // Ajuste automático del número de slides visibles
        //pagination={{ clickable: true }} // Paginación activa
        navigation // Botones de navegación (flechas)
        className="max-w-[100%]  "
      >
        {/* Slides con contenido */}
        <SwiperSlide>
          <div class="p-6 bg-white  transition-transform hover:shadow-lg hover:-translate-y-1 text-left">
            <div class="flex items-start mb-4">
              <div class="flex-shrink-0 mr-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/6.jpg"
                  alt="Profile image"
                />
              </div>
              <div>
                <h3 class="font-bold">SynthGen AI</h3>
                <p class="text-sm text-gray-500">@synthgenai</p>
              </div>
            </div>
            <p class="text-gray-700">
              Listing on EliteAI.tools gave us a 40% boost in signups! The
              quality of traffic is incredible - these are users who are
              actually looking for AI solutions. Worth every penny!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="p-6 bg-white  transition-transform hover:shadow-lg hover:-translate-y-1 text-left">
            <div class="flex items-start mb-4">
              <div class="flex-shrink-0 mr-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/6.jpg"
                  alt="Profile image"
                />
              </div>
              <div>
                <h3 class="font-bold">SynthGen AI</h3>
                <p class="text-sm text-gray-500">@synthgenai</p>
              </div>
            </div>
            <p class="text-gray-700">
              Listing on EliteAI.tools gave us a 40% boost in signups! The
              quality of traffic is incredible - these are users who are
              actually looking for AI solutions. Worth every penny!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="p-6 bg-white  transition-transform hover:shadow-lg hover:-translate-y-1 text-left">
            <div class="flex items-start mb-4">
              <div class="flex-shrink-0 mr-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/6.jpg"
                  alt="Profile image"
                />
              </div>
              <div>
                <h3 class="font-bold">SynthGen AI</h3>
                <p class="text-sm text-gray-500">@synthgenai</p>
              </div>
            </div>
            <p class="text-gray-700">
              Listing on EliteAI.tools gave us a 40% boost in signups! The
              quality of traffic is incredible - these are users who are
              actually looking for AI solutions. Worth every penny!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="p-6 bg-white  transition-transform hover:shadow-lg hover:-translate-y-1 text-left">
            <div class="flex items-start mb-4">
              <div class="flex-shrink-0 mr-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/6.jpg"
                  alt="Profile image"
                />
              </div>
              <div>
                <h3 class="font-bold">SynthGen AI</h3>
                <p class="text-sm text-gray-500">@synthgenai</p>
              </div>
            </div>
            <p class="text-gray-700">
              Listing on EliteAI.tools gave us a 40% boost in signups! The
              quality of traffic is incredible - these are users who are
              actually looking for AI solutions. Worth every penny!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="p-6 bg-white  transition-transform hover:shadow-lg hover:-translate-y-1 text-left">
            <div class="flex items-start mb-4">
              <div class="flex-shrink-0 mr-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/6.jpg"
                  alt="Profile image"
                />
              </div>
              <div>
                <h3 class="font-bold">SynthGen AI</h3>
                <p class="text-sm text-gray-500">@synthgenai</p>
              </div>
            </div>
            <p class="text-gray-700">
              Listing on EliteAI.tools gave us a 40% boost in signups! The
              quality of traffic is incredible - these are users who are
              actually looking for AI solutions. Worth every penny!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="p-6 bg-white  transition-transform hover:shadow-lg hover:-translate-y-1 text-left">
            <div class="flex items-start mb-4">
              <div class="flex-shrink-0 mr-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/6.jpg"
                  alt="Profile image"
                />
              </div>
              <div>
                <h3 class="font-bold">SynthGen AI</h3>
                <p class="text-sm text-gray-500">@synthgenai</p>
              </div>
            </div>
            <p class="text-gray-700">
              Listing on EliteAI.tools gave us a 40% boost in signups! The
              quality of traffic is incredible - these are users who are
              actually looking for AI solutions. Worth every penny!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="p-6 bg-white  transition-transform hover:shadow-lg hover:-translate-y-1 text-left">
            <div class="flex items-start mb-4">
              <div class="flex-shrink-0 mr-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/6.jpg"
                  alt="Profile image"
                />
              </div>
              <div>
                <h3 class="font-bold">SynthGen AI</h3>
                <p class="text-sm text-gray-500">@synthgenai</p>
              </div>
            </div>
            <p class="text-gray-700">
              Listing on EliteAI.tools gave us a 40% boost in signups! The
              quality of traffic is incredible - these are users who are
              actually looking for AI solutions. Worth every penny!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
