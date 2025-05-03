import React from "react";
import Wrapper from "../layout/wrapper";

function About() {
  return (
    <div className="py-7 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <Wrapper>
        <div className="max-w-6xl mx-auto mt-[80px] px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Star Education
            </span>
            <h1 className="text-[25px] md:text-[30px] lg:text-[40px] font-bold text-gray-900 mb-6">
              Biz haqimizda
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-[16px] md:text-xl text-gray-600 leading-relaxed">
                <span className="font-semibold text-blue-600">
                  Star Education
                </span>{" "}
                — matematika bilimlarini mustahkamlash va rivojlantirish uchun
                yaratilgan zamonaviy o'quv markazi. Biz har bir o'quvchiga
                matematikani mukammal o'rgatish va ularning mantiqiy fikrlash
                qobiliyatini rivojlantirishga qaratilganmiz.
              </p>
            </div>
          </div>

          {/* Mission/Vision Cards */}
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#F4CE14]">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-[#F4CE14]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Bizning vazifamiz
                </h2>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>
                    O'quvchilarga matematikani oson va tushunarli tarzda
                    o'rgatish
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>
                    Har bir o'quvchining individual salohiyatini aniqlab, unga
                    mos usulda yondashish
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>
                    Zamonaviy metodikalar va interaktiv darslar orqali ta'lim
                    sifatini oshirish
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>
                    Matematikani nafaqat o'qitish, balki uni sevdirish!
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#F4CE14]">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-[#F4CE14]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Nega aynan biz?
                </h2>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Tajribali va fidoyi ustoz jamoasi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Har bir o'quvchi uchun individual o'quv rejasi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Onlayn va oflayn darslar imkoniyati</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Doimiy test va monitoring tizimi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Xalqaro va mahalliy olimpiadalarga tayyorlov kurslari
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                22+
              </div>
              <div className="text-gray-600">Yillik tajriba</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                1000+
              </div>
              <div className="text-gray-600">O'quvchilar</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                998+
              </div>
              <div className="text-gray-600">Malakali o'qituvchilar</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                100%
              </div>
              <div className="text-gray-600">Muvaffaqiyat darajasi</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <svg
                className="w-8 h-8 mx-auto mb-6 opacity-70"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <blockquote className="text-[16px] md:text-2xl font-medium mb-6">
                "Matematika — bu nafaqat fan, bu — kelajak tilidir! Star
                Education bilan kelajagingizni bugundan boshlab quring!"
              </blockquote>
              <div className="font-light text-blue-100">
                Star Education jamoasi
              </div>
            </div>
          </div>

          <section className="w-full">
            <div className="text-center my-[80px]">
              <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-semibold mb-4 text-black">
                Manzilimiz
              </h2>

              <div className="relative overflow-hidden rounded-xl shadow-md">
                <a
                  href="https://yandex.uz/maps/org/113005110697/?utm_medium=mapframe&utm_source=maps"
                  className="text-xs text-gray-300 absolute top-0 left-0 z-10"
                >
                  Math class
                </a>
                <a
                  href="https://yandex.uz/maps/10335/tashkent/category/educational_center/184106168/?utm_medium=mapframe&utm_source=maps"
                  className="text-xs text-gray-300 absolute top-4 left-0 z-10"
                >
                  Учебный центр в Ташкенте
                </a>
                <iframe
                  src="https://yandex.uz/map-widget/v1/?ll=69.219212%2C41.332827&mode=poi&poi%5Bpoint%5D=69.219157%2C41.332957&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D113005110697&z=19.89"
                  width="100%"
                  height="400"
                  className="w-full h-[400px] border-0 relative"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    </div>
  );
}

export default About;
