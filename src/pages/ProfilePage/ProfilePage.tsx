function ProfilePage() {
  return (
    <div>
      <div className="dark:bg-[#252A424D] px-[20px] pt-[20px] pb-[30px] my-[20px] rounded-[16px] bg-[#E0E3F4]  flex ssm:flex-col xl:flex-row items-start gap-[20px]">
        <div className="ssm:w-[100%] xl:w-[50%] 2xl:w-[30%] bg-white dark:bg-[#252A42] p-[20px] rounded-3xl">
          <div className="p-[15px] bg-[#E0E3F4] dark:bg-[#1F2338] rounded-[14px]">
            <div className="flex items-center gap-2 border-b border-[#CFD4EF]  dark:border-[#2E324A] pb-[14px]">
              <img src="/assets/icons/profile_img.png" alt="" />
              <div>
                <div>
                  <h3 className="text-sm font-bold leading-tight tracking-wide text-[#2A2E47] dark:text-white mb-[9px]">
                    Никита
                  </h3>
                  <span>
                    <img src="" alt="" />
                  </span>
                </div>
                <div className="p-[7px] bg-white dark:bg-[#2A2E47] rounded-lg">
                  <span>
                    <img src="" alt="" />
                  </span>
                  <p className="text-xs font-semibold leading-tight tracking-wide text-[#7F89C1] flex">
                    <img
                      width={20}
                      src="/assets/images/silver-medal.png"
                      alt=""
                    />
                    Silver
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-[15px]">
              <button className="w-full h-[48px] flex items-center justify-center gap-[8px] bg-[#16A58B] rounded-xl text-xs font-semibold text-white mt-[8px]">
                <svg
                  width="20.000000"
                  height="20.000000"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    id="vuesax/bold/add-circle"
                    rx="-0.500000"
                    width="19.000000"
                    height="19.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <path
                    id="Vector"
                    d="M10 1.66C5.4 1.66 1.66 5.4 1.66 10C1.66 14.59 5.4 18.33 10 18.33C14.59 18.33 18.33 14.59 18.33 10C18.33 5.4 14.59 1.66 10 1.66ZM13.33 10.62L10.62 10.62L10.62 13.33C10.62 13.67 10.34 13.95 10 13.95C9.65 13.95 9.37 13.67 9.37 13.33L9.37 10.62L6.66 10.62C6.32 10.62 6.04 10.34 6.04 10C6.04 9.65 6.32 9.37 6.66 9.37L9.37 9.37L9.37 6.66C9.37 6.32 9.65 6.04 10 6.04C10.34 6.04 10.62 6.32 10.62 6.66L10.62 9.37L13.33 9.37C13.67 9.37 13.95 9.65 13.95 10C13.95 10.34 13.67 10.62 13.33 10.62Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <g opacity="0.000000" />
                </svg>
                Пополнить баланс
              </button>
              <button className="w-full h-[48px] flex items-center justify-center gap-[8px] bg-white dark:bg-[#272B43] rounded-xl text-xs font-semibold text-[#7F89C1] dark:text-white mt-[8px]">
                <svg
                  width="16.666992"
                  height="16.666748"
                  viewBox="0 0 16.667 16.6667"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M8.33 0C3.74 0 0 3.74 0 8.33C0 12.92 3.74 16.66 8.33 16.66C12.92 16.66 16.66 12.92 16.66 8.33C16.66 3.74 12.92 0 8.33 0ZM11.59 8.95L4.93 8.95C4.59 8.95 4.3 8.67 4.3 8.33C4.3 7.99 4.59 7.7 4.93 7.7L11.59 7.7C11.94 7.7 12.22 7.99 12.22 8.33C12.22 8.67 11.95 8.95 11.59 8.95Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                Вывод средств
              </button>
            </div>
          </div>
          <div className="mt-5 p-[15px] bg-[#E0E3F4] dark:bg-[#1F2338] rounded-[14px] ">
            <div className="w-full h-[48px] flex items-center gap-[8px] bg-white dark:bg-[#353C5A] py-[16px] pl-[16px] pr-[10px] rounded-xl mt-[6px]">
              <input
                className="w-full text-xs font-semibold text-[#2A2E47] dark:text-white bg-inherit outline-none"
                placeholder="Введите код"
                type="text"
              />
            </div>
            <button className="w-full h-[48px] flex items-center justify-center gap-[8px] bg-[#16A58B] rounded-xl text-xs font-semibold text-white mt-[8px]">
              Применить код
            </button>
            <button className="w-full h-[48px] flex items-center justify-center gap-[8px] bg-[#008EFF] rounded-xl text-xs font-semibold text-white mt-[8px]">
              Вывод средств
            </button>
          </div>
          <div className="mt-5 p-[15px] bg-[#E0E3F4] dark:bg-[#1F2338] rounded-[14px] ">
            <div className="bg-white dark:bg-[#353C5A26] border-none dark:border border-gray-700 dark:bg-opacity-10 rounded-xl border-opacity-40 py-[12px] pl-[14px]">
              <p className="text-xs font-semibold text-[#7F89C1]">
                Вы в минусе на текущий месяц:{" "}
              </p>
              <h3 className="text-sm font-bold text-[#2A2E47] dark:text-white mt-[10px]">
                54 934
                <img src="/assets/icons/coin.svg" alt="" />
              </h3>
            </div>
            <div>
              <p className="text-sm font-bold text-[#2A2E47] dark:text-white mt-[15px]">
                Кешбек высчитывает
              </p>
              <ul>
                <li className="text-xs font-semibold text-[#7F89C1] mt-[12px]">
                  – Платежи
                </li>
                <li className="text-xs font-semibold text-[#7F89C1] mt-[12px]">
                  – Выводы
                </li>
                <li className="text-xs font-semibold text-[#7F89C1] mt-[12px]">
                  – Баланс
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-[#353C5A26] dark:border border-gray-700 dark:bg-opacity-10 rounded-xl border-opacity-40 py-[12px] pl-[14px] mt-[10px]">
              <p className="text-xs font-semibold text-[#7F89C1]">
                Текущий процент кешбека:{" "}
                <span className="text-sm font-bold text-[#2A2E47] dark:text-white">
                  5%
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white dark:bg-[#252A42] rounded-3xl px-[30px] pt-[30px] pb-[20px]">
          <h3 className="text-sm font-bold text-[#252A42] dark:text-white flex items-center gap-[5px]">
            <svg
              width="20.000000"
              height="20.000000"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="↳ Icon Color"
                d="M10 0C4.48 0 0 4.47 0 10C0 15.52 4.48 20 10 20C15.51 20 20 15.52 20 10C20 4.47 15.51 0 10 0ZM9 14L9 10C9 9.44 9.44 9 10 9C10.55 9 11 9.44 11 10L11 14C11 14.55 10.55 15 10 15C9.44 15 9 14.55 9 14ZM8.75 6.25L8.75 5.75C8.75 5.19 9.19 4.75 9.75 4.75L10.25 4.75C10.8 4.75 11.25 5.19 11.25 5.75L11.25 6.25C11.25 6.8 10.8 7.25 10.25 7.25L9.75 7.25C9.19 7.25 8.75 6.8 8.75 6.25Z"
                fill="#008EFF"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
            Публичная информация
          </h3>
          <div className="flex ssm:flex-col md:flex-row gap-5 mt-[15px]">
            <div className="w-full">
              <p className="text-xs font-semibold text-[#7F89C1]">Имя</p>
              <div className="w-full h-[48px] flex items-center gap-[8px] bg-[#EDEFFA] dark:bg-[#353C5A] py-[16px] pl-[16px] pr-[10px] rounded-xl mt-[6px]">
                <svg
                  width="16.000000"
                  height="16.000000"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="↳ Icon Color"
                    d="M12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.2 5.79 8 8 8C10.21 8 12 6.2 12 4ZM0 14L0 14.99C0 15.55 0.45 16 1 16L14.99 16C15.54 16 16 15.55 16 14.99L16 14C16 10.5 10.66 9.5 8 9.5C5.33 9.5 0 10.5 0 14Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>

                <input
                  className="w-full text-xs font-semibold text-[#252A42] dark:text-white bg-inherit outline-none"
                  placeholder="Введите код"
                  type="text"
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-xs font-semibold text-[#7F89C1]">Почта</p>
              <div className="w-full h-[48px] flex items-center gap-[8px] bg-[#EDEFFA] dark:bg-[#353C5A] py-[16px] pl-[16px] pr-[10px] rounded-xl mt-[6px]">
                <svg
                  width="16.799805"
                  height="14.000000"
                  viewBox="0 0 16.7998 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="↳ Icon Color"
                    d="M16.79 4.6L16.79 10.67C16.79 11.83 16.67 12.25 16.45 12.67C16.22 13.09 15.89 13.42 15.47 13.65C15.05 13.87 14.63 14 13.47 14L3.32 14C2.16 14 1.74 13.87 1.32 13.65C0.9 13.42 0.57 13.09 0.34 12.67C0.12 12.25 0 11.83 0 10.67L0 4.6L8.4 8.5L16.79 4.6ZM13.47 0C14.63 0 15.05 0.12 15.47 0.34C15.89 0.57 16.22 0.9 16.45 1.32C16.59 1.59 16.69 1.85 16.75 2.31L8.4 6.19L0.04 2.31C0.1 1.85 0.2 1.59 0.34 1.32C0.57 0.9 0.9 0.57 1.32 0.34C1.74 0.12 2.16 0 3.32 0L13.47 0Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>

                <input
                  className="w-full text-xs font-semibold text-[#252A42] dark:text-white bg-inherit outline-none"
                  placeholder="Введите код"
                  type="text"
                />
              </div>
            </div>
          </div>
          <h3 className="text-sm font-bold text-[#252A42] dark:text-white flex items-center gap-[5px] mt-[20px]">
            <svg
              width="20.000000"
              height="20.000000"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                id="Ellipse 103"
                cx="10.000000"
                cy="10.000000"
                r="10.000000"
                fill="#16A58B"
                fill-opacity="1.000000"
              />
              <path
                id="↳ Icon Color"
                d="M10 5C10.34 5 10.62 5.27 10.62 5.62L10.62 9.37L14.37 9.37C14.71 9.37 15 9.65 15 10C15 10.34 14.71 10.62 14.37 10.62L10.62 10.62L10.62 14.37C10.62 14.72 10.34 15 10 15C9.65 15 9.37 14.72 9.37 14.37L9.37 10.62L5.62 10.62C5.28 10.62 5 10.34 5 10C5 9.65 5.28 9.37 5.62 9.37L9.37 9.37L9.37 5.62C9.37 5.27 9.65 5 10 5Z"
                fill="#252A42"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
            Привязка соц сетей
          </h3>
          <div className="flex justify-between ssm:items-start xl:items-center ssm:flex-col xl:flex-row">
            <div className="my-[15px]">
              <p className="text-xs font-semibold text-[#7F89C1] mb-[8px]">
                Подключенные аккаунты
              </p>
              <div className="pt-[14px] pb-[11px] pl-[17px] pr-[9px] bg-[#3377F6] rounded-lg inline-flex items-center gap-[10px]">
                <svg
                  width="16.000000"
                  height="10.000000"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M8.72 10C3.26 10 0.14 6.24 0 0L2.73 0C2.82 4.58 4.84 6.52 6.44 6.92L6.44 0L9.02 0L9.02 3.95C10.6 3.78 12.25 1.96 12.81 0L15.39 0C15.18 1.02 14.76 1.99 14.16 2.85C13.56 3.71 12.79 4.43 11.9 4.98C12.9 5.48 13.78 6.18 14.48 7.05C15.19 7.91 15.71 8.92 16 10L13.16 10C12.55 8.09 11.03 6.62 9.02 6.42L9.02 10L8.72 10Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <p className="text-xs font-bold text-white">Никита Зотов</p>
              </div>
            </div>
            <div className="ssm:pr-0 xl:pr-[24%]">
              <p className="text-xs font-semibold text-[#7F89C1] mb-[8px]">
                Можно подключить
              </p>
              <div className="flex gap-[10px]">
                <button className="h-[42px] w-[42px] rounded-lg bg-[#4267B2] flex items-center justify-center">
                  <svg
                    width="10.081055"
                    height="20.159912"
                    viewBox="0 0 10.0811 20.1599"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M8.24 3.34L10.08 3.34L10.08 0.14C9.76 0.09 8.67 0 7.39 0C4.74 0 2.92 1.66 2.92 4.73L2.92 7.56L0 7.56L0 11.14L2.92 11.14L2.92 20.15L6.51 20.15L6.51 11.14L9.32 11.14L9.77 7.56L6.51 7.56L6.51 5.09C6.51 4.05 6.79 3.34 8.24 3.34Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                </button>
                <button className="h-[42px] w-[42px] rounded-lg bg-[#FC3F1D] flex items-center justify-center">
                  <svg
                    width="10.278320"
                    height="20.159912"
                    viewBox="0 0 10.2783 20.1599"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M9.37 0L6.5 0C3.6 0 0.67 2.14 0.67 6.93C0.67 9.4 1.72 11.34 3.65 12.43L0.12 18.82C-0.04 19.12 -0.05 19.46 0.11 19.73C0.27 20 0.55 20.15 0.87 20.15L2.66 20.15C3.06 20.15 3.38 19.96 3.53 19.62L6.84 13.15L7.08 13.15L7.08 19.35C7.08 19.79 7.45 20.15 7.88 20.15L9.44 20.15C9.93 20.15 10.27 19.81 10.27 19.32L10.27 0.88C10.27 0.36 9.9 0 9.37 0ZM7.08 10.28L6.65 10.28C5 10.28 4.02 8.93 4.02 6.67C4.02 3.87 5.26 2.87 6.43 2.87L7.08 2.87L7.08 10.28Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                </button>
                <button className="h-[42px] w-[42px] rounded-lg bg-[#167EE6] flex items-center justify-center">
                  <svg
                    width="20.159180"
                    height="20.160156"
                    viewBox="0 0 20.1592 20.1602"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M19.39 8.32L11.17 8.32C11.08 8.32 11 8.34 10.92 8.37C10.84 8.41 10.77 8.45 10.71 8.51C10.64 8.58 10.6 8.65 10.56 8.73C10.53 8.81 10.51 8.89 10.51 8.98L10.51 11.61C10.51 11.78 10.58 11.95 10.71 12.07C10.83 12.19 11 12.26 11.17 12.26L15.8 12.26C15.29 13.58 14.36 14.68 13.14 15.38L15.11 18.8C18.28 16.97 20.15 13.75 20.15 10.16C20.15 9.64 20.12 9.28 20.04 8.87C19.98 8.55 19.71 8.32 19.39 8.32Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M10.08 16.21C7.81 16.21 5.83 14.97 4.77 13.14L1.35 15.11C3.09 18.13 6.35 20.16 10.08 20.16C11.84 20.16 13.58 19.69 15.12 18.8L15.12 18.8L13.14 15.38C12.24 15.91 11.19 16.21 10.08 16.21Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M15.12 18.8L15.12 18.8L13.14 15.38C12.24 15.91 11.19 16.21 10.08 16.21L10.08 20.15C11.9 20.15 13.63 19.66 15.12 18.8Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M3.94 10.08C3.94 8.96 4.24 7.91 4.77 7.01L1.35 5.04C0.49 6.52 0 8.24 0 10.08C0 11.91 0.49 13.63 1.35 15.11L4.77 13.14C4.24 12.24 3.94 11.19 3.94 10.08Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M10.08 3.94C11.55 3.94 12.91 4.46 13.97 5.34C14.23 5.55 14.61 5.54 14.85 5.3L16.71 3.44C16.99 3.17 16.97 2.72 16.68 2.47C14.9 0.93 12.59 0 10.08 0C6.35 0 3.09 2.03 1.35 5.04L4.77 7.01C5.83 5.18 7.81 3.94 10.08 3.94Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M13.97 5.34C14.23 5.55 14.61 5.54 14.85 5.3L16.71 3.44C16.99 3.17 16.97 2.72 16.68 2.47C14.9 0.93 12.59 0 10.08 0L10.08 3.94C11.55 3.94 12.91 4.46 13.97 5.34Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                </button>
                <button className="h-[42px] w-[42px] rounded-lg bg-[#FF9800] flex items-center justify-center">
                  <svg
                    width="12.105469"
                    height="20.160156"
                    viewBox="0 0 12.1055 20.1602"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M5.06 14.2C3.49 14.03 2.08 13.65 0.88 12.7C0.73 12.59 0.57 12.47 0.44 12.34C-0.09 11.83 -0.15 11.25 0.27 10.66C0.63 10.14 1.23 10.01 1.85 10.3C1.97 10.36 2.09 10.43 2.2 10.5C4.45 12.05 7.54 12.09 9.79 10.57C10.02 10.4 10.26 10.26 10.53 10.19C11.07 10.05 11.57 10.25 11.86 10.72C12.19 11.26 12.19 11.79 11.78 12.2C11.16 12.84 10.41 13.31 9.57 13.63C8.79 13.94 7.92 14.09 7.07 14.19C7.2 14.33 7.26 14.4 7.34 14.48C8.5 15.65 9.66 16.81 10.82 17.98C11.21 18.38 11.3 18.87 11.08 19.34C10.84 19.84 10.31 20.18 9.79 20.14C9.46 20.12 9.2 19.96 8.97 19.73C8.1 18.84 7.21 17.98 6.35 17.08C6.1 16.82 5.98 16.87 5.76 17.1C4.88 18 3.98 18.9 3.08 19.78C2.68 20.18 2.19 20.25 1.72 20.03C1.23 19.78 0.91 19.28 0.93 18.76C0.95 18.42 1.12 18.15 1.36 17.92C2.51 16.77 3.65 15.62 4.8 14.47C4.87 14.39 4.95 14.31 5.06 14.2Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M6.01 10.2C3.22 10.19 0.93 7.88 0.95 5.09C0.97 2.26 3.25 -0.01 6.07 0C8.89 0 11.16 2.31 11.14 5.16C11.13 7.95 8.82 10.21 6.01 10.2ZM8.54 5.09C8.54 3.71 7.43 2.6 6.05 2.6C4.65 2.6 3.54 3.72 3.55 5.12C3.56 6.5 4.67 7.6 6.06 7.59C7.45 7.59 8.55 6.48 8.54 5.09Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                </button>
                <button className="h-[42px] w-[42px] rounded-lg bg-[#1A364A] flex items-center justify-center">
                  <svg
                    width="20.160156"
                    height="17.219971"
                    viewBox="0 0 20.1602 17.22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M15.03 0C12.22 0 9.93 2.26 9.9 5.05L6.71 9.61C5.82 9.53 5.05 9.71 4.37 10.13L0 8.36L0 13.18L2.58 14.21C2.96 15.92 4.5 17.21 6.32 17.21C8.3 17.21 9.94 15.7 10.12 13.77L15.04 10.19C17.86 10.19 20.16 7.92 20.16 5.09L20.15 5.09C20.15 2.28 17.86 0 15.03 0ZM6.32 16.2C5.24 16.2 4.31 15.59 3.83 14.71C4.29 14.89 4.76 15.08 5.21 15.26C6.36 15.73 7.67 15.17 8.13 14.03C8.59 12.88 8.03 11.59 6.88 11.13L5.71 10.66C5.91 10.62 6.11 10.6 6.32 10.6C7.88 10.6 9.13 11.84 9.13 13.4C9.13 14.95 7.88 16.2 6.32 16.2ZM15.04 8.51C13.14 8.51 11.6 6.98 11.6 5.09C11.6 3.21 13.13 1.68 15.04 1.68C16.92 1.68 18.47 3.21 18.47 5.09C18.47 6.99 16.92 8.51 15.04 8.51Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M15.05 2.35C13.53 2.35 12.3 3.58 12.3 5.09C12.3 6.6 13.53 7.82 15.05 7.82C16.55 7.82 17.79 6.6 17.79 5.09C17.79 3.57 16.55 2.35 15.05 2.35Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <h3 className="mt-5 text-sm font-bold text-white">Безопастность</h3>
          <div className="flex ssm:items-start gap-[19px] xl:items-center justify-between py-[7px] pr-[7px] pl-[17px] mt-[15px] bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl ssm:flex-col xl:flex-row">
            <div className="flex items-center gap-[12px]">
              <svg
                width="20.000000"
                height="20.000000"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="↳ Icon Color"
                  d="M9.99 20C9.87 20 9.76 19.99 9.64 19.99L9.61 19.99L9.6 19.99L9.58 19.99C9.55 19.99 9.54 19.98 9.51 19.98C9.44 19.98 9.37 19.98 9.29 19.97C9.26 19.97 9.22 19.97 9.19 19.96C9.19 19.96 9.19 19.96 9.19 19.96C9.17 19.96 9.15 19.96 9.13 19.96C9.04 19.95 8.95 19.94 8.86 19.93C8.86 19.93 8.85 19.93 8.84 19.93C8.84 19.93 8.83 19.93 8.82 19.93C8.8 19.92 8.77 19.92 8.75 19.92C3.81 19.3 0 15.1 0 10C0 4.89 3.81 0.69 8.75 0.07C8.75 0.07 8.75 0.07 8.75 0.07L8.81 0.06C8.92 0.05 9.02 0.04 9.13 0.03L8.75 0.07C8.89 0.05 9.04 0.04 9.18 0.03C9.29 0.02 9.41 0.01 9.52 0.01C9.55 0 9.59 0 9.62 0C9.68 0 9.74 0 9.79 0L9.7 0C9.8 0 9.9 0 9.99 0L9.99 0L10 0C10.11 0 10.22 0 10.33 0L10 0C10.13 0 10.27 0 10.41 0L10 0C10.16 0 10.32 0 10.48 0.01C10.53 0.01 10.58 0.01 10.63 0.01C10.66 0.02 10.7 0.02 10.74 0.02C10.77 0.02 10.81 0.03 10.84 0.03C10.87 0.03 10.9 0.04 10.92 0.04C11.04 0.05 11.16 0.06 11.27 0.08C11.29 0.08 11.3 0.08 11.31 0.08C11.44 0.1 11.56 0.12 11.69 0.14C11.7 0.14 11.71 0.14 11.72 0.14C16.42 0.96 20 5.06 20 10C20 15.25 15.95 19.55 10.8 19.96C10.8 19.96 10.8 19.96 10.8 19.96L10.74 19.97C10.74 19.97 10.74 19.97 10.74 19.97L10.63 19.98C10.58 19.98 10.53 19.98 10.48 19.98L10.4 19.99L10.38 19.99L10.37 19.99C10.35 19.99 10.34 19.99 10.32 19.99C10.21 19.99 10.1 20 10 20L9.99 20ZM12.01 14L7.87 14C8.23 15.69 8.86 17.21 9.67 18.49C9.77 18.49 9.87 18.49 9.97 18.5C10.87 17.24 11.57 15.71 12.01 14ZM17.5 14L13.55 14C13.19 15.57 12.62 17.02 11.89 18.28C14.32 17.73 16.35 16.14 17.5 14ZM6.33 14L2.49 14C3.59 16.04 5.5 17.59 7.79 18.21C7.13 16.94 6.64 15.52 6.33 14ZM6.24 7.5L1.87 7.5C1.63 8.29 1.5 9.12 1.5 10C1.5 10.87 1.63 11.71 1.87 12.5L6.1 12.5C6.03 11.84 6 11.17 6 10.5C6 9.46 6.08 8.46 6.24 7.5ZM12.31 7.5L7.76 7.5C7.59 8.45 7.5 9.46 7.5 10.5C7.5 11.18 7.54 11.85 7.61 12.5L12.31 12.5C12.43 11.69 12.5 10.85 12.5 10C12.5 9.14 12.43 8.3 12.31 7.5ZM18.12 7.5L13.82 7.5C13.94 8.31 14 9.14 14 10C14 10.85 13.94 11.68 13.82 12.5L18.12 12.5C18.36 11.71 18.5 10.87 18.5 10C18.5 9.12 18.36 8.29 18.12 7.5ZM8.45 1.64L8.25 1.67C5.75 2.19 3.66 3.81 2.49 6L6.56 6C6.99 4.38 7.63 2.9 8.45 1.64ZM10.17 1.78L10.05 1.94C9.23 3.08 8.56 4.46 8.12 6L12.01 6C11.61 4.41 10.97 2.98 10.17 1.78ZM11.89 1.71L11.91 1.75C12.63 3.01 13.19 4.44 13.55 6L17.5 6C16.35 3.85 14.32 2.26 11.89 1.71Z"
                  fill="#99A2AD"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
              <div>
                <h3 className="text-sm font-bold text-[#252A42] dark:text-white">
                  Mac 10.15.7 Chrome 108
                </h3>
                <p className="text-xs font-semibold text-[#7F89C1]">
                  Ukraine, Odessa, Odesa
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 ssm:w-full xl:w-auto ssm:justify-between xl:justify-normal">
              <p className="text-xs font-semibold text-[#7F89C1]">
                11.01.2026 19:59
              </p>
              <button className="pt-[9px] pb-[11px] px-[21px] text-xs font-semibold text-[#7F89C1] bg-[#DFE3F7] dark:bg-[#3F476A] rounded-lg">
                Завершить
              </button>
            </div>
          </div>
          <div className="flex ssm:flex-col-reverse xl:flex-row items-center justify-between py-[7px] pl-[9px] pr-[7px] ssm:border-none xl:border rounded-xl border-[#EDEFFA] dark:border-[#383F5E] mt-[10px]">
            <div className="flex ssm:w-full xl:w-auto ssm:mt-[20px] xl:mt-0 items-center ssm:py-[7px] ssm:pl-[9px] ssm:pr-[7px] xl:p-0 ssm:border rounded-xl border-[#EDEFFA] dark:border-[#383F5E] xl:border-none gap-[10px]">
              <span className="inline-flex items-center justify-center w-[32px] h-[32px] bg-gradient-to-b from-[#DB5353] to-[#FF8C73] rounded-md">
                <svg
                  width="16.666992"
                  height="16.666748"
                  viewBox="0 0 16.667 16.6667"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="↳ Icon Color"
                    d="M8.33 16.66C12.93 16.66 16.66 12.93 16.66 8.33C16.66 3.73 12.93 0 8.33 0C3.73 0 0 3.73 0 8.33C0 12.93 3.73 16.66 8.33 16.66ZM9.16 5L9.16 8.33C9.16 8.79 8.79 9.16 8.33 9.16C7.87 9.16 7.5 8.79 7.5 8.33L7.5 5C7.5 4.53 7.87 4.16 8.33 4.16C8.79 4.16 9.16 4.53 9.16 5ZM9.37 11.45L9.37 11.87C9.37 12.33 9 12.7 8.54 12.7L8.12 12.7C7.66 12.7 7.29 12.33 7.29 11.87L7.29 11.45C7.29 10.99 7.66 10.62 8.12 10.62L8.54 10.62C9 10.62 9.37 10.99 9.37 11.45Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </svg>
              </span>
              <p className="text-xs font-medium text-[#252A42] dark:text-white">
                Если вас взломали - советуем сменить пароль и завершить <br />{" "}
                все сеансы Вконтакте, затем на нашем сайте.
              </p>
            </div>
            <button className="rounded-lg ssm:w-full xl:w-auto bg-gradient-to-b from-[#DB5353] to-[#FF8C73] text-xs font-bold text-center text-white pt-[11px] pb-[10px] pl-[20px] pr-[21px]">
              Завершить все сеансы
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
