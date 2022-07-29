import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import post from "../public/static/postImg.png";
import postVid from "../public/static/postVid.png";
import ss1 from "../public/static/ss1.png";
import ss2 from "../public/static/ss2.png";
import LearnCard from "../components/LearnCard";
import learn1 from "../public/static/learn1.png";
import learn2 from "../public/static/learn2.png";
import learn3 from "../public/static/learn3.png";
import learn4 from "../public/static/learn4.png";
import Link from "next/link";
function Post() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center  items-center w-[100vw] h-[40vh] lg:h-[120vh] ">
        <Image src={post}></Image>
      </div>
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className=" w-[90vw] lg:w-[75vw] h-[10vh] lg:h-[20vh]">
          <h1 className="font-bold text-[5vw] lg:text-[2.50vw]">
            Learn How to Buy a Self Storage
          </h1>
        </div>
        <div className="lg:px-0 px-[2vw]">
          {" "}
          <Image src={postVid}></Image>
        </div>
        <div className="text-[#373737] w-[90vw] lg:w-[75vw] h-[140vh] lg:h-[100vh] ">
          <h1 className="py-[4vh] font-semibold text-[6vw] lg:text-[1.80vw]">
            Heading Text Here
          </h1>
          <p className="text-[3vw] lg:text-[1.20vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc. Enim odio pharetra metus, pulvinar phasellus
            etiam risus eu. Enim, malesuada pharetra placerat sodales. Enim
            elementum hendrerit vitae convallis sed sed blandit aenean diam.
            Mattis neque leo et, donec. Hac quis neque turpis nec tortor, massa
            metus. Id eget duis orci senectus senectus at ut tellus porttitor.
            Non urna, sociis luctus dolor. Eu nec ullamcorper sollicitudin
            bibendum mi quisque mattis eu. At tempus sem interdum elit laoreet
            at tellus volutpat sed. Et id odio gravida urna, nunc feugiat ut.
            Eros non, velit ut a, leo fermentum non consequat. Purus urna massa
            lorem vitae.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc. Enim odio pharetra metus, pulvinar phasellus
            etiam risus eu. Enim, malesuada pharetra placerat sodales. Enim
            elementum hendrerit vitae convallis
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc. Enim odio pharetra metus, pulvinar phasellus
            etiam risus eu. Enim, malesuada pharetra placerat sodales. Enim
            elementum hendrerit vitae convallis
            <br />
            <br />
            <span className="font-semibold text-[1.80vw]">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing el
            </span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc. Enim odio pharetra metus, pulvinar phasellus
            etiam risus eu. Enim, malesuada pharetra placerat sodales. Enim
            elementum hendrerit vitae convallis
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc. Enim odio pharetra metus, pulvinar phasellus
            etiam risus eu. Enim, malesuada pharetra placerat sodales. Enim
            elementum hendrerit vitae convallis
          </p>
        </div>
      </div>

      <div className="flex  flex-col items-center justify-around bg-[#F6F8FD] w-[100vw] h-[100vh] lg:h-[110vh]">
        <div className="py-[14vh] flex lg:flex-row flex-col justify-center items-center w-[75vw] h-[50vh] ">
          <div className="text-[#373737] w-[100%] lg:w-[50%] ">
            <h1 className="font-semibold  text-[4vw] lg:text-[2vw]">
              More information on how to buy a Self Storage
            </h1>
            <p className="text-[2.20vw] lg:text-[1.30vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc. Enim odio pharetra metus,
              pulvinar phasellus etiam risus eu. Enim, malesuada pharetra
            </p>
          </div>
          <div className="lg:mt-0 mt-[5vh] flex items-center justify-end  w-[90%] lg:w-[50%]">
            <Image src={ss1}></Image>
          </div>
        </div>
        <div className="flex  flex-col items-center justify-around bg-[#F6F8FD] w-[100vw] h-[100vh] lg:h-[110vh]">
          <div className="py-[14vh] flex lg:flex-row flex-col justify-center items-center w-[75vw] h-[50vh] ">
            <div className="text-[#373737] w-[100%] lg:w-[50%] ">
              <h1 className="font-semibold  text-[4vw] lg:text-[2vw]">
                More information on how to buy a Self Storage
              </h1>
              <p className="text-[2.20vw] lg:text-[1.30vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tortor sapien sagittis maecenas tincidunt. Quis pretium ornare
                id diam amet proin scelerisque nunc. Enim odio pharetra metus,
                pulvinar phasellus etiam risus eu. Enim, malesuada pharetra
              </p>
            </div>
            <div className="lg:mt-0 mt-[5vh] flex items-center justify-end  w-[90%] lg:w-[50%]">
              <Image src={ss2}></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-[100vw] h-[60vh] blueLine">
        <h1 className="font-bold text-white text-[5vw] lg:text-[2.50vw]">
          Do you have a Self Storage for Sale?
        </h1>
        <p className=" text-[3vw] lg:text-[1.20vw] pb-[6vh] text-white text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis
          <br /> maecenas tincidunt. Quis pretium ornare id diam amet proin
          scelerisque nunc.
        </p>
        <Link href="/sell">
          <button className="font-medium rounded-[8px] py-[2vh] px-[3vw] bg-[#FFCE31] text-[#021850]">
            Sell Your Self Storage
          </button>
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center w-[100vw] h-[300vh] lg:h-[120vh] bg-[#F6F8FD]">
        <div className="flex py-[5vh] justify-between items-end w-[90%] h-[20vh] ">
          <div className="">
            <h1 className="text-[4vw] lg:text-[2.50vw]">Other Similar Post</h1>
            <p className="text-[1.90vw] lg:text-[1.10vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor
              <br /> sapien sagittis maecenas tincidunt. Quis pretium ornare
            </p>
          </div>

          {/* end part */}
          <div className="flex items-center space-x-4">
            <h1>View More </h1>
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
          </div>
        </div>
        <div className="w-[90vw] h-auto ">
          <div className=" items-center w-[90vw] grid grid-cols-1 lg:grid-cols-4 gap-[3vw] h-auto">
            <LearnCard customStyles="bg-white" learnImage={learn1} />
            <LearnCard customStyles="bg-white" learnImage={learn2} />
            <LearnCard customStyles="bg-white" learnImage={learn3} />
            <LearnCard customStyles="bg-white" learnImage={learn4} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Post;
