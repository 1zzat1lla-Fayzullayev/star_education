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
          <h2 className="text-[25px] md:text-[30px] lg:text-[50px] font-[600] text-center mb-[30px] text-gray-800">
            {getText("ourCourses")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            <div
              className="relative h-48 w-80 bg-cover bg-center rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage: "url('/math.jpg')",
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
                backgroundImage: "url('/english.jpg')",
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
                backgroundImage: "url('/russian.jpg')",
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
                backgroundImage: "url('/ielts.webp')",
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
                backgroundImage: "url('/sat.jpg')",
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
                backgroundImage: "url('/fizika.jpg')",
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
