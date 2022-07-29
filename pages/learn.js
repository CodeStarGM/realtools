import React from "react";
import Navbar from "../components/Navbar";
import HeadingNav from "../components/HeadingNav";
import Footer from "../components/Footer";
import LearnCard from "../components/LearnCard";
import learn1 from "../public/static/learn1.png";
import learn2 from "../public/static/learn2.png";
import learn3 from "../public/static/learn3.png";
import learn4 from "../public/static/learn4.png";
function learn() {
  return (
    <>
      <Navbar />

      <HeadingNav
        title="Learn About Self Storgae"
        desc="Learn everything about a self storage"
      />

      <div className="flex items-end justify-around w-[100vw] h-[10vh] lg:h-[30vh] ">
        <h1 className=" text-[#1849C6] font-medium text-[2.10vw] lg:text-[1.50vw]">
          All Categories
        </h1>
        <h1 className="text-[#4d4d4f] font-medium text-[2vw] lg:text-[1.50vw]">
          Buying a Self Storage
        </h1>
        <h1 className="text-[#4d4d4f] font-medium text-[2vw] lg:text-[1.50vw]">
          Selling a Self Storage
        </h1>
        <h1 className="text-[#4d4d4f] font-medium text-[2vw] lg:text-[1.50vw]">
          Operating a Self Storage
        </h1>
      </div>
      <div className="mt-[1vh] flex justify-center items-center w-[100vw] h-auto">
        <div className="relative bg-[#979797] w-[91vw] h-[4px]">
          <div className="-bottom-1 absolute rounded-[10px] bg-[#1849C6] w-[15vw] h-[1.40vh]"></div>
        </div>
      </div>

      <div className="px-[4vw] flex justify-end items-center w-[100vw] h-[14vh] ">
        {/* third div */}

        <div className="flex items-center space-x-[1vw]">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3 9.82937C16.5124 9.82937 17.6102 9.89826 18.2855 10.0265C18.296 10.0265 18.9139 10.1536 19.1199 10.2356C19.4172 10.3639 19.6688 10.5955 19.8291 10.8853C19.9438 11.1169 20 11.3616 20 11.617C19.9895 11.883 19.8174 12.3831 19.7367 12.5802C19.2346 13.8796 17.5868 16.3633 16.5815 17.3158C16.4211 17.4774 16.2269 17.652 16.1812 17.6983C15.9284 17.8955 15.6206 18 15.2894 18C14.991 18 14.6937 17.9074 14.4538 17.7209C14.3292 17.6318 14.1473 17.4545 14.0641 17.3714L14.0196 17.3265C12.978 16.3526 11.4121 13.926 10.9089 12.6954C10.8982 12.6954 10.6475 12.0816 10.5968 11.7113L10.5882 11.617V11.5706C10.5882 11.0361 10.8855 10.5373 11.3665 10.2819C11.6298 10.1429 12.3952 10.0147 12.4069 10.0028C13.0927 9.89826 14.1449 9.82937 15.3 9.82937ZM4.70553 9.89052C5.18478 9.89052 5.57926 10.2561 5.63317 10.7277L5.63945 10.8383L5.89575 15.4171C5.89575 16.0846 5.36325 16.625 4.70553 16.625C4.08892 16.625 3.58133 16.15 3.52029 15.5406L3.51414 15.4171L3.77161 10.8383C3.77161 10.3145 4.18942 9.89052 4.70553 9.89052ZM4.71173 -3.8147e-06C5.00783 -3.8147e-06 5.30509 0.0926397 5.54618 0.277927C5.65004 0.352903 5.79368 0.488657 5.88681 0.57993L5.98037 0.673443C7.02079 1.64858 8.58785 4.07394 9.09109 5.30443C9.10075 5.30443 9.35232 5.91922 9.4032 6.28974L9.41177 6.38409V6.43041C9.41177 6.9637 9.11333 7.46255 8.6335 7.71791C8.37017 7.85807 7.60478 7.98516 7.59308 7.99703C6.90727 8.10155 5.85514 8.17044 4.70003 8.17044C3.48757 8.17044 2.38981 8.10155 1.71453 7.97328C1.70282 7.97328 1.08606 7.84619 0.880085 7.76424C0.582823 7.63715 0.331202 7.40435 0.170868 7.11454C0.0561757 6.88294 0 6.63826 0 6.38409C0.0105329 6.11684 0.182571 5.61799 0.262153 5.42083C0.765393 4.12026 2.41204 1.6367 3.41852 0.685321C3.57886 0.522601 3.77313 0.348003 3.81877 0.301682C4.07039 0.104517 4.37936 -3.8147e-06 4.71173 -3.8147e-06ZM15.2947 1.375C15.9113 1.375 16.4179 1.84999 16.4788 2.45938L16.4849 2.58295L16.2286 7.16178C16.2286 7.68558 15.8108 8.10961 15.2947 8.10961C14.8155 8.10961 14.421 7.74399 14.3671 7.27238L14.3608 7.16178L14.1033 2.58295C14.1033 1.91543 14.637 1.375 15.2947 1.375Z"
              fill="#000103"
              fillOpacity="0.7"
            />
          </svg>
          <p>Sort by:</p>

          <div className="flex justify-center items-center border-[1px] border-[#D9D9D9] w-[30vw] lg:w-[12vw] rounded-[10px] h-[8vh]">
            <select className="w-[90%] bg-white outline-none " name="" id="">
              <option value="">Newest</option>
            </select>
          </div>
        </div>
        {/* third div */}
      </div>

      {/* cards */}
      <div className="flex items-center justify-center w-[100vw] h-auto ">
        <div className="py-[4vh] w-[90%] h-full  grid grid-cols-1 lg:grid-cols-4 gap-[2vh] content-center place-items-center">
          <LearnCard
            customStyles="border-[2px] border-[#EEEEEE]"
            learnImage={learn1}
          />
          <LearnCard
            customStyles="border-[2px] border-[#EEEEEE]"
            learnImage={learn2}
          />
          <LearnCard
            customStyles="border-[2px] border-[#EEEEEE]"
            learnImage={learn3}
          />
          <LearnCard
            customStyles="border-[2px] border-[#EEEEEE]"
            learnImage={learn4}
          />
          <LearnCard
            customStyles="border-[2px] border-[#EEEEEE]"
            learnImage={learn1}
          />
          <LearnCard
            customStyles="border-[2px] border-[#EEEEEE]"
            learnImage={learn2}
          />
          <LearnCard
            customStyles="border-[2px] border-[#EEEEEE]"
            learnImage={learn3}
          />
          <LearnCard
            customStyles="border-[2px] border-[#EEEEEE]"
            learnImage={learn4}
          />
        </div>
      </div>

      <div className="px-[5vw] flex  justify-end items-center px-[2vw] w-[100vw] h-[10vh] ">
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

export default learn;
