import classNames from "classnames";
import LastGamesList from "../../components/LastGamesList/LastGamesList";
import { kenoVariants, multipliers } from "./consts";
import MainLayout from "../../components/MainLayout/MainLayout";

function KenoPage() {
  return (
    <div>
      <MainLayout title="Keno" pageImgUrl="./assets/pagesImages/keno.svg">
        <div className="flex 2xl:items-start justify-between mt-[20px] pb-[30px] gap-5 ssm:flex-col-reverse 2xl:flex-row ssm:items-center">
          <div className="relative bg-white dark:bg-[#121625] rounded-2xl w-[380px] p-[20px]">
            <div className="mb-[20px]">
              <p className="text-xs font-semibold leading-3 text-[#7F89C1] mb-[16px]">
                Риск
              </p>
              <div className="flex items-center justify-between bg-[#EDEFFA] dark:bg-[#1C2034] rounded-xl">
                <button className="w-28 h-11 bg-[#16A58B] rounded-xl text-xs font-semibold leading-3 text-center text-white">
                  Легкий
                </button>
                <div className="border-r-[1px] border-l-[1px] dark:border-[#282E48]">
                  <button className="text-xs font-semibold leading-3 text-center text-gray-400 w-28 h-11 rounded-xl">
                    Средний
                  </button>
                </div>
                <button className="text-xs font-semibold leading-3 text-center text-gray-400 w-28 h-11 rounded-xl">
                  Высокий
                </button>
              </div>
            </div>
            <div className="mb-[20px]">
              <p className="text-xs font-semibold leading-3 text-[#7F89C1] mb-[16px]">
                Ставка
              </p>
              <div className="flex items-center bg-[#EDEFFA] dark:bg-[#1C2034] rounded-xl p-[8px] gap-[8px]">
                <span className="p-[6px] bg-[#DFE2F4] dark:bg-[#22273E] rounded-[8px]">
                  <img
                    className="min-w-[13px]"
                    src="./assets/icons/coins.svg"
                    alt=""
                  />
                </span>
                <input
                  className="w-full bg-[#EDEFFA] dark:bg-[#1C2034] outline-none text-sm font-bold leading-3 dark:text-white"
                  type="text"
                />
                <div className="flex items-center gap-[8px]">
                  <span className="flex items-center justify-center flex-1 h-[36px] py-2.5 px-2.5 bg-[#E0E3F4] dark:bg-[#292F49] rounded-lg text-xs font-semibold leading-3 text-center text-[#7F89C1]">
                    1/2
                  </span>
                  <span className="flex items-center justify-center flex-1 h-[36px] py-2.5 px-2.5 bg-[#E0E3F4] dark:bg-[#292F49] rounded-lg text-xs font-semibold leading-3 text-center text-[#7F89C1]">
                    X2
                  </span>
                  <span className="flex items-center justify-center flex-1 h-full py-2.5 px-2.5 bg-[#E0E3F4] dark:bg-[#292F49] rounded-lg">
                    <img
                      className="min-w-[16px]"
                      src="./assets/icons/clear.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button className="text-sm font-bold text-white bg-[#16a58b] hover:bg-[#21695b] cursor-pointer transition inline-flex flex-col items-center justify-center w-40 h-12 px-3.5 py-3 rounded-2xl">
                Забрать
              </button>
              <button className="text-sm font-bold text-white bg-[#008EFF] hover:bg-[#3875a7] transition-colors inline-flex flex-col items-center justify-center w-40 h-12 px-3.5 py-3 rounded-2xl">
                Авто-выбор
              </button>
            </div>
            <button className="flex items-center w-full justify-center bg-[#EDEFFA] hover:bg-[#EDEFFA] dark:bg-[#1C2034] dark:hover:bg-[#171a28] transition-colors text-sm font-semibold text-center text-[#7785B3] py-[19px] rounded-[10px] mt-[10px]">
              <img src="./assets/icons/clear.svg" alt="" />
              <span>Очистить выбранное</span>
            </button>
          </div>
          <div className="bg-white dark:bg-[#252A42] ssm:p-[6px] lg:p-[30px] ssm:rounded-xl lg:rounded-[18px] ssm:w-[330px] lg:w-auto">
            <div className="grid w-full grid-cols-8 ssm:gap-[7.18px] lg:gap-[15.75px] pb-[19px] border-b-[1px] border-[#D9DCEF] dark:border-[#373D5A]">
              {kenoVariants.map(({ key, result }) => (
                <div
                  className={classNames(
                    "ssm:w-[34.34px] ssm:h-[34.34px] lg:w-[78.72px] lg:h-[78.79px] relative flex justify-center items-center border ssm:rounded-xl lg:rounded-2xl border-[#EDEFFA]  dark:border-[#3A3F5E]",
                    {
                      "bg-[#EDEFFA] dark:bg-transparent": result === "default",
                      "bg-[#C53B3B]": result === "loose",
                      "bg-[#008EFF]": result === "win",
                    }
                  )}
                >
                  <span
                    className={classNames(
                      "ssm:text-xs lg:text-2xl font-semibold text-center text-[#7F89C1] relative z-10",
                      {
                        "text-white": result !== "default",
                      }
                    )}
                  >
                    {key}
                  </span>
                  {result === "prize" && (
                    <img
                      className="absolute w-full h-full top-0 left-0 z-[1]"
                      src="./assets/images/gem.png"
                      alt=""
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-[10px] ssm:pt-[15px] lg:pt-[30px]">
              {multipliers.map((_item, index) => (
                <div
                  key={index}
                  className="lg:w-[65px] ssm:w-[27.43px] flex items-center justify-center flex-col ssm:rounded-lg lg:rounded-xl bg-[#EDEFFA] dark:bg-[#2A304A] ssm:pt-[5px] lg:pt-[15px] ssm:pb-[6px] lg:pb-[16px]"
                >
                  <p className="ssm:text-[6px] lg:text-sm font-semibold text-center text-[#7884AD]">
                    0x
                  </p>
                  <p className="ssm:text-[6px] lg:text-sm font-semibold text-center text-[#7884AD]">
                    0 hits
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
      <LastGamesList />
    </div>
  );
}

export default KenoPage;
