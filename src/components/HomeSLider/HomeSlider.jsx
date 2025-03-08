import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/keyboard";

import "./styles.css";

// import required modules
import { Navigation, Keyboard } from "swiper/modules";

export default function HomeSlider() {
  return (
    <>
      <div
        className="lg:mx-20 mx-5 items-center bg-amber-100"
        data-aos="fade-in"
      >
        <Swiper
          slidesPerView="auto"
          navigation={true} // Changed Navigation to navigation
          spaceBetween={30}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>Hola</SwiperSlide>
          <SwiperSlide>Slide sdfsdfsdafsafd2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
