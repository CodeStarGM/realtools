import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState();

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      <div className="bg-[#1849C6] hidden lg:flex  justify-around items-center w-[100vw] h-[10vh]  z-10">
        {/* left navbar content start */}
        <Link href="/">
          <div className="cursor-pointer flex items-center space-x-2">
            <svg
              className="w-[2vw] h-[4vh]"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1.71875C0 0.769511 0.769511 0 1.71875 0H28.2812C29.2305 0 30 0.769511 30 1.71875C30 2.66799 29.2305 3.4375 28.2812 3.4375H1.71875C0.769511 3.4375 0 2.66799 0 1.71875ZM5.04545 4.8125C3.3886 4.8125 2.04545 6.15565 2.04545 7.8125V24.5C2.04545 26.1569 3.3886 27.5 5.04545 27.5H24.9545C26.6114 27.5 27.9545 26.1569 27.9545 24.5V7.8125C27.9545 6.15565 26.6114 4.8125 24.9545 4.8125H5.04545ZM19.7727 9.96875C19.7727 10.5383 19.311 11 18.7415 11H10.5767C10.0072 11 9.54545 10.5383 9.54545 9.96875C9.54545 9.39921 10.0072 8.9375 10.5767 8.9375H18.7415C19.311 8.9375 19.7727 9.39921 19.7727 9.96875Z"
                fill="#FFCE31"
              />
            </svg>
            <h1 className="font-semibold text-white text-[1.40vw]">
              StorageConnect
            </h1>
          </div>
        </Link>
        {/* left navbar content end */}

        {/* right navbar content start */}

        <div className="flex cursor-pointer items-center text-white space-x-[4vw] text-[1.30vw]">
          <Link href="active-storage">
            <h1>Active Listings</h1>
          </Link>

          <Link href="/sell">
            <h1>Sell your Self Storage</h1>
          </Link>
          <Link href="/evaluation">
            <h1>Free Evaluation</h1>
          </Link>

          <Link href="/learn">
            <h1>Learn</h1>
          </Link>
          <Link href="/contact">
            <button className="py-[0.64vh] font-medium text-black px-[1.54vw] bg-[#FFCE31] rounded-[10px]">
              Contact
            </button>
          </Link>
        </div>
        {/* right navbar content end */}
      </div>

      {/* mobile menu start */}

      <div className="bg-[#1849C6] flex lg:hidden px-[4vw] justify-between items-center w-[100vw] h-[10vh]  z-10">
        <Link href="/">
          <div className="cursor-pointer flex items-center space-x-2">
            <svg
              className="w-[8vw] h-[8vh]"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1.71875C0 0.769511 0.769511 0 1.71875 0H28.2812C29.2305 0 30 0.769511 30 1.71875C30 2.66799 29.2305 3.4375 28.2812 3.4375H1.71875C0.769511 3.4375 0 2.66799 0 1.71875ZM5.04545 4.8125C3.3886 4.8125 2.04545 6.15565 2.04545 7.8125V24.5C2.04545 26.1569 3.3886 27.5 5.04545 27.5H24.9545C26.6114 27.5 27.9545 26.1569 27.9545 24.5V7.8125C27.9545 6.15565 26.6114 4.8125 24.9545 4.8125H5.04545ZM19.7727 9.96875C19.7727 10.5383 19.311 11 18.7415 11H10.5767C10.0072 11 9.54545 10.5383 9.54545 9.96875C9.54545 9.39921 10.0072 8.9375 10.5767 8.9375H18.7415C19.311 8.9375 19.7727 9.39921 19.7727 9.96875Z"
                fill="#FFCE31"
              />
            </svg>
            <h1 className="font-semibold text-white text-[5vw] lg:text-[1.40vw]">
              StorageConnect
            </h1>
          </div>
        </Link>
        <div onClick={handleMobileMenu} className="py-2 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white w-[8vw] h-[8vh]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {mobileMenu ? (
        <div className="absolute flex justify-start items-center flex-col z-40 w-[100vw] h-[90vh] bg-[#1849C6]">
          <Link href="/active-storage">
            <h1 className="mt-[2vh] w-[100%] text-center border-[1px] border-white text-white  py-[2vh] text-[5vw] ">
              Active Listings
            </h1>
          </Link>
          <Link href="/sell">
            <h1 className="mt-[2vh] w-[100%] text-center border-[1px] border-white text-white  py-[2vh] text-[5vw] ">
              Sell your Self Storage
            </h1>
          </Link>

          <Link href="/evaluation">
            <h1 className="mt-[2vh] w-[100%] text-center border-[1px] border-white text-white  py-[2vh] text-[5vw] ">
              Free Evaluation
            </h1>
          </Link>

          <Link href="/learn">
            <h1 className="mt-[2vh] w-[100%] text-center border-[1px] border-white text-white  py-[2vh] text-[5vw] ">
              Learn
            </h1>
          </Link>

          <Link href="/contact">
            <button className="mt-[2vh] w-[90vw] py-[2vh] font-medium text-black px-[1.54vw] bg-[#FFCE31] rounded-[10px]">
              Contact
            </button>
          </Link>
        </div>
      ) : null}
      {/* mobile menu end */}
    </>
  );
}

export default Navbar;
