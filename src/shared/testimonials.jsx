import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";

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
  return (
    <section className="relative mt-[80px] bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="md:max-w-[777px] md:mx-auto">
        <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-bold text-center text-gray-900 mb-14 px-[20px] xl:px-0">
          Bizning o‘quvchilarimiz fikrlari
        </h2>       

        <Swiper
          modules={[ Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white py-5 px-3  md:p-6 rounded-3xl shadow-lg hover:shadow-2xl transition mx-8 text-center">
                <div className="flex justify-center mb-4">
                  {renderStars(item.rating)}
                </div>
                <p className="text-[16px] md:text-lg text-gray-700 italic mb-6 max-w-2xl mx-auto">
                  "{item.content}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl mb-3">
                    {item.name.charAt(0)}
                  </div>
                  <h4 className="font-semibold text-xl text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-gray-500">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
