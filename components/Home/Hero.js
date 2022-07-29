import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="w-[100vw] heroImage h-[90vh]">
      <Navbar />
      <div className="flex flex-col justify-center  space-y-[8vh] items-center w-[100%] h-[100%]">
        <div>
          <h1 className="text-center font-extrabold text-[8vw] lg:text-[4vw] text-white">
            Self Storage Business <br />
            Buy. Sell. Learn.
          </h1>
          <p className="text-center font-medium text-[2.50vw] lg:text-[1.20vw] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
            <br /> sagittis, aliquam non tortor blandit lobortis. blandit{" "}
          </p>
        </div>
        <div className="flex space-x-4 ">
          <Link href="/sell">
            <button className="text-[3vw] lg:text-[1.20vw] font-medium rounded-[10px] py-[1vh]  lg:py-[2vh] w-[40vw] lg:w-[19vw]  bg-[#FFCE31]">
              Sell Your Self Storage
            </button>
          </Link>

          <Link href="/active-storage">
            <button className="text-[3vw] lg:text-[1.20vw] font-medium rounded-[10px] py-[1vh] lg:py-[2vh] w-[45vw] lg:w-[19vw]  bg-white">
              Active Self Storage Listings
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
