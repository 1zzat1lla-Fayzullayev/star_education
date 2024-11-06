/* eslint-disable no-unused-vars */
import { FaHeart } from "react-icons/fa";
import { getText } from "../language";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

const Course = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  return (
    <>
      <div className="flex justify-center items-center py-20 bg-gray-100">
        <div className="container mx-auto">
         <h2 className="text-[25px] md:text-[30px] lg:text-[50px] font-[600] text-center mb-[30px] text-gray-800">{getText("ourCourses")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            <div
              className="relative h-48 w-80 bg-cover bg-center rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://www.youcubed.org/wp-content/uploads/2017/03/beautiful-math-1.jpg')",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl transition-opacity duration-500 hover:opacity-80"></div>

              {/* Content */}
              <div className="absolute bottom-5 left-6 text-white">
                <h4 className="font-bold text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                  {getText("math")}
                </h4>
              </div>
            </div>

            <div
              className="relative h-48 w-80 bg-cover bg-center rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://t3.ftcdn.net/jpg/03/70/42/66/360_F_370426690_Pejt9KxjWTHPklsKwripaxr0iA17zupF.jpg')",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl transition-opacity duration-500 hover:opacity-80"></div>

              {/* Content */}
              <div className="absolute bottom-5 left-6 text-white">
                <h4 className="font-bold text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                  {getText("english")}
                </h4>
              </div>
            </div>

            <div
              className="relative h-48 w-80 bg-cover bg-center rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://media.istockphoto.com/id/506675034/photo/question-do-you-speak-russian-written-in-russian.jpg?s=612x612&w=0&k=20&c=XeFuy9wa_CnUBgMuCxm4dw2S4cLAf9NES8azAH5mjAU=')",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl transition-opacity duration-500 hover:opacity-80"></div>

              {/* Content */}
              <div className="absolute bottom-5 left-6 text-white">
                <h4 className="font-bold text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                  {getText("russian")}
                </h4>
              </div>
            </div>

            <div
              className="relative h-48 w-80 bg-cover bg-center rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://esdubai.com/wp-content/uploads/2023/01/Why-Do-I-Need-IELTS-1.jpg')",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl transition-opacity duration-500 hover:opacity-80"></div>

              {/* Content */}
              <div className="absolute bottom-5 left-6 text-white">
                <h4 className="font-bold text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                  {getText("ielts")}
                </h4>
              </div>
            </div>

            <div
              className="relative h-48 w-80 bg-cover bg-center rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://edwisefoundation.com/wp-content/uploads/2021/02/What-SAT-1-Is.jpg')",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl transition-opacity duration-500 hover:opacity-80"></div>

              {/* Content */}
              <div className="absolute bottom-5 left-6 text-white">
                <h4 className="font-bold text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                  {getText("sat")}
                </h4>
              </div>
            </div>

            <div
              className="relative h-48 w-80 bg-cover bg-center rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://t4.ftcdn.net/jpg/02/14/56/75/360_F_214567514_hGbTMUq06pJIGKiXA248l43E3hU9Q08x.jpg')",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl transition-opacity duration-500 hover:opacity-80"></div>

              {/* Content */}
              <div className="absolute bottom-5 left-6 text-white">
                <h4 className="font-bold text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                  {getText("physics")}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
