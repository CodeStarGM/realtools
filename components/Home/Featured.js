import React from "react";
import GridCard from "../GridCard";

import store1 from "../../public/static/storage1.png";
import store2 from "../../public/static/storage2.png";
import store3 from "../../public/static/storage3.png";
function Featured() {
  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-[260vh]  lg:h-[120vh]">
      <div className=" py-[7vh] flex flex-col items-center justify-center text-black">
        <h1 className="text-[#021850] font-semibold text-[6vw] lg:text-[2.80vw]">
          Featured Self Storages
        </h1>
        <p className="w-[80%] lg:w-auto text-[2.40vw] lg:text-[1.30vw] text-center text-[#4d4d4f]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis <br />
          maecenas tincidunt. Quis pretium ornare
        </p>
      </div>

      <div className="flex lg:space-y-0 space-y-[4vh] flex-col lg:flex-row items-center justify-between w-[90%]">
        <GridCard bgColor="bg-[#F6F8FD]" cardImage={store1} />
        <GridCard bgColor="bg-[#F6F8FD]" cardImage={store2} />
        <GridCard bgColor="bg-[#F6F8FD]" cardImage={store3} />
      </div>

      <div className="flex justify-center items-center cursor-pointer space-x-2 pt-[4vh] w-[100%] h-auto">
        <div className="rounded-full w-[26px] h-[26px] hover:bg-[#1849C6] border-[1px] border-[#DBDEE7]"></div>
        <div className="rounded-full w-[26px] h-[26px] bg-[#1849C6]"></div>
        <div className="rounded-full w-[26px] h-[26px] hover:bg-[#1849C6] border-[1px] border-[#DBDEE7]"></div>
        <div className="rounded-full w-[26px] h-[26px] hover:bg-[#1849C6] border-[1px] border-[#DBDEE7]"></div>
      </div>
    </div>
  );
}

export default Featured;
