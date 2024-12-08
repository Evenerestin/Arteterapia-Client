import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageSlider = () => {
  const images = [
    "didacticsPhoto1.jpg",
    "didacticsPhoto2.jpg",
    "didacticsPhoto3.jpg",
    "didacticsPhoto4.jpg",
    "didacticsPhoto1.jpg",
    "didacticsPhoto2.jpg",
    "didacticsPhoto3.jpg",
    "didacticsPhoto4.jpg",
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      spaceBetween={50}
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={1000}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="slideContainer">
            <img src={image} alt="slider photo" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
