import React from "react";
import FilterNav from "../FilterNav";
import GridCard from "../GridCard";
import store1 from "../../public/static/storage1.png";
import store4 from "../../public/static/storage4.png";
import store5 from "../../public/static/storage5.png";
import store6 from "../../public/static/storage6.png";
import store7 from "../../public/static/storage7.png";
import store8 from "../../public/static/storage8.png";
import Link from "next/link";

function Listing() {
  return (
    <>
      <div className="py-[8vh] relative flex justify-start items-center flex-col w-full h-[45vh]  ">
        <h1 className="text-[#2F2F2F] font-bold text-[6vw] lg:text-[2.20vw]">
          Active Listing Self Storages
        </h1>
        <p className="text-[2.40vw] lg:text-[1.40vw] text-center text-[#4d4d4f]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis <br />
          maecenas tincidunt. Quis pretium ornare
        </p>
        <FilterNav customs="absolute -bottom-[44%] lg:-bottom-[25%]" />
      </div>
      <div className="pt-[24vh] flex flex-col justify-start items-center w-full h-[540vh] lg:h-[220vh] blueImage ">
        <div className="items-center grid grid-cols-1 lg:grid-cols-3 gap-[4vw]  w-[90%] h-auto">
          <GridCard bgColor="bg-[#F6F8FD]" cardImage={store4} />
          <GridCard bgColor="bg-[#F6F8FD]" cardImage={store5} />
          <GridCard bgColor="bg-[#F6F8FD]" cardImage={store6} />
          <GridCard bgColor="bg-[#F6F8FD]" cardImage={store7} />
          <GridCard bgColor="bg-[#F6F8FD]" cardImage={store1} />
          <GridCard bgColor="bg-[#F6F8FD]" cardImage={store8} />
        </div>
        <div className="flex justify-center items-end  w-[100vw] h-[20vh]">
          <Link href="/active-storage">
            <button className="bg-[#FFCE31] px-[6.50vw] py-[3.50vh] rounded-[10px] text-[5vw] lg:text-[1.40vw] font-semibold text-[#2F2F2F]">
              View More Listings
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Listing;
