import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeadingNav from "../components/HeadingNav";
import Form from "../components/Form";
import evaluation from "../public/static/evaluation.png";

function Evaluation() {
  return (
    <>
      <Navbar />
      <HeadingNav
        title="Get Your Self Storage Evaluated"
        desc="Let’s help you determine what your self storage is worth"
      />
      <div className="px-[4vw] flex flex-col lg:flex-row items-center justify-around lg:justify-center w-[100vw] h-[90vh] ">
        <div className="w-[90%] lg:w-[40%]">
          <Image src={evaluation}></Image>
        </div>
        <div className=" pl-[4vw] w-[90%] lg:w-[60%]">
          <h1 className="text-[#4d4d4f] font-semibold  text-[6vw] lg:text-[2.50vw]">
            Have a Self Storage??
          </h1>
          <p className="text-[#4d4d4f] w-[100%] text-[3.40vw] lg:text-[1.45vw]">
            Using our platform is the go to place on the internet for anything
            that has to do with Self Storage,{" "}
            <strong>
              we’ll help you determine what your Self Storage is worth,
            </strong>
            <br />
            <br />
            kindly share some information about you and your Self Storage with
            us and a dedicated account manager will get in touch
          </p>
        </div>
      </div>
      <div className=" flex space-y-[5vh] justify-center items-center flex-col w-[100vw] h-[130vh] bg-[#1849C6]">
        <h1 className="lg:px-0 px-[1vw] text-[4.40vw] lg:text-[1.50vw] text-white font-medium text-center">
          Let us know about you and your Self Storage, drop some information
          that <br />
          would help us carry out the evaluation effectively
        </h1>
        <Form customStyles="bg-white" />
      </div>

      <Footer />
    </>
  );
}

export default Evaluation;
