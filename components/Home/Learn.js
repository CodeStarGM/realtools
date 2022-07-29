import React from "react";
import LearnCard from "../LearnCard";
import learn1 from "../../public/static/learn1.png";
import learn2 from "../../public/static/learn2.png";
import learn3 from "../../public/static/learn3.png";
import learn4 from "../../public/static/learn4.png";

function Learn() {
  return (
    <div className="flex flex-col justify-around items-center z-50  w-[100vw] h-[340vh] lg:h-[150vh] bgFImage">
      <div>
        <h1 className="text-[4vw] lg:text-[2.60vw] text-center font-semibold text-white">
          Learn Everything About Buying, Selling, and
          <br /> Operating a Self Storage
        </h1>
        <p className="text-white py-4 pb-[14vh] text-[3vw] lg:text-[1.30vw] text-center">
          Learn about literally anything to know about Selling or
          <br /> Buying a Self Storage
        </p>
        <div className=" flex justify-center items-center w-[100vw] auto">
          <div className=" items-center w-[90vw] grid grid-cols-1 lg:grid-cols-4 gap-[3vw] h-auto">
            <LearnCard learnImage={learn1} />
            <LearnCard learnImage={learn2} />
            <LearnCard learnImage={learn3} />
            <LearnCard learnImage={learn4} />
          </div>
        </div>
        <div className=" flex  justify-center items-end w-[100vw]  h-[25vh]">
          <button className="font-semibold bg-[#FFCE31] text-[5vw] lg:text-[1.50vw] text-[#4d4d4f] rounded-[10px] py-[4vh] px-[3vw]">
            Explore the Learning Section
          </button>
        </div>
      </div>
    </div>
  );
}

export default Learn;
