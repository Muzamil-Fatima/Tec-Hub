import React from "react";

const Navbar = () => {
  return (
    <div className=" static flex flex-row mt-1.5 space-x-2.5 justify-between items-center px-6 py-4 border-b-2 border-gray-200">
      <h1 className="text-4xl font-extrabold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        TecHub
      </h1>
      <div>
        <ul className="font-semibold flex flex-row ml-10 space-x-6 text-xl">
          <li
            className="flex flex-row items-center gap-1.5
          hover:text-purple-600 cursor-pointer hover:underline"
          >
            <svg
              //   fill="#000000"
              width="24px"
              height="24px"
              viewBox="-2 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              class="jam jam-home"
              className="hover:fill-purple-600"
            >
              <path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z" />
            </svg>
            <span> Home</span>
          </li>
          <li className="flex flex-row items-center gap-1.5">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>about</title>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="about-white"
                  fill="#000000"
                  transform="translate(42.666667, 42.666667)"
                >
                  <path
                    d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </svg>
            <span> About</span>
          </li>
          <li className="flex flex-row items-center gap-1.5">
            <svg
              fill="#000000"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19,6H16V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V6H5A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5h4V6H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12.39L8.68,14A1.19,1.19,0,0,0,9,14h6a1.19,1.19,0,0,0,.32-.05L20,12.39Zm0-7.72L14.84,12H9.16L4,10.28V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z" />
            </svg>
            <span> Internship</span>
          </li>
          <li className="flex flex-row items-center gap-1.5">
            <svg
              fill="#000000"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.2"
              baseProfile="tiny"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 7h-14c-1.104 0-2 .896-2 2v9c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-9c0-1.104-.896-2-2-2zm-9.684 7.316l1.602 1.4c.305.266.691.398 1.082.398s.777-.133 1.082-.398l1.602-1.4-.037.037 3.646 3.646h-12.586l3.646-3.646-.037-.037zm-4.316 2.977v-6.753l3.602 3.151-3.602 3.602zm10.398-3.602l3.602-3.151v6.75l-3.602-3.599zm3.602-4.691v.21l-6.576 5.754c-.227.198-.621.198-.848 0l-6.576-5.754v-.21h14z" />
            </svg>
            <span>Contact Us</span>
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-purple-600 hover:bg-transparent hover:border-2 hover:border-purple-800 rounded-2xl px-4 py-2 hover:border-dotted text-white hover:text-purple-700 font-semibold cursor-pointer ml-2">
          Login
        </button>
        <button className="bg-purple-600 hover:bg-transparent hover:border-2 hover:border-purple-800 rounded-2xl px-4 py-2 hover:border-dotted text-white hover:text-purple-700 font-semibold cursor-pointer ml-2">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Navbar;
