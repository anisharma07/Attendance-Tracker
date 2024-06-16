import React from 'react'
import Logo from "../svg-components/logo";
import Image from 'next/image'

const Landing = () => {
  return (
    <div className=" flex flex-col items-center justify-between font-medium bg-[#171721] font-poppins w-full min-h-[100svh] text-white">
      <div className="absolute top-2 right-4">
        <Image
          src="/assets/images/logo.png"
          width={63}
          height={45}
          alt="logo"
          style={{ pointerEvents: "none" }}
          draggable="false"
        />
      </div>
      <Image
        src="/assets/images/top-float.png"
        width={720}
        height={206}
        alt="top-float"
        className="w-[100vw] h-[100px]"
        style={{ pointerEvents: "none" }}
        draggable="false"
      />
      <div className="w-[88%] md:w-[80%] max-w-[800px]">
        <div className="text-4xl">Attendance Tracker</div>
        <p
          style={{
            background: "linear-gradient(45deg, #00479A , #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-3xl mt-16"
        >
          Never Miss an Important Class, Keep Track of your Attendance
        </p>
      </div>

      <button className="bg-[#1F222B] rounded-full flex items-center px-8 my-8 py-4 gap-4 text-2xl">
        <div className="grow my-auto">Get Started</div>
        <svg
          width="35"
          height="35"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_398_1038)">
            <path
              d="M16.4916 1.7585C11.8266 3.37684 7.80353 6.44849 5.01328 10.5223C2.22302 14.5961 0.812675 19.4573 0.989405 24.3919C1.16614 29.3265 2.92062 34.0743 5.99516 37.9381C9.0697 41.8018 13.3022 44.5778 18.0711 45.8583C21.9373 46.8559 25.9879 46.8997 29.8748 45.9859C33.3959 45.195 36.6513 43.5032 39.3221 41.0762C42.1019 38.4731 44.1196 35.1615 45.1583 31.4976C46.2873 27.5132 46.4882 23.323 45.7456 19.2488H24.0349V28.2548H36.6083C36.357 29.6912 35.8185 31.0621 35.025 32.2856C34.2316 33.509 33.1994 34.5598 31.9904 35.375C30.455 36.3906 28.7243 37.074 26.9093 37.3812C25.0889 37.7197 23.2217 37.7197 21.4013 37.3812C19.5563 36.9997 17.811 36.2382 16.2764 35.1452C13.8112 33.4001 11.9601 30.921 10.9874 28.0615C9.9982 25.1485 9.9982 21.9904 10.9874 19.0774C11.6798 17.0355 12.8245 15.1764 14.3359 13.6388C16.0656 11.8469 18.2554 10.566 20.6651 9.93675C23.0748 9.30746 25.6113 9.35406 27.9963 10.0714C29.8593 10.6433 31.5631 11.6426 32.9716 12.9895C34.3893 11.5791 35.8046 10.1651 37.2174 8.74734C37.947 7.98499 38.7421 7.25911 39.4607 6.47852C37.3107 4.47772 34.787 2.92084 32.0342 1.89711C27.0213 0.0769094 21.5362 0.0279933 16.4916 1.7585Z"
              fill="white"
            />
            <path
              d="M16.4913 1.75856C21.5355 0.0268808 27.0205 0.0745093 32.0338 1.89353C34.7871 2.92421 37.3097 4.48858 39.4567 6.49683C38.7272 7.27742 37.9576 8.00694 37.2134 8.76565C35.7982 10.1785 34.3841 11.5865 32.9713 12.9896C31.5627 11.6427 29.859 10.6434 27.9959 10.0715C25.6117 9.3516 23.0753 9.30231 20.665 9.92903C18.2546 10.5557 16.0635 11.8343 14.3319 13.6243C12.8205 15.1619 11.6758 17.021 10.9834 19.0629L3.42188 13.2085C6.12844 7.8412 10.8147 3.73566 16.4913 1.75856Z"
              fill="#E33629"
            />
            <path
              d="M1.41519 19.0087C1.82161 16.9945 2.49635 15.0438 3.42138 13.209L10.9829 19.078C9.99372 21.991 9.99372 25.1491 10.9829 28.0621C8.46361 30.0075 5.9431 31.9626 3.42138 33.9275C1.10569 29.318 0.399442 24.0661 1.41519 19.0087Z"
              fill="#F8BD00"
            />
            <path
              d="M24.0348 19.2451H45.7455C46.4881 23.3193 46.2872 27.5094 45.1582 31.4938C44.1195 35.1578 42.1018 38.4694 39.322 41.0725C36.8818 39.1684 34.4306 37.279 31.9903 35.3749C33.2001 34.5589 34.2327 33.5069 35.0262 32.2822C35.8197 31.0575 36.3578 29.6851 36.6082 28.2474H24.0348C24.0312 25.2491 24.0348 22.2471 24.0348 19.2451Z"
              fill="#587DBD"
            />
            <path
              d="M3.41797 33.9269C5.93969 31.9815 8.4602 30.0264 10.9795 28.0615C11.9542 30.922 13.8079 33.4013 16.2758 35.1452C17.8152 36.2332 19.5643 36.9885 21.4117 37.363C23.2321 37.7014 25.0992 37.7014 26.9196 37.363C28.7346 37.0557 30.4654 36.3724 32.0007 35.3568C34.441 37.2608 36.8922 39.1503 39.3325 41.0544C36.662 43.4827 33.4066 45.1757 29.8851 45.9677C25.9982 46.8815 21.9476 46.8376 18.0814 45.84C15.0236 45.0236 12.1674 43.5843 9.69188 41.6124C7.07165 39.5322 4.93157 36.9106 3.41797 33.9269Z"
              fill="#319F43"
            />
          </g>
          <defs>
            <clipPath id="clip0_398_1038">
              <rect
                width="46.6896"
                height="46.6896"
                fill="white"
                transform="translate(0.226562 0.2229)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <Image
        src="/assets/images/bottom-float.png"
        width={702}
        height={206}
        alt="bottom-float"
        className="w-[100vw] h-[100px] "
        style={{ pointerEvents: "none" }}
        draggable="false"
      />
    </div>
  );
}

export default Landing