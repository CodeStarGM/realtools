import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import storage3 from "../public/static/detailStorage.png";
import HomeImages from "../public/static/detailsOtherImages.png";
import GridCard from "../components/GridCard";
import store1 from "../public/static/storage1.png";
import store2 from "../public/static/storage2.png";
import store3 from "../public/static/storage3.png";
import Link from "next/link";

function details() {
  return (
    <>
      <Navbar />
      <div className="poppinFONT px-[5vw] flex flex-col justify-end items-start w-[100vw] h-[24vh] ">
        <h1 className="font-semibold text-[5vw] lg:text-[2.40vw]">
          The Name of This Self Storage
        </h1>
        <div className="poppinFONT flex w-full justify-between items-center ">
          <div className="poppinFONT flex items-center space-x-[1vw]">
            <svg
              width="20"
              height="27"
              viewBox="0 0 20 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99998 26.5372C8.19561 25.0073 6.52312 23.3301 4.99999 21.5231C2.71428 18.8095 1.25556e-06 14.7681 1.25556e-06 10.917C-0.000990025 8.95017 0.585012 7.02729 1.68384 5.39168C2.78268 3.75607 4.34495 2.48124 6.17294 1.72854C8.00093 0.975844 10.0125 0.779105 11.953 1.16322C13.8935 1.54734 15.6758 2.49505 17.0742 3.88642C18.0053 4.80781 18.7433 5.90361 19.2455 7.1104C19.7477 8.31719 20.0041 9.611 20 10.917C20 14.7681 17.2857 18.8095 15 21.5231C13.4768 23.3301 11.8043 25.0073 9.99998 26.5372ZM9.99998 6.65688C8.86334 6.65688 7.77325 7.10571 6.96953 7.90463C6.1658 8.70355 5.71427 9.78712 5.71427 10.917C5.71427 12.0468 6.1658 13.1304 6.96953 13.9293C7.77325 14.7282 8.86334 15.177 9.99998 15.177C11.1366 15.177 12.2267 14.7282 13.0304 13.9293C13.8342 13.1304 14.2857 12.0468 14.2857 10.917C14.2857 9.78712 13.8342 8.70355 13.0304 7.90463C12.2267 7.10571 11.1366 6.65688 9.99998 6.65688Z"
                fill="#000103"
                fill-opacity="0.7"
              />
            </svg>
            <p className="text-[#4d4d4f]">
              1901 Thornridge Cir. Shiloh, Hawaii 81063
            </p>
          </div>
          <Link href="/evaluation">
            <button className="rounded-[10px] px-[8vw] py-[1.30vh] text-white text-[3vw] lg:text-[1.30vw] font-semibold bg-[#1849C6]">
              Request price
            </button>
          </Link>
        </div>
      </div>

      {/* image section */}
      <div className="poppinFONT flex lg:flex-row flex-col  w-[100vw] h-[150vh] lg:h-[110vh] ">
        <div className="px-[5vw] py-[2vh] flex flex-col justify-center items-start w-[100%] lg:w-[70%]  h-full">
          <Image src={storage3} width={849} height={632}></Image>
          <div className="cursor-pointer py-[4vh]">
            <Image src={HomeImages}></Image>
          </div>
        </div>
        <div className="poppinFONT flex py-[4vh] justify-center lg:justify-start items-center w-[100%] lg:w-[30%]  h-[80vh]">
          <div className="px-[3vw] lg:px-[1vw] rounded-[10px] w-[90vw] lg:w-[25vw] h-full border-[1px] border-[#EEEEEE]">
            {/* home info  */}
            <div className="flex justify-between items-center h-[12vh] border-b-[1px] border-[#EEEEEE]">
              <h1 className="font-semibold text-[5vw] lg:text-[2vw] text-[#4d4d4f]">
                Total Units
              </h1>
              <h2 className="text-[5vw] lg:text-[2vw] text-[#4d4d4f]">89</h2>
            </div>

            <div className=" flex justify-between items-end h-[10vh] ">
              <div className="flex items-center space-x-[1vw]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.0625 0C2.98506 0 1.95175 0.428012 1.18988 1.18988C0.428012 1.95175 0 2.98506 0 4.0625V7.8125C5.23971e-09 8.06114 0.0987719 8.2996 0.274587 8.47541C0.450403 8.65123 0.68886 8.75 0.9375 8.75C1.18614 8.75 1.4246 8.65123 1.60041 8.47541C1.77623 8.2996 1.875 8.06114 1.875 7.8125V4.0625C1.875 2.855 2.855 1.875 4.0625 1.875H7.8125C8.06114 1.875 8.2996 1.77623 8.47541 1.60041C8.65123 1.4246 8.75 1.18614 8.75 0.9375C8.75 0.68886 8.65123 0.450403 8.47541 0.274587C8.2996 0.0987719 8.06114 5.23971e-09 7.8125 0H4.0625ZM12.1875 0C11.9389 5.23971e-09 11.7004 0.0987719 11.5246 0.274587C11.3488 0.450403 11.25 0.68886 11.25 0.9375C11.25 1.18614 11.3488 1.4246 11.5246 1.60041C11.7004 1.77623 11.9389 1.875 12.1875 1.875H15.9375C17.145 1.875 18.125 2.855 18.125 4.0625V7.8125C18.125 8.06114 18.2238 8.2996 18.3996 8.47541C18.5754 8.65123 18.8139 8.75 19.0625 8.75C19.3111 8.75 19.5496 8.65123 19.7254 8.47541C19.9012 8.2996 20 8.06114 20 7.8125V4.0625C20 2.98506 19.572 1.95175 18.8101 1.18988C18.0483 0.428012 17.0149 0 15.9375 0H12.1875ZM0.9375 11.25C1.18614 11.25 1.4246 11.3488 1.60041 11.5246C1.77623 11.7004 1.875 11.9389 1.875 12.1875V15.9375C1.875 17.145 2.855 18.125 4.0625 18.125H7.8125C8.06114 18.125 8.2996 18.2238 8.47541 18.3996C8.65123 18.5754 8.75 18.8139 8.75 19.0625C8.75 19.3111 8.65123 19.5496 8.47541 19.7254C8.2996 19.9012 8.06114 20 7.8125 20H4.0625C2.98506 20 1.95175 19.572 1.18988 18.8101C0.428012 18.0483 0 17.0149 0 15.9375V12.1875C0 11.9389 0.0987719 11.7004 0.274587 11.5246C0.450403 11.3488 0.68886 11.25 0.9375 11.25ZM20 12.1875C20 11.9389 19.9012 11.7004 19.7254 11.5246C19.5496 11.3488 19.3111 11.25 19.0625 11.25C18.8139 11.25 18.5754 11.3488 18.3996 11.5246C18.2238 11.7004 18.125 11.9389 18.125 12.1875V15.9375C18.125 16.5177 17.8945 17.0741 17.4843 17.4843C17.0741 17.8945 16.5177 18.125 15.9375 18.125H12.1875C11.9389 18.125 11.7004 18.2238 11.5246 18.3996C11.3488 18.5754 11.25 18.8139 11.25 19.0625C11.25 19.3111 11.3488 19.5496 11.5246 19.7254C11.7004 19.9012 11.9389 20 12.1875 20H15.9375C17.0149 20 18.0483 19.572 18.8101 18.8101C19.572 18.0483 20 17.0149 20 15.9375V12.1875Z"
                    fill="#000103"
                    fill-opacity="0.7"
                  />
                </svg>

                <span className="font-medium text-[4vw] lg:text-[1.30vw] text-[#4d4d4f]">
                  Size: 7 X 6Ft
                </span>
              </div>

              <h2 className="text-[4vw] lg:text-[1.30vw] text-[#4d4d4f]">
                25 Units
              </h2>
            </div>

            <div className="flex justify-between items-center h-[10vh] border-b-[1px] border-[#EEEEEE]">
              <div className="flex items-center space-x-[1vw]">
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.46445 4.91089C4.46445 4.08206 4.7937 3.28717 5.37977 2.7011C5.96584 2.11503 6.76073 1.78578 7.58956 1.78578C8.41839 1.78578 9.21327 2.11503 9.79934 2.7011C10.3854 3.28717 10.7147 4.08206 10.7147 4.91089C10.7147 5.73972 10.3854 6.5346 9.79934 7.12068C9.21327 7.70675 8.41839 8.036 7.58956 8.036C6.76073 8.036 5.96584 7.70675 5.37977 7.12068C4.7937 6.5346 4.46445 5.73972 4.46445 4.91089V4.91089ZM7.58956 0C6.28711 0 5.038 0.517396 4.11703 1.43837C3.19606 2.35934 2.67867 3.60844 2.67867 4.91089C2.67867 6.21334 3.19606 7.46244 4.11703 8.38341C5.038 9.30438 6.28711 9.82178 7.58956 9.82178C8.89201 9.82178 10.1411 9.30438 11.0621 8.38341C11.9831 7.46244 12.5004 6.21334 12.5004 4.91089C12.5004 3.60844 11.9831 2.35934 11.0621 1.43837C10.1411 0.517396 8.89201 0 7.58956 0ZM16.9649 6.25022C16.9649 5.77661 17.153 5.32239 17.4879 4.98749C17.8228 4.65259 18.2771 4.46445 18.7507 4.46445C19.2243 4.46445 19.6785 4.65259 20.0134 4.98749C20.3483 5.32239 20.5364 5.77661 20.5364 6.25022C20.5364 6.72384 20.3483 7.17806 20.0134 7.51296C19.6785 7.84786 19.2243 8.036 18.7507 8.036C18.2771 8.036 17.8228 7.84786 17.4879 7.51296C17.153 7.17806 16.9649 6.72384 16.9649 6.25022ZM18.7507 2.67867C17.8034 2.67867 16.895 3.05495 16.2252 3.72475C15.5554 4.39455 15.1791 5.30299 15.1791 6.25022C15.1791 7.19746 15.5554 8.1059 16.2252 8.77569C16.895 9.44549 17.8034 9.82178 18.7507 9.82178C19.6979 9.82178 20.6063 9.44549 21.2761 8.77569C21.9459 8.1059 22.3222 7.19746 22.3222 6.25022C22.3222 5.30299 21.9459 4.39455 21.2761 3.72475C20.6063 3.05495 19.6979 2.67867 18.7507 2.67867V2.67867ZM0 14.2862C0 13.5758 0.282216 12.8945 0.784564 12.3921C1.28691 11.8898 1.96824 11.6076 2.67867 11.6076H12.5004C13.2109 11.6076 13.8922 11.8898 14.3946 12.3921C14.8969 12.8945 15.1791 13.5758 15.1791 14.2862V14.488C15.1774 14.5713 15.1714 14.6544 15.1613 14.7371C15.1434 14.8916 15.1104 15.1014 15.0452 15.3497C14.8736 16.0045 14.5701 16.6173 14.1532 17.1506C13.1085 18.4917 11.1433 19.6436 7.58956 19.6436C4.03586 19.6436 2.0715 18.4917 1.02593 17.1506C0.608691 16.6174 0.304842 16.0045 0.13304 15.3497C0.0648397 15.087 0.0211982 14.8186 0.00267869 14.5478C0.00181547 14.5279 0.00122007 14.508 0.000892824 14.488V14.4675L0 14.4603V14.2862ZM1.78578 14.4452V14.4559C1.79815 14.606 1.82355 14.7548 1.86167 14.9005C1.94203 15.2113 2.10543 15.6309 2.43402 16.0533C3.0635 16.8604 4.44659 17.8578 7.58956 17.8578C10.7325 17.8578 12.1165 16.8604 12.7451 16.0541C13.0121 15.7125 13.2065 15.3199 13.3165 14.9005C13.3549 14.7548 13.3806 14.606 13.3933 14.4559L13.3942 14.4452V14.2862C13.3942 14.0494 13.3002 13.8223 13.1327 13.6549C12.9653 13.4874 12.7381 13.3933 12.5013 13.3933H2.67867C2.44186 13.3933 2.21475 13.4874 2.0473 13.6549C1.87985 13.8223 1.78578 14.0494 1.78578 14.2862V14.4452ZM15.605 17.4042C16.4354 17.6863 17.4685 17.8578 18.7507 17.8578C21.6088 17.8578 23.233 17.0069 24.1196 15.9604C24.5509 15.4514 24.7714 14.9354 24.883 14.5389C24.9432 14.3264 24.9818 14.1083 24.9982 13.888L24.9991 13.8559L25 13.8362V13.8023C25.0001 13.514 24.9434 13.2286 24.8332 12.9623C24.7229 12.6959 24.5613 12.4539 24.3574 12.2501C24.1536 12.0463 23.9116 11.8846 23.6453 11.7744C23.379 11.6641 23.0935 11.6074 22.8053 11.6076H15.4934C15.9399 12.1067 16.264 12.7174 16.4175 13.3933H22.8053C23.0285 13.3933 23.2089 13.571 23.2142 13.7916C23.2054 13.8804 23.1887 13.9682 23.1642 14.0541C23.1089 14.2505 22.9946 14.5255 22.7562 14.8068C22.3044 15.3416 21.2499 16.072 18.7507 16.072C17.7105 16.072 16.9211 15.9452 16.3211 15.7595C16.1623 16.3391 15.9211 16.893 15.605 17.4042V17.4042Z"
                    fill="#000103"
                    fill-opacity="0.7"
                  />
                </svg>

                <span className="font-medium text-[4vw] lg:text-[1.30vw] text-[#4d4d4f]">
                  Occupancy
                </span>
              </div>

              <h2 className="text-[4vw] lg:text-[1.30vw] text-[#4d4d4f]">
                50%
              </h2>
            </div>
            {/* anot */}
            {/* home info */}

            {/* home info  */}

            <div className="flex justify-between items-end h-[10vh] ">
              <div className="flex items-center space-x-[1vw]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.0625 0C2.98506 0 1.95175 0.428012 1.18988 1.18988C0.428012 1.95175 0 2.98506 0 4.0625V7.8125C5.23971e-09 8.06114 0.0987719 8.2996 0.274587 8.47541C0.450403 8.65123 0.68886 8.75 0.9375 8.75C1.18614 8.75 1.4246 8.65123 1.60041 8.47541C1.77623 8.2996 1.875 8.06114 1.875 7.8125V4.0625C1.875 2.855 2.855 1.875 4.0625 1.875H7.8125C8.06114 1.875 8.2996 1.77623 8.47541 1.60041C8.65123 1.4246 8.75 1.18614 8.75 0.9375C8.75 0.68886 8.65123 0.450403 8.47541 0.274587C8.2996 0.0987719 8.06114 5.23971e-09 7.8125 0H4.0625ZM12.1875 0C11.9389 5.23971e-09 11.7004 0.0987719 11.5246 0.274587C11.3488 0.450403 11.25 0.68886 11.25 0.9375C11.25 1.18614 11.3488 1.4246 11.5246 1.60041C11.7004 1.77623 11.9389 1.875 12.1875 1.875H15.9375C17.145 1.875 18.125 2.855 18.125 4.0625V7.8125C18.125 8.06114 18.2238 8.2996 18.3996 8.47541C18.5754 8.65123 18.8139 8.75 19.0625 8.75C19.3111 8.75 19.5496 8.65123 19.7254 8.47541C19.9012 8.2996 20 8.06114 20 7.8125V4.0625C20 2.98506 19.572 1.95175 18.8101 1.18988C18.0483 0.428012 17.0149 0 15.9375 0H12.1875ZM0.9375 11.25C1.18614 11.25 1.4246 11.3488 1.60041 11.5246C1.77623 11.7004 1.875 11.9389 1.875 12.1875V15.9375C1.875 17.145 2.855 18.125 4.0625 18.125H7.8125C8.06114 18.125 8.2996 18.2238 8.47541 18.3996C8.65123 18.5754 8.75 18.8139 8.75 19.0625C8.75 19.3111 8.65123 19.5496 8.47541 19.7254C8.2996 19.9012 8.06114 20 7.8125 20H4.0625C2.98506 20 1.95175 19.572 1.18988 18.8101C0.428012 18.0483 0 17.0149 0 15.9375V12.1875C0 11.9389 0.0987719 11.7004 0.274587 11.5246C0.450403 11.3488 0.68886 11.25 0.9375 11.25ZM20 12.1875C20 11.9389 19.9012 11.7004 19.7254 11.5246C19.5496 11.3488 19.3111 11.25 19.0625 11.25C18.8139 11.25 18.5754 11.3488 18.3996 11.5246C18.2238 11.7004 18.125 11.9389 18.125 12.1875V15.9375C18.125 16.5177 17.8945 17.0741 17.4843 17.4843C17.0741 17.8945 16.5177 18.125 15.9375 18.125H12.1875C11.9389 18.125 11.7004 18.2238 11.5246 18.3996C11.3488 18.5754 11.25 18.8139 11.25 19.0625C11.25 19.3111 11.3488 19.5496 11.5246 19.7254C11.7004 19.9012 11.9389 20 12.1875 20H15.9375C17.0149 20 18.0483 19.572 18.8101 18.8101C19.572 18.0483 20 17.0149 20 15.9375V12.1875Z"
                    fill="#000103"
                    fill-opacity="0.7"
                  />
                </svg>

                <span className="font-medium text-[4vw] lg:text-[1.30vw] text-[#4d4d4f]">
                  Size: 5 X 7Ft
                </span>
              </div>

              <h2 className="text-[4vw] lg:text-[1.30vw] text-[#4d4d4f]">
                45 Units
              </h2>
            </div>

            <div className="flex justify-between items-center h-[10vh] border-b-[1px] border-[#EEEEEE]">
              <div className="flex items-center space-x-[1vw]">
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.46445 4.91089C4.46445 4.08206 4.7937 3.28717 5.37977 2.7011C5.96584 2.11503 6.76073 1.78578 7.58956 1.78578C8.41839 1.78578 9.21327 2.11503 9.79934 2.7011C10.3854 3.28717 10.7147 4.08206 10.7147 4.91089C10.7147 5.73972 10.3854 6.5346 9.79934 7.12068C9.21327 7.70675 8.41839 8.036 7.58956 8.036C6.76073 8.036 5.96584 7.70675 5.37977 7.12068C4.7937 6.5346 4.46445 5.73972 4.46445 4.91089V4.91089ZM7.58956 0C6.28711 0 5.038 0.517396 4.11703 1.43837C3.19606 2.35934 2.67867 3.60844 2.67867 4.91089C2.67867 6.21334 3.19606 7.46244 4.11703 8.38341C5.038 9.30438 6.28711 9.82178 7.58956 9.82178C8.89201 9.82178 10.1411 9.30438 11.0621 8.38341C11.9831 7.46244 12.5004 6.21334 12.5004 4.91089C12.5004 3.60844 11.9831 2.35934 11.0621 1.43837C10.1411 0.517396 8.89201 0 7.58956 0ZM16.9649 6.25022C16.9649 5.77661 17.153 5.32239 17.4879 4.98749C17.8228 4.65259 18.2771 4.46445 18.7507 4.46445C19.2243 4.46445 19.6785 4.65259 20.0134 4.98749C20.3483 5.32239 20.5364 5.77661 20.5364 6.25022C20.5364 6.72384 20.3483 7.17806 20.0134 7.51296C19.6785 7.84786 19.2243 8.036 18.7507 8.036C18.2771 8.036 17.8228 7.84786 17.4879 7.51296C17.153 7.17806 16.9649 6.72384 16.9649 6.25022ZM18.7507 2.67867C17.8034 2.67867 16.895 3.05495 16.2252 3.72475C15.5554 4.39455 15.1791 5.30299 15.1791 6.25022C15.1791 7.19746 15.5554 8.1059 16.2252 8.77569C16.895 9.44549 17.8034 9.82178 18.7507 9.82178C19.6979 9.82178 20.6063 9.44549 21.2761 8.77569C21.9459 8.1059 22.3222 7.19746 22.3222 6.25022C22.3222 5.30299 21.9459 4.39455 21.2761 3.72475C20.6063 3.05495 19.6979 2.67867 18.7507 2.67867V2.67867ZM0 14.2862C0 13.5758 0.282216 12.8945 0.784564 12.3921C1.28691 11.8898 1.96824 11.6076 2.67867 11.6076H12.5004C13.2109 11.6076 13.8922 11.8898 14.3946 12.3921C14.8969 12.8945 15.1791 13.5758 15.1791 14.2862V14.488C15.1774 14.5713 15.1714 14.6544 15.1613 14.7371C15.1434 14.8916 15.1104 15.1014 15.0452 15.3497C14.8736 16.0045 14.5701 16.6173 14.1532 17.1506C13.1085 18.4917 11.1433 19.6436 7.58956 19.6436C4.03586 19.6436 2.0715 18.4917 1.02593 17.1506C0.608691 16.6174 0.304842 16.0045 0.13304 15.3497C0.0648397 15.087 0.0211982 14.8186 0.00267869 14.5478C0.00181547 14.5279 0.00122007 14.508 0.000892824 14.488V14.4675L0 14.4603V14.2862ZM1.78578 14.4452V14.4559C1.79815 14.606 1.82355 14.7548 1.86167 14.9005C1.94203 15.2113 2.10543 15.6309 2.43402 16.0533C3.0635 16.8604 4.44659 17.8578 7.58956 17.8578C10.7325 17.8578 12.1165 16.8604 12.7451 16.0541C13.0121 15.7125 13.2065 15.3199 13.3165 14.9005C13.3549 14.7548 13.3806 14.606 13.3933 14.4559L13.3942 14.4452V14.2862C13.3942 14.0494 13.3002 13.8223 13.1327 13.6549C12.9653 13.4874 12.7381 13.3933 12.5013 13.3933H2.67867C2.44186 13.3933 2.21475 13.4874 2.0473 13.6549C1.87985 13.8223 1.78578 14.0494 1.78578 14.2862V14.4452ZM15.605 17.4042C16.4354 17.6863 17.4685 17.8578 18.7507 17.8578C21.6088 17.8578 23.233 17.0069 24.1196 15.9604C24.5509 15.4514 24.7714 14.9354 24.883 14.5389C24.9432 14.3264 24.9818 14.1083 24.9982 13.888L24.9991 13.8559L25 13.8362V13.8023C25.0001 13.514 24.9434 13.2286 24.8332 12.9623C24.7229 12.6959 24.5613 12.4539 24.3574 12.2501C24.1536 12.0463 23.9116 11.8846 23.6453 11.7744C23.379 11.6641 23.0935 11.6074 22.8053 11.6076H15.4934C15.9399 12.1067 16.264 12.7174 16.4175 13.3933H22.8053C23.0285 13.3933 23.2089 13.571 23.2142 13.7916C23.2054 13.8804 23.1887 13.9682 23.1642 14.0541C23.1089 14.2505 22.9946 14.5255 22.7562 14.8068C22.3044 15.3416 21.2499 16.072 18.7507 16.072C17.7105 16.072 16.9211 15.9452 16.3211 15.7595C16.1623 16.3391 15.9211 16.893 15.605 17.4042V17.4042Z"
                    fill="#000103"
                    fill-opacity="0.7"
                  />
                </svg>

                <span className="font-medium text-[4vw] lg:text-[1.30vw] text-[#4d4d4f]">
                  Occupancy
                </span>
              </div>

              <h2 className="text-[4vw] lg:text-[1.30vw] text-[#4d4d4f]">
                90%
              </h2>
            </div>
            {/* anot */}
            {/* home info */}

            {/* home info  */}

            <div className="flex justify-between items-end h-[10vh] ">
              <div className="flex items-center space-x-[1vw]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.0625 0C2.98506 0 1.95175 0.428012 1.18988 1.18988C0.428012 1.95175 0 2.98506 0 4.0625V7.8125C5.23971e-09 8.06114 0.0987719 8.2996 0.274587 8.47541C0.450403 8.65123 0.68886 8.75 0.9375 8.75C1.18614 8.75 1.4246 8.65123 1.60041 8.47541C1.77623 8.2996 1.875 8.06114 1.875 7.8125V4.0625C1.875 2.855 2.855 1.875 4.0625 1.875H7.8125C8.06114 1.875 8.2996 1.77623 8.47541 1.60041C8.65123 1.4246 8.75 1.18614 8.75 0.9375C8.75 0.68886 8.65123 0.450403 8.47541 0.274587C8.2996 0.0987719 8.06114 5.23971e-09 7.8125 0H4.0625ZM12.1875 0C11.9389 5.23971e-09 11.7004 0.0987719 11.5246 0.274587C11.3488 0.450403 11.25 0.68886 11.25 0.9375C11.25 1.18614 11.3488 1.4246 11.5246 1.60041C11.7004 1.77623 11.9389 1.875 12.1875 1.875H15.9375C17.145 1.875 18.125 2.855 18.125 4.0625V7.8125C18.125 8.06114 18.2238 8.2996 18.3996 8.47541C18.5754 8.65123 18.8139 8.75 19.0625 8.75C19.3111 8.75 19.5496 8.65123 19.7254 8.47541C19.9012 8.2996 20 8.06114 20 7.8125V4.0625C20 2.98506 19.572 1.95175 18.8101 1.18988C18.0483 0.428012 17.0149 0 15.9375 0H12.1875ZM0.9375 11.25C1.18614 11.25 1.4246 11.3488 1.60041 11.5246C1.77623 11.7004 1.875 11.9389 1.875 12.1875V15.9375C1.875 17.145 2.855 18.125 4.0625 18.125H7.8125C8.06114 18.125 8.2996 18.2238 8.47541 18.3996C8.65123 18.5754 8.75 18.8139 8.75 19.0625C8.75 19.3111 8.65123 19.5496 8.47541 19.7254C8.2996 19.9012 8.06114 20 7.8125 20H4.0625C2.98506 20 1.95175 19.572 1.18988 18.8101C0.428012 18.0483 0 17.0149 0 15.9375V12.1875C0 11.9389 0.0987719 11.7004 0.274587 11.5246C0.450403 11.3488 0.68886 11.25 0.9375 11.25ZM20 12.1875C20 11.9389 19.9012 11.7004 19.7254 11.5246C19.5496 11.3488 19.3111 11.25 19.0625 11.25C18.8139 11.25 18.5754 11.3488 18.3996 11.5246C18.2238 11.7004 18.125 11.9389 18.125 12.1875V15.9375C18.125 16.5177 17.8945 17.0741 17.4843 17.4843C17.0741 17.8945 16.5177 18.125 15.9375 18.125H12.1875C11.9389 18.125 11.7004 18.2238 11.5246 18.3996C11.3488 18.5754 11.25 18.8139 11.25 19.0625C11.25 19.3111 11.3488 19.5496 11.5246 19.7254C11.7004 19.9012 11.9389 20 12.1875 20H15.9375C17.0149 20 18.0483 19.572 18.8101 18.8101C19.572 18.0483 20 17.0149 20 15.9375V12.1875Z"
                    fill="#000103"
                    fill-opacity="0.7"
                  />
                </svg>

                <span className="font-medium text-[4vw] lg:text-[1.30vw] text-[#4d4d4f]">
                  Size: 7 X 6Ft
                </span>
              </div>

              <h2 className="text-[4vw] lg:text-[1.30vw] text-[#4d4d4f]">
                19 Units
              </h2>
            </div>

            <div className="flex justify-between items-center h-[10vh] ">
              <div className="flex items-center space-x-[1vw]">
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.46445 4.91089C4.46445 4.08206 4.7937 3.28717 5.37977 2.7011C5.96584 2.11503 6.76073 1.78578 7.58956 1.78578C8.41839 1.78578 9.21327 2.11503 9.79934 2.7011C10.3854 3.28717 10.7147 4.08206 10.7147 4.91089C10.7147 5.73972 10.3854 6.5346 9.79934 7.12068C9.21327 7.70675 8.41839 8.036 7.58956 8.036C6.76073 8.036 5.96584 7.70675 5.37977 7.12068C4.7937 6.5346 4.46445 5.73972 4.46445 4.91089V4.91089ZM7.58956 0C6.28711 0 5.038 0.517396 4.11703 1.43837C3.19606 2.35934 2.67867 3.60844 2.67867 4.91089C2.67867 6.21334 3.19606 7.46244 4.11703 8.38341C5.038 9.30438 6.28711 9.82178 7.58956 9.82178C8.89201 9.82178 10.1411 9.30438 11.0621 8.38341C11.9831 7.46244 12.5004 6.21334 12.5004 4.91089C12.5004 3.60844 11.9831 2.35934 11.0621 1.43837C10.1411 0.517396 8.89201 0 7.58956 0ZM16.9649 6.25022C16.9649 5.77661 17.153 5.32239 17.4879 4.98749C17.8228 4.65259 18.2771 4.46445 18.7507 4.46445C19.2243 4.46445 19.6785 4.65259 20.0134 4.98749C20.3483 5.32239 20.5364 5.77661 20.5364 6.25022C20.5364 6.72384 20.3483 7.17806 20.0134 7.51296C19.6785 7.84786 19.2243 8.036 18.7507 8.036C18.2771 8.036 17.8228 7.84786 17.4879 7.51296C17.153 7.17806 16.9649 6.72384 16.9649 6.25022ZM18.7507 2.67867C17.8034 2.67867 16.895 3.05495 16.2252 3.72475C15.5554 4.39455 15.1791 5.30299 15.1791 6.25022C15.1791 7.19746 15.5554 8.1059 16.2252 8.77569C16.895 9.44549 17.8034 9.82178 18.7507 9.82178C19.6979 9.82178 20.6063 9.44549 21.2761 8.77569C21.9459 8.1059 22.3222 7.19746 22.3222 6.25022C22.3222 5.30299 21.9459 4.39455 21.2761 3.72475C20.6063 3.05495 19.6979 2.67867 18.7507 2.67867V2.67867ZM0 14.2862C0 13.5758 0.282216 12.8945 0.784564 12.3921C1.28691 11.8898 1.96824 11.6076 2.67867 11.6076H12.5004C13.2109 11.6076 13.8922 11.8898 14.3946 12.3921C14.8969 12.8945 15.1791 13.5758 15.1791 14.2862V14.488C15.1774 14.5713 15.1714 14.6544 15.1613 14.7371C15.1434 14.8916 15.1104 15.1014 15.0452 15.3497C14.8736 16.0045 14.5701 16.6173 14.1532 17.1506C13.1085 18.4917 11.1433 19.6436 7.58956 19.6436C4.03586 19.6436 2.0715 18.4917 1.02593 17.1506C0.608691 16.6174 0.304842 16.0045 0.13304 15.3497C0.0648397 15.087 0.0211982 14.8186 0.00267869 14.5478C0.00181547 14.5279 0.00122007 14.508 0.000892824 14.488V14.4675L0 14.4603V14.2862ZM1.78578 14.4452V14.4559C1.79815 14.606 1.82355 14.7548 1.86167 14.9005C1.94203 15.2113 2.10543 15.6309 2.43402 16.0533C3.0635 16.8604 4.44659 17.8578 7.58956 17.8578C10.7325 17.8578 12.1165 16.8604 12.7451 16.0541C13.0121 15.7125 13.2065 15.3199 13.3165 14.9005C13.3549 14.7548 13.3806 14.606 13.3933 14.4559L13.3942 14.4452V14.2862C13.3942 14.0494 13.3002 13.8223 13.1327 13.6549C12.9653 13.4874 12.7381 13.3933 12.5013 13.3933H2.67867C2.44186 13.3933 2.21475 13.4874 2.0473 13.6549C1.87985 13.8223 1.78578 14.0494 1.78578 14.2862V14.4452ZM15.605 17.4042C16.4354 17.6863 17.4685 17.8578 18.7507 17.8578C21.6088 17.8578 23.233 17.0069 24.1196 15.9604C24.5509 15.4514 24.7714 14.9354 24.883 14.5389C24.9432 14.3264 24.9818 14.1083 24.9982 13.888L24.9991 13.8559L25 13.8362V13.8023C25.0001 13.514 24.9434 13.2286 24.8332 12.9623C24.7229 12.6959 24.5613 12.4539 24.3574 12.2501C24.1536 12.0463 23.9116 11.8846 23.6453 11.7744C23.379 11.6641 23.0935 11.6074 22.8053 11.6076H15.4934C15.9399 12.1067 16.264 12.7174 16.4175 13.3933H22.8053C23.0285 13.3933 23.2089 13.571 23.2142 13.7916C23.2054 13.8804 23.1887 13.9682 23.1642 14.0541C23.1089 14.2505 22.9946 14.5255 22.7562 14.8068C22.3044 15.3416 21.2499 16.072 18.7507 16.072C17.7105 16.072 16.9211 15.9452 16.3211 15.7595C16.1623 16.3391 15.9211 16.893 15.605 17.4042V17.4042Z"
                    fill="#000103"
                    fill-opacity="0.7"
                  />
                </svg>

                <span className="font-medium text-[4vw] lg:text-[1.30vw] text-[#4d4d4f]">
                  Occupancy
                </span>
              </div>

              <h2 className="text-[4vw] lg:text-[1.30vw] text-[#4d4d4f]">
                80%
              </h2>
            </div>
            {/* anot */}
            {/* home info */}
          </div>
        </div>
      </div>

      <div className="py-[3vh] px-[5vw] w-[100vw] lg:h-[50vh] h-[80vh] ">
        <h1 className="text-[#4d4d4f] font-semibold text-[6vw] lg:text-[2.40vw]">
          Description
        </h1>
        <p className="text-[#4d4d4f] text-[4vw] lg:text-[1.50vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
          proin scelerisque nunc. Enim odio pharetra metus, pulvinar phasellus
          etiam risus eu. Enim, malesuada pharetra placerat sodales. Enim
          elements nec tortor, massa metus. Id eget duis orci senectus senectus
          at ut tellus porttitor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis
          pretium ornare id diam amet proin scelerisque nunc. Enim odio pharetra
          metus, pulvinar phasellus etiam ris. Id eget duis orci senectus
          senectus at ut tellus porttitor.
        </p>
      </div>

      <div className="w-[100vw] h-[150vh] footFullBG">
        <div className=" flex flex-col justify-center items-center w-full h-[14vh]">
          <h1 className="mt-[10vh] font-semibold text-[7vw] lg:text-[3vw] text-[#021850]">
            Request Details
          </h1>
          <p className="py-[1vh] text-[#4d4d4f] lg:text-justify text-center text-[4vw] lg:text-[1.30vw]">
            Provide us some details about the size and number of units you need
          </p>
        </div>
        <div className="flex justify-center items-center w-[100vw] h-full ">
          <div className=" rounded-[24px] w-[90vw] lg:w-[53vw] h-[100vh] bg-white ">
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

              <Link href="/sent">
                <button className="text-white font-semibold text-[4vw] lg:text-[1.40vw] justify-center flex items-center px-[1vw] space-x-[1vw] rounded-[10px] bg-[#1849C6] w-[80%] lg:w-[40vw] h-[10vh]">
                  <span>Request Details</span>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 19.3101L16 10L0 0.68988V7.93108L11.4615 10L0 12.069V19.3101Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>

      {/* featured */}
      <div className="flex space-y-[2vh] justify-center items-center flex-col w-[100vw] h-[280vh] lg:h-[120vh] bg-[#1849C6]">
        <div className=" flex items-center justify-between px-[5.50vw] w-full h-[15vh] ">
          <h1 className="text-white text-[5vw] lg:text-[3vw] font-semibold">
            Other Similar Self Storages For Sale
          </h1>
          <button className="rounded-[10px] flex items-center space-x-[1vw] py-[1.40vh] px-[2vw] bg-[#FFCE31]">
            <span>View More</span>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.32738 13.9999C1.49815 14.0004 1.66688 13.9675 1.82117 13.9034C1.97546 13.8394 2.11139 13.746 2.21897 13.63L7.73997 7.63053C7.90809 7.45162 8 7.22719 8 6.99559C8 6.76399 7.90809 6.53957 7.73997 6.36065L2.02465 0.361218C1.83063 0.157021 1.55182 0.0286085 1.24957 0.0042311C0.947313 -0.0201463 0.646366 0.0615079 0.412933 0.23123C0.179501 0.400953 0.0327044 0.644841 0.00483656 0.909243C-0.0230312 1.17364 0.0703135 1.4369 0.264335 1.6411L5.37383 7.00059L0.435795 12.3601C0.296018 12.5069 0.207228 12.6856 0.179933 12.8751C0.152637 13.0646 0.187976 13.257 0.281772 13.4296C0.375566 13.6021 0.52389 13.7475 0.709193 13.8485C0.894495 13.9496 1.10902 14.0022 1.32738 13.9999Z"
                fill="#000103"
                fill-opacity="0.7"
              />
            </svg>
          </button>
        </div>

        <div className="flex lg:space-y-0 space-y-[4vh] flex-col lg:flex-row items-center justify-between w-[90%]">
          <GridCard bgColor="bg-[#F6F8FD]" cardImage={store1} />
          <GridCard bgColor="bg-[#F6F8FD]" cardImage={store2} />
          <GridCard bgColor="bg-[#F6F8FD]" cardImage={store3} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default details;
