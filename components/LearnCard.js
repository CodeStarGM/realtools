import React from "react";
import Image from "next/image";
import Link from "next/link";
function LearnCard({ learnImage, customStyles }) {
  return (
    <div
      className={`rounded-[10px] flex flex-col justify-around items-center w-[90vw] lg:w-[21vw] h-[67vh] ${customStyles}`}
    >
      <div className="flex justify-center items-center w-[100%] lg:w-[95%]">
        <Image src={learnImage}></Image>
      </div>
      <h1 className=" px-[4vw] lg:px-[1vw] font-semibold text-[5vw] lg:text-[1.50vw]">
        Everything you need to know about how to buy a Self Storage
      </h1>

      <div className="flex items-center justify-around  w-[100%] h-[7vh]">
        <div className="flex items-center space-x-1 text-[#4d4d4f]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.991 0C4.023 0 0 4.032 0 9C0 13.968 4.023 18 8.991 18C13.968 18 18 13.973 18 9C18 4.02695 13.968 0 8.991 0ZM9 16.2C5.022 16.2 1.8 12.978 1.8 9C1.8 5.022 5.022 1.8 9 1.8C12.978 1.8 16.2 5.022 16.2 9C16.2 12.978 12.978 16.2 9 16.2ZM9.45 4.5H8.1V9.9L12.825 12.735L13.5 11.628L9.45 9.225V4.5Z"
              fill="#000103"
              fillOpacity="0.7"
            />
          </svg>

          <p>5hrs ago</p>
        </div>

        <div className="flex items-center space-x-1 text-[#4d4d4f]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.12843 17.9989C9.61117 17.9983 10.0744 17.808 10.418 17.469L16.8261 11.0509C16.9906 10.8874 17.0931 10.6719 17.1161 10.4411L17.9958 1.09388C18.0093 0.947454 17.9903 0.799861 17.9402 0.661621C17.89 0.523381 17.8101 0.397898 17.7059 0.294116C17.6021 0.189949 17.4766 0.109958 17.3384 0.0598464C17.2001 0.0097344 17.0525 -0.00926534 16.9061 0.00420171L7.55889 0.883941C7.32815 0.906929 7.11257 1.00942 6.94907 1.17385L0.530979 7.58195C0.190945 7.92301 0 8.38497 0 8.86657C0 9.34818 0.190945 9.81013 0.530979 10.1512L7.84881 17.469C8.18882 17.8074 8.64872 17.9978 9.12843 17.9989ZM15.1266 9.89127L9.12843 15.8895L2.08052 8.84158L8.07874 2.84336L15.8864 2.11358L15.1266 9.89127Z"
              fill="#000103"
              fillOpacity="0.7"
            />
            <path
              d="M11.4973 8.00293C10.6689 8.00293 9.99728 7.33136 9.99728 6.50293C9.99728 5.6745 10.6689 5.00293 11.4973 5.00293C12.3257 5.00293 12.9973 5.6745 12.9973 6.50293C12.9973 7.33136 12.3257 8.00293 11.4973 8.00293Z"
              fill="#000103"
              fillOpacity="0.7"
            />
          </svg>

          <p>Buy</p>
        </div>

        <div className="flex items-center space-x-1 text-[#4d4d4f]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 22 22"
          >
            <circle cx="11" cy="11" r="10" fill="url(#pattern0)"></circle>
            <circle cx="11" cy="11" r="10.5" stroke="#000103"></circle>
            <defs>
              <pattern
                id="pattern0"
                width="1"
                height="1"
                patternContentUnits="objectBoundingBox"
              >
                <use
                  transform="scale(.01389)"
                  xlinkHref="#image0_295_1902"
                ></use>
              </pattern>
              <image
                id="image0_295_1902"
                width="72"
                height="72"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAIAAADajyQQAAAfzUlEQVRogZV7eYykx3Xfe6/qu/qanp57d3a5B5fn8pBIrizxkiiRkmzLkJ3DQGIbdgLHMJAgSAwkgZEA9j9JkDgIgiQOHCCOBSuGAx+yZEmUZEqkKFLUSUkkl9deM7NzT89MX19/R1W9lz++np7emdmVUthtfF1f1et69d77vaNq0BiDiCICAIgIAMXzsA3f/uRtdIqIFGQP9xc9h+kf6BlOHyV1uBVvh2T16LTDtA7/3uHP4cRiFsJwWQIAw63C4vtgBfurH6WwT2RkAaP0b8bb4X49SnTI7s027PDnkOK+KGDYiXucDbjEAYu4x/UNP3FAmP9fbVQpCgp6lJ+b0b31Lx3eLRx+3jhRcDCwmIIy4G508uHfIqKb/RAc0sB9VTzA8agEbvYwuoLRVwKCMhQQCwAACjMgICILsANNgAg8kCUOKEEx5IY1HPjdW3B1w57ufdVyS8MdnX+A+mHIQUBBFhFEReQ5x4wuDIID1PI8d8IESEgIWEhNUGCP9i0Q4vCqDqjbsOmfRD6H7RAOAdoQSDzPd47jOK6US0Te8sb6tYXFr37ta+1W+6GHHrrrrjsfOH8+IgIA58QYoxAJCVAABEYFeWO7BXKM8rk/3lp7AAMOMzZc9GFWEUEEEAb24nne1uZmt9eNwuDatauf+cxn3nnnUnNnN07SzNjEmgcfvP8f/uqv1StVAXn80UcL6zG5BZQBqEChzUewcaQq3oztfcZutisHmBmF6QFnAABWWPu+fvPi6zbNtKKXXvr6F579fLvV00HAoLLcZtbmzP1+jAgaKCqX77jzro8989GPf+yjMxPjeW5QHJESQAEEYLjRgG8ttCOWnef5KIlRTm6BwiOvEAAEja+jN3/w6vNf+4Ln+d995dvtdrtar3eTrLnbTozdbXWsdULo+75SKgxD0l4cp0qp++6/9zd+49efeOQCANg8A9SCgiBDsDzSwg8I7XA/GmMOSGN0n0aV8DDdYQ8ptfjuW9/5yl/24p1O5jbWmp4frW9ubrT7q5tbcZpZB1p7VgQRiEgrHUaR74d5bpIk9gP/F//eL//6r/3KRLVi8oyIAGlUj24triPZIzgKD4bKxsxHOrFiGBEZY7TWW8sLl15/aaLub65et0lvY2OtF/eypG/yjNk5dkoTCDuT2TxL+3Gv095ubna7LRD2Pc9a+/u//z9+61/8di6gtBYRPirgOhKxR2Uw2kmjGjy67uHQw3P2hwEwysV3XmutL7je2mtvvb4bZwCUWUHPI18LsO97WpGIJElinTXGiIjSCglard1WuwWI5VJpujH+nW9/57nnXiBS7GSwXoEiQhG5qcoNtWlUHgBAo3798H4cNrNiFItFBMtSDkvtZvN7r35ve3Pn4g/fKEVl62RyavrK1cUks71+IoDCYHPHguzA176nNDCL5dD3s7Tf7batydnmyO73fu8/fft7r/lhIGwBC2BSQ7EdWProCg+LlGRE6DcDnANiRCyokybdaTXLgd7a2jRWorCkEDRh4OtOt7u8upWkph8n1jphiySk0DpjTM7OWmuZuVwqpWna6XaFLaB9863XX/3h9wciArxxt4/Y91GhDY1wYCYHpt5szkFBAgkgKVhbXvriV778g4vvXrm+FdWn15vbO9tbmmBsbCw11lgBJK0UoXgaPYWaxNfoK6yWAp+AXB56ypo0TWNmMz3VePYLn9vaagZBKMyFDAau8kbrOFKtRqGORgcdGWGMzhzsgqAgAorL+mI7xOnu9vbOTlspHZUruZM8zxUIIQkAiyilwjAqBWE5DMphWA3DRqU6FnhVgjJCCZ2P7OnA1yoI9MLCwrNf/BLsC0v2zOxgGnHrpg+zPny+GR6CCLNorUzaX1l8p7V27dGHzvtsapVwN85WVjf7cVfEITCzNc4RKqU8rVSkAVhCrSqlsqfAV2iMS9mlDrbjPLfOaZen+Wuvvb63GAFEECwSg1vA/dGMHeDhcEg1amYAiOhQtELc3m2iyL333p+lWXtj5dy58yh6dXJtYXmtVu4FpJs7O4m1QORpvxpG09WoEvmep7TSAKKQBSUzlBh8c2llp2d9rcePH9vaagKA0oqdg710AW8e744OGC7+YNpyWICHvLNIsY8AuztNrYnT5NVvffsjTz3zyPuejNuticZUbay+vr55am46S9I8N5adiATar4Shp5AQrGNxVsQJohXdy50B9e711Z7NemlyfH4eANg5ODIcvnkbZV7f2p0fiGWERUCK8JudM3mS9Nou799357knPvxxjKrcT+pz84trW4KqFJVLOkABdg4IABAFi3yMLJMPSpGAMqhKSs+eOM3kvbOyuNvrpVkOUADGDaHpj9XGUZHq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"
              ></image>
            </defs>
          </svg>
          <p>Raza</p>
        </div>
      </div>
      <Link href="/post">
        <button className="font-semibold bg-[#1849C6] text-white rounded-[10px] py-[1vh] px-[10vw] lg:px-[4vw]">
          Read More
        </button>
      </Link>
    </div>
  );
}

export default LearnCard;
