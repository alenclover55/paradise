function WalletHistoryModal() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#EEEFFA] bg-opacity-75 dark:bg-[#131627bb] z-50 flex items-center justify-center">
      <div className="w-[740px] flex rounded-[18px] bg-[#E0E3F4] dark:bg-[#252A42] overflow-hidden">
        <div className="w-[100%] bg-[#E0E3F4] dark:bg-[#252A42] py-[25px] pl-[26px] pr-[25px]">
          <div className="flex items-center justify-between mb-[15px]">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-[#353C5A] dark:text-white">
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M12 0C9.62 0 7.3 0.7 5.33 2.02C3.35 3.34 1.82 5.21 0.91 7.4C0 9.6 -0.24 12.01 0.23 14.34C0.69 16.66 1.83 18.8 3.51 20.48C5.19 22.16 7.33 23.3 9.65 23.76C11.98 24.23 14.4 23.99 16.59 23.08C18.78 22.17 20.65 20.64 21.97 18.66C23.29 16.69 24 14.37 24 12C23.99 8.81 22.73 5.76 20.48 3.51C18.23 1.26 15.18 0 12 0ZM12 21.81C10.05 21.81 8.16 21.24 6.54 20.16C4.93 19.08 3.67 17.55 2.92 15.75C2.18 13.96 1.99 11.98 2.37 10.08C2.75 8.18 3.68 6.43 5.05 5.05C6.43 3.68 8.17 2.74 10.08 2.37C11.98 1.99 13.96 2.18 15.75 2.92C17.55 3.67 19.08 4.93 20.16 6.54C21.24 8.15 21.81 10.05 21.81 12C21.81 14.6 20.77 17.09 18.93 18.93C17.09 20.77 14.6 21.81 12 21.81Z"
                  fill="#008EFF"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
                <path
                  id="Vector"
                  d="M13.08 11.54L13.08 5.45C13.08 5.16 12.97 4.88 12.76 4.68C12.56 4.47 12.28 4.36 12 4.36C11.85 4.36 11.71 4.39 11.58 4.44C11.44 4.5 11.32 4.58 11.22 4.68C11.12 4.78 11.04 4.9 10.99 5.03C10.93 5.16 10.9 5.31 10.9 5.45L10.9 12C10.9 12.28 11.02 12.56 11.22 12.77L14.5 16.04C14.7 16.24 14.98 16.35 15.26 16.34C15.55 16.34 15.82 16.23 16.02 16.02C16.22 15.82 16.34 15.55 16.34 15.26C16.34 14.98 16.24 14.7 16.04 14.5L13.08 11.54Z"
                  fill="#008EFF"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
              История платежей
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

          <div className="flex items-center justify-center gap-[50px] mb-[20px]">
            <div className="bg-white dark:bg-[#353C5A] rounded-xl flex w-[290px]">
              <button className="flex items-center justify-center w-1/2 gap-2 py-[19px] text-sm font-semibold text-white bg-[#008EFF] rounded-xl ">
                <svg
                  width="16.000000"
                  height="16.000000"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="↳ Icon Color"
                    d="M8 0C8.55 0 9 0.44 9 1L9 7L15 7C15.55 7 16 7.44 16 8C16 8.55 15.55 9 15 9L9 9L9 15C9 15.55 8.55 16 8 16C7.44 16 7 15.55 7 15L6.99 9L1 9C0.44 9 0 8.55 0 8C0 7.44 0.44 7 1 7L6.99 7L7 1C7 0.44 7.44 0 8 0Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                Пополнить
              </button>
              <button className="flex items-center justify-center gap-2 w-1/2 py-[19px] text-sm font-semibold text-[#8D9BCB] rounded-xl ">
                <svg
                  width="16.000000"
                  height="2.000000"
                  viewBox="0 0 16 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    id="Rectangle 49"
                    rx="1.000000"
                    width="16.000000"
                    height="2.000000"
                    fill="#8D9BCB"
                    fill-opacity="1.000000"
                  />
                </svg>
                Вывод
              </button>
            </div>
            <button className="w-[350px] bg-[#FFC538] py-[19px] rounded-xl text-sm font-bold text-[#252A42]">
              Не пришел депозит
            </button>
          </div>
          <div>
            <div className="grid grid-cols-4 pt-[11px] pb-[12px] pl-[14px] pr-[19px] w-full border rounded-lg border-[#C9CDE4] dark:border-[#383E5D]">
              <p className="text-xs font-semibold text-[#8D9BCB]">ID</p>
              <p className="text-xs font-semibold text-[#8D9BCB]">Система</p>
              <p className="text-xs font-semibold text-[#8D9BCB]">Сумма</p>
              <p className="text-xs font-semibold text-[#8D9BCB] justify-self-end">
                Статус
              </p>
            </div>
            <div className="flex flex-col gap-[10px] mt-[13px]">
              <div className="grid items-center grid-cols-4 bg-white dark:bg-[#353C5A] rounded-lg py-2 pl-[14px] pr-[19px]">
                <p className="text-xs font-semibold text-[#8D9BCB]">
                  #31989913124
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    width="32.000000"
                    height="32.000000"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-[#353C5A] dark:fill-white"
                      id="Vector"
                      d="M10 0L22 0C27.52 0 32 4.47 32 10L32 22C32 27.52 27.52 32 22 32L10 32C4.47 32 0 27.52 0 22L0 10C0 4.47 4.47 0 10 0Z"
                      fill="#353C5A"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path66"
                      d="M9 11.48L11.09 14.94L11.09 17.05L9 20.51L9 11.48Z"
                      fill="#5B57A2"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path68"
                      d="M17.02 13.68L18.98 12.57L22.99 12.56L17.02 15.95L17.02 13.68Z"
                      fill="#D90751"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path70"
                      d="M17.01 11.46L17.02 16.04L14.93 14.85L14.93 8L17.01 11.46Z"
                      fill="#FAB718"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path72"
                      d="M23 12.56L18.98 12.57L17.01 11.46L14.93 8L23 12.56Z"
                      fill="#ED6F26"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path74"
                      d="M17.02 20.53L17.02 18.3L14.93 17.13L14.93 24L17.02 20.53Z"
                      fill="#63B22F"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path76"
                      d="M18.98 19.43L11.09 14.94L9 11.48L22.99 19.42L18.98 19.43Z"
                      fill="#1487C9"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path78"
                      d="M14.93 23.99L17.03 20.53L18.98 19.43L22.99 19.42L14.93 23.99Z"
                      fill="#017F36"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path80"
                      d="M9 20.51L14.95 17.13L12.95 16L11.09 17.05L9 20.51Z"
                      fill="#984995"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <p className="text-xs font-bold leading-3 text-[#353C5A] dark:text-white">
                    СБП
                  </p>
                </div>
                <p className="text-xs font-semibold text-[#353C5A] dark:text-white">
                  500.00
                </p>
                <p className="text-xs font-semibold text-right text-[#7CC262]  justify-self-end">
                  Успешно
                </p>
              </div>
              <div className="grid items-center grid-cols-4 bg-white dark:bg-[#353C5A] rounded-lg py-2 pl-[14px] pr-[19px]">
                <p className="text-xs font-semibold text-[#8D9BCB]">
                  #31989913124
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    width="32.000000"
                    height="32.000000"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-[#353C5A] dark:fill-white"
                      id="Vector"
                      d="M10 0L22 0C27.52 0 32 4.47 32 10L32 22C32 27.52 27.52 32 22 32L10 32C4.47 32 0 27.52 0 22L0 10C0 4.47 4.47 0 10 0Z"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path66"
                      d="M9 11.48L11.09 14.94L11.09 17.05L9 20.51L9 11.48Z"
                      fill="#5B57A2"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path68"
                      d="M17.02 13.68L18.98 12.57L22.99 12.56L17.02 15.95L17.02 13.68Z"
                      fill="#D90751"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path70"
                      d="M17.01 11.46L17.02 16.04L14.93 14.85L14.93 8L17.01 11.46Z"
                      fill="#FAB718"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path72"
                      d="M23 12.56L18.98 12.57L17.01 11.46L14.93 8L23 12.56Z"
                      fill="#ED6F26"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path74"
                      d="M17.02 20.53L17.02 18.3L14.93 17.13L14.93 24L17.02 20.53Z"
                      fill="#63B22F"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path76"
                      d="M18.98 19.43L11.09 14.94L9 11.48L22.99 19.42L18.98 19.43Z"
                      fill="#1487C9"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path78"
                      d="M14.93 23.99L17.03 20.53L18.98 19.43L22.99 19.42L14.93 23.99Z"
                      fill="#017F36"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path80"
                      d="M9 20.51L14.95 17.13L12.95 16L11.09 17.05L9 20.51Z"
                      fill="#984995"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <p className="text-xs font-bold leading-3 text-[#353C5A] dark:text-white">
                    СБП
                  </p>
                </div>
                <p className="text-xs font-semibold text-[#353C5A] dark:text-white">
                  500.00
                </p>
                <p className="text-xs font-semibold text-right text-[#F76C6C]  justify-self-end">
                  Отменено
                </p>
              </div>
              <div className="grid items-center grid-cols-4 bg-white dark:bg-[#353C5A] rounded-lg py-2 pl-[14px] pr-[19px]">
                <p className="text-xs font-semibold text-[#8D9BCB]">
                  #31989913124
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    width="32.000000"
                    height="32.000000"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-[#353C5A] dark:fill-white"
                      id="Vector"
                      d="M10 0L22 0C27.52 0 32 4.47 32 10L32 22C32 27.52 27.52 32 22 32L10 32C4.47 32 0 27.52 0 22L0 10C0 4.47 4.47 0 10 0Z"
                      fill="#353C5A"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path66"
                      d="M9 11.48L11.09 14.94L11.09 17.05L9 20.51L9 11.48Z"
                      fill="#5B57A2"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path68"
                      d="M17.02 13.68L18.98 12.57L22.99 12.56L17.02 15.95L17.02 13.68Z"
                      fill="#D90751"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path70"
                      d="M17.01 11.46L17.02 16.04L14.93 14.85L14.93 8L17.01 11.46Z"
                      fill="#FAB718"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path72"
                      d="M23 12.56L18.98 12.57L17.01 11.46L14.93 8L23 12.56Z"
                      fill="#ED6F26"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path74"
                      d="M17.02 20.53L17.02 18.3L14.93 17.13L14.93 24L17.02 20.53Z"
                      fill="#63B22F"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path76"
                      d="M18.98 19.43L11.09 14.94L9 11.48L22.99 19.42L18.98 19.43Z"
                      fill="#1487C9"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path78"
                      d="M14.93 23.99L17.03 20.53L18.98 19.43L22.99 19.42L14.93 23.99Z"
                      fill="#017F36"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path80"
                      d="M9 20.51L14.95 17.13L12.95 16L11.09 17.05L9 20.51Z"
                      fill="#984995"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <p className="text-xs font-bold leading-3 text-[#353C5A] dark:text-white">
                    СБП
                  </p>
                </div>
                <p className="text-xs font-semibold text-[#353C5A] dark:text-white">
                  500.00
                </p>
                <p className="text-xs font-semibold text-right text-[#FFB645]  justify-self-end">
                  В Обработке...
                </p>
              </div>
              <div className="grid items-center grid-cols-4 bg-white dark:bg-[#353C5A] rounded-lg py-2 pl-[14px] pr-[19px]">
                <p className="text-xs font-semibold text-[#8D9BCB]">
                  #31989913124
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    width="32.000000"
                    height="32.000000"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-[#353C5A] dark:fill-white"
                      id="Vector"
                      d="M10 0L22 0C27.52 0 32 4.47 32 10L32 22C32 27.52 27.52 32 22 32L10 32C4.47 32 0 27.52 0 22L0 10C0 4.47 4.47 0 10 0Z"
                      fill="#353C5A"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path66"
                      d="M9 11.48L11.09 14.94L11.09 17.05L9 20.51L9 11.48Z"
                      fill="#5B57A2"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path68"
                      d="M17.02 13.68L18.98 12.57L22.99 12.56L17.02 15.95L17.02 13.68Z"
                      fill="#D90751"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path70"
                      d="M17.01 11.46L17.02 16.04L14.93 14.85L14.93 8L17.01 11.46Z"
                      fill="#FAB718"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path72"
                      d="M23 12.56L18.98 12.57L17.01 11.46L14.93 8L23 12.56Z"
                      fill="#ED6F26"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path74"
                      d="M17.02 20.53L17.02 18.3L14.93 17.13L14.93 24L17.02 20.53Z"
                      fill="#63B22F"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path76"
                      d="M18.98 19.43L11.09 14.94L9 11.48L22.99 19.42L18.98 19.43Z"
                      fill="#1487C9"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path78"
                      d="M14.93 23.99L17.03 20.53L18.98 19.43L22.99 19.42L14.93 23.99Z"
                      fill="#017F36"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path80"
                      d="M9 20.51L14.95 17.13L12.95 16L11.09 17.05L9 20.51Z"
                      fill="#984995"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <p className="text-xs font-bold leading-3 text-[#353C5A] dark:text-white">
                    СБП
                  </p>
                </div>
                <p className="text-xs font-semibold text-[#353C5A] dark:text-white">
                  500.00
                </p>
                <p className="text-xs font-semibold text-right text-[#7CC262]  justify-self-end">
                  Успешно
                </p>
              </div>
              <div className="grid items-center grid-cols-4 bg-white dark:bg-[#353C5A] rounded-lg py-2 pl-[14px] pr-[19px]">
                <p className="text-xs font-semibold text-[#8D9BCB]">
                  #31989913124
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    width="32.000000"
                    height="32.000000"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-[#353C5A] dark:fill-white"
                      id="Vector"
                      d="M10 0L22 0C27.52 0 32 4.47 32 10L32 22C32 27.52 27.52 32 22 32L10 32C4.47 32 0 27.52 0 22L0 10C0 4.47 4.47 0 10 0Z"
                      fill="#353C5A"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path66"
                      d="M9 11.48L11.09 14.94L11.09 17.05L9 20.51L9 11.48Z"
                      fill="#5B57A2"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path68"
                      d="M17.02 13.68L18.98 12.57L22.99 12.56L17.02 15.95L17.02 13.68Z"
                      fill="#D90751"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path70"
                      d="M17.01 11.46L17.02 16.04L14.93 14.85L14.93 8L17.01 11.46Z"
                      fill="#FAB718"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path72"
                      d="M23 12.56L18.98 12.57L17.01 11.46L14.93 8L23 12.56Z"
                      fill="#ED6F26"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path74"
                      d="M17.02 20.53L17.02 18.3L14.93 17.13L14.93 24L17.02 20.53Z"
                      fill="#63B22F"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path76"
                      d="M18.98 19.43L11.09 14.94L9 11.48L22.99 19.42L18.98 19.43Z"
                      fill="#1487C9"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path78"
                      d="M14.93 23.99L17.03 20.53L18.98 19.43L22.99 19.42L14.93 23.99Z"
                      fill="#017F36"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path80"
                      d="M9 20.51L14.95 17.13L12.95 16L11.09 17.05L9 20.51Z"
                      fill="#984995"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <p className="text-xs font-bold leading-3 text-[#353C5A] dark:text-white">
                    СБП
                  </p>
                </div>
                <p className="text-xs font-semibold text-[#353C5A] dark:text-white">
                  500.00
                </p>
                <p className="text-xs font-semibold text-right text-[#7CC262]  justify-self-end">
                  Успешно
                </p>
              </div>
              <div className="grid items-center grid-cols-4 bg-white dark:bg-[#353C5A] rounded-lg py-2 pl-[14px] pr-[19px]">
                <p className="text-xs font-semibold text-[#8D9BCB]">
                  #31989913124
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    width="32.000000"
                    height="32.000000"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-[#353C5A] dark:fill-white"
                      id="Vector"
                      d="M10 0L22 0C27.52 0 32 4.47 32 10L32 22C32 27.52 27.52 32 22 32L10 32C4.47 32 0 27.52 0 22L0 10C0 4.47 4.47 0 10 0Z"
                      fill="#353C5A"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path66"
                      d="M9 11.48L11.09 14.94L11.09 17.05L9 20.51L9 11.48Z"
                      fill="#5B57A2"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path68"
                      d="M17.02 13.68L18.98 12.57L22.99 12.56L17.02 15.95L17.02 13.68Z"
                      fill="#D90751"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path70"
                      d="M17.01 11.46L17.02 16.04L14.93 14.85L14.93 8L17.01 11.46Z"
                      fill="#FAB718"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path72"
                      d="M23 12.56L18.98 12.57L17.01 11.46L14.93 8L23 12.56Z"
                      fill="#ED6F26"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path74"
                      d="M17.02 20.53L17.02 18.3L14.93 17.13L14.93 24L17.02 20.53Z"
                      fill="#63B22F"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path76"
                      d="M18.98 19.43L11.09 14.94L9 11.48L22.99 19.42L18.98 19.43Z"
                      fill="#1487C9"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path78"
                      d="M14.93 23.99L17.03 20.53L18.98 19.43L22.99 19.42L14.93 23.99Z"
                      fill="#017F36"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="path80"
                      d="M9 20.51L14.95 17.13L12.95 16L11.09 17.05L9 20.51Z"
                      fill="#984995"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <p className="text-xs font-bold leading-3 text-[#353C5A] dark:text-white">
                    СБП
                  </p>
                </div>
                <p className="text-xs font-semibold text-[#353C5A] dark:text-white">
                  500.00
                </p>
                <p className="text-xs font-semibold text-right text-[#7CC262]  justify-self-end">
                  Успешно
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletHistoryModal;
