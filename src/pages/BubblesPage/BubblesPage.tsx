import LastGamesList from "../../components/LastGamesList/LastGamesList";
import MainLayout from "../../components/MainLayout/MainLayout";

function BubblesPage() {
  return (
    <div>
      <MainLayout title="Bubbles" pageImgUrl="./assets/pagesImages/bubbles.svg">
        <div>
          <div className="flex items-center justify-between pt-[55px] pb-[49px]">
            <span className="ssm:hidden xl:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="ssm:hidden xl:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="ssm:hidden xl:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="ssm:hidden md:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="ssm:hidden md:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="ssm:hidden md:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="ssm:hidden md:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <div className="bg-[#008EFF] rounded-full w-[182px] h-[50px] p-[6px] flex items-center justify-between relative">
              <span className="inline-block p-[9px] bg-white rounded-full relative z-[2]">
                <img width={20} src="/assets/icons/icon_evil.svg" alt="" />
              </span>
              <div className="absolute left-[50%] translate-x-[-50%] w-[100px] h-[100px] bg-[#008EFF] rounded-full flex items-center justify-center ">
                <span className="p-[9px]  rounded-full bg-[#0478D4] w-[76px] h-[76px] flex items-center justify-center">
                  <img width={48} src="/assets/icons/icon_saint.svg" alt="" />
                </span>
              </div>
              <span className="inline-block p-[9px] bg-white rounded-full relative z-[2] ">
                <svg
                  width="20.000000"
                  height="20.000000"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M10 0C8.02 0 6.08 0.58 4.44 1.68C2.79 2.78 1.51 4.34 0.76 6.17C0 8 -0.2 10.01 0.19 11.95C0.57 13.89 1.53 15.67 2.92 17.07C4.32 18.46 6.1 19.42 8.04 19.8C9.98 20.19 12 19.99 13.82 19.23C15.65 18.48 17.21 17.2 18.31 15.55C19.41 13.91 20 11.97 20 10C19.99 7.34 18.94 4.8 17.06 2.93C15.19 1.05 12.65 0 10 0ZM10 16.66C9.83 16.66 9.67 16.61 9.53 16.52C9.4 16.43 9.29 16.3 9.23 16.15C9.16 16 9.15 15.83 9.18 15.67C9.21 15.5 9.29 15.36 9.41 15.24C9.52 15.12 9.67 15.04 9.83 15.01C9.99 14.98 10.16 15 10.31 15.06C10.47 15.12 10.6 15.23 10.69 15.37C10.78 15.5 10.83 15.66 10.83 15.83C10.83 16.05 10.74 16.26 10.58 16.42C10.43 16.57 10.22 16.66 10 16.66ZM11.6 10.42C11.36 10.57 11.16 10.79 11.02 11.04C10.88 11.3 10.82 11.59 10.83 11.88L10.83 12.5C10.83 12.72 10.74 12.93 10.58 13.08C10.43 13.24 10.22 13.33 10 13.33C9.77 13.33 9.56 13.24 9.41 13.08C9.25 12.93 9.16 12.72 9.16 12.5L9.16 11.88C9.15 11.29 9.29 10.71 9.58 10.19C9.87 9.68 10.29 9.26 10.8 8.96C11.11 8.79 11.35 8.53 11.5 8.21C11.65 7.89 11.7 7.53 11.63 7.19C11.57 6.86 11.41 6.56 11.17 6.32C10.93 6.08 10.63 5.92 10.3 5.86C10.06 5.81 9.81 5.82 9.58 5.89C9.34 5.95 9.12 6.06 8.93 6.22C8.74 6.37 8.59 6.57 8.49 6.79C8.38 7.01 8.33 7.25 8.33 7.5C8.33 7.72 8.24 7.93 8.08 8.08C7.93 8.24 7.72 8.33 7.5 8.33C7.27 8.33 7.06 8.24 6.91 8.08C6.75 7.93 6.66 7.72 6.66 7.5C6.66 6.91 6.82 6.33 7.11 5.82C7.41 5.31 7.83 4.89 8.34 4.6C8.85 4.31 9.43 4.16 10.02 4.16C10.61 4.17 11.19 4.33 11.69 4.63C12.2 4.93 12.62 5.35 12.9 5.87C13.19 6.38 13.34 6.96 13.33 7.55C13.32 8.13 13.16 8.71 12.85 9.21C12.55 9.72 12.12 10.13 11.6 10.42Z"
                    fill="#008EFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
              </span>
            </div>
            <span className="ssm:hidden xl:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="ssm:hidden xl:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="ssm:hidden xl:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="ssm:hidden md:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="ssm:hidden md:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="ssm:hidden md:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="ssm:hidden md:block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
            <span className="block w-[15px] h-[15px] bg-[#D1D5EA] dark:bg-gradient-to-b from-[#303756] to-[#222B47] rounded-full"></span>
          </div>
          <div className="ssm:w-full md:w-[600px] ssm:flex-col gap-2 flex md:flex-row items-center mx-auto ssm:bg-none md:bg-white md:dark:bg-[#252A42] ssm:p-0 md:p-[20px] rounded-2xl mt-[20px]">
            <div className="relative ssm:w-full md:w-1/2 ssm:bg-white ssm:dark:bg-[#252A42] ssm:p-[15px] md:p-0 md:bg-none lg:border-r-[1px] lg:border-gray-700 ssm:border ssm:border-[#E0E3F4] ssm:dark:border-[#383E5C73] md:border-none rounded-[14px]">
              <h4 className="mb-[16px] text-xs font-semibold text-[#7F89C1]">
                Ставка
              </h4>
              <div className="flex items-center gap-[8px]">
                <img
                  className="w-[24px] h-[24px]"
                  src="../../public/assets/icons/coins.svg"
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
            <div className="relative ssm:w-full md:w-1/2 pl-[20px]  ssm:bg-white ssm:dark:bg-[#252A42] ssm:p-[15px] md:p-0 md:bg-none ssm:border ssm:border-[#E0E3F4] ssm:dark:border-[#383E5C73] md:border-none rounded-[14px]">
              <h4 className="mb-[16px] text-xs font-semibold text-[#7F89C1]">
                Цель
              </h4>
              <div className="flex items-center gap-[8px]">
                <svg
                  width="24.000000"
                  height="24.000000"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.000000" />
                  <g opacity="0.000000" />
                  <path
                    id="Vector"
                    d="M15.58 1.75C12.62 1.75 10.21 4.16 10.21 7.13C10.21 10.1 12.62 12.51 15.58 12.51C18.55 12.51 20.96 10.1 20.96 7.13C20.96 4.16 18.55 1.75 15.58 1.75Z"
                    fill="#008EFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M6.36 13.03C4.53 13.03 3.03 14.52 3.03 16.36C3.03 18.2 4.52 19.69 6.36 19.69C8.19 19.69 9.69 18.2 9.69 16.36C9.69 14.52 8.19 13.03 6.36 13.03Z"
                    fill="#008EFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M16.62 16.62C15.07 16.62 13.81 17.87 13.81 19.43C13.81 20.98 15.07 22.24 16.62 22.24C18.17 22.24 19.43 20.98 19.43 19.43C19.43 17.87 18.17 16.62 16.62 16.62Z"
                    fill="#008EFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>

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
            <button className="flex gap-[8px] ssm:w-full md:w-auto  items-center justify-center px-20 py-[15.27px] rounded-2xl bg-[#008EFF] hover:bg-[#3875a7] transition-colors text-sm font-bold leading-none text-white capitalize">
              Играть
              <svg
                width="15.272705"
                height="17.454590"
                viewBox="0 0 15.2727 17.4546"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M4.5 0.47C2.6 -0.74 0 0.5 0 2.62L0 14.83C0 16.95 2.6 18.19 4.5 16.97L14.06 10.85C15.67 9.82 15.67 7.63 14.06 6.59L4.5 0.47Z"
                  fill="#FFFFFF"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
          </div>
        </div>
      </MainLayout>
      <LastGamesList />
    </div>
  );
}

export default BubblesPage;
