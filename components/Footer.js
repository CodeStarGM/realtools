import Link from "next/link";
import React from "react";
import Image from "next/image";
import footSticker from "../public/static/footStickers.png";
function Footer() {
  return (
    <div className="relative flex lg:flex-row flex-col justify-around  items-center lg:items-end w-[100vw] h-[130vh] lg:h-[60vh] bg-white">
      <div className="absolute z-20 ">
        <Image src={footSticker}></Image>
      </div>
      {/* first div start */}
      <div className=" px-[1vw] w-[70%] lg:w-[30%] flex flex-col items-center justify-evenly h-[80%] ">
        <div className="">
          <div className="flex space-x-2  items-center">
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1.71875C0 0.769511 0.769511 0 1.71875 0H28.2812C29.2305 0 30 0.769511 30 1.71875V1.71875C30 2.66799 29.2305 3.4375 28.2813 3.4375H1.71875C0.769511 3.4375 0 2.66799 0 1.71875V1.71875ZM5.04545 4.8125C3.3886 4.8125 2.04545 6.15565 2.04545 7.8125V24.5C2.04545 26.1569 3.3886 27.5 5.04545 27.5H24.9545C26.6114 27.5 27.9545 26.1569 27.9545 24.5V7.8125C27.9545 6.15565 26.6114 4.8125 24.9545 4.8125H5.04545ZM19.7727 9.96875C19.7727 10.5383 19.311 11 18.7415 11H10.5767C10.0072 11 9.54545 10.5383 9.54545 9.96875V9.96875C9.54545 9.39921 10.0072 8.9375 10.5767 8.9375H18.7415C19.311 8.9375 19.7727 9.39921 19.7727 9.96875V9.96875Z"
                fill="#1849C6"
              />
            </svg>

            <h1 className="text-[5vw] lg:text-[1.60vw] font-bold interFONT">
              Storage Connect
            </h1>
          </div>
          <p className="pt-[1vw] text-[#4A4A4A] robotoFONT text-[2.50vw] lg:text-[1.20vw]">
            Nam posuere accumsan porta. Integer
            <br /> id orci sed ante tincidunt tincidunt sit
            <br /> amet sed libero.
          </p>
        </div>
        <p className="text-left text-[#4A4A4A] text-[2.50vw] lg:text-[1.10vw]">
          ?? StorageConnect 2022, All Rights Reserved
        </p>
      </div>
      {/* first div end */}

      {/* 2nd div start */}
      <div className=" text-[#4A4A4A] flex  flex-col justify-center items-center lg:items-start robotoFONT w-[70%] lg:w-[20%] h-[100%] lg:h-[80%] ">
        <h1 className="text-black font-bold text-[5vw] lg:text-[1.40vw]">
          QUICK LINKS
        </h1>
        <Link href="/active-storage">
          <h2 className="cursor-pointer py-[3vh] text-[4vw] lg:text-[1.20vw]">
            Active Listings
          </h2>
        </Link>

        <Link href="/sell">
          <h2 className="cursor-pointer  text-[4vw] lg:text-[1.20vw]">
            Self your Self Storage
          </h2>
        </Link>

        <Link href="/evaluation">
          <h2 className="cursor-pointer py-[3vh] text-[4vw] lg:text-[1.20vw]">
            Free Evaluation
          </h2>
        </Link>
        <h2 className="cursor-pointer text-[4vw] lg:text-[1.20vw]">Learn</h2>
      </div>
      {/* 2nd div end */}

      {/* third div start */}
      <div className="robotoFONT flex flex-col items-center lg:items-start w-[25%] h-[70%] ">
        <h1 className="font-bold text-[5vw] lg:text-[1.40vw] pt-[2vh] pb-[2vh] ">
          NEWSLETTER
        </h1>
        <div>
          <h2 className="text-[3vw] lg:text-[1.20vw] pb-[2vh] text-[#4A4A4A]">
            Get latest updates right in your inbox
          </h2>
          <div className=" mb-[2vh] flex justify-center items-center rounded-[10px] w-[50vw] lg:w-[18vw] h-[7vh] border-[1px] border-[#E8EFFF]">
            <input
              className=" bg-transparent w-[70%] outline-none"
              type="text"
              placeholder="Enter your emaill"
            />
          </div>
          <button className="rounded-[10px] text-white font-semibold py-[1vh] lg:py-[2vh] px-[15vw] lg:px-[2vw] bg-[#1849C6]">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* third div end */}

      {/* fourth div start */}
      <div className="w-[70%] lg:pt-0 pt-[5vw] flex flex-col items-center lg:items-start lg:w-[20%] h-[100%] lg:h-[70%] ">
        <h1 className=" font-bold text-[5vw] lg:text-[1.40vw] pt-[2vh] pb-[2vh] ">
          LET???S GET SOCIAL
        </h1>
        <div className="flex  items-center  justify-center lg:justify-start space-x-[1vw] w-[100%] ">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18.75" cy="18.75" r="18.75" fill="#1849C6" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.6667 14.3333V11.8529C20.6667 10.7331 20.924 10.1667 22.7318 10.1667H25V6H21.2151C16.5771 6 15.0469 8.04427 15.0469 11.5534V14.3333H12V18.5H15.0469V31H20.6667V18.5H24.4854L25 14.3333H20.6667Z"
              fill="white"
            />
          </svg>

          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19.25" cy="18.75" r="18.75" fill="#1849C6" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.0605 10H12.0379C11.2174 10 10.5 10.5908 10.5 11.4019V26.4574C10.5 27.2732 11.2174 28 12.0379 28H27.0558C27.8811 28 28.5 27.2686 28.5 26.4574V11.4019C28.5047 10.5908 27.8811 10 27.0605 10ZM16.0796 25.0039H13.5008V16.9862H16.0796V25.0039ZM14.8793 15.7671H14.8605C14.0353 15.7671 13.5008 15.1529 13.5008 14.384C13.5008 13.6009 14.0494 13.0008 14.8933 13.0008C15.7373 13.0008 16.2531 13.5962 16.2718 14.384C16.2718 15.1529 15.7373 15.7671 14.8793 15.7671ZM25.5039 25.0039H22.9251V20.62C22.9251 19.5697 22.55 18.8523 21.6169 18.8523C20.9043 18.8523 20.4823 19.3352 20.2947 19.8041C20.2244 19.9729 20.2056 20.2027 20.2056 20.4371V25.0039H17.6268V16.9862H20.2056V18.1021C20.5807 17.5676 21.1668 16.7986 22.5312 16.7986C24.2239 16.7986 25.5039 17.9146 25.5039 20.3199V25.0039Z"
              fill="white"
            />
          </svg>

          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18.75" cy="18.75" r="18.75" fill="#1849C6" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29 12.8958C28.2626 13.2167 27.4743 13.4333 26.6436 13.5333C27.4912 13.0333 28.1439 12.2417 28.449 11.3C27.6565 11.7625 26.7792 12.1 25.8426 12.2792C25.0924 11.4917 24.0244 11 22.8462 11C20.5787 11 18.7436 12.8083 18.7436 15.0375C18.7436 15.3542 18.7775 15.6625 18.8495 15.9583C15.4378 15.7917 12.4117 14.1833 10.3901 11.7375C10.0384 12.3333 9.83492 13.0292 9.83492 13.7667C9.83492 15.1667 10.5639 16.4042 11.6658 17.1292C10.9877 17.1125 10.352 16.9292 9.80102 16.625C9.80102 16.6417 9.80102 16.6583 9.80102 16.675C9.80102 18.6333 11.2166 20.2625 13.0941 20.6333C12.7508 20.725 12.3863 20.775 12.0134 20.775C11.7506 20.775 11.4921 20.75 11.242 20.7C11.7633 22.3042 13.2806 23.4708 15.0776 23.5042C13.6747 24.5875 11.9032 25.2333 9.97902 25.2333C9.64844 25.2333 9.3221 25.2125 9 25.175C10.8097 26.3333 12.9669 27 15.281 27C22.8377 27 26.9657 20.8458 26.9657 15.5083C26.9657 15.3333 26.9614 15.1583 26.953 14.9875C27.754 14.4167 28.449 13.7083 29 12.8958Z"
              fill="white"
            />
          </svg>

          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19.25" cy="18.75" r="18.75" fill="#1849C6" />
            <circle cx="19.25" cy="19" r="3.5" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.1274 15.3381C17.034 14.4315 18.2393 13.9268 19.5214 13.9268C20.8035 13.9268 22.0089 14.4341 22.9155 15.3407C23.4907 15.916 23.9017 16.6072 24.1254 17.3786H27.7286V12.5358C27.7286 11.3996 26.8504 10.5215 25.7143 10.5215H13.3714C12.2353 10.5215 11.2714 11.3996 11.2714 12.5358V17.3786H14.9174C15.1412 16.6072 15.5521 15.9133 16.1274 15.3381ZM26.3571 14.0869C26.3571 14.3898 26.1115 14.6354 25.8085 14.6354H24.1628C23.8599 14.6354 23.6143 14.3899 23.6143 14.0869V12.4411C23.6143 12.1382 23.8598 11.8926 24.1628 11.8926H25.8085C26.1115 11.8926 26.3571 12.1381 26.3571 12.4411V14.0869Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.9155 22.1262C22.0089 23.0328 20.8035 23.5268 19.5214 23.5268C18.2393 23.5268 17.034 23.0355 16.1274 22.1289C15.2224 21.224 14.7234 19.9929 14.7215 18.75H11.2714V24.8786C11.2714 26.0147 12.2353 26.9786 13.3714 26.9786H25.7143C26.8504 26.9786 27.7286 26.0147 27.7286 24.8786V18.75H24.3213C24.3195 19.9929 23.8205 21.2213 22.9155 22.1262Z"
              fill="white"
            />
          </svg>
        </div>

        {/* dropdown */}

        <div className="mt-[5vh] px-[0.50vw] rounded-[5px] flex items-center bg-white w-[50vw] lg:w-[15vw] h-[6vh] border-[1px] border-[#1849C6]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.75 0.5C4.36519 0.5 0 4.86523 0 10.25C0 15.6348 4.36519 20 9.75 20C15.1348 20 19.5 15.6348 19.5 10.25C19.5 4.86523 15.1348 0.5 9.75 0.5ZM8.7399 18.5465C6.89002 18.3249 5.17843 17.4968 3.84057 16.159C2.2621 14.5806 1.39285 12.4819 1.39285 10.2496C1.39285 8.24011 2.09767 6.33914 3.38977 4.82812C3.42306 5.22736 3.50523 5.65538 3.48418 5.96133C3.40731 7.07672 3.29724 7.77478 3.95012 8.7158C4.20446 9.08231 4.26695 9.60773 4.39074 10.032C4.51182 10.447 4.99552 10.6647 5.32913 10.9204C6.00221 11.4364 6.64613 12.0362 7.35985 12.4904C7.8309 12.7902 8.12513 12.9393 7.98718 13.5141C7.87623 13.9764 7.84524 14.2612 7.60609 14.673C7.5331 14.7987 7.88157 15.6067 7.99754 15.7226C8.34901 16.074 8.69776 16.3965 9.08087 16.7129C9.67482 17.2036 9.02317 17.8412 8.7399 18.5465ZM15.6594 16.1591C14.4578 17.3606 12.9547 18.1506 11.3208 18.4597C11.5524 17.8871 11.9647 17.3783 12.3472 17.0834C12.6798 16.8267 13.0965 16.333 13.2703 15.9419C13.4439 15.5513 13.6739 15.2128 13.9067 14.8536C14.2379 14.3427 13.0902 13.5722 12.7183 13.4108C11.8814 13.0474 11.2514 12.5572 10.5076 12.0338C9.97767 11.661 8.90179 12.2285 8.30353 11.9674C7.48411 11.6096 6.80901 10.9879 6.09675 10.4515C5.36175 9.89794 5.39728 9.25261 5.39728 8.436C5.973 8.45723 6.792 8.27667 7.17422 8.73966C7.29483 8.88577 7.70953 9.5385 7.98712 9.30656C8.2139 9.11705 7.81908 8.35739 7.74281 8.1788C7.5082 7.62966 8.27737 7.41548 8.67108 7.04311C9.18483 6.5573 10.2869 5.79539 10.1998 5.44716C10.1127 5.09892 9.09708 4.1123 8.50059 4.26623C8.4112 4.2893 7.62417 5.11453 7.47211 5.244C7.47614 4.97466 7.48017 4.70536 7.48429 4.43602C7.48687 4.26595 7.16705 4.09139 7.1819 3.9817C7.2194 3.70448 7.99106 3.20138 8.18301 2.98059C8.04853 2.89655 7.58962 2.50237 7.45073 2.56022C7.11445 2.70038 6.73467 2.79694 6.39839 2.93705C6.39839 2.82042 6.38423 2.71088 6.36736 2.60269C7.04123 2.30433 7.75425 2.09686 8.49126 1.98619L9.15145 2.2515L9.61758 2.80467L10.0828 3.28434L10.4894 3.41536L11.1353 2.80622L10.9687 2.37136V1.98047C12.2461 2.166 13.4524 2.64253 14.5088 3.37734C14.3198 3.39427 14.1121 3.42206 13.8778 3.45187C13.781 3.39469 13.6568 3.36872 13.5513 3.32892C13.8575 3.98714 14.1768 4.63627 14.5012 5.28577C14.8477 5.97956 15.6165 6.72375 15.7515 7.45612C15.9106 8.31938 15.8002 9.1035 15.8872 10.1191C15.9711 11.0972 16.9899 12.2085 16.9899 12.2085C16.9899 12.2085 17.4604 12.3687 17.8517 12.3129C17.487 13.7558 16.7392 15.0792 15.6594 16.1591Z"
              fill="#2F2F2F"
            />
          </svg>

          <select className="w-[80%] bg-transparent outline-none" name="" id="">
            <option value="">English - En</option>
            <option value="">Urdu - Ur</option>
            <option value="">Francais - Fr</option>
          </select>
        </div>
      </div>
      {/* fourth div end */}
    </div>
  );
}

export default Footer;
