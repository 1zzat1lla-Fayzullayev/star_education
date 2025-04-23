/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Wrapper from "../layout/wrapper";
import axios from "axios";
import toast from "react-hot-toast";

export function formatPhoneNumber(input) {
  const digitsOnly = input.replace(/\D/g, "");
  const formattedNumber = digitsOnly.startsWith("998")
    ? digitsOnly
    : "998" + digitsOnly.slice(0, 9);

  let result = "+" + formattedNumber.slice(0, 3);
  if (formattedNumber.length > 3) {
    result += " (" + formattedNumber.slice(3, 5);
    if (formattedNumber.length > 5) {
      result += ") " + formattedNumber.slice(5, 8);
      if (formattedNumber.length > 8) {
        result += "-" + formattedNumber.slice(8, 10);
        if (formattedNumber.length > 10) {
          result += "-" + formattedNumber.slice(10, 12);
        }
      }
    }
  }
  return result;
}

export const phoneValidate =
  /^\+998 \((90|91|93|94|95|97|98|99|33|88|71)\) \d{3}-\d{2}-\d{2}$/;

function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const TOKEN = "7383040489:AAHkoBSE08agL11aagGy8xrHApasPMa0e-8";
  const USERID = "-1002343489046";

  const encodeText = (text) => encodeURIComponent(text);

  const sendFeedback = async (e) => {
    e.preventDefault();

    if (!name || !phone || !description) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    if (!phoneValidate.test(phone)) {
      toast.error("Iltimos, to‘g‘ri telefon raqamini kiriting.");
      return;
    }

    setIsLoading(true);

    const text = `Имя: ${name}\nСообщение: ${description}\nНомер телефона: ${phone}`;

    try {
      await axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${USERID}&text=${encodeText(
          text
        )}`
      );
      toast.success(
        "Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog‘lanamiz."
      );
    } catch (error) {
      toast.error("Xabaringiz yuborilmadi. Iltimos, qayta urinib koʻring.");
    } finally {
      setIsLoading(false);
      setName("");
      setPhone("+998 ");
      setDescription("");
    }
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;

    const rawDigits = input.replace(/\D/g, "");
    if (rawDigits.length <= 3) {
      setPhone("+998 ");
      return;
    }

    setPhone(formatPhoneNumber(rawDigits));
  };

  return (
    <Wrapper>
      <div className="px-[20px] xl:px-0">
        <div className="mt-[120px]">
          <h2 className="text-[25px] lg:text-[30px] max-w-xl font-semibold text-black">
            Biz bilan bog‘laning, savollaringizga javob berishga tayyormiz!
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-12 pb-5 md:pb-12 pt-5">
          <form
            className="flex flex-col gap-6 w-full max-w-md"
            onSubmit={sendFeedback}
          >
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ismingiz"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
            />
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Telefon raqamingiz"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
            />
            <textarea
              name="message"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Izoh qoldiring (ixtiyoriy)"
              rows={4}
              className="border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#F4CE14] text-black py-3 rounded-lg font-medium hover:bg-[#f4cf14cc] cursor-pointer transition"
              disabled={isLoading}
            >
              {isLoading ? "Yuborilyapti..." : "Yuborish"}
            </button>
          </form>
          <div className="w-full max-w-sm">
            <img
              src="/form.png"
              className="w-full h-auto object-cover rounded-lg"
              alt="Aloqa formasi rasmi"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Form;
