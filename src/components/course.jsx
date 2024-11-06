/* eslint-disable no-unused-vars */
import { useEffect, useContext } from "react";
import { getText } from "../language";
import { LanguageContext } from "../context/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Course = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const courseCards = document.querySelectorAll(".course-card");

    // Kartalarga animatsiyani qo'shish
    gsap.fromTo(
      courseCards,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: courseCards,
          start: "top 80%", // Sahifaning 80% qismini ko'rganida
          end: "bottom 20%",
          toggleActions: "play none none none", // Faollashish va qaytish animatsiyasiz
          onEnter: () => gsap.fromTo(courseCards, { opacity: 0, y: 50, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power4.out", stagger: 0.2 }),
          // Pastga tushganda animatsiya ishlaydi, lekin yuqoriga qaytishda ishlamaydi
        },
      }
    );
  }, []);

  return (
    <>
      <div className="flex justify-center items-center py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-[25px] md:text-[30px] lg:text-[50px] font-[600] text-center mb-[30px] text-gray-800">
            {getText("ourCourses")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {[
              { image: "/math.jpg", text: getText("math") },
              { image: "/english.jpg", text: getText("english") },
              { image: "/russian.jpg", text: getText("russian") },
              { image: "/ielts.webp", text: getText("ielts") },
              { image: "/sat.jpg", text: getText("sat") },
              { image: "/fizika.jpg", text: getText("physics") },
            ].map((course, index) => (
              <div
                key={index}
                className="course-card relative h-48 w-80 bg-cover bg-center rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundImage: `url(${course.image})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl transition-opacity duration-500 hover:opacity-80"></div>

                {/* Content */}
                <div className="absolute bottom-5 left-6 text-white">
                  <h4 className="font-bold text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                    {course.text}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
