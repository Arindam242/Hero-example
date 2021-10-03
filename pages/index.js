import Image from "next/image";
import Link from "next/link";

export default function home() {
  return (
    <div className="w-full min-h-screen bg-home1-bg">
      <header className="px-28 mx-auto flex items-center justify-between py-10">
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
            <Link href="/">
              <span className="text-home1-h1 font-medium" href="/">
                Home
              </span>
            </Link>
            <Link href="/">
              <span className="text-home1-h1 font-medium" href="/">
                About
              </span>
            </Link>
            <Link href="/">
              <span className="text-home1-h1 font-medium" href="/">
                How it works
              </span>
            </Link>
            <Link href="/">
              <span className="text-home1-h1 font-medium" href="/">
                Services
              </span>
            </Link>
            <Link href="/">
              <span className="text-home1-h1 font-medium" href="/">
                Contact
              </span>
            </Link>
          </nav>
          <button className="px-10 py-3 bg-home1-btn text-white rounded-full ">
            Login
          </button>
        </div>
      </header>
      <main className="px-28 relative mx-auto flex justify-between items-center">
        <div className="p-10 space-y-4 flex flex-col items-center">
          <h1 className="text-6xl font-bold leading-relaxed text-home1-h1">
            Connecing all
            <br /> your banking
            <br /> needs
          </h1>
          <p className="text-home1-h1 opacity-70">
            A smart mobile application you can control your <br /> business
            needs
          </p>
          <div className="flex space-x-4">
            <button className="px-10 py-3 flex rounded-full space-x-3 text-white bg-gray-200">
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.991 0C10.9508 0.0737491 9.73491 0.756241 9.02637 1.64498C8.38004 2.45122 7.84833 3.64871 8.05565 4.81244C9.19223 4.84869 10.3666 4.14995 11.0471 3.24621C11.6837 2.40497 12.1654 1.21499 11.991 0Z"
                  fill="#3C4EF3"
                />
                <path
                  d="M16.1019 6.71C15.1032 5.42627 13.6995 4.68127 12.3739 4.68127C10.6239 4.68127 9.88366 5.54001 8.66781 5.54001C7.41416 5.54001 6.46172 4.68377 4.94831 4.68377C3.46173 4.68377 1.87881 5.61501 0.87515 7.2075C-0.535822 9.44997 -0.294359 13.6662 1.99222 17.2574C2.81051 18.5424 3.90319 19.9873 5.33245 19.9998C6.6044 20.0123 6.96294 19.1636 8.6861 19.1549C10.4093 19.1449 10.7361 20.0111 12.0056 19.9973C13.4361 19.9861 14.5885 18.3849 15.4068 17.0999C15.9934 16.1786 16.2117 15.7149 16.6666 14.6749C13.358 13.3837 12.8276 8.56123 16.1019 6.71Z"
                  fill="#3C4EF3"
                />
              </svg>
              <span className="text-home1-btn">Download app</span>
            </button>
            <button className="px-10 py-3 flex rounded-full space-x-3 text-white bg-gray-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6602 7.93305L15.2727 6.64014L12.3955 9.95101L15.3275 13.3303L17.6591 12.0684C18.6326 11.5423 19.1667 10.8055 19.1667 9.99914C19.1667 9.1928 18.6337 8.46026 17.6602 7.93305Z"
                  fill="#3C4EF3"
                />
                <path
                  d="M2.19126 20L10.9232 9.95188L2.30196 0.0128329C2.27457 0.0117635 2.24604 0 2.21865 0C0.89134 0 0 1.01059 0 2.51631V17.488C0.00228256 18.9798 0.88221 19.985 2.19126 20Z"
                  fill="#3C4EF3"
                />
                <path
                  d="M14.2693 6.10126L4.44519 0.78418L11.6604 9.10307L14.2693 6.10126Z"
                  fill="#3C4EF3"
                />
                <path
                  d="M11.6594 10.7979L4.25366 19.3221L14.3255 13.8713L11.6594 10.7979Z"
                  fill="#3C4EF3"
                />
              </svg>

              <span className="text-home1-btn">Download app</span>
            </button>
          </div>
        </div>
        <Image alt="" src="/home1.png" width={600} height={800} />
      </main>
    </div>
  );
}
