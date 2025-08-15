import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Wrapper from "../layout/wrapper";
import { Link } from "react-router-dom";

function Certificates() {
  const certificates = [
    { src: "/mirazam.jpg" },
    { src: "/ismoil.jpg" },
    { src: "/muslima.jpg" },
    { src: "/asadbe.jpg" },
  ];

  const [index, setIndex] = useState(null);

  return (
    <Wrapper>
      <div className="px-[20px] xl:px-0">
        <div className="flex items-center justify-between mb-12 mt-[100px] ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 ">
            2025-yil natijalari
          </h2>
          <Link to={"/results"}>
            <button className="flex items-center gap-1 bg-[#5f5f5f13] backdrop-blur-[10px] px-5 py-2 rounded-[55px] cursor-pointer transition ease-in hover:bg-[#5f5f5f0a]">
              <span className="font-medium">Barchasi</span>
              <img src="/right-arrow-svgrepo-com.svg" className="w-[30px]" />
            </button>
          </Link>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full pb-12"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
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

        <Lightbox
          open={index !== null}
          close={() => setIndex(null)}
          index={index || 0}
          slides={certificates}
          carousel={{ finite: false }}
          animation={{ fade: 300 }}
        />
      </div>
    </Wrapper>
  );
}

export default Certificates;
