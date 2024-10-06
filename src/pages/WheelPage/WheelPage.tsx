import LastGamesList from "../../components/LastGamesList/LastGamesList";
import MainLayout from "../../components/MainLayout/MainLayout";

function WheelPage() {
  return (
    <div>
      <MainLayout title="Wheel" pageImgUrl="./assets/pagesImages/wheel.svg">
        <div className="flex items-center ssm:flex-col-reverse xl:flex-row gap-[20px] mt-[20px]">
          <div className="relative bg-white dark:bg-[#121625] rounded-2xl w-[380px] p-[20px]">
            <div className="mb-[20px]">
              <p className="text-xs font-semibold leading-3 text-[#7F89C1] mb-[16px]">
                Сложность
              </p>
              <div className="flex items-center justify-between bg-[#EDEFFA] dark:bg-[#1C2034] rounded-xl gap-[8px]">
                <button className="w-28 h-11 bg-[#16A58B] rounded-xl text-xs font-semibold leading-3 text-center text-white">
                  Легкий
                </button>
                <div className="border-r-[1px] border-l-[1px] border-[#D2D6EA] dark:border-[#282E48]">
                  <button className="text-xs font-semibold leading-3 text-center text-gray-400 w-28 h-11 rounded-xl">
                    Средний
                  </button>
                </div>
                <button className="text-xs font-semibold leading-3 text-center text-gray-400 w-28 h-11 rounded-xl">
                  Сложный
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
                  className="w-full bg-[#EDEFFA] dark:bg-[#1C2034] outline-none text-sm font-bold leading-3 text-white"
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
            <div className="flex justify-center">
              <button className="text-xs font-semibold leading-3 text-center text-[#FFFFFF] w-full flex items-center justify-center h-12 px-20 py-3 bg-[#008EFF] rounded-2xl gap-[8px]">
                Сделать ставку
                <img src="./assets/icons/play_icon.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="relative bg-white dark:bg-[#252A42] rounded-2xl w-full ssm:[207px] xl:h-[280px] min-h-[207px] max-h-[280px] overflow-hidden">
            <img
              className="absolute ssm:top-[120px] xl:top-[170px] left-1/2 -translate-x-1/2 z-10"
              src="./assets/images/wheel_x.png"
              alt=""
            />
            <img
              className="hidden dark:inline-block absolute top-[31px] left-1/2 -translate-x-1/2"
              src="./assets/images/wheel1.png"
              alt=""
            />
            <img
              className="inline-block dark:hidden absolute top-[31px] left-1/2 -translate-x-1/2"
              src="./assets/images/wheel-light.png"
              alt=""
            />
            <img
              className="hidden dark:inline-block absolute top-[31px] left-1/2 -translate-x-1/2"
              src="./assets/images/wheel1.png"
              alt=""
            />
            <img
              className="absolute top-[16px] left-1/2 -translate-x-1/2"
              src="./assets/images/wheel_tracker.png"
              alt=""
            />
            <div className="absolute w-[70%] h-[129px] bottom-0 block wheel_shadow z-2 left-[50%] translate-x-[-50%]"></div>
          </div>
        </div>
      </MainLayout>
      <LastGamesList />
    </div>
  );
}

export default WheelPage;
