/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slides = [
    {
        type: "video",
        src: "https://app.cambridgeonline.uz/storage/site/tugad.mp4",
    },
    {
        type: "images",
        src: [
            "https://app.cambridgeonline.uz/storage/site/613eec6f-3407-4c14-b82d-145af6c88d58_main.jpg",
            "https://app.cambridgeonline.uz/storage/site/feeb9b95-993b-4481-ac9d-05819f14b6e4_main.jpg",
        ],
    },
    {
        type: "video",
        src: "https://app.cambridgeonline.uz/storage/site/80965c00-cb33-4aca-a513-f3f40d78a24d_main.mp4",
    },
    {
        type: "images",
        src: [
            "https://app.cambridgeonline.uz/storage/site/3463e33c-7f95-4c17-9a39-44720ffd02d0_main.jpg",
            "https://app.cambridgeonline.uz/storage/site/f49b857c-688b-4a6a-a843-b3d5b57f8596_main.jpg",
        ],
    },
    {
        type: "video",
        src: "https://app.cambridgeonline.uz/storage/site/550480dc-469c-4c3a-b4f3-099f8015e274_main.mp4",
    },
    {
        type: "images",
        src: [
            "https://app.cambridgeonline.uz/storage/site/3463e33c-7f95-4c17-9a39-44720ffd02d0_main.jpg",
            "https://app.cambridgeonline.uz/storage/site/f49b857c-688b-4a6a-a843-b3d5b57f8596_main.jpg",
        ],
    },
    {
        type: "video",
        src: "https://app.cambridgeonline.uz/storage/site/550480dc-469c-4c3a-b4f3-099f8015e274_main.mp4",
    },
    {
        type: "images",
        src: [
            "https://app.cambridgeonline.uz/storage/site/3463e33c-7f95-4c17-9a39-44720ffd02d0_main.jpg",
            "https://app.cambridgeonline.uz/storage/site/f49b857c-688b-4a6a-a843-b3d5b57f8596_main.jpg",
        ],
    },
    {
        type: "video",
        src: "https://app.cambridgeonline.uz/storage/site/550480dc-469c-4c3a-b4f3-099f8015e274_main.mp4",
    },
    {
        type: "images",
        src: [
            "https://app.cambridgeonline.uz/storage/site/3463e33c-7f95-4c17-9a39-44720ffd02d0_main.jpg",
            "https://app.cambridgeonline.uz/storage/site/f49b857c-688b-4a6a-a843-b3d5b57f8596_main.jpg",
        ],
    },
    {
        type: "video",
        src: "https://app.cambridgeonline.uz/storage/site/550480dc-469c-4c3a-b4f3-099f8015e274_main.mp4",
    },
];

function CustomVideoPlayer({ src }) {
    return (
        <div className="custom-video-player relative w-full h-full rounded-3xl overflow-hidden">
            <video className="w-full h-full object-cover" controls>
                <source src={src} type="video/mp4" />
            </video>
            <button
                aria-label="Play/Pause"
                className="controls absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center cursor-pointer bg-black backdrop-blur-sm bg-opacity-15 rounded-full duration-300 text-white"
            >
                <img width="20" src="/pause.svg" style={{ display: "none" }} />
                <img width="20" src="/play.svg" className="pl-1" />
            </button>
        </div>
    );
}

function SecondSwiper() {
    return (
        <section
            className="pt-14 md:pt-20 px-4"
            data-aos="fade-up"
            data-aos-duration="700"
        >
            <div className="w-full">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    // navigation
                    // pagination={{ clickable: true }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 7,
                            spaceBetween: 30,
                        },
                        1536: {
                            slidesPerView: 7,
                            spaceBetween: 35,
                        },
                    }}
                    className="h-[300px] xs:h-[400px] sm:h-[450px] md:h-[510px] lg:h-[600px]"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="relative">
                            {slide.type === "video" ? (
                                <CustomVideoPlayer src={slide.src} />
                            ) : (
                                <div className="flex flex-col gap-y-2 h-full">
                                    {slide.src.map((imageSrc, idx) => (
                                        <img
                                            key={idx}
                                            src={imageSrc}
                                            className="h-[48%] object-cover rounded-3xl w-full"
                                            alt={`Slide ${index} - Image ${idx}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default SecondSwiper;
