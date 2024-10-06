import LastGamesList from "../../components/LastGamesList/LastGamesList";
import MainLayout from "../../components/MainLayout/MainLayout";

function DicePage() {
  return (
    <div>
      <MainLayout
        title="Dice"
        pageImgUrl="./public/assets/icons/dice_square.svg"
      >
        <div>
          <div className="flex items-center gap-[16px] mb-[24px] justify-center mt-[30px]">
            <span className="md:w-[100px] md:h-[120px] ssm:w-[62.07px] ssm:h-[74.48px] flex items-center justify-center ssm:text-[32px] md:text-7xl font-bold leading-none text-center text-[#252A42] dark:text-white border rounded-3xl border-white dark:border-gray-800 border-opacity-60 bg-white dark:bg-gradient-to-b from-[#171E32] to-[#1D2641]">
              0
            </span>
            <span className="md:w-[100px] md:h-[120px] ssm:w-[62.07px] ssm:h-[74.48px] flex items-center justify-center ssm:text-[32px] md:text-7xl font-bold leading-none text-center text-[#252A42] dark:text-white border rounded-3xl border-white dark:border-gray-800 border-opacity-60 bg-white dark:bg-gradient-to-b from-[#171E32] to-[#1D2641]">
              0
            </span>
            <span className="md:w-[100px] md:h-[120px] ssm:w-[62.07px] ssm:h-[74.48px] flex items-center justify-center ssm:text-[32px] md:text-7xl font-bold leading-none text-center text-[#252A42] dark:text-white border rounded-3xl border-white dark:border-gray-800  border-opacity-60 bg-white dark:bg-gradient-to-b from-[#171E32] to-[#1D2641]">
              0
            </span>
            <span className="md:w-[100px] md:h-[120px] ssm:w-[62.07px] ssm:h-[74.48px] flex items-center justify-center ssm:text-[32px] md:text-7xl font-bold leading-none text-center text-[#252A42] dark:text-white border rounded-3xl border-white dark:border-gray-800 border-opacity-60 bg-white dark:bg-gradient-to-b from-[#171E32] to-[#1D2641]">
              0
            </span>
            <span className="md:w-[100px] md:h-[120px] ssm:w-[62.07px] ssm:h-[74.48px] flex items-center justify-center ssm:text-[32px] md:text-7xl font-bold leading-none text-center text-[#252A42] dark:text-white border rounded-3xl border-white dark:border-gray-800 border-opacity-60 bg-white dark:bg-gradient-to-b from-[#171E32] to-[#1D2641]">
              0
            </span>
          </div>
          <p className="text-sm font-semibold leading-none text-center text-[#7F89C1]">
            Возможный выигрыш
          </p>
          <div className="ssm:w-full md:w-[600px] ssm:flex-col gap-2 flex md:flex-row items-center mx-auto ssm:bg-none md:bg-white md:dark:bg-[#252A42] ssm:p-0 md:p-[20px] rounded-2xl mt-[20px]">
            <div className="relative ssm:w-full md:w-1/2 ssm:bg-white ssm:dark:bg-[#252A42] ssm:p-[15px] md:p-0 md:bg-none lg:border-r-[1px] lg:border-gray-700 ssm:border ssm:border-[#383E5C73] md:border-none rounded-[14px]">
              <h4 className="mb-[16px] text-xs font-semibold text-[#7F89C1]">
                Ставка
              </h4>
              <div className="flex items-center gap-[8px]">
                <img
                  className="w-[24px] h-[24px]"
                  src="./assets/icons/coins.svg"
                  alt=""
                />
                <span className="text-lg font-bold text-[#252A42] dark:text-white">
                  10.00
                </span>
              </div>
              <div className="ssm:grid ssm:grid-cols-2 md:flex gap-[8px] mt-[8px] ssm:absolute md:static right-[15px] top-[5px]">
                <button className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]">
                  X2
                </button>
                <button className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]">
                  1/2
                </button>
                <button className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]">
                  Min
                </button>
                <button className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]">
                  Max
                </button>
              </div>
            </div>
            <div className="relative ssm:w-full md:w-1/2 pl-[20px] ssm:bg-white ssm:dark:bg-[#252A42] ssm:p-[15px] md:p-0 md:bg-none ssm:border ssm:border-[#383E5C73] md:border-none rounded-[14px]">
              <h4 className="mb-[16px] text-xs font-semibold text-[#7F89C1]">
                Шанс
              </h4>
              <div className="flex items-center gap-[8px]">
                <img
                  className="w-[24px] h-[24px]"
                  src="./assets/icons/procent.svg"
                  alt=""
                />
                <span className="text-lg font-bold text-[#252A42] dark:text-white">
                  10.00
                </span>
              </div>
              <div className="ssm:grid ssm:grid-cols-2 md:flex gap-[8px] mt-[8px] ssm:absolute md:static right-[15px] top-[5px]">
                <button className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]">
                  X2
                </button>
                <button className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]">
                  1/2
                </button>
                <button className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]">
                  Min
                </button>
                <button className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]">
                  Max
                </button>
              </div>
            </div>
          </div>
          <div className="flex ssm:flex-col lg:flex-row items-center justify-center gap-[20px] mt-[19px]">
            <button className="flex gap-[8px] ssm:w-full md:w-auto items-center justify-center px-20 py-3 rounded-2xl less_btn text-sm font-bold leading-none text-white capitalize transition-colors">
              <img src="./assets/icons/more_less.svg" alt="" />
              Меньше
            </button>
            <button className="flex gap-[8px] ssm:w-full md:w-auto  items-center justify-center px-20 py-3 rounded-2xl more_btn text-sm font-bold leading-none text-white capitalize transition-colorss">
              Больше
              <img src="./assets/icons/more_less.svg" alt="" />
            </button>
          </div>
        </div>
      </MainLayout>
      <LastGamesList />
    </div>
  );
}

export default DicePage;
