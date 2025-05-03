import React from "react";

function Phone() {
  return (
    <>
      <a
        href="tel:+998909298801"
        className="fixed bottom-[50px] right-[20px] md:right-[50px] bg-white z-[1000] rounded-full p-3 flex justify-center cursor-pointer items-center shadow-2xl phone_animate"
      >
        <img src="/phone.svg" className="w-[55px]" />
      </a>
    </>
  );
}

export default Phone;
