import LastGamesList from "../../components/LastGamesList/LastGamesList";
import MainLayout from "../../components/MainLayout/MainLayout";

function MinesPage() {
  return (
    <div>
      <MainLayout title="Mines" pageImgUrl="./assets/pagesImages/mines.svg">
        <div className="flex ssm:flex-col-reverse 2xl:flex-row ssm:items-center justify-evenly 2xl:items-start mt-[20px]">
          <div className="relative bg-white dark:bg-[#121625] rounded-2xl ssm:w-full 2xl:w-[380px] p-[20px]">
            <div className="mb-[20px]">
              <p className="text-xs font-semibold leading-3 text-[#7F89C1] mb-[16px]">
                Количество мин
              </p>
              <div className="flex items-center bg-[#EDEFFA] dark:bg-[#1C2034] rounded-xl p-[8px] gap-[8px]">
                <span className="p-[6px] bg-[#DFE2F4] dark:bg-[#22273E] rounded-[8px]">
                  <img
                    className="min-w-[13px]"
                    src="../../public/assets/icons/bomb.svg"
                    alt=""
                  />
                </span>
                <input
                  className="w-full bg-[#EDEFFA] dark:bg-[#1C2034] outline-none text-sm font-bold leading-3 text-[#252A42] dark:text-white"
                  type="text"
                />
                <div className="flex items-center gap-[8px]">
                  <span className="flex items-center justify-center flex-1 h-[36px] py-2.5 px-2.5 bg-[#E0E3F4] dark:bg-[#292F49] rounded-lg text-xs font-semibold leading-3 text-center text-[#7F89C1] cursor-pointer">
                    1/2
                  </span>
                  <span className="flex items-center justify-center flex-1 h-[36px] py-2.5 px-2.5 bg-[#E0E3F4] dark:bg-[#292F49] rounded-lg text-xs font-semibold leading-3 text-center text-[#7F89C1] cursor-pointer">
                    X2
                  </span>
                  <span className="flex items-center justify-center flex-1 h-full py-2.5 px-2.5 bg-[#E0E3F4] dark:bg-[#292F49] rounded-lg cursor-pointer">
                    <img
                      className="min-w-[16px]"
                      src="../../public/assets/icons/clear.svg"
                      alt=""
                    />
                  </span>
                </div>
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
                    src="../../public/assets/icons/coins.svg"
                    alt=""
                  />
                </span>
                <input
                  className="w-full bg-[#EDEFFA] dark:bg-[#1C2034] outline-none text-sm font-bold leading-3 text-[#252A42] dark:text-white"
                  type="text"
                />
                <div className="flex items-center gap-[8px]">
                  <span className="flex items-center justify-center flex-1 h-[36px] py-2.5 px-2.5 bg-[#E0E3F4] dark:bg-[#292F49] rounded-lg text-xs font-semibold leading-3 text-center text-[#7F89C1] cursor-pointer">
                    1/2
                  </span>
                  <span className="flex items-center justify-center flex-1 h-[36px] py-2.5 px-2.5 bg-[#E0E3F4] dark:bg-[#292F49] rounded-lg text-xs font-semibold leading-3 text-center text-[#7F89C1] cursor-pointer">
                    X2
                  </span>
                  <span className="flex items-center justify-center flex-1 h-full py-2.5 px-2.5 bg-[#E0E3F4] dark:bg-[#292F49] rounded-lg cursor-pointer">
                    <img
                      className="min-w-[16px]"
                      src="../../public/assets/icons/clear.svg"
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
              <button className="text-sm font-bold text-white bg-[#008EFF] hover:bg-[#4899db] transition-colors inline-flex flex-col items-center justify-center w-40 h-12 px-3.5 py-3 rounded-2xl">
                Авто-выбор
              </button>
            </div>
          </div>
          <div className="ssm:grid grid-cols-2 xl:flex gap-[20px] ssm:flex-wrap xl:flex-nowrap mb-[15px]">
            <div className="flex ssm:flex-row xl:flex-col justify-between items-center ssm:bg-white ssm:dark:bg-[#252A42] xl:diamond_gradient rounded-2xl ssm:w-full xl:w-[130px] ssm:pt-2 xl:pt-[160px] px-[8px] ssm:pb-[8px] xl:pb-[20px] ssm:order-2 xl:order-1">
              <img
                className="p-[8px] ssm:w-[42px] ssm:h-[42px] xl:w-[60px] xl:h-[60px] bg-[#EDEFFA] dark:bg-[#303652] rounded-2xl"
                src="../../public/assets/images/diamond.png"
                alt=""
              />
              <h4 className="ssm:hidden xl:block text-sm font-bold leading-3 text-center text-[#252A42] dark:text-white mt-[23px] ssm:mb-0 xl:mb-[8px]">
                Алмаз
              </h4>
              <p className="ssm:hidden xl:block text-xs font-medium leading-3 text-center text-[#7F89C1] ssm:mb-0 xl:mb-[108px]">
                Открывай ячейки с звездами
              </p>
              <div className="flex items-center gap-[8px] bg-[#16A58B] py-[6px] pl-[6px] pr-[14px] rounded-[8px]">
                <img
                  className="p-[3px] bg-[#26BA9F] rounded-[6px]"
                  src="../../public/assets/icons/magic-star.svg"
                  alt=""
                />
                <span className="text-xs font-bold leading-3 text-center text-white">
                  12
                </span>
              </div>
            </div>
            <div className="col-span-2 ssm:order-1 lg:order-2">
              <div className="grid grid-cols-5 gap-[15px]">
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
                <div className="ssm:w-[56.9px] ssm:h-[56.9px] lg:w-[75px] lg:h-[75px] bg-white dark:bg-[#252A42] border-none dark:border rounded-2xl border-gray-700 border-opacity-40">
                  <img src="" alt="" />
                </div>
              </div>
              <div></div>
            </div>
            <div className="flex ssm:flex-row lg:flex-col justify-between items-center ssm:bg-white ssm:dark:bg-[#252A42] xl:bomb_gradient rounded-2xl ssm:w-full xl:w-[130px] ssm:pt-2 xl:pt-[160px] px-[8px] ssm:pb-[8px] xl:pb-[20px] order-3">
              <img
                className="p-[8px] ssm:w-[42px] ssm:h-[42px] xl:w-[60px] xl:h-[60px] bg-[#EDEFFA] dark:bg-[#303652] rounded-2xl"
                src="../../public/assets/images/tnt.png"
                alt=""
              />
              <h4 className="ssm:hidden xl:block text-sm font-bold leading-3 text-center text-[#252A42] dark:text-white mt-[23px] ssm:mb-0 xl:mb-[8px]">
                Мины
              </h4>
              <p className="ssm:hidden xl:block text-xs font-medium leading-3 text-center text-[#7F89C1] ssm:mb-0 xl:mb-[108px]">
                Количество мин на игровом поле
              </p>
              <div className="flex items-center gap-[8px] bg-[#D24E49] py-[6px] pl-[6px] pr-[14px] rounded-[8px]">
                <img
                  className="p-[3px] bg-[#EF6A65] rounded-[6px]"
                  src="../../public/assets/icons/bomb.svg"
                  alt=""
                />
                <span className="text-xs font-bold leading-3 text-center text-white">
                  12
                </span>
              </div>
            </div>
            <div className="items-center justify-between order-4 col-span-2 gap-4 ssm:flex xl:hidden">
              <button className="flex items-center justify-center  w-[48px] h-[48px] bg-[#D0D4EC] dark:bg-[#1D2239] rounded-[14px]">
                <img src="../../../assets/icons/arrow.svg" alt="" />
              </button>
              <div className="py-[16px] px-[15px] w-[105px] h-[48px] text-center bg-[#D0D4EC] dark:bg-[#1D2239] rounded-[14px] text-base text-[#252A42] dark:text-white font-semibold">
                1.45x
              </div>
              <div className="py-[16px] px-[15px] w-[105px] h-[48px] text-center bg-[#D0D4EC] dark:bg-[#1D2239] rounded-[14px] text-base text-[#252A42] dark:text-white font-semibold">
                1.45x
              </div>
              <button className="flex items-center justify-center w-[48px] h-[48px] bg-[#D0D4EC] dark:bg-[#1D2239] rounded-[14px]">
                <img
                  className="rotate-180"
                  src="../../../assets/icons/arrow.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
      <LastGamesList />
    </div>
  );
}

export default MinesPage;
