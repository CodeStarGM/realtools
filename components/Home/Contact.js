import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[60vh] lg:h-[100vh] footContactBG">
      <div className="flex lg:flex-row flex-col justify-around items-center rounded-[10px] bg-white w-[75vw] h-[25vh] lg:h-[42vh]">
        <div>
          <h1 className="font-bold text-[4vw] lg:text-[2.70vw] text-[#021850]">
            Any Queries? Reach Out to Us
          </h1>
          <p className="py-[1vh] text-[2.40vw] lg:text-[1.30vw] text-[#4d4d4f]">
            Feel free to write to us, we are happy to help you
          </p>
        </div>
        <div>
          <Link href="/contact">
            <button className="font-semibold flex space-x-4 text-white bg-[#1849C6] py-[1.50vh] lg:py-[2.50vh] px-[2.50vw] rounded-[10px] ">
              <p> Write to Us</p>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 19.3102L16 10.0001L0 0.689941V7.93114L11.4615 10.0001L0 12.069V19.3102Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
