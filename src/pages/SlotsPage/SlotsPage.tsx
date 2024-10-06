import { trandGames } from "../../components/GamesList/games.js";
import LastGameTop from "../../components/LastGameTop/LastGameTop.tsx";
import { allGames } from "../../components/GamesList/games.ts";
import GamesList from "../../components/GamesList/GamesList.tsx";
function SlotsPage() {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-[-30px] left-[10px] z-[1] ssm:w-[99%] md:w-auto">
          <svg
            className="absolute top-0 left-0 -z-10"
            width="161.000000"
            height="47.000000"
            viewBox="0 0 161 47"
            fill="#252A424D"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-[#E0E3F4] dark:fill-[#252A424D]"
              id="Union"
              d="M150.122 0L161 37.6L0 47L0 0L150.122 0Z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            />
          </svg>

          <div className="relative flex items-center gap-2 text-xs font-bold text-[#343A60] dark:text-white z-[5] pt-[7px] pl-[10px]">
            <svg
              width="14.000000"
              height="14.000000"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M1.16 8.75L6.41 8.75L6.41 14L4.08 14C3.3 14 2.56 13.69 2.02 13.14C1.47 12.59 1.16 11.85 1.16 11.08L1.16 8.75ZM14 6.41C14 6.72 13.87 7.02 13.65 7.24C13.43 7.46 13.14 7.58 12.83 7.58L7.58 7.58L7.58 5.22C7.38 5.24 7.19 5.25 7 5.25C6.8 5.25 6.61 5.24 6.41 5.22L6.41 7.58L1.16 7.58C0.85 7.58 0.56 7.46 0.34 7.24C0.12 7.02 0 6.72 0 6.41C0 5.79 0.24 5.2 0.68 4.76C1.12 4.32 1.71 4.08 2.33 4.08L3.34 4.08C3.01 3.79 2.75 3.43 2.58 3.02C2.4 2.62 2.32 2.18 2.33 1.75C2.33 1.59 2.39 1.44 2.5 1.33C2.61 1.22 2.76 1.16 2.91 1.16C3.07 1.16 3.21 1.22 3.32 1.33C3.43 1.44 3.5 1.59 3.5 1.75C3.5 3.27 4.88 3.8 5.93 3.99C5.54 3.3 5.31 2.53 5.25 1.75C5.25 1.28 5.43 0.84 5.76 0.51C6.09 0.18 6.53 0 7 0C7.46 0 7.9 0.18 8.23 0.51C8.56 0.84 8.75 1.28 8.75 1.75C8.68 2.53 8.45 3.3 8.06 3.99C9.11 3.8 10.5 3.27 10.5 1.75C10.5 1.59 10.56 1.44 10.67 1.33C10.78 1.22 10.92 1.16 11.08 1.16C11.23 1.16 11.38 1.22 11.49 1.33C11.6 1.44 11.66 1.59 11.66 1.75C11.67 2.18 11.59 2.62 11.41 3.02C11.24 3.43 10.98 3.79 10.65 4.08L11.66 4.08C12.28 4.08 12.87 4.32 13.31 4.76C13.75 5.2 14 5.79 14 6.41ZM6.41 1.75C6.48 2.36 6.68 2.96 7 3.5C7.31 2.96 7.51 2.36 7.58 1.75C7.58 1.59 7.52 1.44 7.41 1.33C7.3 1.22 7.15 1.16 7 1.16C6.84 1.16 6.69 1.22 6.58 1.33C6.47 1.44 6.41 1.59 6.41 1.75ZM7.58 14L9.91 14C10.29 14 10.67 13.92 11.03 13.77C11.38 13.63 11.7 13.41 11.97 13.14C12.25 12.87 12.46 12.55 12.61 12.19C12.75 11.84 12.83 11.46 12.83 11.08L12.83 8.75L7.58 8.75L7.58 14Z"
                fill="#F76C6C"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
            Лайв выигрыши
          </div>
        </div>
        <div className="absolute w-[200px] h-full top-0 right-0 bg-gradient-to-r from-[#E0E3F400] to-[#E0E3F4] dark:from-[#191C3000] dark:to-[#191C30] z-[4] rounded-r-2xl"></div>
        <div className="relative z-[3] flex gap-[10px] bg-[#E0E3F4] dark:bg-[#252A424D] rounded-[16px] mt-[40px] mb-[20px] py-[10px] pl-[10px] overflow-x-scroll smm:w-[99%] md:w-full max-w-[1344px]">
          <LastGameTop />
          <LastGameTop />
          <LastGameTop />
          <LastGameTop />
          <LastGameTop />
          <LastGameTop />
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#E0E3F4] dark:bg-[#252A424D] rounded-2xl backdrop-blur-lg p-[18px] gap-2 ssm:flex-wrap md:flex-nowrap w-full">
        <div className="flex items-center bg-white dark:bg-[#252A42] ssm:w-[100%] lg:w-[70%] rounded-[12px] relative overflow-hidden">
          <img
            className="absolute top-[16px] left-[19px]"
            src="../../assets/icons/search_icon.svg"
            alt=""
          />
          <input
            className="w-full py-[14px] pl-[45px] dark:text-white bg-white outline-none dark:bg-[#252A42] text-sm font-semibold placeholder:text-[#7F89C1]"
            type="text"
            placeholder="Поиск..."
          />
        </div>
        <div className="flex items-center gap-2  py-[12px] px-[19px] rounded-xl border bg-white dark:border-[#252F4E] dark:bg-[#252A42] transition-colors hover:dark:bg-[#1b1e2f] ssm:w-[100%] md:min-w-[172px] md:w-[172px]">
          <img src="../../assets/icons/all_games.svg" alt="" />
          <span className="text-sm font-semibold text-[#758BD0]">
            Провайдер
          </span>
          <img src="../../assets/icons/arrow_down.svg" alt="" />
        </div>
        <div className="flex items-center justify-between bg-white dark:bg-[#1C2034] rounded-xl gap-[8px] ssm:w-full md:w-[236px]">
          <button className="w-1/2 h-11 bg-[#16A58B] rounded-xl text-xs font-semibold leading-3 text-center text-white">
            Топ
          </button>
          <button className="w-1/2 text-xs font-semibold leading-3 text-center text-gray-400 h-11 rounded-xl">
            Новое
          </button>
        </div>
      </div>
      <GamesList
        listImg="./assets/pagesImages/trends.svg"
        listTitle="В Тренде"
        listOfGames={trandGames}
        gamesCount={{
          count: "348",
          color: "#FFC53826",
          textColor: "#FFC538",
        }}
      />
      <GamesList
        listImg="./assets/icons/slots_square.svg"
        listTitle="Все игры"
        allGames={true}
        listOfGames={allGames}
        gamesCount={{
          count: "6 348",
          color: "#16A58B26",
          textColor: "#16A58B",
        }}
      />
    </div>
  );
}

export default SlotsPage;
