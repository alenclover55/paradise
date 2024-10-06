interface IProps {
  listImg: string;
  listTitle: string;
  listOfGames: {
    title: string;
    subtitle: string;
    imgUrl: string;
    url: string;
  }[];
  gamesCount?: {
    count: string;
    color: string;
    textColor: string;
  };
  allGames?: boolean;
}
function GamesList({
  listImg,
  listTitle,
  listOfGames,
  gamesCount,
  allGames,
}: IProps) {
  return (
    <div className="mt-[20px]">
      <div className="flex justify-between items-center mb-[20px]">
        <div className="flex items-center gap-[16px]">
          <img className="ssm:w-[34px] md:w-[48px]" src={listImg} alt="" />
          <p className="font-semibold text-[#343A60] dark:text-white ssm:text-xs md:text-2xl">
            {listTitle}
          </p>
          {gamesCount && (
            <span
              className="py-[9px] px-[10px] bg-opacity-10 rounded-xl text-sm font-semibold"
              style={{
                background: gamesCount.color,
                color: gamesCount.textColor,
              }}
            >
              {gamesCount.count}
            </span>
          )}
        </div>
        <div className="flex items-center gap-[8px]">
          <button className="ssm:py-[12px] ssm: py-[16px] px-[15px] hover:bg-[#e9e9e9] ssm:hidden md:block bg-white dark:bg-[#1D2239] hover:dark:bg-[#1d202e] transition rounded-[14px] ssm:text-xs md:text-sm text-[#7F89C1] font-semibold">
            Показать все
          </button>
          <button className="flex items-center justify-center ssm:w-[32px] ssm:h-[32px] lg:w-[42px] lg:h-[42px] hover:bg-[#e9e9e9] bg-white dark:bg-[#1D2239] hover:dark:bg-[#1d202e] transition rounded-[14px]">
            <img src="../../../assets/icons/arrow.svg" alt="" />
          </button>
          <button className="flex items-center justify-center ssm:w-[32px] ssm:h-[32px] lg:w-[42px] lg:h-[42px] hover:bg-[#e9e9e9] bg-white dark:bg-[#1D2239] hover:dark:bg-[#1d202e] transition rounded-[14px]">
            <img
              className="rotate-180"
              src="../../../assets/icons/arrow.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="ssm:grid ssm:grid-cols-3 md:grid-cols-4  lg:grid-cols-6 gap-[16px] mb-[20px]">
        {listOfGames &&
          listOfGames.map(({ imgUrl, title, subtitle }, index) => (
            <div key={index} className="relative game-card rounded-[14px]">
              <img src={imgUrl} alt={title} />
              <div className="game-card-inner">
                <div className="flex flex-col grow-[1] justify-center">
                  <button className="flex items-center gap-[8px] bg-[#008EFF] hover:bg-[#2996f0] py-[15.27px] pl-[22px] pr-[22.73px] rounded-[12px] text-sm font-semibold text-white">
                    <img src="../../../assets/icons/play_icon.svg" alt="" />
                    Играть
                  </button>
                  <button className="mt-[16px] py-[15px] pl-[39px] pr-[40px] border rounded-xl hover:bg-white transition-colors border-white border-opacity-10 text-sm font-semibold leading-none text-white hover:text-[#1D2239]">
                    Демо
                  </button>
                </div>
                <h3 className="text-base font-bold leading-none text-center text-white">
                  {title}
                </h3>
                <p className="pb-[25px] text-xs font-semibold leading-none text-center text-indigo-300 pt-[12px]">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
      </div>
      {allGames && (
        <div className="flex flex-col items-center gap-[16px] pb-[20px]">
          <div className="flex items-center gap-[8px]">
            <span className="text-sm font-semibold text-[#7F89C1]">
              <span className="text-[#343A60] dark:text-white">100</span>/100
            </span>
            <div className="w-24 h-1 bg-[#BBC1DF] dark:bg-white rounded-full bg-opacity-10">
              <div className="w-1 h-1 bg-[#16a58b] rounded-full"></div>
            </div>
            <span className="text-sm font-semibold text-[#343A60] dark:text-white">
              1%
            </span>
          </div>
          <button className="inline-flex flex-col items-center justify-center w-44 h-12 px-3.5 py-3 bg-[#16a58b] hover:bg-[#21695b] transition rounded-2xl">
            <p className="text-sm font-bold text-white">Загрузить еще</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default GamesList;
