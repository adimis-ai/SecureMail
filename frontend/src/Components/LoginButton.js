//1.
import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; 

const LoginButton = () => {
  //2.
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div>
        <div className="relative min-h-screen  grid bg-black ">
          <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
            <div
              className="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative"
              style={{
                backgroundImage:
                  "url(https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png)"
              }}
            >
              <div className="absolute bg-black  opacity-25 inset-0 z-0" />
              <div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
                <div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center ">
                  <svg
                    viewBox="0 0 24 24"
                    className=" text-white ml-3 w-auto lg:h-20 h-15 inline"
                    fill="currentColor"
                  >
                    <g>
                      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
              <div className="max-w-xl w-full space-y-12">
                <div className="lg:text-left text-center">
                  <h2 className="mt-6  font-bold text-gray-100">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-10 w-auto inline"
                      fill="currentColor"
                    >
                      <g>
                        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                      </g>
                    </svg>
                  </h2>
                  <h2 className="mt-6 text-7xl font-bold text-gray-100">
                    Secure your mails NOW
                  </h2>
                  <p className="mt-10 text-4xl text-gray-200">Join  today.</p>
                </div>
                <div className="flex flex-row justify-center items-center space-x-3" />
                <div>
                  <button
                    onClick={() => loginWithRedirect()}
                    type="submit"
                    className="lg:w-3/5 w-full flex justify-center text-gray-100 p-4   rounded-full tracking-wide font-bold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg bg-indigo-600 cursor-pointer transition ease-in duration-300"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

//3.
export default LoginButton;


