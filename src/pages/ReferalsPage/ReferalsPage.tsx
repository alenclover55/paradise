import "./ReferalsPage.scss";
import LastGamesList from "../../components/LastGamesList/LastGamesList";
import MainLayout from "../../components/MainLayout/MainLayout";

function ReferalsPage() {
  return (
    <div>
      <MainLayout
        title="Партнерская программа"
        pageImgUrl="./assets/pagesImages/referals.svg"
      >
        <div className="flex gap-4 ssm:flex-col lg:flex-row mt-[20px]">
          <div className="ssm:w-full lg:w-[40%]">
            <div className="bg-[#16A58B] rounded-3xl ssm:w-full flex ssm:items-center lg:items-start flex-col justify-center pl-[35px] pt-[35px] pb-[37px] ssm:pr-[35px] lg:pr-[115px]">
              <h3 className="text-2xl font-semibold text-white">
                Приводи друзей и зарабатывай
              </h3>
              <p className="text-sm font-medium text-[#AAFFF0] mt-[6px]">
                До $10 за каждого приведенного друга.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[15px] mt-[15px]">
              <div className="py-[25px] px-[27px] bg-white dark:bg-[#252A42] rounded-3xl">
                <h3 className="text-xl font-semibold text-center text-[#252A42] dark:text-white">
                  54 283.33
                </h3>
                <p className="text-xs font-semibold text-center text-[#7F89C1] mt-[14px]">
                  Всего заработано
                </p>
              </div>
              <div className="py-[25px] px-[27px] bg-white dark:bg-[#252A42] rounded-3xl">
                <h3 className="text-xl font-semibold text-center text-[#252A42] dark:text-white">
                  3%
                </h3>
                <p className="text-xs font-semibold text-center text-[#7F89C1] mt-[14px]">
                  Ваш процент
                </p>
              </div>
              <div className="py-[25px] px-[27px] bg-white dark:bg-[#252A42] rounded-3xl">
                <h3 className="text-xl font-semibold text-center text-[#252A42] dark:text-white">
                  8 423
                </h3>
                <p className="text-xs font-semibold text-center text-[#7F89C1] mt-[10px]">
                  Приглашено всего
                </p>
              </div>
              <div className="py-[25px] px-[27px] bg-white dark:bg-[#252A42] rounded-3xl">
                <div className="flex justify-center">
                  <h3 className="text-sm font-semibold text-[#252A42] dark:text-white flex gap-[4px] items-center">
                    <img
                      className="rounded-full h-[22px] w-[22px]"
                      src="/assets/icons/profile_img.png"
                      alt=""
                    />
                    shenderro
                  </h3>
                </div>
                <p className="text-xs font-semibold text-center text-[#7F89C1] mt-[18px]">
                  Вас пригласил
                </p>
              </div>
            </div>
          </div>
          <div className="ssm:w-full lg:w-[70%]">
            <div className="bg-white dark:bg-[#252A42] p-[25px] rounded-xl">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img src="/assets/icons/links.svg" alt="" />
                  <div>
                    <h3 className="font-semibold text-[#252A42] dark:text-white ssm:text-sm lg:text-base">
                      Ваша реферальная ссылка
                    </h3>
                    <p className="ssm:text-xs lg:text-sm font-medium text-[#7F89C1] mt-2">
                      Распространяйте свою ссылку и зарабатывайте без вложений
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <input className="w-full py-[19px] pl-[19px] text-sm font-semibold text-[#252A42] dark:text-white bg-[#EDEFFA] dark:bg-[#353C5A] rounded-[12px]" />
                  <span className="bg-[#E0E3F4] dark:bg-[#474F72] pl-[7px] pt-[7px] pr-[8px] pb-[8px] absolute right-[10px] top-[50%] translate-y-[-50%] rounded-md cursor-pointer">
                    <img src="/assets/icons/copy.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className=" bg-white dark:bg-[#252A42] p-[25px] rounded-xl mt-5">
              <div className="flex items-center gap-4 border-b border-[#DFE4F9] dark:border-[#3B4262] pb-[22px]">
                <span className="text-2xl font-semibold text-center w-[48px] h-[48px] flex items-center justify-center bg-[#16A58B] text-white rounded-2xl">
                  2
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#252A42] dark:text-white">
                    Реферальный уровень
                  </h3>
                  <p className="text-sm font-medium text-gray-400">
                    До уровня{" "}
                    <span className="text-[#252A42] dark:text-white">2</span>{" "}
                    осталось пригласить{" "}
                    <span className="text-[#252A42] dark:text-white">10</span>{" "}
                    рефералов
                  </p>
                </div>
              </div>
              <div className="overflow-x-scroll pt-[60.5px] pb-[68px] ">
                <div className="h-[6px] ssm:w-[932px] md:w-full rounded-[111px] block bg-[#EDEFFA] dark:bg-[#353C5A] relative">
                  <div className="bg-[#16A58B] w-1/2"></div>
                  <div className="w-[36px] flex flex-col items-center absolute top-[-40px] left-[15%]">
                    <h4 className="mb-2 text-xs font-semibold text-center text-[#252A42] dark:text-white">
                      3%
                    </h4>
                    <span className="text-sm font-semibold text-center text-[#7F89C1] py-[9px] px-[10px] bg-[#EDEFFA] dark:bg-[#353C5A] rounded-lg">
                      1
                    </span>
                    <p className="text-xs font-semibold text-center text-[#7F89C1] mt-2">
                      0<br />
                      рефов
                    </p>
                  </div>
                  <div className="w-[36px] flex flex-col items-center  absolute top-[-40px] left-[28.66%]">
                    <h4 className="mb-2 text-xs font-semibold text-center text-[#252A42] dark:text-white">
                      3.5%
                    </h4>
                    <span className="text-sm font-semibold text-center text-[#7F89C1] py-[9px] px-[10px] bg-[#EDEFFA] dark:bg-[#353C5A] rounded-lg">
                      2
                    </span>
                    <p className="text-xs font-semibold text-center text-[#7F89C1] mt-2">
                      10
                      <br />
                      рефов
                    </p>
                  </div>
                  <div className="w-[36px] flex flex-col items-center absolute top-[-40px] left-[42.32%]">
                    <h4 className="mb-2 text-xs font-semibold text-center text-[#252A42] dark:text-white">
                      3.6%
                    </h4>
                    <span className="text-sm font-semibold text-center text-[#7F89C1] py-[9px] px-[10px] bg-[#EDEFFA] dark:bg-[#353C5A] rounded-lg">
                      3
                    </span>
                    <p className="text-xs font-semibold text-center text-[#7F89C1] mt-2">
                      100
                      <br />
                      рефов
                    </p>
                  </div>
                  <div className="w-[36px] flex flex-col items-center absolute top-[-40px] left-[55.98%]">
                    <h4 className="mb-2 text-xs font-semibold text-center text-[#252A42] dark:text-white">
                      3.7%
                    </h4>
                    <span className="text-sm font-semibold text-center text-[#7F89C1] py-[9px] px-[10px] bg-[#EDEFFA] dark:bg-[#353C5A] rounded-lg">
                      4
                    </span>
                    <p className="text-xs font-semibold text-center text-[#7F89C1] mt-2">
                      250
                      <br />
                      рефов
                    </p>
                  </div>
                  <div className="w-[36px] flex flex-col items-center absolute top-[-40px] left-[69.64%]">
                    <h4 className="mb-2 text-xs font-semibold text-center text-[#252A42] dark:text-white">
                      3.85%
                    </h4>
                    <span className="text-sm font-semibold text-center text-[#7F89C1] py-[9px] px-[10px] bg-[#EDEFFA] dark:bg-[#353C5A] rounded-lg">
                      5
                    </span>
                    <p className="text-xs font-semibold text-center text-[#7F89C1] mt-2">
                      500
                      <br />
                      рефов
                    </p>
                  </div>
                  <div className="w-[36px] flex flex-col items-center absolute top-[-40px] left-[83.64%]">
                    <h4 className="mb-2 text-xs font-semibold text-center text-[#252A42] dark:text-white">
                      5%
                    </h4>
                    <span className="text-sm font-semibold text-center text-[#7F89C1] py-[9px] px-[10px] bg-[#EDEFFA] dark:bg-[#353C5A] rounded-lg">
                      6
                    </span>
                    <p className="text-xs font-semibold text-center text-[#7F89C1] mt-2">
                      1000+
                      <br />
                      рефов
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[18px] bg-white dark:bg-[#252A42] rounded-3xl px-[24px] pt-[24px] pb-[20px]">
          <div className="flex justify-between ssm:items-start lg:items-center ssm:flex-col lg:flex-row ">
            <div>
              <h3 className="text-base font-semibold text-[#252A42] dark:text-white">
                Ваши рефералы
              </h3>
              <p className="text-sm font-semibold text-[#7F89C1] mt-[17px]">
                Всего записей: 4
              </p>
            </div>
            <div className="bg-[#EDEFFA] dark:bg-[#252A42] ssm:w-full lg:w-auto flex items-center gap-[8px] ssm:my-[15px] lg:my-0 relative rounded-[12px]">
              <img
                className="absolute left-[19px] top-[14px]"
                src="../../assets/icons/search_icon.svg"
                alt=""
              />
              <input
                className="bg-[#EDEFFA] dark:bg-[#353C5A] placeholder:text-[#7F89C1] text-[#7F89C1] w-full text-[14px] font-semibold border-none py-[12px] pl-[46px] outline-none focus:outline-[#22263c] rounded-[12px]"
                type="text"
                placeholder="Поиск..."
              />
            </div>
          </div>
          <div className="ssm:hidden lg:grid grid-cols-5 py-[15px] px-[20px] border rounded-xl border-[#EDEFFA] dark:border-[#353B58] mt-[16px] mb-[12px]">
            <p className="text-xs font-semibold text-[#7F89C1]">#</p>
            <p className="text-xs font-semibold text-[#7F89C1]">
              Сумма пополнений
            </p>
            <p className="text-xs font-semibold text-[#7F89C1] ml-[35px]">
              Cумма выводов
            </p>
            <p className="text-xs font-semibold text-[#7F89C1] ml-[90px]">
              Доход
            </p>
            <p className="text-xs font-semibold text-[#7F89C1]  justify-self-end">
              Дата регистрации
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="ssm:flex flex-wrap justify-between gap-[15px] lg:grid grid-cols-5 p-5 bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl">
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white">
                <span className="flex flex-col gap-[15px] ssm:block lg:hidden text-nowrap text-xs font-semibold text-[#7F89C1]">
                  #
                </span>
                87123
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white ssm:m-0 lg:ml-[32px]">
                <span className="text-xs font-semibold ssm:block lg:hidden text-[#7F89C1]">
                  Сумма пополнений
                </span>
                5000.00
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white  ssm:m-0  lg:ml-[50px]">
                <span className="text-xs font-semibold ssm:block lg:hidden text-center text-[#7F89C1]">
                  Сумма выводов
                </span>
                35 000.00
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white  ssm:m-0 lg:ml-[85px]">
                <span className="text-xs font-semibold ssm:block lg:hidden text-center text-[#7F89C1]">
                  Доход
                </span>
                600.00
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white justify-self-end">
                <span className="text-xs font-semibold ssm:block lg:hidden text-center text-[#7F89C1]">
                  Дата регистрации
                </span>
                05.08.2024
              </p>
            </div>
            <div className="ssm:flex flex-wrap justify-between gap-[15px] lg:grid grid-cols-5 p-5 bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl">
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white">
                <span className="flex flex-col gap-[15px] ssm:block lg:hidden text-nowrap text-xs font-semibold text-[#7F89C1]">
                  #
                </span>
                87123
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white ssm:m-0 lg:ml-[32px]">
                <span className="text-xs font-semibold ssm:block lg:hidden text-[#7F89C1]">
                  Сумма пополнений
                </span>
                5000.00
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white  ssm:m-0  lg:ml-[50px]">
                <span className="text-xs font-semibold ssm:block lg:hidden text-center text-[#7F89C1]">
                  Сумма выводов
                </span>
                35 000.00
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white  ssm:m-0 lg:ml-[85px]">
                <span className="text-xs font-semibold ssm:block lg:hidden text-center text-[#7F89C1]">
                  Доход
                </span>
                600.00
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white justify-self-end">
                <span className="text-xs font-semibold ssm:block lg:hidden text-center text-[#7F89C1]">
                  Дата регистрации
                </span>
                05.08.2024
              </p>
            </div>
            <div className="ssm:flex flex-wrap justify-between gap-[15px] lg:grid grid-cols-5 p-5 bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl">
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white">
                <span className="flex flex-col gap-[15px] ssm:block lg:hidden text-nowrap text-xs font-semibold text-[#7F89C1]">
                  #
                </span>
                87123
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white ssm:m-0 lg:ml-[32px]">
                <span className="text-xs font-semibold ssm:block lg:hidden text-[#7F89C1]">
                  Сумма пополнений
                </span>
                5000.00
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white  ssm:m-0  lg:ml-[50px]">
                <span className="text-xs font-semibold ssm:block lg:hidden text-center text-[#7F89C1]">
                  Сумма выводов
                </span>
                35 000.00
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white  ssm:m-0 lg:ml-[85px]">
                <span className="text-xs font-semibold ssm:block lg:hidden text-center text-[#7F89C1]">
                  Доход
                </span>
                600.00
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white justify-self-end">
                <span className="text-xs font-semibold ssm:block lg:hidden text-center text-[#7F89C1]">
                  Дата регистрации
                </span>
                05.08.2024
              </p>
            </div>
            <div className="ssm:flex flex-wrap justify-between gap-[15px] lg:grid grid-cols-5 p-5 bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl">
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white">
                <span className="flex flex-col gap-[15px] ssm:block lg:hidden text-nowrap text-xs font-semibold text-[#7F89C1]">
                  #
                </span>
                87123
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white ssm:m-0 lg:ml-[32px]">
                <span className="text-xs font-semibold ssm:block lg:hidden text-[#7F89C1]">
                  Сумма пополнений
                </span>
                5000.00
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white  ssm:m-0  lg:ml-[50px]">
                <span className="text-xs font-semibold ssm:block lg:hidden text-center text-[#7F89C1]">
                  Сумма выводов
                </span>
                35 000.00
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white  ssm:m-0 lg:ml-[85px]">
                <span className="text-xs font-semibold ssm:block lg:hidden text-center text-[#7F89C1]">
                  Доход
                </span>
                600.00
              </p>
              <p className="flex flex-col gap-[15px] text-sm font-semibold text-[#252A42] dark:text-white justify-self-end">
                <span className="text-xs font-semibold ssm:block lg:hidden text-center text-[#7F89C1]">
                  Дата регистрации
                </span>
                05.08.2024
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[8px] mt-[16px]">
            <button className="flex items-center justify-center ssm:w-[32px] ssm:h-[32px] lg:w-[42px] lg:h-[42px] bg-[#EDEFFA] hover:bg-[#e3e4ea] dark:bg-[#353C5A] dark:hover:bg-[#39405b] transition-colors rounded-[14px]">
              <img src="../../../assets/icons/arrow.svg" alt="" />
            </button>
            <button className="flex items-center justify-center ssm:w-[32px] ssm:h-[32px] lg:w-[42px] lg:h-[42px] bg-[#EDEFFA] hover:bg-[#e3e4ea] dark:bg-[#353C5A] dark:hover:bg-[#39405b] transition-colors rounded-[14px]">
              <img
                className="rotate-180"
                src="../../../assets/icons/arrow.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </MainLayout>
      <LastGamesList />
    </div>
  );
}
export default ReferalsPage;
