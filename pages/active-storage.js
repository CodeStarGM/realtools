import React, { useState } from "react";
import FilterNav from "../components/FilterNav";
import Footer from "../components/Footer";
import HeadingNav from "../components/HeadingNav";
import ListCard from "../components/ListCard";
import GridCard from "../components/GridCard";
import Navbar from "../components/Navbar";
import SortBy from "../components/SortBy";
import storage1 from "../public/static/storage1.png";
import storage2 from "../public/static/storage2.png";
import storage3 from "../public/static/storage3.png";
import storage4 from "../public/static/storage4.png";
import storage6 from "../public/static/storage6.png";
import storage5 from "../public/static/storage5.png";
import storage7 from "../public/static/storage7.png";
import storage8 from "../public/static/storage8.png";
import NotifyModal from "../components/NotifyModal";

function ActiveStorage() {
  const [toggleState, setToggleState] = useState(1);
  const [notify, setNotify] = useState();

  const handleNotifyModal = () => {
    setNotify(!notify);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const toggleTab1 = () => {
    toggleTab(1);
  };
  const toggleTab2 = () => {
    toggleTab(2);
  };

  return (
    <>
      {notify ? <NotifyModal closeModal={handleNotifyModal} /> : null}
      <Navbar />
      <HeadingNav title="All Active Self Storage Listings" desc="" />
      <div className="relative w-[100vw] lg:h-[1px] h-[40vh] ">
        <FilterNav customs="absolute left-[5vw] lg:-bottom-[5vw] -bottom-[20vw]" />
      </div>

      <SortBy
        getNotifyClick={handleNotifyModal}
        listViewClick={toggleTab1}
        gridViewClick={toggleTab2}
        toggleTab={toggleState}
      />

      {toggleState === 1 ? (
        <div className="flex justify-center items-center w-[100vw] h-auto">
          <div className="flex justify-center items-center rounded-[10px] w-[70%] h-full border-[1px] border-[#D9D9D9]">
            <div className="py-[4vh] w-[100%] h-full content-center place-items-center grid gap-[4vh] grid-cols-1">
              <ListCard cardImage={storage1} />
              <ListCard cardImage={storage2} />
              <ListCard cardImage={storage3} />
              <ListCard cardImage={storage4} />
              <ListCard cardImage={storage6} />
            </div>
          </div>
        </div>
      ) : null}

      {toggleState === 2 ? (
        <div className="flex justify-center items-center w-[100vw] h-auto">
          <div className="flex justify-center items-center rounded-[10px] w-[90%] h-full border-[1px] border-[#D9D9D9]">
            <div className="py-[4vh] w-[100%] h-full content-center place-items-center grid gap-[4vh] grid-cols-1 lg:grid-cols-3">
              <GridCard cardImage={storage1} bgColor="bg-[#F6F8FD]" />
              <GridCard cardImage={storage2} bgColor="bg-[#F6F8FD]" />
              <GridCard cardImage={storage3} bgColor="bg-[#F6F8FD]" />
              <GridCard cardImage={storage4} bgColor="bg-[#F6F8FD]" />
              <GridCard cardImage={storage5} bgColor="bg-[#F6F8FD]" />
              <GridCard cardImage={storage6} bgColor="bg-[#F6F8FD]" />
              <GridCard cardImage={storage7} bgColor="bg-[#F6F8FD]" />
              <GridCard cardImage={storage8} bgColor="bg-[#F6F8FD]" />
              <GridCard cardImage={storage1} bgColor="bg-[#F6F8FD]" />
              <GridCard cardImage={storage2} bgColor="bg-[#F6F8FD]" />
              <GridCard cardImage={storage3} bgColor="bg-[#F6F8FD]" />
              <GridCard cardImage={storage4} bgColor="bg-[#F6F8FD]" />
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex  justify-between items-center px-[2vw] w-[100vw] h-[10vh] ">
        <h1 className="text-[4vw] lg:text-[1.50vw] text-[#4d4d4f]">
          34 Listings Found
        </h1>
        <div className="flex space-x-[0.40vw] items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2">
              <path
                d="M20 0L20.5595 0.00768842C31.3412 0.304326 40 9.14712 40 20C40 31.02 31.04 40 20 40C8.98 40 0 31.02 0 20C0 8.96 8.98 0 20 0ZM23.96 12C23.36 11.4 22.42 11.4 21.84 12L14.86 18.94C14.58 19.22 14.42 19.6 14.42 20C14.42 20.4 14.58 20.78 14.86 21.06L21.84 28C22.12 28.3 22.5 28.44 22.88 28.44C23.28 28.44 23.66 28.3 23.96 28C24.54 27.4 24.54 26.46 23.94 25.88L18.04 20L23.94 14.12C24.54 13.54 24.54 12.58 23.96 12Z"
                fill="#1849C6"
              />
            </g>
          </svg>

          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2">
              <circle cx="20" cy="20" r="19.5" fill="white" stroke="#1849C6" />
              <path
                d="M19.036 28H21.566V11.962H16.99V14.25H19.036V28Z"
                fill="#1849C6"
              />
            </g>
          </svg>

          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="19.5" fill="white" stroke="#1849C6" />
            <path
              d="M15.122 27.78H25.814V25.69H18.84C21.414 23.336 25.374 20.366 25.374 16.472C25.374 13.59 23.526 11.632 20.27 11.632C17.432 11.632 15.188 13.326 15.1 16.802H17.52C17.586 14.998 18.532 13.766 20.292 13.766C22.162 13.766 22.888 14.91 22.888 16.582C22.888 19.728 18.906 22.632 15.122 25.954V27.78Z"
              fill="#1849C6"
            />
          </svg>

          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="19.5" fill="white" stroke="#1849C6" />
            <path
              d="M14.276 15.922H16.718C16.872 14.8 17.686 13.744 19.446 13.744C21.162 13.744 22.064 14.668 22.064 16.054C22.064 17.77 20.678 18.43 18.412 18.452H17.818V20.52H18.39C21.008 20.52 22.372 21.246 22.372 23.358C22.372 24.854 21.448 25.998 19.578 25.998C17.686 25.998 16.586 24.854 16.476 23.358H14.056C14.21 26.504 16.564 28.088 19.6 28.088C22.944 28.088 24.748 26.152 24.748 23.6C24.748 21.378 23.67 19.992 21.998 19.486V19.398C23.252 18.98 24.462 17.682 24.462 15.768C24.462 13.436 22.724 11.588 19.534 11.588C16.608 11.588 14.452 13.15 14.276 15.922Z"
              fill="#1849C6"
            />
          </svg>

          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="19.5" fill="white" stroke="#1849C6" />
            <path
              d="M21.976 28H24.44V24.656H26.486V22.478H24.44V12.16H21.404L14.012 22.764V24.656H21.976V28ZM16.894 22.478L22.086 14.712V22.478H16.894Z"
              fill="#1849C6"
            />
          </svg>

          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0L19.4405 0.00768842C8.65884 0.304326 0 9.14712 0 20C0 31.02 8.96 40 20 40C31.02 40 40 31.02 40 20C40 8.96 31.02 0 20 0ZM16.04 12C16.64 11.4 17.58 11.4 18.16 12L25.14 18.94C25.42 19.22 25.58 19.6 25.58 20C25.58 20.4 25.42 20.78 25.14 21.06L18.16 28C17.88 28.3 17.5 28.44 17.12 28.44C16.72 28.44 16.34 28.3 16.04 28C15.46 27.4 15.46 26.46 16.06 25.88L21.96 20L16.06 14.12C15.46 13.54 15.46 12.58 16.04 12Z"
              fill="#1849C6"
            />
          </svg>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ActiveStorage;
