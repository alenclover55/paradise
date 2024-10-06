import classNames from "classnames";
import { useState } from "react";

function WalletModal() {
  const [formState, setFormState] = useState("deposite");
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#EEEFFA] bg-opacity-75 dark:bg-[#131627bb] z-50 flex items-center justify-center">
      <div className="w-[740px] flex rounded-[18px] bg-white dark:bg-[#252A42] overflow-hidden">
        <div className="w-[45%] px-[25px] pt-[29px] pb-[25px] bg-[#E0E3F4] dark:bg-[#2D324D] rounded-2xl">
          <div className="flex items-center gap-2">
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                id="vuesax/bold/wallet-2"
                rx="-0.500000"
                width="23.000000"
                height="23.000000"
                transform="translate(0.500000 0.500000)"
                fill="#008EFF"
                fill-opacity="0"
              />
              <g opacity="0.000000" />
              <path
                id="Vector"
                d="M22 10.97L22 13.03C22 13.58 21.56 14.03 21 14.05L19.04 14.05C17.95 14.05 16.96 13.26 16.87 12.18C16.82 11.55 17.06 10.96 17.48 10.55C17.84 10.17 18.35 9.95 18.91 9.95L21 9.95C21.56 9.97 22 10.42 22 10.97Z"
                fill="#008EFF"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
              <path
                id="Vector"
                d="M20.46 15.55L19.04 15.55C17.13 15.55 15.54 14.12 15.37 12.3C15.29 11.26 15.66 10.22 16.42 9.47C17.07 8.82 17.95 8.45 18.91 8.45L20.46 8.45C20.76 8.45 21 8.21 20.97 7.92C20.75 5.49 19.13 3.83 16.75 3.55C16.51 3.5 16.26 3.5 16 3.5L7 3.5C6.71 3.5 6.44 3.52 6.18 3.56C3.63 3.88 2 5.78 2 8.5L2 15.5C2 18.26 4.23 20.5 7 20.5L16 20.5C18.79 20.5 20.73 18.75 20.97 16.08C21 15.79 20.76 15.55 20.46 15.55ZM13 9.75L7 9.75C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25L13 8.25C13.4 8.25 13.75 8.59 13.75 9C13.75 9.41 13.4 9.75 13 9.75Z"
                fill="#008EFF"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
            <p className="text-lg font-semibold text-[#353C5A] dark:text-white">
              Кошелек
            </p>
          </div>
          <div className="bg-white dark:bg-[#353C5A] rounded-xl flex w-full mt-[21.6px] mb-[15px]">
            <button
              onClick={() => setFormState("deposite")}
              className={classNames(
                "flex items-center justify-center w-1/2 gap-2 py-4 text-sm font-semibold text-[#8D9BCB] rounded-xl",
                { ["bg-[#008EFF]  text-white"]: formState === "deposite" }
              )}
            >
              <svg
                width="16.000000"
                height="16.000000"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={classNames("fill-[#8D9BCB]", {
                    ["fill-white"]: formState === "deposite",
                  })}
                  id="↳ Icon Color"
                  d="M8 0C8.55 0 9 0.44 9 1L9 7L15 7C15.55 7 16 7.44 16 8C16 8.55 15.55 9 15 9L9 9L9 15C9 15.55 8.55 16 8 16C7.44 16 7 15.55 7 15L6.99 9L1 9C0.44 9 0 8.55 0 8C0 7.44 0.44 7 1 7L6.99 7L7 1C7 0.44 7.44 0 8 0Z"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
              Пополнить
            </button>
            <button
              onClick={() => setFormState("withdraw")}
              className={classNames(
                "flex items-center justify-center w-1/2 gap-2 py-4 text-sm font-semibold text-[#8D9BCB]  rounded-xl",
                { ["bg-[#008EFF] text-white"]: formState === "withdraw" }
              )}
            >
              <svg
                width="16.000000"
                height="2.000000"
                viewBox="0 0 16 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className={classNames("fill-[#8D9BCB]", {
                    ["fill-white"]: formState === "withdraw",
                  })}
                  id="Rectangle 49"
                  rx="1.000000"
                  width="16.000000"
                  height="2.000000"
                  fill-opacity="1.000000"
                />
              </svg>
              Вывод
            </button>
          </div>
          <div>
            <p className="text-xs font-semibold leading-3 text-[#353C5A] dark:text-white mb-[15px]">
              Выберите систему
            </p>
            <div className="grid grid-cols-2 gap-[10px]">
              <div className="p-2 h-[80px] bg-white dark:bg-[#353C5A] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center p-[3px] bg-[#008EFF] rounded-md">
                    <svg
                      width="10.824219"
                      height="10.353516"
                      viewBox="0 0 10.8242 10.3535"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Star 1"
                        d="M4.84 0.41L3.97 3.08C3.89 3.32 3.66 3.49 3.4 3.49L0.6 3.49C0.02 3.49 -0.23 4.23 0.24 4.58L2.51 6.22C2.72 6.38 2.81 6.65 2.73 6.89L1.86 9.56C1.68 10.11 2.32 10.57 2.79 10.23L5.05 8.58C5.26 8.43 5.55 8.43 5.76 8.58L8.03 10.23C8.5 10.57 9.13 10.11 8.95 9.56L8.08 6.89C8 6.65 8.09 6.38 8.3 6.22L10.57 4.58C11.04 4.23 10.8 3.49 10.22 3.49L7.41 3.49C7.16 3.49 6.92 3.32 6.84 3.08L5.98 0.41C5.8 -0.14 5.02 -0.14 4.84 0.41Z"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold leading-3 text-white py-[6px] px-1 bg-[#16A58B] rounded-md">
                    +3%
                  </span>
                </div>
                <div className="flex items-center justify-center mt-[-10px]">
                  <img src="/assets/images/sbp_logo.png" alt="" />
                </div>
                <p className="text-xs font-semibold leading-3 text-[#353C5A] dark:text-white">
                  СБП
                </p>
              </div>
              <div className="p-2 h-[80px] bg-white dark:bg-[#353C5A] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center p-[3px] bg-[#008EFF] rounded-md">
                    <svg
                      width="10.824219"
                      height="10.353516"
                      viewBox="0 0 10.8242 10.3535"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Star 1"
                        d="M4.84 0.41L3.97 3.08C3.89 3.32 3.66 3.49 3.4 3.49L0.6 3.49C0.02 3.49 -0.23 4.23 0.24 4.58L2.51 6.22C2.72 6.38 2.81 6.65 2.73 6.89L1.86 9.56C1.68 10.11 2.32 10.57 2.79 10.23L5.05 8.58C5.26 8.43 5.55 8.43 5.76 8.58L8.03 10.23C8.5 10.57 9.13 10.11 8.95 9.56L8.08 6.89C8 6.65 8.09 6.38 8.3 6.22L10.57 4.58C11.04 4.23 10.8 3.49 10.22 3.49L7.41 3.49C7.16 3.49 6.92 3.32 6.84 3.08L5.98 0.41C5.8 -0.14 5.02 -0.14 4.84 0.41Z"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold leading-3 text-white py-[6px] px-1 bg-[#16A58B] rounded-md">
                    +3%
                  </span>
                </div>
                <div className="flex items-center justify-center mt-[-10px]">
                  <img src="/assets/images/sbp_logo.png" alt="" />
                </div>
                <p className="text-xs font-semibold leading-3 text-[#353C5A] dark:text-white">
                  СБП
                </p>
              </div>
              <div className="p-2 h-[80px] bg-white dark:bg-[#353C5A] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center p-[3px] bg-[#008EFF] rounded-md">
                    <svg
                      width="10.824219"
                      height="10.353516"
                      viewBox="0 0 10.8242 10.3535"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Star 1"
                        d="M4.84 0.41L3.97 3.08C3.89 3.32 3.66 3.49 3.4 3.49L0.6 3.49C0.02 3.49 -0.23 4.23 0.24 4.58L2.51 6.22C2.72 6.38 2.81 6.65 2.73 6.89L1.86 9.56C1.68 10.11 2.32 10.57 2.79 10.23L5.05 8.58C5.26 8.43 5.55 8.43 5.76 8.58L8.03 10.23C8.5 10.57 9.13 10.11 8.95 9.56L8.08 6.89C8 6.65 8.09 6.38 8.3 6.22L10.57 4.58C11.04 4.23 10.8 3.49 10.22 3.49L7.41 3.49C7.16 3.49 6.92 3.32 6.84 3.08L5.98 0.41C5.8 -0.14 5.02 -0.14 4.84 0.41Z"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold leading-3 text-white py-[6px] px-1 bg-[#16A58B] rounded-md">
                    +3%
                  </span>
                </div>
                <div className="flex items-center justify-center mt-[-10px]">
                  <img src="/assets/images/sbp_logo.png" alt="" />
                </div>
                <p className="text-xs font-semibold leading-3 text-[#353C5A] dark:text-white">
                  СБП
                </p>
              </div>
              <div className="p-2 h-[80px] bg-white dark:bg-[#353C5A] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center p-[3px] bg-[#008EFF] rounded-md">
                    <svg
                      width="10.824219"
                      height="10.353516"
                      viewBox="0 0 10.8242 10.3535"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Star 1"
                        d="M4.84 0.41L3.97 3.08C3.89 3.32 3.66 3.49 3.4 3.49L0.6 3.49C0.02 3.49 -0.23 4.23 0.24 4.58L2.51 6.22C2.72 6.38 2.81 6.65 2.73 6.89L1.86 9.56C1.68 10.11 2.32 10.57 2.79 10.23L5.05 8.58C5.26 8.43 5.55 8.43 5.76 8.58L8.03 10.23C8.5 10.57 9.13 10.11 8.95 9.56L8.08 6.89C8 6.65 8.09 6.38 8.3 6.22L10.57 4.58C11.04 4.23 10.8 3.49 10.22 3.49L7.41 3.49C7.16 3.49 6.92 3.32 6.84 3.08L5.98 0.41C5.8 -0.14 5.02 -0.14 4.84 0.41Z"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold leading-3 text-white py-[6px] px-1 bg-[#16A58B] rounded-md">
                    +3%
                  </span>
                </div>
                <div className="flex items-center justify-center mt-[-10px]">
                  <img src="/assets/images/sbp_logo.png" alt="" />
                </div>
                <p className="text-xs font-semibold leading-3 text-[#353C5A] dark:text-white">
                  СБП
                </p>
              </div>
              <div className="p-2 h-[80px] bg-white dark:bg-[#353C5A] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center p-[3px] bg-[#008EFF] rounded-md">
                    <svg
                      width="10.824219"
                      height="10.353516"
                      viewBox="0 0 10.8242 10.3535"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Star 1"
                        d="M4.84 0.41L3.97 3.08C3.89 3.32 3.66 3.49 3.4 3.49L0.6 3.49C0.02 3.49 -0.23 4.23 0.24 4.58L2.51 6.22C2.72 6.38 2.81 6.65 2.73 6.89L1.86 9.56C1.68 10.11 2.32 10.57 2.79 10.23L5.05 8.58C5.26 8.43 5.55 8.43 5.76 8.58L8.03 10.23C8.5 10.57 9.13 10.11 8.95 9.56L8.08 6.89C8 6.65 8.09 6.38 8.3 6.22L10.57 4.58C11.04 4.23 10.8 3.49 10.22 3.49L7.41 3.49C7.16 3.49 6.92 3.32 6.84 3.08L5.98 0.41C5.8 -0.14 5.02 -0.14 4.84 0.41Z"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold leading-3 text-white py-[6px] px-1 bg-[#16A58B] rounded-md">
                    +3%
                  </span>
                </div>
                <div className="flex items-center justify-center mt-[-10px]">
                  <img src="/assets/images/sbp_logo.png" alt="" />
                </div>
                <p className="text-xs font-semibold leading-3 text-[#353C5A] dark:text-white">
                  СБП
                </p>
              </div>
              <div className="p-2 h-[80px] bg-white dark:bg-[#353C5A] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center p-[3px] bg-[#008EFF] rounded-md">
                    <svg
                      width="10.824219"
                      height="10.353516"
                      viewBox="0 0 10.8242 10.3535"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Star 1"
                        d="M4.84 0.41L3.97 3.08C3.89 3.32 3.66 3.49 3.4 3.49L0.6 3.49C0.02 3.49 -0.23 4.23 0.24 4.58L2.51 6.22C2.72 6.38 2.81 6.65 2.73 6.89L1.86 9.56C1.68 10.11 2.32 10.57 2.79 10.23L5.05 8.58C5.26 8.43 5.55 8.43 5.76 8.58L8.03 10.23C8.5 10.57 9.13 10.11 8.95 9.56L8.08 6.89C8 6.65 8.09 6.38 8.3 6.22L10.57 4.58C11.04 4.23 10.8 3.49 10.22 3.49L7.41 3.49C7.16 3.49 6.92 3.32 6.84 3.08L5.98 0.41C5.8 -0.14 5.02 -0.14 4.84 0.41Z"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold leading-3 text-white py-[6px] px-1 bg-[#16A58B] rounded-md">
                    +3%
                  </span>
                </div>
                <div className="flex items-center justify-center mt-[-10px]">
                  <img src="/assets/images/sbp_logo.png" alt="" />
                </div>
                <p className="text-xs font-semibold leading-3 text-[#353C5A] dark:text-white">
                  СБП
                </p>
              </div>
              <div className="p-2 h-[80px] bg-white dark:bg-[#353C5A] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center p-[3px] bg-[#008EFF] rounded-md">
                    <svg
                      width="10.824219"
                      height="10.353516"
                      viewBox="0 0 10.8242 10.3535"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Star 1"
                        d="M4.84 0.41L3.97 3.08C3.89 3.32 3.66 3.49 3.4 3.49L0.6 3.49C0.02 3.49 -0.23 4.23 0.24 4.58L2.51 6.22C2.72 6.38 2.81 6.65 2.73 6.89L1.86 9.56C1.68 10.11 2.32 10.57 2.79 10.23L5.05 8.58C5.26 8.43 5.55 8.43 5.76 8.58L8.03 10.23C8.5 10.57 9.13 10.11 8.95 9.56L8.08 6.89C8 6.65 8.09 6.38 8.3 6.22L10.57 4.58C11.04 4.23 10.8 3.49 10.22 3.49L7.41 3.49C7.16 3.49 6.92 3.32 6.84 3.08L5.98 0.41C5.8 -0.14 5.02 -0.14 4.84 0.41Z"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold leading-3 text-white py-[6px] px-1 bg-[#16A58B] rounded-md">
                    +3%
                  </span>
                </div>
                <div className="flex items-center justify-center mt-[-10px]">
                  <img src="/assets/images/sbp_logo.png" alt="" />
                </div>
                <p className="text-xs font-semibold leading-3 text-[#353C5A] dark:text-white">
                  СБП
                </p>
              </div>
              <div className="p-2 h-[80px] bg-white dark:bg-[#353C5A] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center p-[3px] bg-[#008EFF] rounded-md">
                    <svg
                      width="10.824219"
                      height="10.353516"
                      viewBox="0 0 10.8242 10.3535"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Star 1"
                        d="M4.84 0.41L3.97 3.08C3.89 3.32 3.66 3.49 3.4 3.49L0.6 3.49C0.02 3.49 -0.23 4.23 0.24 4.58L2.51 6.22C2.72 6.38 2.81 6.65 2.73 6.89L1.86 9.56C1.68 10.11 2.32 10.57 2.79 10.23L5.05 8.58C5.26 8.43 5.55 8.43 5.76 8.58L8.03 10.23C8.5 10.57 9.13 10.11 8.95 9.56L8.08 6.89C8 6.65 8.09 6.38 8.3 6.22L10.57 4.58C11.04 4.23 10.8 3.49 10.22 3.49L7.41 3.49C7.16 3.49 6.92 3.32 6.84 3.08L5.98 0.41C5.8 -0.14 5.02 -0.14 4.84 0.41Z"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold leading-3 text-white py-[6px] px-1 bg-[#16A58B] rounded-md">
                    +3%
                  </span>
                </div>
                <div className="flex items-center justify-center mt-[-10px]">
                  <img src="/assets/images/sbp_logo.png" alt="" />
                </div>
                <p className="text-xs font-semibold leading-3 text-[#353C5A] dark:text-white">
                  СБП
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-8 bg-white dark:bg-[#353C5A] border-none dark:border border-[#353C5A] rounded-xl py-4 mt-5">
              <svg
                width="16.000000"
                height="16.000000"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M8 0C6.41 0 4.87 0.46 3.55 1.34C2.24 2.22 1.21 3.47 0.6 4.93C0 6.4 -0.16 8 0.15 9.56C0.46 11.11 1.22 12.53 2.34 13.65C3.46 14.77 4.88 15.53 6.43 15.84C7.99 16.15 9.59 15.99 11.06 15.39C12.52 14.78 13.77 13.76 14.65 12.44C15.53 11.12 16 9.58 16 8C15.99 5.87 15.15 3.84 13.65 2.34C12.15 0.84 10.12 0 8 0ZM8 14.54C6.7 14.54 5.44 14.16 4.36 13.44C3.28 12.72 2.44 11.7 1.95 10.5C1.45 9.3 1.32 7.99 1.58 6.72C1.83 5.45 2.45 4.28 3.37 3.37C4.28 2.45 5.45 1.83 6.72 1.58C7.99 1.32 9.3 1.45 10.5 1.95C11.7 2.44 12.72 3.28 13.44 4.36C14.16 5.43 14.54 6.7 14.54 8C14.54 9.73 13.85 11.39 12.62 12.62C11.39 13.85 9.73 14.54 8 14.54Z"
                  fill="#7785B3"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
                <path
                  id="Vector"
                  d="M8.72 7.69L8.72 3.63C8.72 3.44 8.65 3.25 8.51 3.12C8.37 2.98 8.19 2.9 8 2.9C7.9 2.9 7.8 2.92 7.72 2.96C7.63 3 7.55 3.05 7.48 3.12C7.41 3.18 7.36 3.27 7.32 3.35C7.29 3.44 7.27 3.54 7.27 3.63L7.27 8C7.27 8.19 7.34 8.37 7.48 8.51L9.66 10.69C9.8 10.82 9.98 10.9 10.17 10.89C10.36 10.89 10.55 10.82 10.68 10.68C10.82 10.55 10.89 10.36 10.89 10.17C10.9 9.98 10.82 9.8 10.69 9.66L8.72 7.69Z"
                  fill="#7785B3"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
              <p className="text-xs font-semibold leading-3 text-[#818EBD]">
                История платежей
              </p>
            </div>
          </div>
        </div>
        <div className="w-[55%] bg-white dark:bg-[#252A42] py-[25px] pl-[26px] pr-[25px]">
          {formState === "deposite" && (
            <>
              <div className="flex items-center justify-between mb-[15px]">
                <h3 className="text-lg font-bold text-[#353C5A] dark:text-white">
                  Пополнение баланса
                </h3>
                <span>
                  <svg
                    width="29.000000"
                    height="29.000000"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <rect
                      className="fill-[#EDEFFA] dark:fill-[#2D3350]"
                      id="Rectangle 4600"
                      rx="10.000000"
                      width="29.000000"
                      height="29.000000"
                      fill-opacity="1.000000"
                    />
                    <path
                      id="↳ Icon Color"
                      d="M10.16 10.16C10.38 9.94 10.74 9.94 10.96 10.16L14.5 13.7L18.03 10.16C18.24 9.96 18.56 9.94 18.78 10.11L18.83 10.16C19.05 10.38 19.05 10.74 18.83 10.96L15.29 14.5L18.83 18.03C19.03 18.24 19.05 18.56 18.88 18.78L18.83 18.83C18.61 19.05 18.25 19.05 18.03 18.83L14.5 15.29L10.96 18.83C10.75 19.03 10.43 19.05 10.21 18.88L10.16 18.83C9.94 18.61 9.94 18.25 10.16 18.03L13.7 14.5L10.16 10.96C9.96 10.75 9.94 10.43 10.11 10.21L10.16 10.16Z"
                      fill="#7785B3"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#8D9BCB]">
                  Варианты оплаты
                </p>
                <div className="flex items-center gap-2 mt-2 mb-[15px]">
                  <button className="py-[10px] px-[15px] bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl text-sm font-bold leading-tight text-center text-[#8D9BCB]">
                    Базовый
                  </button>
                  <button className="py-[10px] px-[15px] bg-[#16A58B] rounded-xl text-sm font-bold leading-tight text-center text-white">
                    Вариант 2
                  </button>
                </div>
                <div className="bg-[#EDEFFA] dark:bg-[#252A42] flex items-center gap-[8px] relative rounded-[12px]">
                  <svg
                    className="absolute left-[19px] top-[14px]"
                    width="10.718750"
                    height="14.000000"
                    viewBox="0 0 10.7188 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M6.58 0L2.48 0C2.01 0 1.64 0.37 1.64 0.84L1.64 6.56L0.84 6.56C0.37 6.56 0 6.94 0 7.41C0 7.87 0.37 8.25 0.84 8.25L1.64 8.25L1.64 9.84L0.84 9.84C0.37 9.84 0 10.22 0 10.69C0 11.15 0.37 11.53 0.84 11.53L1.64 11.53L1.64 13.15C1.64 13.62 2.01 14 2.48 14C2.95 14 3.33 13.62 3.33 13.15L3.33 11.53L6.58 11.53C7.05 11.53 7.43 11.15 7.43 10.69C7.43 10.22 7.05 9.84 6.58 9.84L3.33 9.84L3.33 8.25L6.58 8.25C8.86 8.25 10.71 6.4 10.71 4.12C10.71 1.79 8.81 0 6.58 0ZM6.58 6.56L3.33 6.56L3.33 1.69L6.58 1.69C7.92 1.69 9.02 2.77 9.02 4.12C9.02 5.47 7.93 6.56 6.58 6.56Z"
                      fill="#008EFF"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <p className="text-xs font-medium leading-none text-center text-[#8D9BCB] text-nowrap flex items-center gap-[4.69px] absolute right-[17px] top-1/2 -translate-y-1/2">
                    300{" "}
                    <span>
                      <svg
                        width="6.890625"
                        height="9.000000"
                        viewBox="0 0 6.89062 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Vector"
                          d="M4.23 0L1.59 0C1.29 0 1.05 0.24 1.05 0.54L1.05 4.21L0.54 4.21C0.24 4.21 0 4.46 0 4.76C0 5.06 0.24 5.3 0.54 5.3L1.05 5.3L1.05 6.32L0.54 6.32C0.24 6.32 0 6.57 0 6.87C0 7.17 0.24 7.41 0.54 7.41L1.05 7.41L1.05 8.45C1.05 8.75 1.29 9 1.59 9C1.9 9 2.14 8.75 2.14 8.45L2.14 7.41L4.23 7.41C4.53 7.41 4.78 7.17 4.78 6.87C4.78 6.57 4.53 6.32 4.23 6.32L2.14 6.32L2.14 5.3L4.23 5.3C5.7 5.3 6.89 4.11 6.89 2.65C6.89 1.15 5.66 0 4.23 0ZM4.23 4.21L2.14 4.21L2.14 1.08L4.23 1.08C5.09 1.08 5.8 1.78 5.8 2.65C5.8 3.51 5.09 4.21 4.23 4.21Z"
                          fill="#8D9BCB"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </svg>
                    </span>{" "}
                    -72100{" "}
                    <span>
                      <svg
                        width="6.890625"
                        height="9.000000"
                        viewBox="0 0 6.89062 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Vector"
                          d="M4.23 0L1.59 0C1.29 0 1.05 0.24 1.05 0.54L1.05 4.21L0.54 4.21C0.24 4.21 0 4.46 0 4.76C0 5.06 0.24 5.3 0.54 5.3L1.05 5.3L1.05 6.32L0.54 6.32C0.24 6.32 0 6.57 0 6.87C0 7.17 0.24 7.41 0.54 7.41L1.05 7.41L1.05 8.45C1.05 8.75 1.29 9 1.59 9C1.9 9 2.14 8.75 2.14 8.45L2.14 7.41L4.23 7.41C4.53 7.41 4.78 7.17 4.78 6.87C4.78 6.57 4.53 6.32 4.23 6.32L2.14 6.32L2.14 5.3L4.23 5.3C5.7 5.3 6.89 4.11 6.89 2.65C6.89 1.15 5.66 0 4.23 0ZM4.23 4.21L2.14 4.21L2.14 1.08L4.23 1.08C5.09 1.08 5.8 1.78 5.8 2.65C5.8 3.51 5.09 4.21 4.23 4.21Z"
                          fill="#8D9BCB"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </p>
                  <input
                    className="bg-[#EDEFFA] dark:bg-[#353C5A] placeholder:text-[#7F89C1] w-full text-[#7F89C1] text-[14px] font-semibold border-none py-[12px] pl-[46px] outline-none focus:outline-[#22263c] rounded-[12px]"
                    type="text"
                    placeholder="0"
                  />
                </div>
                <div className="flex items-center justify-between mt-[17px]">
                  <span className="py-[10px] px-[15px] bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl text-sm font-bold leading-tight text-center text-[#8D9BCB]">
                    100
                  </span>
                  <span className="py-[10px] px-[15px] bg-[#16A58B] rounded-xl text-sm font-bold leading-tight text-center text-white">
                    200
                  </span>
                  <span className="py-[10px] px-[15px] bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl text-sm font-bold leading-tight text-center text-[#8D9BCB]">
                    500
                  </span>
                  <span className="py-[10px] px-[15px] bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl text-sm font-bold leading-tight text-center text-[#8D9BCB]">
                    1000
                  </span>
                  <span className="py-[10px] px-[15px] bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl text-sm font-bold leading-tight text-center text-[#8D9BCB]">
                    1500
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-[15px] mt-[15px]">
                  <div className="flex justify-between items-center bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl py-[7px] pl-[7px] pr-[6px]">
                    <div>
                      <p className="text-xs font-bold text-center text-white py-[6px] px-2 bg-[#16A58B] rounded-lg mb-[3px]">
                        +30FS
                      </p>
                      <p className="text-xs font-semibold text-[#8D9BCB]">
                        от 500
                      </p>
                    </div>
                    <img
                      className="w-[30px] h-[42px] block"
                      src="/assets/images/game_little.png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between items-center bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl py-[7px] pl-[7px] pr-[6px]">
                    <div>
                      <p className="text-xs font-bold text-center text-white py-[6px] px-2 bg-[#16A58B] rounded-lg mb-[3px]">
                        +30FS
                      </p>
                      <p className="text-xs font-semibold text-[#8D9BCB]">
                        от 500
                      </p>
                    </div>
                    <img
                      className="w-[30px] h-[42px] block"
                      src="/assets/images/game_little.png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between items-center bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl py-[7px] pl-[7px] pr-[6px]">
                    <div>
                      <p className="text-xs font-bold text-center text-white py-[6px] px-2 bg-[#16A58B] rounded-lg mb-[3px]">
                        +30FS
                      </p>
                      <p className="text-xs font-semibold text-[#8D9BCB]">
                        от 500
                      </p>
                    </div>
                    <img
                      className="w-[30px] h-[42px] block"
                      src="/assets/images/game_little.png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between items-center bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl py-[7px] pl-[7px] pr-[6px]">
                    <div>
                      <p className="text-xs font-bold text-center text-white py-[6px] px-2 bg-[#16A58B] rounded-lg mb-[3px]">
                        +30FS
                      </p>
                      <p className="text-xs font-semibold text-[#8D9BCB]">
                        от 500
                      </p>
                    </div>
                    <img
                      className="w-[30px] h-[42px] block"
                      src="/assets/images/game_little.png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between items-center bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl py-[7px] pl-[7px] pr-[6px]">
                    <div>
                      <p className="text-xs font-bold text-center text-white py-[6px] px-2 bg-[#16A58B] rounded-lg mb-[3px]">
                        +30FS
                      </p>
                      <p className="text-xs font-semibold text-[#8D9BCB]">
                        от 500
                      </p>
                    </div>
                    <img
                      className="w-[30px] h-[42px] block"
                      src="/assets/images/game_little.png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between items-center bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl py-[7px] pl-[7px] pr-[6px]">
                    <div>
                      <p className="text-xs font-bold text-center text-white py-[6px] px-2 bg-[#16A58B] rounded-lg mb-[3px]">
                        +30FS
                      </p>
                      <p className="text-xs font-semibold text-[#8D9BCB]">
                        от 500
                      </p>
                    </div>
                    <img
                      className="w-[30px] h-[42px] block"
                      src="/assets/images/game_little.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-[15px]">
                  <p className="text-sm font-semibold text-[#8D9BCB] mb-2">
                    Промокод (если есть)
                  </p>
                  <div className="bg-[#EDEFFA] dark:bg-[#252A42] flex items-center gap-[8px] relative rounded-[12px]">
                    <svg
                      className="absolute left-[19px] top-[14px]"
                      width="14.000000"
                      height="14.000000"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M11.82 10.87C11.82 10.57 11.72 10.3 11.53 10.08C11.35 9.85 11.08 9.74 10.72 9.74C10.36 9.74 10.09 9.85 9.91 10.08C9.72 10.3 9.62 10.57 9.62 10.87C9.62 11.16 9.72 11.42 9.91 11.64C10.09 11.86 10.36 11.97 10.72 11.97C11.08 11.97 11.35 11.86 11.53 11.64C11.72 11.42 11.82 11.16 11.82 10.87ZM4.37 3.14C4.37 2.83 4.27 2.57 4.08 2.35C3.88 2.12 3.61 2.01 3.27 2.01C2.91 2.01 2.63 2.12 2.44 2.35C2.25 2.57 2.15 2.83 2.15 3.14C2.15 3.43 2.25 3.69 2.44 3.91C2.63 4.13 2.91 4.24 3.27 4.24C3.61 4.24 3.88 4.13 4.08 3.91C4.27 3.69 4.37 3.43 4.37 3.14ZM14 10.87C14 11.28 13.91 11.67 13.75 12.02C13.58 12.39 13.35 12.71 13.06 12.99C12.77 13.26 12.43 13.47 12.03 13.63C11.63 13.8 11.19 13.89 10.72 13.89C10.25 13.89 9.82 13.8 9.42 13.63C9.02 13.47 8.67 13.26 8.38 12.99C8.09 12.71 7.87 12.39 7.7 12.02C7.53 11.67 7.45 11.28 7.45 10.87C7.45 10.46 7.53 10.07 7.7 9.7C7.87 9.35 8.09 9.02 8.38 8.73C8.67 8.45 9.02 8.23 9.42 8.07C9.82 7.91 10.25 7.84 10.72 7.84C11.19 7.84 11.63 7.91 12.03 8.07C12.43 8.23 12.77 8.45 13.06 8.73C13.35 9.02 13.58 9.35 13.75 9.7C13.91 10.07 14 10.46 14 10.87ZM11.74 1.04C11.74 1.11 11.73 1.19 11.72 1.27C11.7 1.36 11.66 1.47 11.57 1.6L4.45 13.37C4.28 13.57 4.14 13.72 4.03 13.83C3.92 13.94 3.74 14 3.5 14C3.2 14 2.93 13.89 2.67 13.68C2.4 13.49 2.27 13.25 2.27 12.95C2.27 12.82 2.3 12.69 2.36 12.57C2.4 12.45 2.45 12.35 2.5 12.28L9.52 0.6C9.66 0.35 9.8 0.19 9.94 0.1C10.06 0.03 10.25 0 10.5 0C10.81 0 11.1 0.1 11.37 0.31C11.61 0.51 11.74 0.76 11.74 1.04ZM6.52 3.14C6.52 3.55 6.44 3.94 6.27 4.29C6.12 4.66 5.9 4.98 5.61 5.26C5.32 5.53 4.97 5.74 4.57 5.9C4.16 6.07 3.72 6.15 3.27 6.15C2.8 6.15 2.36 6.07 1.96 5.9C1.55 5.74 1.2 5.53 0.91 5.26C0.62 4.98 0.4 4.66 0.24 4.29C0.08 3.94 0 3.55 0 3.14C0 2.72 0.08 2.33 0.24 1.97C0.4 1.62 0.62 1.29 0.91 1C1.2 0.72 1.55 0.5 1.96 0.34C2.36 0.18 2.8 0.1 3.27 0.1C3.72 0.1 4.16 0.18 4.57 0.34C4.97 0.5 5.32 0.72 5.61 1C5.9 1.29 6.12 1.62 6.27 1.97C6.44 2.33 6.52 2.72 6.52 3.14Z"
                        fill="#8D9BCB"
                        fill-opacity="1.000000"
                        fill-rule="nonzero"
                      />
                    </svg>

                    <input
                      className="bg-[#EDEFFA] dark:bg-[#353C5A] placeholder:text-[#7F89C1] w-full text-[#7F89C1] text-[14px] font-semibold border-none py-[12px] pl-[46px] outline-none focus:outline-[#22263c] rounded-[12px]"
                      type="text"
                      placeholder="Введите промокод"
                    />
                  </div>
                  <button className="flex items-center justify-center w-full py-[19px] bg-[#008EFF] rounded-xl text-sm font-bold text-center text-white mt-[17px]">
                    Перейти к оплате
                  </button>
                </div>
              </div>
            </>
          )}
          {formState === "withdraw" && (
            <>
              <div className="flex items-center justify-between mb-[15px]">
                <h3 className="text-lg font-bold text-[#353C5A] dark:text-white">
                  Вывод средств
                </h3>
                <span>
                  <svg
                    width="29.000000"
                    height="29.000000"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <rect
                      className="fill-[#EDEFFA] dark:fill-[#2D3350]"
                      id="Rectangle 4600"
                      rx="10.000000"
                      width="29.000000"
                      height="29.000000"
                      fill-opacity="1.000000"
                    />
                    <path
                      id="↳ Icon Color"
                      d="M10.16 10.16C10.38 9.94 10.74 9.94 10.96 10.16L14.5 13.7L18.03 10.16C18.24 9.96 18.56 9.94 18.78 10.11L18.83 10.16C19.05 10.38 19.05 10.74 18.83 10.96L15.29 14.5L18.83 18.03C19.03 18.24 19.05 18.56 18.88 18.78L18.83 18.83C18.61 19.05 18.25 19.05 18.03 18.83L14.5 15.29L10.96 18.83C10.75 19.03 10.43 19.05 10.21 18.88L10.16 18.83C9.94 18.61 9.94 18.25 10.16 18.03L13.7 14.5L10.16 10.96C9.96 10.75 9.94 10.43 10.11 10.21L10.16 10.16Z"
                      fill="#7785B3"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#8D9BCB] mb-2">
                  Введите реквизиты:
                </p>
                <div className="bg-[#EDEFFA] dark:bg-[#252A42] flex items-center gap-[8px] relative rounded-[12px]">
                  <svg
                    className="absolute left-[19px] top-[14px]"
                    width="14.000000"
                    height="14.000000"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M11.82 10.87C11.82 10.57 11.72 10.3 11.53 10.08C11.35 9.85 11.08 9.74 10.72 9.74C10.36 9.74 10.09 9.85 9.91 10.08C9.72 10.3 9.62 10.57 9.62 10.87C9.62 11.16 9.72 11.42 9.91 11.64C10.09 11.86 10.36 11.97 10.72 11.97C11.08 11.97 11.35 11.86 11.53 11.64C11.72 11.42 11.82 11.16 11.82 10.87ZM4.37 3.14C4.37 2.83 4.27 2.57 4.08 2.35C3.88 2.12 3.61 2.01 3.27 2.01C2.91 2.01 2.63 2.12 2.44 2.35C2.25 2.57 2.15 2.83 2.15 3.14C2.15 3.43 2.25 3.69 2.44 3.91C2.63 4.13 2.91 4.24 3.27 4.24C3.61 4.24 3.88 4.13 4.08 3.91C4.27 3.69 4.37 3.43 4.37 3.14ZM14 10.87C14 11.28 13.91 11.67 13.75 12.02C13.58 12.39 13.35 12.71 13.06 12.99C12.77 13.26 12.43 13.47 12.03 13.63C11.63 13.8 11.19 13.89 10.72 13.89C10.25 13.89 9.82 13.8 9.42 13.63C9.02 13.47 8.67 13.26 8.38 12.99C8.09 12.71 7.87 12.39 7.7 12.02C7.53 11.67 7.45 11.28 7.45 10.87C7.45 10.46 7.53 10.07 7.7 9.7C7.87 9.35 8.09 9.02 8.38 8.73C8.67 8.45 9.02 8.23 9.42 8.07C9.82 7.91 10.25 7.84 10.72 7.84C11.19 7.84 11.63 7.91 12.03 8.07C12.43 8.23 12.77 8.45 13.06 8.73C13.35 9.02 13.58 9.35 13.75 9.7C13.91 10.07 14 10.46 14 10.87ZM11.74 1.04C11.74 1.11 11.73 1.19 11.72 1.27C11.7 1.36 11.66 1.47 11.57 1.6L4.45 13.37C4.28 13.57 4.14 13.72 4.03 13.83C3.92 13.94 3.74 14 3.5 14C3.2 14 2.93 13.89 2.67 13.68C2.4 13.49 2.27 13.25 2.27 12.95C2.27 12.82 2.3 12.69 2.36 12.57C2.4 12.45 2.45 12.35 2.5 12.28L9.52 0.6C9.66 0.35 9.8 0.19 9.94 0.1C10.06 0.03 10.25 0 10.5 0C10.81 0 11.1 0.1 11.37 0.31C11.61 0.51 11.74 0.76 11.74 1.04ZM6.52 3.14C6.52 3.55 6.44 3.94 6.27 4.29C6.12 4.66 5.9 4.98 5.61 5.26C5.32 5.53 4.97 5.74 4.57 5.9C4.16 6.07 3.72 6.15 3.27 6.15C2.8 6.15 2.36 6.07 1.96 5.9C1.55 5.74 1.2 5.53 0.91 5.26C0.62 4.98 0.4 4.66 0.24 4.29C0.08 3.94 0 3.55 0 3.14C0 2.72 0.08 2.33 0.24 1.97C0.4 1.62 0.62 1.29 0.91 1C1.2 0.72 1.55 0.5 1.96 0.34C2.36 0.18 2.8 0.1 3.27 0.1C3.72 0.1 4.16 0.18 4.57 0.34C4.97 0.5 5.32 0.72 5.61 1C5.9 1.29 6.12 1.62 6.27 1.97C6.44 2.33 6.52 2.72 6.52 3.14Z"
                      fill="#8D9BCB"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <input
                    className="bg-[#EDEFFA] dark:bg-[#353C5A] placeholder:text-[#7F89C1] w-full text-[#7F89C1] text-[14px] font-semibold border-none py-[12px] pl-[46px] outline-none focus:outline-[#22263c] rounded-[12px]"
                    type="text"
                    placeholder="Введите промокод"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[21px] mt-[18px]">
                <div className="w-1/2">
                  <p className="text-sm font-semibold text-[#8D9BCB] mb-2">
                    Сумма вывода
                  </p>
                  <div className="bg-[#EDEFFA] dark:bg-[#252A42] flex items-center gap-[8px] relative rounded-[12px]">
                    <input
                      className="bg-[#EDEFFA] dark:bg-[#353C5A] placeholder:text-[#7F89C1] w-full text-[#7F89C1] text-[14px] font-semibold border-none py-[12px] pl-[12px] outline-none focus:outline-[#22263c] rounded-[12px]"
                      type="text"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <p className="text-sm font-semibold text-[#8D9BCB] mb-2 text-nowrap">
                    Сумма к получению
                  </p>
                  <div className="bg-[#EDEFFA] dark:bg-[#252A42] flex items-center gap-[8px] relative rounded-[12px]">
                    <input
                      className="bg-[#EDEFFA] dark:bg-[#353C5A] placeholder:text-[#7F89C1] w-full text-[#7F89C1] text-[14px] font-semibold border-none py-[12px] text-center outline-none focus:outline-[#22263c] rounded-[12px]"
                      type="text"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-[15px]">
                <div className="min-w-[40px] h-[24px] rounded-[111px] bg-[#EDEFFA] dark:bg-[#353C5A] relative block">
                  <span className="w-[16px] h-[16px] bg-[#16A58B] rounded-full block absolute top-1 right-1"></span>
                </div>
                <div>
                  <h3 className="text-xs font-semibold leading-none text-[#8D9BCB] ">
                    Корректность реквизитов
                  </h3>
                  <p className="text-[10px] leading-none text-[#8D9BCB] text-nowrap">
                    Подтвердите правильность введенных Вами данных
                  </p>
                </div>
              </div>
              <button className="flex items-center justify-center w-full py-[19px] bg-[#16A58B] rounded-xl text-sm font-bold text-center text-white mt-[17px]">
                Заказать выплату
              </button>
              <div>
                <div className="flex items-center justify-center gap-2 bg-[#16A58B26] rounded-xl py-[16px] pl-[16px] pr-[14px] mt-[115px]">
                  <svg
                    width="16.000000"
                    height="16.000000"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M1.33 10L7.33 10L7.33 16L4.66 16C3.78 16 2.93 15.64 2.31 15.02C1.68 14.39 1.33 13.55 1.33 12.66L1.33 10ZM16 7.33C16 7.68 15.85 8.02 15.6 8.27C15.35 8.52 15.01 8.66 14.66 8.66L8.66 8.66L8.66 5.97C8.44 5.98 8.21 6 8 6C7.78 6 7.55 5.98 7.33 5.97L7.33 8.66L1.33 8.66C0.98 8.66 0.64 8.52 0.39 8.27C0.14 8.02 0 7.68 0 7.33C0 6.62 0.28 5.94 0.78 5.44C1.28 4.94 1.95 4.66 2.66 4.66L3.82 4.66C3.44 4.33 3.14 3.92 2.94 3.46C2.74 3 2.65 2.5 2.66 2C2.66 1.82 2.73 1.65 2.86 1.52C2.98 1.4 3.15 1.33 3.33 1.33C3.5 1.33 3.67 1.4 3.8 1.52C3.92 1.65 4 1.82 4 2C4 3.74 5.58 4.35 6.78 4.56C6.33 3.77 6.07 2.9 6 2C6 1.46 6.21 0.96 6.58 0.58C6.96 0.21 7.46 0 8 0C8.53 0 9.03 0.21 9.41 0.58C9.78 0.96 10 1.46 10 2C9.92 2.9 9.66 3.77 9.21 4.56C10.41 4.35 12 3.74 12 2C12 1.82 12.07 1.65 12.19 1.52C12.32 1.4 12.49 1.33 12.66 1.33C12.84 1.33 13.01 1.4 13.13 1.52C13.26 1.65 13.33 1.82 13.33 2C13.34 2.5 13.25 3 13.05 3.46C12.85 3.92 12.55 4.33 12.17 4.66L13.33 4.66C14.04 4.66 14.71 4.94 15.21 5.44C15.71 5.94 16 6.62 16 7.33ZM7.33 2C7.41 2.7 7.64 3.39 8 4C8.35 3.39 8.58 2.7 8.66 2C8.66 1.82 8.59 1.65 8.47 1.52C8.34 1.4 8.17 1.33 8 1.33C7.82 1.33 7.65 1.4 7.52 1.52C7.4 1.65 7.33 1.82 7.33 2ZM8.66 16L11.33 16C11.77 16 12.2 15.91 12.6 15.74C13.01 15.57 13.38 15.33 13.68 15.02C14 14.71 14.24 14.34 14.41 13.94C14.58 13.53 14.66 13.1 14.66 12.66L14.66 10L8.66 10L8.66 16Z"
                      fill="#16A58B"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <p className="text-xs font-medium text-[#16A58B]">
                    Бонус к депозиту на этот способ пополнения: +3%
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 border border-[#EDEFFA] dark:border-[#353C5A] rounded-xl py-[11px] mt-[10px]">
                  <svg
                    width="16.666016"
                    height="16.666504"
                    viewBox="0 0 16.666 16.6665"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="↳ Icon Color"
                      d="M8.33 0C3.73 0 0 3.73 0 8.33C0 12.93 3.73 16.66 8.33 16.66C12.93 16.66 16.66 12.93 16.66 8.33C16.66 3.73 12.93 0 8.33 0ZM7.5 11.66L7.5 8.33C7.5 7.87 7.87 7.5 8.33 7.5C8.79 7.5 9.16 7.87 9.16 8.33L9.16 11.66C9.16 12.12 8.79 12.5 8.33 12.5C7.87 12.5 7.5 12.12 7.5 11.66ZM7.29 5.2L7.29 4.79C7.29 4.33 7.66 3.95 8.12 3.95L8.54 3.95C9 3.95 9.37 4.33 9.37 4.79L9.37 5.2C9.37 5.66 9 6.04 8.54 6.04L8.12 6.04C7.66 6.04 7.29 5.66 7.29 5.2Z"
                      fill="#8D9BCB"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>

                  <p className="text-xs font-medium text-[#8D9BCB]">
                    Комиссия: 3.00% <br />
                    Лимит одного пополнения: 100.00 ₽ - 300000.00 ₽
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default WalletModal;
