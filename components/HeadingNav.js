import React from "react";

function HeadingNav({ title, desc }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[100vw] h-[20vh] lg:h-[40vh] navImage">
        <h1 className="font-semibold text-[6vw] lg:text-[3vw]">{title}</h1>
        <p className="text-[3vw] lg:text-[1.50vw] text-[#4d4d4f]">{desc}</p>
      </div>
    </>
  );
}

export default HeadingNav;
