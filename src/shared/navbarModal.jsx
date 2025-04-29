/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import React, { useState } from "react";
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

function NavbarModal({ setRegisterModal }) {
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
    <>
      <form className="flex flex-col gap-6 w-full max-w-md bg-white p-4 rounded-[5px]">
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
        <div className="flex items-center w-full justify-between gap-2">
          <button
            type="submit"
            onClick={async (e) => {
              e.preventDefault(); 
              await sendFeedback(e);
              setRegisterModal(false);
            }}
            className="bg-[#F4CE14] text-black py-3 rounded-lg font-medium hover:bg-[#f4cf14cc] cursor-pointer transition w-full"
            disabled={isLoading}
          >
            {isLoading ? "Yuborilyapti..." : "Yuborish"}
          </button>

          <button
            type="button"
            className="bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-400 cursor-pointer transition w-full"
            onClick={() => setRegisterModal(false)}
          >
            Yopish
          </button>
        </div>
      </form>
    </>
  );
}

export default NavbarModal;
