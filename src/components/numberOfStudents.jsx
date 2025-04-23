import React from "react";
import Wrapper from "../layout/wrapper";
import CountUp from "react-countup";

function NumberOfStudents() {
  const stats = [
    { label: "O'quvchilar soni", value: 1000 },
    { label: "O'qishga kirganlar soni", value: 1000 },
    { label: "Tajriba (yil)", value: 22 },
  ];

  return (
    <Wrapper>
      <div className="flex flex-wrap justify-between gap-6 p-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-[20px] min-w-[180px]"
          >
            <span className="text-gray-600">{item?.label}</span>
            <span className="text-3xl font-bold text-black mt-2">
              <CountUp
                end={item?.value}
                duration={5}
                suffix={item?.label.includes("Tajriba") ? "+" : "+"}
              />
            </span>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default NumberOfStudents;
