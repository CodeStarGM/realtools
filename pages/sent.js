import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Sent() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center w-[100vw] h-[90vh]">
        <div className="flex flex-col justify-center items-center">
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50 0C22.3864 0 0 22.3864 0 50C0 77.6136 22.3864 100 50 100C77.6136 100 100 77.6136 100 50C100 22.3864 77.6136 0 50 0ZM71.6727 41.5455C72.0718 41.0893 72.3756 40.5579 72.5663 39.9826C72.757 39.4073 72.8307 38.7996 72.7831 38.1954C72.7354 37.5912 72.5674 37.0026 72.289 36.4642C72.0105 35.9259 71.6272 35.4487 71.1616 35.0606C70.696 34.6726 70.1575 34.3816 69.5777 34.2048C68.998 34.028 68.3887 33.9689 67.7858 34.031C67.1829 34.0931 66.5985 34.2752 66.067 34.5665C65.5355 34.8578 65.0676 35.2525 64.6909 35.7273L45.1455 59.1773L35.0318 49.0591C34.1745 48.2311 33.0263 47.7729 31.8345 47.7833C30.6427 47.7937 29.5027 48.2717 28.6599 49.1145C27.8172 49.9572 27.3391 51.0973 27.3288 52.2891C27.3184 53.4809 27.7766 54.6291 28.6045 55.4864L42.2409 69.1227C42.6875 69.5691 43.2222 69.9175 43.811 70.1457C44.3997 70.374 45.0295 70.4771 45.6603 70.4484C46.2911 70.4198 46.909 70.26 47.4746 69.9793C48.0402 69.6986 48.5411 69.3032 48.9455 68.8182L71.6727 41.5455Z"
              fill="#3FCD78"
            />
          </svg>
          <h1 className="pt-[3vh] text-[#212121] text-[6vw] lg:text-[2vw] font-semibold">
            Your Inquiry Has Been Sent{" "}
          </h1>
          <p className="lg:px-0 px-[2vh] text-center text-[#373737]">
            We’ve recieved your inquiry and we will get in touch with you as
            <br />
            soon as possible
          </p>
        </div>

        <div className="py-[5vh] space-x-[2vw]">
          <Link href="/active-storage">
            <button className="bg-[#1849C6] px-[10vw] lg:px-[3vw] py-[1.40vh] rounded-[10px] text-white text-[4vw] lg:text-[1.20vw]">
              Active Listings
            </button>
          </Link>
          <Link href="/">
            <button className="border-[1px] border-[#979797] px-[3vw] py-[1.40vh] rounded-[10px] text-black text-[4vw] lg:text-[1.20vw]">
              Go Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sent;
