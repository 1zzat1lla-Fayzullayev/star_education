import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Wrapper from "../layout/wrapper";

function Results() {
  const certificates = [
    { src: "/mirazam.jpg" },
    { src: "/ismoil.jpg" },
    { src: "/muslima.jpg" },
    { src: "/asadbe.jpg" },
  ];

  const education = [
    { src: "/edu1.jpg" },
    { src: "/edu2.jpg" },
    { src: "/edu3.jpg" },
    { src: "/edu4.jpg" },
    { src: "/edu5.jpg" },
    { src: "/edu6.jpg" },
    { src: "/edu7.jpg" },
    { src: "/edu8.jpg" },
    { src: "/edu9.jpg" },
    { src: "/edu10.jpg" },
    { src: "/edu11.jpg" },
    { src: "/edu12.jpg" },
    { src: "/edu13.jpg" },
    { src: "/edu14.jpg" },
    { src: "/edu15.jpg" },
    { src: "/edu16.jpg" },
  ];

  const allSlides = [...certificates, ...education];
  const [index, setIndex] = useState(null);

  return (
    <Wrapper>
      <div className="px-[20px] xl:px-0">
        <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-center text-gray-900 mb-12 mt-[100px] ">
          2025-yildagi natijalar
        </h2>

        <h2 className="text-3xl font-medium text-start text-gray-900 mb-12 mt-[100px] ">
          Sertifikatlar
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full pb-12"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {certificates.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setIndex(i)}
              >
                <img src={item.src} className="w-full h-auto object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="text-3xl font-medium text-start text-gray-900 mb-6 mt-[100px]">
          O'qishga kirganlar
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full pb-12"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {education.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setIndex(certificates.length + i)}
              >
                <img src={item.src} className="w-full h-auto object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <h3 className="text-[17px] md:text-2xl font-semibold my-2 md:my-4">
          🎓 2025-yilda ham 100% kirish natijasi!
        </h3>
        <Lightbox
          open={index !== null}
          close={() => setIndex(null)}
          index={index || 0}
          slides={allSlides}
          carousel={{ finite: false }}
          animation={{ fade: 300 }}
        />
      </div>
    </Wrapper>
  );
}

export default Results;
