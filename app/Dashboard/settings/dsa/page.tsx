import React from "react";

const page = () => {
  return (
    <div className="w-full page-height-class relative">
      <div className="mx-[500px]">
        <div className="flex justify-between w-full">
          <h1>DSA Report</h1>

          <a
            href="/dashboard/settings"
            className="p-2 bg-[#23252c] hover:bg-[#2e49dd] rounded-full"
          >
            {" "}
            <svg
              className="w-6 h-6"
              viewBox="0 0 38 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.521549 12.972C-0.186031 13.6796 -0.186031 14.8268 0.521549 15.5344L12.0522 27.065C12.7598 27.7726 13.907 27.7726 14.6146 27.065C15.3222 26.3575 15.3222 25.2102 14.6146 24.5027L4.3651 14.2532L14.6146 4.00369C15.3222 3.29611 15.3222 2.1489 14.6146 1.44132C13.907 0.733739 12.7598 0.733739 12.0522 1.44132L0.521549 12.972ZM37.3496 12.4413L1.80273 12.4413V16.065L37.3496 16.065V12.4413Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div className="w-full bg-[#23252c] p-4 rounded-md"></div>
      </div>
    </div>
  );
};

export default page;
