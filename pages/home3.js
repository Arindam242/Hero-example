import React from "react";
import Link from "next/link";

const home3 = () => {
  return (
    <div className="bg-home1-bg w-full min-h-screen  relative">
      <div className="px-40 mx-auto">
        <header className="flex justify-between items-center pt-8">
          <div className="flex space-x-2  items-center justify-between font-medium text-xl text-home1-h1">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="6" fill="#1E255E" />
              <path
                d="M9.70972 21.6781C9.15743 21.6781 8.70972 21.2304 8.70972 20.6781V9.22583C8.70972 8.67355 9.15743 8.22583 9.70972 8.22583H10.7614C11.3136 8.22583 11.7614 8.67355 11.7614 9.22583V20.6781C11.7614 21.2304 11.3136 21.6781 10.7614 21.6781H9.70972ZM12.7494 15.4557C12.6702 15.2417 12.6667 15.007 12.7393 14.7906L14.714 8.90761C14.8507 8.50029 15.2323 8.22583 15.662 8.22583H16.5648C17.2471 8.22583 17.729 8.89397 17.5137 9.54137L15.7668 14.7949C15.6957 15.0086 15.6989 15.2401 15.7758 15.4519L17.5504 20.3367C17.7873 20.9888 17.3044 21.6781 16.6105 21.6781H15.7474C15.3289 21.6781 14.9547 21.4175 14.8095 21.0251L12.7494 15.4557Z"
                fill="white"
              />
              <path
                d="M19.0117 20.3329C19.0117 19.7564 19.293 19.3272 19.8558 19.0453C20.101 18.93 20.3608 18.8724 20.6349 18.8724C21.2842 18.8724 21.7603 19.1222 22.0633 19.6219C22.1932 19.8396 22.2581 20.0767 22.2581 20.3329C22.2581 20.9222 21.9695 21.345 21.3924 21.6013C21.1471 21.7166 20.8946 21.7742 20.6349 21.7742C19.9712 21.7742 19.495 21.518 19.2065 21.0055C19.0766 20.7877 19.0117 20.5635 19.0117 20.3329Z"
                fill="white"
              />
            </svg>
            <h1>Kreed</h1>
          </div>
          <div className="flex items-center space-x-10">
            <nav className="space-x-5">
              <Link to="/">
                <span className="text-home1-h1 font-medium">Home</span>
              </Link>

              <Link to="/">
                <span className="text-home1-h1 font-medium">About</span>
              </Link>
              <Link to="/">
                <span className="text-home1-h1 font-medium">How it works</span>
              </Link>
              <Link to="/">
                <span className="text-home1-h1 font-medium">Services</span>
              </Link>
              <Link to="/">
                <span className="text-home1-h1 font-medium">Contact</span>
              </Link>
            </nav>
            <button className="px-10 py-3 bg-transparent border-2 outline-none border-home3-border text-home3-border rounded-full ">
              Join now
            </button>
          </div>
        </header>
        <main>
          <h1 className="text-6xl font-bold leading-relaxed text-home1-h1">
            Connecing all
            <br /> your banking
            <br /> needs
          </h1>
        </main>
      </div>
      <img
        className="absolute  right-0"
        src="/Group 490.svg"
        width={900}
        alt=""
        height={900}
      />
    </div>
  );
};

export default home3;
