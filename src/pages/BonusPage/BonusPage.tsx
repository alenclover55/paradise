import LastGamesList from "../../components/LastGamesList/LastGamesList";
import MainLayout from "../../components/MainLayout/MainLayout";

function BonusPage() {
  return (
    <div>
      <MainLayout title="Бонусы" pageImgUrl="./assets/pagesImages/bonus.svg">
        <div>
          <div className="flex gap-5 mt-5 ssm:flex-wrap 2xl:flex-nowrap">
            <div className="p-5 bg-white dark:bg-[#252A42] w-full min-h-[376px] rounded-3xl">
              <div className="flex items-center gap-4">
                <span className="inline-block p-4 bg-[#E0E3F2] dark:bg-[#313754] rounded-2xl">
                  <img src="/assets/images/silver-medal.png" alt="" />
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-none text-[#252A42] dark:text-white">
                    Silver
                  </h3>
                  <p className="text-xs font-semibold leading-none text-[#7F89C1] mt-[10px]">
                    Доступен после регистрации аккаунта
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <p className="text-xs font-semibold leading-none text-[#7F89C1]">
                  Привилегии
                </p>
                <div className="h-[1px] w-full bg-[#E7EAFA] dark:bg-[#343A58] block"></div>
              </div>
              <div>
                <ul className="flex flex-col gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      Доступ к эксклюзивным предложениям
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      Приоритетная поддержка
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-[#252A42] w-full min-h-[376px] rounded-3xl">
              <div className="flex items-center gap-4">
                <span className="inline-block p-4 bg-[#E0E3F2] dark:bg-[#313754] rounded-2xl">
                  <img src="/assets/images/gold-medal.png" alt="" />
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-none text-[#252A42] dark:text-white">
                    Gold
                  </h3>
                  <p className="text-xs font-semibold leading-4 text-[#7F89C1] mt-[10px]">
                    Доступен после достижения
                    <br /> общей суммы депозитов в 50.000 RUB
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <p className="text-xs font-semibold leading-none text-[#7F89C1]">
                  Привилегии
                </p>
                <div className="h-[1px] w-full bg-[#E7EAFA] dark:bg-[#343A58] block"></div>
              </div>
              <div>
                <ul className="flex flex-col gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      Все преимущества SILVER
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      Персональный менеджер
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      Бонусы от вашего персонального менеджера
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      Приоритетные выплаты до 30 минут
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      Нет лимитов на вывод
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-5 bg-white dark:bg-[#252A42] w-full min-h-[376px] rounded-3xl">
              <div className="flex items-center gap-4">
                <span className="inline-block p-4 bg-[#E0E3F2] dark:bg-[#313754] rounded-2xl">
                  <img src="/assets/images/trophy_diamond.png" alt="" />
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-none text-[#252A42] dark:text-white">
                    Diamond
                  </h3>
                  <p className="text-xs font-semibold leading-4 text-[#7F89C1] mt-[10px]">
                    Доступен после достижения <br />
                    общей суммы депозитов в 50.000 RUB
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <p className="text-xs font-semibold leading-none text-[#7F89C1]">
                  Привилегии
                </p>
                <div className="h-[1px] w-full bg-[#E7EAFA] dark:bg-[#343A58] block"></div>
              </div>
              <div>
                <ul className="flex flex-col gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      Все преимущества GOLD
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      Эксклюзивный контент
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      Личный Консультант
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      Персональный VIP Менеджер
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      Персональные VIP Бонусы
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      Приоритетные выплаты до 10 минут
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/assets/icons/green_check.svg"
                      alt="green_check"
                    />{" "}
                    <p className="text-xs font-semibold leading-none text-[#252A42] dark:text-white">
                      VIP промокоды в нашем телеграмм канале
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex ssm:flex-col gap-[15px] 2xl:flex-row ssm:justify-center 2xl:justify-between items-center bg-[#008EFF] rounded-2xl p-6 mt-5">
            <div>
              <h3 className="flex items-center justify-center font-bold leading-none text-white ssm:gap-[2px] md:gap-2 text-nowrap ssm:text-base md:text-lg">
                Активный отыгрыш
                <span className="flex items-center ssm:gap-[2px] md:gap-2">
                  45 900
                  <img src="/assets/icons/coins.svg" alt="" />
                </span>
              </h3>
              <p className="text-xs ssm:text-center 2xl:text-left font-medium leading-tight text-[#CEE9FF] mt-[16px]">
                После отказа от условий отыгрыша, средства с баланса удаляются
                без права восстановления.
                <br />
                При успешном выполнении условий отыгрыша,баланс обновится
                автоматически.
                <br />В случае неудачи, отмените процесс отыгрыша, возвращаясь к
                игре в райском Paradise.
              </p>
            </div>
            <button className="flex items-center gap-2 py-3 px-[14px] text-sm font-bold text-[#008EFF] bg-white rounded-2xl">
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
                  fill="#FFFFFF"
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
              Вывод средств доступен
            </button>
          </div>
          <div className="grid items-start gap-5 mt-5 ssm:grid-cols-1 md:grid-cols-3">
            <div className="p-5 bg-gradient-to-t from-[#2E71F0] to-[#65A0FF] w-full min-h-[293px] rounded-3xl">
              <div className="flex items-center gap-4">
                <span className="ssm:w-[55px] ssm:h-[55px] md:w-[60px] md:h-[60px] bg-white flex items-center justify-center rounded-2xl">
                  <svg
                    width="26.000000"
                    height="16.000000"
                    viewBox="0 0 26 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="12.999998"
                        y1="0.000000"
                        x2="12.999998"
                        y2="16.000000"
                        id="paint_linear_12_28955_0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2E71F0" />
                        <stop offset="1.000000" stop-color="#65A0FF" />
                      </linearGradient>
                    </defs>
                    <path
                      id="Vector"
                      d="M14.18 16C5.29 16 0.23 9.99 0 0L4.44 0C4.59 7.33 7.87 10.43 10.46 11.08L10.46 0L14.66 0L14.66 6.32C17.23 6.05 19.92 3.14 20.82 0L25.01 0C24.67 1.64 23.99 3.19 23.01 4.57C22.04 5.94 20.79 7.1 19.34 7.97C20.96 8.77 22.39 9.9 23.54 11.28C24.69 12.66 25.52 14.27 26 16L21.39 16C20.4 12.95 17.93 10.6 14.67 10.27L14.67 16L14.18 16Z"
                      fill="url(#paint_linear_12_28955_0)"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-white ssm:text-sm md:text-base">
                    Проверка подписки
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="h-[1px] w-full bg-[#72A5FE] block"></div>
              </div>
              <div>
                <ul className="flex flex-col gap-[10px] py-4">
                  <li className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 text-xs font-medium leading-tight text-white bg-white border border-white rounded-lg bg-opacity-10 border-opacity-10">
                      1
                    </span>
                    <p className="text-xs font-semibold leading-none text-white">
                      Подпишитесь на Группу ВК
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 text-xs font-medium leading-tight text-white bg-white border border-white rounded-lg bg-opacity-10 border-opacity-10">
                      2
                    </span>
                    <p className="text-xs font-semibold leading-none text-white">
                      Убедитесь, что Ваш аккаунт ВК открыт
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 text-xs font-medium leading-tight text-white bg-white border border-white rounded-lg bg-opacity-10 border-opacity-10">
                      3
                    </span>
                    <p className="text-xs font-semibold leading-none text-white">
                      Нажмите на "Проверить подписку"
                    </p>
                  </li>
                </ul>
              </div>
              <button className="w-full h-[48px] flex items-center justify-center gap-[8px] bg-white rounded-[14px] text-sm font-bold text-center text-[#3779F3] mt-[8px]">
                Проверить подписку
              </button>
            </div>
            <div className="p-5 bg-gradient-to-t from-[#2E87F0] to-[#65C8FF] w-full min-h-[293px] rounded-3xl">
              <div className="flex items-center gap-4">
                <span className="ssm:w-[55px] ssm:h-[55px] md:w-[60px] md:h-[60px] bg-white flex items-center justify-center rounded-2xl">
                  <svg
                    width="23.000000"
                    height="20.000000"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="11.500000"
                        y1="20.000000"
                        x2="11.500000"
                        y2="0.000000"
                        id="paint_linear_12_28986_0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2E87F0" />
                        <stop offset="1.000000" stop-color="#65C8FF" />
                      </linearGradient>
                    </defs>
                    <path
                      id="telegram"
                      d="M1.58 8.6C7.75 5.78 11.87 3.92 13.93 3.02C19.81 0.46 21.03 0.01 21.83 0C22 -0.01 22.39 0.04 22.65 0.25C22.86 0.44 22.92 0.68 22.95 0.86C22.98 1.03 23.01 1.42 22.98 1.73C22.67 5.24 21.29 13.77 20.59 17.71C20.29 19.37 19.7 19.93 19.14 19.99C17.91 20.1 16.97 19.13 15.78 18.31C13.92 17.03 12.87 16.23 11.06 14.98C8.97 13.54 10.32 12.74 11.51 11.44C11.82 11.1 17.24 5.93 17.35 5.46C17.36 5.4 17.37 5.18 17.25 5.07C17.13 4.95 16.94 4.99 16.81 5.02C16.62 5.07 13.65 7.13 7.88 11.22C7.03 11.83 6.27 12.13 5.58 12.11C4.83 12.09 3.37 11.66 2.29 11.29C0.96 10.84 -0.09 10.6 0 9.83C0.05 9.43 0.57 9.02 1.58 8.6Z"
                      fill="url(#paint_linear_12_28986_0)"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    <h3 className="flex items-center gap-[5px] ssm:text-sm md:text-base font-semibold text-white">
                      Награда 25
                      <svg
                        width="10.000000"
                        height="12.000000"
                        viewBox="0 0 10 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="↳ Icon Color"
                          d="M9.97 8.3C9.99 8.42 10 8.54 10 8.66C10 10.5 7.76 12 5 12C2.23 12 0 10.5 0 8.66C0 8.54 0 8.42 0.02 8.3C1.17 9.74 2.97 10.66 5 10.66C7.02 10.66 8.82 9.74 9.96 8.31L9.97 8.3ZM9.97 5.63C9.99 5.75 10 5.87 10 6C10 7.84 7.76 9.33 5 9.33C2.23 9.33 0 7.84 0 6C0 5.87 0 5.75 0.02 5.63C1.17 7.07 2.97 8 5 8C7.02 8 8.82 7.07 9.96 5.64L9.97 5.63ZM5 0C7.76 0 10 1.49 10 3.33C10 5.17 7.76 6.66 5 6.66C2.23 6.66 0 5.17 0 3.33C0 1.49 2.23 0 5 0Z"
                          fill="#FFFFFF"
                          fill-opacity="1.000000"
                          fill-rule="nonzero"
                        />
                      </svg>
                    </h3>
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="h-[1px] w-full bg-[#7CC7FE] block"></div>
              </div>
              <div>
                <ul className="flex flex-col gap-[10px] py-4">
                  <li className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 text-xs font-medium leading-tight text-white bg-white border border-white rounded-lg bg-opacity-10 border-opacity-10">
                      1
                    </span>
                    <p className="text-xs font-semibold leading-none text-white">
                      Вступите в канал{" "}
                      <a className="underline cursor-pointer" href="">
                        @paradisecasino
                      </a>
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 text-xs font-medium leading-tight text-white bg-white border border-white rounded-lg bg-opacity-10 border-opacity-10">
                      2
                    </span>
                    <p className="text-xs font-semibold leading-none text-white">
                      Напишите нашему боту{" "}
                      <a className="underline cursor-pointer" href="">
                        (клик)
                      </a>{" "}
                      команду
                    </p>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-white bg-opacity-10 rounded-[14px] border-opacity-10">
                <div className="flex items-center justify-between pt-[13px] pl-[15px] pr-[17px] pb-[4px] cursor-pointer">
                  <p className="text-xs font-semibold leading-tight text-white">
                    /bind 3i8x4g
                  </p>
                  <svg
                    width="15.000000"
                    height="15.000000"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M3 12L3 12.75C3 13.99 4 15 5.25 15L12.75 15C13.99 15 15 13.99 15 12.75L15 5.25C15 4 13.99 3 12.75 3L12 3L12 2.25C12 1 10.99 0 9.75 0L2.25 0C1 0 0 1 0 2.25L0 9.75C0 10.99 1 12 2.25 12L3 12ZM4.5 12L4.5 12.75C4.5 13.16 4.83 13.5 5.25 13.5L12.75 13.5C13.16 13.5 13.5 13.16 13.5 12.75L13.5 5.25C13.5 4.83 13.16 4.5 12.75 4.5L12 4.5L12 9.75C12 10.99 10.99 12 9.75 12L4.5 12Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
                <button className="w-full h-[48px] flex items-center justify-center gap-[8px] bg-white rounded-[14px] text-sm font-bold text-center text-[#3893F3] mt-[8px]">
                  Проверить подписку
                </button>
              </div>
            </div>
            <div className="p-5 bg-gradient-to-t from-[#814FE8] to-[#B574FF] w-full min-h-[293px] rounded-3xl">
              <div className="flex items-center gap-4">
                <span className="ssm:w-[55px] ssm:h-[55px] md:w-[60px] md:h-[60px] bg-white flex items-center justify-center rounded-2xl">
                  <svg
                    width="24.000000"
                    height="24.001953"
                    viewBox="0 0 24 24.002"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="12.000501"
                        y1="0.000000"
                        x2="12.000501"
                        y2="24.001757"
                        id="paint_linear_12_29016_0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#6622F0" />
                        <stop offset="1.000000" stop-color="#9240EE" />
                      </linearGradient>
                    </defs>
                    <path
                      id="Vector"
                      d="M0 19L24 19C24 21.75 21.75 24 19 24L5 24C2.24 24 0 21.75 0 19ZM24 11L24 17L0 17L0 11C0 8.24 2.24 6 5 6L6.25 6C4.83 4.6 4.62 2.79 5.7 1.36C6.25 0.63 7.04 0.16 7.94 0.03C8.84 -0.1 9.73 0.13 10.46 0.68C11.14 1.18 11.64 1.83 12.01 2.49C12.38 1.83 12.88 1.18 13.56 0.68C14.28 0.13 15.17 -0.1 16.08 0.03C16.98 0.16 17.77 0.63 18.31 1.36C19.4 2.8 19.18 4.62 17.77 6L19 6C21.75 6 24 8.24 24 11ZM13 6C13.14 6 14.8 5.96 16.37 4.57C16.76 4.2 17.36 3.41 16.72 2.56C16.49 2.26 16.16 2.06 15.79 2.01C15.43 1.96 15.05 2.05 14.75 2.28C13.48 3.23 13.1 5.09 13.02 5.69L13.02 5.71L13 6ZM11 6L11.02 6C11.02 6 11 5.7 11 5.69C10.91 5.1 10.54 3.24 9.26 2.28C9.02 2.09 8.72 2 8.42 2C7.95 2 7.52 2.26 7.3 2.56C6.66 3.41 7.26 4.2 7.67 4.59C9.2 5.95 10.86 6 11 6L11 6ZM18 12C18 11.44 17.55 11 17 11C16.83 11 13 10.96 13 8L11 8C11 10.93 7.18 11 6.99 11C6.44 11 6 11.44 6 12C6 12.55 6.44 13 7 13C8.41 13 10.69 12.51 12 10.94C13.3 12.51 15.58 13 17 13C17.55 13 18 12.55 18 12Z"
                      fill="url(#paint_linear_12_29016_0)"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="flex items-center gap-[5px] ssm:text-sm md:text-base font-semibold text-white">
                    Ежедневный бонус до 100
                    <span>
                      <svg
                        width="10.000000"
                        height="12.000000"
                        viewBox="0 0 10 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="↳ Icon Color"
                          d="M9.97 8.3C9.99 8.42 10 8.54 10 8.66C10 10.5 7.76 12 5 12C2.23 12 0 10.5 0 8.66C0 8.54 0 8.42 0.02 8.3C1.17 9.74 2.97 10.66 5 10.66C7.02 10.66 8.82 9.74 9.96 8.31L9.97 8.3ZM9.97 5.63C9.99 5.75 10 5.87 10 6C10 7.84 7.76 9.33 5 9.33C2.23 9.33 0 7.84 0 6C0 5.87 0 5.75 0.02 5.63C1.17 7.07 2.97 8 5 8C7.02 8 8.82 7.07 9.96 5.64L9.97 5.63ZM5 0C7.76 0 10 1.49 10 3.33C10 5.17 7.76 6.66 5 6.66C2.23 6.66 0 5.17 0 3.33C0 1.49 2.23 0 5 0Z"
                          fill="#FFFFFF"
                          fill-opacity="1.000000"
                          fill-rule="nonzero"
                        />
                      </svg>
                    </span>
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="h-[1px] w-full bg-[#B986FF] block"></div>
              </div>
              <div>
                <ul className="flex flex-col gap-[10px] py-4">
                  <li className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 text-xs font-medium leading-tight text-white bg-white border border-white rounded-lg bg-opacity-10 border-opacity-10">
                      1
                    </span>
                    <p className="text-xs font-semibold leading-none text-white">
                      Подпишитесь на Группу ВК
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 text-xs font-medium leading-tight text-white bg-white border border-white rounded-lg bg-opacity-10 border-opacity-10">
                      2
                    </span>
                    <p className="text-xs font-semibold leading-none text-white">
                      Убедитесь, что Ваш аккаунт ВК открыт
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 text-xs font-medium leading-tight text-white bg-white border border-white rounded-lg bg-opacity-10 border-opacity-10">
                      3
                    </span>
                    <p className="text-xs font-semibold leading-none text-white">
                      Нажмите на "Получить бонус"
                    </p>
                  </li>
                </ul>
              </div>
              <button className="w-full h-[48px] flex items-center justify-center gap-[8px] bg-white rounded-[14px] text-sm font-bold text-center text-[#8954EC] mt-[8px]">
                Получить бонус
              </button>
            </div>
            <div className="p-5 bg-gradient-to-t from-[#55993C] to-[#89D36E] rounded-3xl">
              <div className="flex items-center gap-4">
                <span className="ssm:w-[55px] ssm:h-[55px] md:w-[60px] md:h-[60px] bg-white flex items-center justify-center rounded-2xl">
                  <svg
                    width="22.285645"
                    height="22.484863"
                    viewBox="0 0 22.2856 22.4849"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M17.25 4.87C17.25 4.15 17.12 3.46 16.9 2.81C18.44 3.63 19.5 5.26 19.5 7.12C19.5 9.81 17.31 12 14.62 12C13.62 12 12.67 11.69 11.9 11.16C12.64 11.04 13.35 10.79 13.98 10.43C15.89 9.36 17.19 7.34 17.25 5L17.25 4.87ZM10.51 9.73C10.63 9.74 10.75 9.75 10.87 9.75C11.36 9.75 11.83 9.67 12.27 9.54C14.27 8.93 15.75 7.07 15.75 4.87C15.75 4.54 15.72 4.22 15.65 3.91C15.53 3.31 15.3 2.75 14.98 2.26C14.12 0.9 12.6 0 10.87 0C8.18 0 6 2.18 6 4.87C6 7.43 7.99 9.54 10.51 9.73ZM4.38 12.09C4.18 12.02 3.96 12 3.75 12L2.25 12C1.01 12 0 13.01 0 14.25L0 20.23C0 21.47 1.01 22.48 2.25 22.48L3.75 22.48C3.95 22.48 4.16 22.45 4.36 22.39C3.53 21.7 3 20.66 3 19.5L3 15C3 13.83 3.54 12.77 4.38 12.09ZM21.88 13.62C21.79 13.49 21.69 13.37 21.57 13.27C21.42 13.14 21.24 13.02 21.06 12.93C20.73 12.78 20.37 12.73 20.01 12.76C19.89 12.78 19.76 12.81 19.64 12.84C19.42 12.9 19.2 12.99 18.99 13.11L16.07 15.03L15 15.75L13.5 16.74C13.01 17.07 12.43 17.25 11.84 17.25L9.75 17.25C9.33 17.25 9 16.91 9 16.5C9 16.08 9.33 15.75 9.75 15.75L12 15.75C12.82 15.75 13.5 15.07 13.5 14.25C13.5 13.43 12.84 12.77 12.03 12.75C12.02 12.75 12.01 12.75 12 12.75L6.75 12.75C6.73 12.75 6.71 12.75 6.69 12.75C6.53 12.76 6.38 12.78 6.23 12.81C6.16 12.83 6.1 12.85 6.03 12.87C5.94 12.9 5.85 12.94 5.76 12.98C5.72 13 5.68 13.01 5.64 13.03C5.6 13.06 5.55 13.09 5.5 13.12C5.49 13.13 5.49 13.13 5.48 13.14C5.36 13.22 5.26 13.3 5.16 13.4C5.15 13.41 5.15 13.42 5.14 13.43C5.06 13.51 4.98 13.6 4.92 13.69C4.9 13.72 4.88 13.75 4.86 13.78C4.79 13.89 4.73 14 4.68 14.11C4.67 14.13 4.67 14.14 4.66 14.15C4.62 14.26 4.58 14.37 4.56 14.49C4.55 14.52 4.54 14.56 4.54 14.59C4.51 14.72 4.5 14.86 4.5 14.99L4.5 19.5L4.5 19.5C4.5 19.64 4.51 19.77 4.54 19.9C4.54 19.93 4.55 19.97 4.56 20C4.59 20.12 4.62 20.25 4.67 20.37C4.67 20.37 4.67 20.37 4.67 20.37C4.73 20.5 4.79 20.61 4.86 20.72C4.88 20.74 4.89 20.76 4.91 20.79C4.98 20.89 5.06 20.99 5.15 21.08C5.15 21.08 5.15 21.08 5.16 21.09C5.25 21.18 5.35 21.26 5.45 21.33C5.48 21.35 5.51 21.37 5.54 21.39C5.58 21.41 5.6 21.43 5.64 21.45C5.66 21.46 5.69 21.47 5.71 21.48C5.83 21.54 5.95 21.59 6.07 21.63C6.12 21.64 6.16 21.66 6.21 21.67C6.39 21.72 6.56 21.75 6.75 21.75L14.44 21.75C14.68 21.75 14.9 21.7 15.12 21.63C15.3 21.58 15.47 21.5 15.63 21.4C15.73 21.34 15.82 21.28 15.91 21.21L20.05 17.67L21.75 16.22L21.86 16.1C22.11 15.77 22.28 15.25 22.28 14.84C22.28 14.38 22.14 13.97 21.89 13.62L21.88 13.62Z"
                      fill="#7AC25F"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="flex items-center gap-[5px]  ssm:text-sm md:text-base  font-semibold text-white">
                    От 1 до 10{" "}
                    <svg
                      width="10.000000"
                      height="12.000000"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="↳ Icon Color"
                        d="M9.97 8.3C9.99 8.42 10 8.54 10 8.66C10 10.5 7.76 12 5 12C2.23 12 0 10.5 0 8.66C0 8.54 0 8.42 0.02 8.3C1.17 9.74 2.97 10.66 5 10.66C7.02 10.66 8.82 9.74 9.96 8.31L9.97 8.3ZM9.97 5.63C9.99 5.75 10 5.87 10 6C10 7.84 7.76 9.33 5 9.33C2.23 9.33 0 7.84 0 6C0 5.87 0 5.75 0.02 5.63C1.17 7.07 2.97 8 5 8C7.02 8 8.82 7.07 9.96 5.64L9.97 5.63ZM5 0C7.76 0 10 1.49 10 3.33C10 5.17 7.76 6.66 5 6.66C2.23 6.66 0 5.17 0 3.33C0 1.49 2.23 0 5 0Z"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                        fill-rule="nonzero"
                      />
                    </svg>{" "}
                    на баланс
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="h-[1px] w-full bg-[#8CD472] block"></div>
              </div>
              <div>
                <ul className="flex flex-col gap-[10px] py-4">
                  <li className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 text-xs font-medium leading-tight text-white bg-white border border-white rounded-lg bg-opacity-10 border-opacity-10">
                      1
                    </span>
                    <p className="text-xs font-semibold leading-none text-white">
                      Подпишитесь на Группу ВК
                    </p>
                  </li>
                </ul>
              </div>
              <button className="w-full h-[48px] flex items-center justify-center gap-[8px] bg-white rounded-[14px] text-sm font-bold text-center text-[#64AA4B] mt-[8px]">
                Получить бонус
              </button>
            </div>
            <div className="p-5 bg-gradient-to-t from-[#E5473F] to-[#FF716B] w-full rounded-3xl">
              <div className="flex items-center gap-4">
                <span className="ssm:w-[55px] ssm:h-[55px] md:w-[60px] md:h-[60px] bg-white flex items-center justify-center rounded-2xl">
                  <svg
                    width="22.285645"
                    height="22.484863"
                    viewBox="0 0 22.2856 22.4849"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M17.25 4.87C17.25 4.15 17.12 3.46 16.9 2.81C18.44 3.63 19.5 5.26 19.5 7.12C19.5 9.81 17.31 12 14.62 12C13.62 12 12.67 11.69 11.9 11.16C12.64 11.04 13.35 10.79 13.98 10.43C15.89 9.36 17.19 7.34 17.25 5L17.25 4.87ZM10.51 9.73C10.63 9.74 10.75 9.75 10.87 9.75C11.36 9.75 11.83 9.67 12.27 9.54C14.27 8.93 15.75 7.07 15.75 4.87C15.75 4.54 15.72 4.22 15.65 3.91C15.53 3.31 15.3 2.75 14.98 2.26C14.12 0.9 12.6 0 10.87 0C8.18 0 6 2.18 6 4.87C6 7.43 7.99 9.54 10.51 9.73ZM4.38 12.09C4.18 12.02 3.96 12 3.75 12L2.25 12C1.01 12 0 13.01 0 14.25L0 20.23C0 21.47 1.01 22.48 2.25 22.48L3.75 22.48C3.95 22.48 4.16 22.45 4.36 22.39C3.53 21.7 3 20.66 3 19.5L3 15C3 13.83 3.54 12.77 4.38 12.09ZM21.88 13.62C21.79 13.49 21.69 13.37 21.57 13.27C21.42 13.14 21.24 13.02 21.06 12.93C20.73 12.78 20.37 12.73 20.01 12.76C19.89 12.78 19.76 12.81 19.64 12.84C19.42 12.9 19.2 12.99 18.99 13.11L16.07 15.03L15 15.75L13.5 16.74C13.01 17.07 12.43 17.25 11.84 17.25L9.75 17.25C9.33 17.25 9 16.91 9 16.5C9 16.08 9.33 15.75 9.75 15.75L12 15.75C12.82 15.75 13.5 15.07 13.5 14.25C13.5 13.43 12.84 12.77 12.03 12.75C12.02 12.75 12.01 12.75 12 12.75L6.75 12.75C6.73 12.75 6.71 12.75 6.69 12.75C6.53 12.76 6.38 12.78 6.23 12.81C6.16 12.83 6.1 12.85 6.03 12.87C5.94 12.9 5.85 12.94 5.76 12.98C5.72 13 5.68 13.01 5.64 13.03C5.6 13.06 5.55 13.09 5.5 13.12C5.49 13.13 5.49 13.13 5.48 13.14C5.36 13.22 5.26 13.3 5.16 13.4C5.15 13.41 5.15 13.42 5.14 13.43C5.06 13.51 4.98 13.6 4.92 13.69C4.9 13.72 4.88 13.75 4.86 13.78C4.79 13.89 4.73 14 4.68 14.11C4.67 14.13 4.67 14.14 4.66 14.15C4.62 14.26 4.58 14.37 4.56 14.49C4.55 14.52 4.54 14.56 4.54 14.59C4.51 14.72 4.5 14.86 4.5 14.99L4.5 19.5L4.5 19.5C4.5 19.64 4.51 19.77 4.54 19.9C4.54 19.93 4.55 19.97 4.56 20C4.59 20.12 4.62 20.25 4.67 20.37C4.67 20.37 4.67 20.37 4.67 20.37C4.73 20.5 4.79 20.61 4.86 20.72C4.88 20.74 4.89 20.76 4.91 20.79C4.98 20.89 5.06 20.99 5.15 21.08C5.15 21.08 5.15 21.08 5.16 21.09C5.25 21.18 5.35 21.26 5.45 21.33C5.48 21.35 5.51 21.37 5.54 21.39C5.58 21.41 5.6 21.43 5.64 21.45C5.66 21.46 5.69 21.47 5.71 21.48C5.83 21.54 5.95 21.59 6.07 21.63C6.12 21.64 6.16 21.66 6.21 21.67C6.39 21.72 6.56 21.75 6.75 21.75L14.44 21.75C14.68 21.75 14.9 21.7 15.12 21.63C15.3 21.58 15.47 21.5 15.63 21.4C15.73 21.34 15.82 21.28 15.91 21.21L20.05 17.67L21.75 16.22L21.86 16.1C22.11 15.77 22.28 15.25 22.28 14.84C22.28 14.38 22.14 13.97 21.89 13.62L21.88 13.62Z"
                      fill="#FB6A63"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="flex items-center gap-[5px]  ssm:text-sm md:text-base  font-semibold text-white">
                    От 1 до 3{" "}
                    <svg
                      width="10.000000"
                      height="12.000000"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="↳ Icon Color"
                        d="M9.97 8.3C9.99 8.42 10 8.54 10 8.66C10 10.5 7.76 12 5 12C2.23 12 0 10.5 0 8.66C0 8.54 0 8.42 0.02 8.3C1.17 9.74 2.97 10.66 5 10.66C7.02 10.66 8.82 9.74 9.96 8.31L9.97 8.3ZM9.97 5.63C9.99 5.75 10 5.87 10 6C10 7.84 7.76 9.33 5 9.33C2.23 9.33 0 7.84 0 6C0 5.87 0 5.75 0.02 5.63C1.17 7.07 2.97 8 5 8C7.02 8 8.82 7.07 9.96 5.64L9.97 5.63ZM5 0C7.76 0 10 1.49 10 3.33C10 5.17 7.76 6.66 5 6.66C2.23 6.66 0 5.17 0 3.33C0 1.49 2.23 0 5 0Z"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                        fill-rule="nonzero"
                      />
                    </svg>{" "}
                    на баланс
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="h-[1px] w-full bg-[#FF8882] block"></div>
              </div>
              <div>
                <ul className="flex flex-col gap-[10px] py-4">
                  <li className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 text-xs font-medium leading-tight text-white bg-white border border-white rounded-lg bg-opacity-10 border-opacity-10">
                      1
                    </span>
                    <p className="text-xs font-semibold leading-none text-white">
                      Получить можно один раз в сутки
                    </p>
                  </li>
                </ul>
              </div>
              <button className="w-full h-[48px] flex items-center justify-center gap-[8px] bg-white rounded-[14px] text-sm font-bold text-center text-[#E94E46] mt-[8px]">
                Забрать 248.34{" "}
                <svg
                  width="10.000000"
                  height="12.000000"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="↳ Icon Color"
                    d="M9.97 8.3C9.99 8.42 10 8.54 10 8.66C10 10.5 7.76 12 5 12C2.23 12 0 10.5 0 8.66C0 8.54 0 8.42 0.02 8.3C1.17 9.74 2.97 10.66 5 10.66C7.02 10.66 8.82 9.74 9.96 8.31L9.97 8.3ZM9.97 5.63C9.99 5.75 10 5.87 10 6C10 7.84 7.76 9.33 5 9.33C2.23 9.33 0 7.84 0 6C0 5.87 0 5.75 0.02 5.63C1.17 7.07 2.97 8 5 8C7.02 8 8.82 7.07 9.96 5.64L9.97 5.63ZM5 0C7.76 0 10 1.49 10 3.33C10 5.17 7.76 6.66 5 6.66C2.23 6.66 0 5.17 0 3.33C0 1.49 2.23 0 5 0Z"
                    fill="#E94E46"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
      <LastGamesList />
    </div>
  );
}

export default BonusPage;
