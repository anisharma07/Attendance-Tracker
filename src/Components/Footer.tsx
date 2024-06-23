import React from "react";
import HomeSvg from "../svg-components/HomeSvg";

const Footer = () => {
  return (
    <footer className="flex items-center justify-around p-4 bg-zinc-800">
      <button className="text-zinc-300">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </button>
      <button className="text-blue-500">
        <HomeSvg />
      </button>
      <button className="text-zinc-300">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.14 12.936c.036-.296.06-.6.06-.936s-.024-.64-.06-.936l2.036-1.592c.184-.144.24-.408.12-.624l-1.92-3.312c-.12-.216-.384-.288-.6-.216l-2.396.96c-.5-.384-1.036-.704-1.62-.96l-.36-2.52c-.036-.24-.24-.408-.48-.408h-3.84c-.24 0-.444.168-.48.408l-.36 2.52c-.584.256-1.12.576-1.62.96l-2.396-.96c-.216-.072-.48 0-.6.216l-1.92 3.312c-.12.216-.064.48.12.624l2.036 1.592c-.036.296-.06.6-.06.936s.024.64.06.936l-2.036 1.592c-.184.144-.24.408-.12.624l1.92 3.312c.12.216.384.288.6.216l2.396-.96c.5.384 1.036.704 1.62.96l.36 2.52c.036.24.24.408.48.408h3.84c.24 0 .444-.168.48-.408l.36-2.52c.584-.256 1.12-.576 1.62-.96l2.396.96c.216.072.48 0 .6-.216l1.92-3.312c.12-.216.064-.48-.12-.624l-2.036-1.592zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
