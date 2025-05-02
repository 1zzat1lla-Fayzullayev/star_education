import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Wrapper from "../layout/wrapper";

const testimonials = [
  {
    id: 1,
    name: "Izzatilla Fayzullayev",
    role: "O'quvchi",
    content:
      "Man aynan mana shu Star Educationda hech qanday matematika bilimlarsiz ta'lim oldim va 3-4 oy ichida universitetga topshirdim va baland natijalar bilan kirdim, hozirda buning ketidan o'z kompaniyamni ochdim va hozir Lyra kompaniyasining asoschisiman, man bu o'quv markazni hammaga tavsiya qilaman, o'zilani kelajagilani o'zila qurila, albatta harakat bilan :)",
    rating: 5,
  },
  {
    id: 2,
    name: "Dilfuza Rahimova",
    role: "9-sinf o‘quvchisi",
    content:
      "Darslar juda qiziqarli va tushunarli bo‘lib o‘tadi. Avval matematikadan qo‘rqardim, endi esa bu mening sevimli fanim!",
    rating: 5,
  },
  {
    id: 3,
    name: "Shoxrux To‘xtayev",
    role: "11-sinf o‘quvchisi",
    content:
      "Olimpiadaga tayyorgarlik ko‘rayotganimda, ustozlarim har bir savolimga batafsil javob berishdi. Natijada viloyat bosqichida 1-o‘rinni egalladim!",
    rating: 5,
  },
  {
    id: 4,
    name: "Shoxrux To‘xtayev",
    role: "11-sinf o‘quvchisi",
    content:
      "Olimpiadaga tayyorgarlik ko‘rayotganimda, ustozlarim har bir savolimga batafsil javob berishdi. Natijada viloyat bosqichida 1-o‘rinni egalladim!",
    rating: 5,
  },
  {
    id: 5,
    name: "Shoxrux To‘xtayev",
    role: "11-sinf o‘quvchisi",
    content:
      "Olimpiadaga tayyorgarlik ko‘rayotganimda, ustozlarim har bir savolimga batafsil javob berishdi. Natijada viloyat bosqichida 1-o‘rinni egalladim!",
    rating: 5,
  },
];

const renderStars = (rating) => {
  return [...Array(5)].map((_, i) => (
    <svg
      key={i}
      className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));
};

function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-blue-50 to-white">
      <Wrapper>
        <div className="px-4 xl:px-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
            Bizning o'quvchilarimiz fikrlari
          </h2>

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
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all h-full flex flex-col border border-gray-100">
                  <div className="flex-grow">
                    <div className="flex flex-col items-center mb-5">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl mb-3 shadow-md">
                        {item.name.charAt(0)}
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 text-center">
                        {item.name}
                      </h4>
                      <p className="text-blue-500 text-sm font-medium">
                        {item.role}
                      </p>
                    </div>

                    <div className="relative mb-5">
                      <svg
                        className="absolute -top-5 left-0 w-6 h-6 text-gray-200"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <div
                        onClick={() => openModal(item)}
                        className="cursor-pointer"
                      >
                        <p className="text-gray-600 italic text-center px-4 line-clamp-4">
                          "{item.content}"
                        </p>
                        {item.content.length > 1 && (
                          <p className="text-blue-500 text-sm text-center mt-2">
                            davomini o'qish uchun bosing
                          </p>
                        )}
                      </div>
                      <svg
                        className="absolute -bottom-5 right-0 w-6 h-6 text-gray-200"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M22.648 28c4.896-3.456 8.352-9.12 8.352-15.36 0-5.088-3.072-8.064-6.624-8.064-3.36 0-5.856 2.688-5.856 5.856 0 3.168 2.208 5.472 5.088 5.472.576 0 1.344-.096 1.536-.192-.48 3.264-3.552 7.104-6.624 9.024L22.648 28zm-16.512 0c4.8-3.456 8.256-9.12 8.256-15.36 0-5.088-3.072-8.064-6.624-8.064-3.264 0-5.856 2.688-5.856 5.856 0 3.168 2.304 5.472 5.184 5.472.576 0 1.248-.096 1.44-.192-.48-3.264-3.456-7.104-6.528-9.024L6.136 28z" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-auto flex justify-center">
                    {renderStars(item.rating)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>

      {selectedTestimonial && (
        <div className="fixed inset-0 bg-[#00000065] bg-opacity-50 z-[999] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 cursor-pointer right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center mb-6 select-none">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mb-4 shadow-md">
                {selectedTestimonial.name.charAt(0)}
              </div>
              <h4 className="font-bold text-xl text-gray-900 text-center">
                {selectedTestimonial.name}
              </h4>
              <p className="text-blue-500 text-sm font-medium">
                {selectedTestimonial.role}
              </p>
            </div>

            <div className="relative mb-6">
              <svg
                className="absolute -top-6 left-0 w-8 h-8 text-gray-200"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-600 italic text-center px-4">
                "{selectedTestimonial.content}"
              </p>
              <svg
                className="absolute -bottom-6 right-0 w-8 h-8 text-gray-200"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M22.648 28c4.896-3.456 8.352-9.12 8.352-15.36 0-5.088-3.072-8.064-6.624-8.064-3.36 0-5.856 2.688-5.856 5.856 0 3.168 2.208 5.472 5.088 5.472.576 0 1.344-.096 1.536-.192-.48 3.264-3.552 7.104-6.624 9.024L22.648 28zm-16.512 0c4.8-3.456 8.256-9.12 8.256-15.36 0-5.088-3.072-8.064-6.624-8.064-3.264 0-5.856 2.688-5.856 5.856 0 3.168 2.304 5.472 5.184 5.472.576 0 1.248-.096 1.44-.192-.48-3.264-3.456-7.104-6.528-9.024L6.136 28z" />
              </svg>
            </div>

            <div className="flex justify-center">
              {renderStars(selectedTestimonial.rating)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Testimonials;
