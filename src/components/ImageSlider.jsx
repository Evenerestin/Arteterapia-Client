import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageSlider = () => {
  const largerDesktop = useMediaQuery({ maxWidth: 1350 });
  const smallerDesktop = useMediaQuery({ maxWidth: 1023 });
  const mobile = useMediaQuery({ maxWidth: 800 });
  const images = [
    "didactics/didacticsPhoto1.jpg",
    "didactics/didacticsPhoto2.jpg",
    "didactics/didacticsPhoto3.jpg",
    "didactics/didacticsPhoto4.jpg",
    "didactics/didacticsPhoto5.jpg",
    "didactics/didacticsPhoto6.jpg",
    "didactics/didacticsPhoto7.jpg",
    "didactics/didacticsPhoto8.jpg",
    "didactics/didacticsPhoto9.jpg",
    "didactics/didacticsPhoto10.jpg",
    "didactics/didacticsPhoto11.jpg",
    "didactics/didacticsPhoto12.jpg",
  ];
  // const images = [
  //   "didacticsPhoto1.jpg",
  //   "didacticsPhoto2.jpg",
  //   "didacticsPhoto4.jpg",
  // ];

  const slidesCount = mobile ? 1 : smallerDesktop ? 2 : largerDesktop ? 3 : 4;

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      spaceBetween={50}
      slidesPerView={slidesCount}
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
