import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import HeadingNav from "../components/HeadingNav";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
      <Head>
        <title>Contact US</title>
        <meta
          name="description"
          content="The Best Real State Company Out There"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeadingNav
        title="Contact us"
        desc="Let us know what we can help you with"
      />

      <div className="flex justify-center items-center w-[100vw] h-[120vh] ">
        <div className=" rounded-[24px] w-[90vw] lg:w-[53vw] h-[95vh] border-[1px] border-[#CDD4E7]">
          <form
            action=""
            className="flex flex-col w-[100%] h-[100%] justify-evenly items-center"
          >
            <div className="flex items-center  px-[1vw] space-x-[2vw] rounded-[10px] bg-[#F6F8FD] w-[90%] lg:w-[40vw] h-[10vh]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.7168 0C8.72789 0 7.76119 0.293245 6.93895 0.842652C6.1167 1.39206 5.47584 2.17295 5.0974 3.08658C4.71896 4.00021 4.61994 5.00555 4.81287 5.97545C5.0058 6.94536 5.482 7.83627 6.18126 8.53553C6.88053 9.2348 7.77144 9.711 8.74135 9.90393C9.71125 10.0969 10.7166 9.99784 11.6302 9.6194C12.5438 9.24096 13.3247 8.6001 13.8741 7.77785C14.4236 6.95561 14.7168 5.98891 14.7168 5C14.7168 3.67392 14.19 2.40215 13.2523 1.46447C12.3146 0.526784 11.0429 0 9.7168 0ZM9.7168 8C9.12345 8 8.54343 7.82405 8.05009 7.49441C7.55674 7.16476 7.17222 6.69623 6.94516 6.14805C6.7181 5.59987 6.65869 4.99667 6.77444 4.41473C6.8902 3.83279 7.17592 3.29824 7.59548 2.87868C8.01503 2.45912 8.54958 2.1734 9.13153 2.05764C9.71347 1.94189 10.3167 2.0013 10.8648 2.22836C11.413 2.45542 11.8816 2.83994 12.2112 3.33329C12.5408 3.82664 12.7168 4.40666 12.7168 5C12.7168 5.79565 12.4007 6.55871 11.8381 7.12132C11.2755 7.68393 10.5124 8 9.7168 8ZM18.7168 19V18C18.7168 16.1435 17.9793 14.363 16.6665 13.0503C15.3538 11.7375 13.5733 11 11.7168 11H7.7168C5.86028 11 4.0798 11.7375 2.76705 13.0503C1.45429 14.363 0.716797 16.1435 0.716797 18V19H2.7168V18C2.7168 16.6739 3.24358 15.4021 4.18126 14.4645C5.11895 13.5268 6.39071 13 7.7168 13H11.7168C13.0429 13 14.3146 13.5268 15.2523 14.4645C16.19 15.4021 16.7168 16.6739 16.7168 18V19H18.7168Z"
                  fill="#A1A6B1"
                />
              </svg>

              <input
                className=" bg-transparent pt-[1.50vh] h-full placeholder:text-[5vw] lg:placeholder:text-[1.34vw] placeholder:text-[#A1A6B1] text-black outline-none  text-[1.34vw]"
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="flex items-center px-[1vw] space-x-[2vw] rounded-[10px] bg-[#F6F8FD] w-[90%] lg:w-[40vw] h-[10vh]">
              <svg
                width="12"
                height="24"
                viewBox="0 0 12 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.85267 23.195L4.77248 23.1089C-3.92337 12.6245 3.15735 3.39145 5.53595 0.807339C5.72037 0.605864 5.94273 0.442757 6.1903 0.327366C6.43786 0.211975 6.70576 0.146567 6.97864 0.134889C7.25153 0.123211 7.52404 0.165494 7.78055 0.259314C8.03707 0.353134 8.27255 0.496647 8.47351 0.681631L11.0724 3.47207C11.2615 3.67475 11.3854 3.92954 11.428 4.20345C11.4707 4.47735 11.4301 4.75775 11.3115 5.00833L10.1344 7.54212C10.0193 7.7877 9.83462 7.99407 9.60325 8.13558C9.37188 8.27708 9.10403 8.3475 8.83298 8.33807L6.73952 8.27344C5.93891 9.33373 5.48331 10.6144 5.43436 11.9421C5.3854 13.2698 5.74546 14.5804 6.46581 15.6968L8.57814 15.7817C8.8496 15.7951 9.1111 15.8881 9.33004 16.0492C9.54897 16.2102 9.71565 16.4321 9.80928 16.6873L10.8227 19.3087C10.9182 19.5665 10.9347 19.8468 10.8703 20.1139C10.8059 20.3811 10.6633 20.6231 10.4609 20.8089L7.78694 23.2993C7.384 23.6746 6.84848 23.8744 6.2982 23.8549C5.74792 23.8353 5.22794 23.5979 4.85267 23.195ZM7.57384 1.74649C7.44875 1.61218 7.27543 1.53306 7.092 1.52654C6.90857 1.52002 6.73007 1.58663 6.59575 1.71172L6.55524 1.74945C3.77412 4.77464 -1.92454 12.8719 5.83723 22.2213C5.89508 22.2916 5.96626 22.3499 6.04667 22.3927C6.12708 22.4355 6.21515 22.462 6.30583 22.4707C6.3965 22.4793 6.488 22.47 6.57508 22.4433C6.66215 22.4165 6.74309 22.3728 6.81324 22.3147L9.51759 19.7961L8.50414 17.1746L5.70714 17.0654L5.51113 16.794C1.9597 11.8739 5.80911 7.17289 5.85468 7.13044L6.06947 6.87366L8.86245 6.95827L10.0642 4.42046L7.57384 1.74649Z"
                  fill="#A1A6B1"
                />
              </svg>

              <input
                className="bg-transparent placeholder:text-[#A1A6B1] text-black outline-none pt-[1.50vh] h-full placeholder:text-[5vw] lg:placeholder:text-[1.34vw] text-[1.34vw]"
                type="text"
                placeholder="Number"
              />
            </div>

            <div className="flex items-center px-[1vw] space-x-[2vw] rounded-[10px] bg-[#F6F8FD] w-[90%] lg:w-[40vw] h-[10vh]">
              <svg
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.87469 0H17.5589C18.3964 0 19.1997 0.332706 19.7919 0.924926C20.3841 1.51715 20.7168 2.32037 20.7168 3.15789V12.6316C20.7168 13.4691 20.3841 14.2723 19.7919 14.8645C19.1997 15.4568 18.3964 15.7895 17.5589 15.7895H3.87469C3.03717 15.7895 2.23394 15.4568 1.64172 14.8645C1.0495 14.2723 0.716797 13.4691 0.716797 12.6316V3.15789C0.716797 2.32037 1.0495 1.51715 1.64172 0.924926C2.23394 0.332706 3.03717 0 3.87469 0ZM3.87469 1.05263C3.38076 1.0518 2.90243 1.22554 2.52417 1.54316L10.7168 6.86316L18.9094 1.54316C18.5311 1.2257 18.0528 1.05198 17.5589 1.05263H3.87469ZM10.7168 8.1179L1.91048 2.4C1.8171 2.64176 1.76928 2.89872 1.76943 3.15789V12.6316C1.76943 13.1899 1.99123 13.7254 2.38605 14.1202C2.78086 14.515 3.31634 14.7368 3.87469 14.7368H17.5589C18.1173 14.7368 18.6527 14.515 19.0475 14.1202C19.4424 13.7254 19.6642 13.1899 19.6642 12.6316V3.15789C19.6642 2.89053 19.6147 2.63474 19.5231 2.4L10.7168 8.11684V8.1179Z"
                  fill="#A1A6B1"
                />
              </svg>

              <input
                className="bg-transparent placeholder:text-[#A1A6B1] text-black outline-none pt-[1.50vh] h-full placeholder:text-[5vw] lg:placeholder:text-[1.34vw] text-[1.34vw]"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center px-[1vw] space-x-[1vw] rounded-[10px] bg-[#F6F8FD] w-[90%] lg:w-[40vw] h-[30vh]">
              <textarea
                className="bg-transparent text-[#A1A6B1]  outline-none placeholder:text-[1.34vw] text-[5vw] lg:text-[1.34vw]"
                name=""
                id=""
                cols="30"
                rows="6"
                defaultValue="Message"
              ></textarea>
            </div>

            <button className="text-white font-semibold text-[4vw] lg:text-[1.40vw] justify-center flex items-center px-[1vw] space-x-[1vw] rounded-[10px] bg-[#1849C6] w-[80%] lg:w-[40vw] h-[10vh]">
              <span>Send Message</span>
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
                  d="M0 19.3101L16 10L0 0.68988V7.93108L11.4615 10L0 12.069V19.3101Z"
                  fill="white"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
