import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeadingNav from "../components/HeadingNav";
import Form from "../components/Form";

function sell() {
  return (
    <>
      <Navbar />
      <HeadingNav
        title="Sell Your Self Storage With Ease"
        desc="Let’s help you get the most out of your hard work"
      />

      <div className="flex justify-center items-center w-[100vw] h-[120vh] ">
        <div className="flex flex-col items-center  w-[80%] h-full">
          <p className="pt-[10vh] pb-[5vh] text-[3vw] lg:text-[1.80vw] text-center text-[#4d4d4f]">
            Using our platform is the go to place on the internet for anything
            that has to do with Self Storage, kindly share some information
            about you and your Self Storage with us and a dedicated account
            manager will get in touch
          </p>

          <Form customStyles="border-[1px] border-[#CED6EB]" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default sell;
