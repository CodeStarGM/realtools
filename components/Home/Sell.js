import React from "react";
import Image from "next/image";
import sell from "../../public/static/seller.png";
import Link from "next/link";
function Sell() {
  return (
    <>
      <div className="relative rounded-br-[10vw] bg-[#E8EFFF] w-[100vw] h-[100vh] ">
        <div className="absolute -bottom-[1vh] right-[2vw] lg:right-[8vw]">
          <Image src={sell}></Image>
        </div>
        <div className="px-[7vw] flex justify-center items-start flex-col  w-[100%] h-[100%]">
          <h1 className="font-bold text-[#021850] text-[5vw] lg:text-[2.50vw]">
            Do you have a Self Storage for Sale?
          </h1>
          <p className="pt-[2vh] pb-[7vh] text-[#4d4d4f] text-[2.50vw] lg:text-[1.30vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            <br /> tortor sapien sagittis maecenas tincidunt. Quis pretium
            ornare id
            <br /> diam amet proin scelerisque nunc.
          </p>
          <Link href="/sell">
            <button className="font-semibold rounded-[10px] text-[3vw] lg:text-[1.30vw] text-white bg-[#1849C6] py-[2.60vh] px-[2.50vw]">
              Sell Your Self Storage
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sell;
