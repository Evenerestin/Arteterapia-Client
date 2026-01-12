import React from "react";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

const ImageSlider = () => {
  const largerDesktop = useMediaQuery({ maxWidth: 1350 });
  const smallerDesktop = useMediaQuery({ maxWidth: 1023 });
  const mobile = useMediaQuery({ maxWidth: 800 });
  const images = [
    "/images/didactics/1.jpg",
    "/images/didactics/2.jpg",
    "/images/didactics/3.jpg",
    "/images/didactics/4.jpg",
    "/images/didactics/5.jpg",
    "/images/didactics/6.jpg",
    "/images/didactics/7.jpg",
    "/images/didactics/8.jpg",
    "/images/didactics/9.jpg",
    "/images/didactics/10.jpg",
    "/images/didactics/11.jpg",
    "/images/didactics/12.jpg",
  ];

  const slidesCount = mobile ? 1 : smallerDesktop ? 2 : largerDesktop ? 3 : 4;
  const swiperRef = React.useRef(null);
  return (
    <section aria-label="Galeria zdjęć z warsztatów plastycznych">
      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
          loop: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={slidesCount}
        spaceBetween={5}
        loop={true}
        speed={1000}
        a11y={{
          prevSlideMessage: "Poprzednie zdjęcie",
          nextSlideMessage: "Następne zdjęcie",
          firstSlideMessage: "Pierwsze zdjęcie",
          lastSlideMessage: "Ostatnie zdjęcie",
          slideLabelMessage: "Zdjęcie z galerii",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="slideContainer">
              <img src={src} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSlider;
