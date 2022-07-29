import React from "react";
import Image from "next/image";
import female from "../../public/static/buy.png";
import Link from "next/link";
function Buy() {
  return (
    <div className="flex relative sendBACK justify-start items-end   w-[100vw] h-[80vh]">
      <div className="flex justify-end items-end  w-[100vw] h-[70vh] ">
        <div className="w-[50%] relative h-[100%] ">
          <div className="sendBACK absolute  -bottom-[1vh] lg:-bottom-[20vh]">
            <Image src={female} width={666} height={672} />
          </div>
        </div>

        <div className="flex px-[3vw] pt-[14vh] justify-end items-center w-[70%] lg:w-[60%] h-[100%] ">
          <div>
            <h1 className="text-[#021850] font-bold text-[5vw] lg:text-[2.50vw]">
              Do you want to buy a Self Storage?
            </h1>
            <p className="pt-[2vh] pb-[5vh] text-[#4d4d4f] text-[1.60vw] lg:text-[1.30vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              <br /> tortor sapien sagittis maecenas tincidunt. Quis pretium
              ornare id
              <br /> diam amet proin scelerisque nunc.
            </p>
            <Link href="/evaluation">
              <button className="font-semibold rounded-[10px] text-[3vw] lg:text-[1.30vw] text-white bg-[#1849C6] py-[2.60vh] px-[2.50vw]">
                Buy a Self Storage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
