import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center text-[#949494] font-poppins">
      <p className="mb-4">No records to display</p>
      <div className="flex flex-col items-center">
        <svg
          className="w-[200px] h-[200px] mb-8"
          viewBox="0 0 254 253"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_397_105)">
            <path
              d="M139.65 113.85H190.25V139.15H139.65V189.75H114.35V139.15H63.75V113.85H114.35V63.25H139.65V113.85ZM127 253C93.4501 253 61.2743 239.672 37.551 215.949C13.8276 192.226 0.5 160.05 0.5 126.5C0.5 92.9501 13.8276 60.7743 37.551 37.051C61.2743 13.3276 93.4501 0 127 0C160.55 0 192.726 13.3276 216.449 37.051C240.172 60.7743 253.5 92.9501 253.5 126.5C253.5 160.05 240.172 192.226 216.449 215.949C192.726 239.672 160.55 253 127 253ZM127 227.7C153.84 227.7 179.581 217.038 198.559 198.059C217.538 179.081 228.2 153.34 228.2 126.5C228.2 99.6601 217.538 73.9195 198.559 54.9408C179.581 35.9621 153.84 25.3 127 25.3C100.16 25.3 74.4195 35.9621 55.4408 54.9408C36.4621 73.9195 25.8 99.6601 25.8 126.5C25.8 153.34 36.4621 179.081 55.4408 198.059C74.4195 217.038 100.16 227.7 127 227.7Z"
              fill="#282B36"
            />
          </g>
          <defs>
            <clipPath id="clip0_397_105">
              <rect
                width="253"
                height="253"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <p className="text-xl">Click on Add button to add a new subject</p>
      </div>
    </div>
  );
};

export default Home;
