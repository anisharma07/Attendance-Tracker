import React from "react";
import "./percentages.css";

interface SubCardProps {
  card_color: string;
  attended: number;
  total: number;
  Sub_name: string;
  Status: string;
}
interface CustomStyle extends React.CSSProperties {
  "--bg-color"?: string;
  "--circle-percentage"?: string;
}

const SubCard: React.FC<SubCardProps> = ({
  card_color,
  attended,
  total,
  Sub_name,
  Status,
}) => {
  const percentage = Number(((attended / total) * 100).toFixed(1));
  const degs = (percentage / 100) * 360;
  const customStyle: CustomStyle = {
    "--bg-color": card_color,
    "--circle-percentage": `${degs}deg`,
  };
  return (
    <div
      style={{ backgroundColor: card_color }}
      className={` text-white p-4 rounded-lg w-[350px] sm:w-[450px] flex items-center justify-between space-x-4`}
    >
      <div>
        <div className="flex items-center space-x-2">
          <div className="w-1 h-6 bg-green-500"></div>
          <h2 className="text-lg font-semibold">{Sub_name}</h2>
        </div>
        <div className="mt-2">
          <p className="text-xl font-bold">
            Attendance{" "}
            <span className="text-3xl">
              {attended}/{total}
            </span>
          </p>
          <p className="text-sm">Status: {Status}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div
          style={customStyle}
          className="circular-progress relative h-[75px] w-[75px]"
        >
          {/* <div className="w-16 h-16 rounded-full border-4 border-teal-500 flex items-center justify-center p-8">
            <span className="text-lg font-semibold">100.0%</span>
          </div> */}
          <p className="absolute top-[30px] left-0 w-full text-center font-bold">
            {percentage}%
          </p>
        </div>
        <div className="flex gap-3">
          <button className="text-[20px]">✅</button>
          <button className="">
            <svg
              className="w-6 h-6"
              viewBox="0 0 40 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.166016"
                y="0.231445"
                width="39.5605"
                height="36.8799"
                rx="8"
                fill="#CF0000"
              />
              <path
                d="M14.3579 7.19908L19.9067 16.6682L25.4554 7.19908H29.5567L22.0779 18.7791L29.5567 30.3591H25.4554L19.9067 21.3725L14.3579 30.3591H10.2566L17.6148 18.7791L10.2566 7.19908H14.3579Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="">
            <svg
              className="w-6 h-6"
              viewBox="0 0 40 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.429688"
                y="0.39917"
                width="39.5605"
                height="36.8799"
                rx="8"
                fill="#0093E5"
              />
              <path
                d="M20.2109 11.1251C12.6649 11.1251 6.71094 18.8391 6.71094 18.8391C6.71094 18.8391 12.6649 26.5541 20.2109 26.5541C25.9809 26.5541 33.7109 18.8391 33.7109 18.8391C33.7109 18.8391 25.9809 11.1251 20.2109 11.1251ZM20.2109 23.6451C17.5609 23.6451 15.4039 21.4891 15.4039 18.8391C15.4039 16.1891 17.5609 14.0321 20.2109 14.0321C22.8609 14.0321 25.0179 16.1891 25.0179 18.8391C25.0179 21.4891 22.8609 23.6451 20.2109 23.6451ZM20.2109 16.0331C19.8381 16.0261 19.4675 16.0934 19.121 16.2313C18.7744 16.3691 18.4588 16.5746 18.1926 16.8358C17.9265 17.0971 17.715 17.4087 17.5707 17.7526C17.4263 18.0965 17.352 18.4657 17.352 18.8386C17.352 19.2116 17.4263 19.5808 17.5707 19.9247C17.715 20.2685 17.9265 20.5802 18.1926 20.8414C18.4588 21.1026 18.7744 21.3081 19.121 21.446C19.4675 21.5838 19.8381 21.6512 20.2109 21.6441C20.9458 21.6302 21.6459 21.3286 22.1607 20.8039C22.6756 20.2793 22.964 19.5736 22.964 18.8386C22.964 18.1036 22.6756 17.3979 22.1607 16.8733C21.6459 16.3487 20.9458 16.047 20.2109 16.0331Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubCard;
