import LastGame from "./LastGame";

function LastGamesList() {
  return (
    <div className="pb-[20px] pt-[20px]">
      <div className="flex items-center gap-[16px]">
        <img src="../../../assets/icons/last_games.svg" alt="" />
        <p className="text-2xl font-semibold text-[#343A60] dark:text-white">
          Прошедшие игры
        </p>
      </div>
      <div className="ssm:hidden md:flex bg-[#D4D7EA] dark:bg-[#252A42CC] py-[19px] px-[15px] mb-[10px] justify-between text-sm text-[#7F89C1] font-semibold mt-[20px] rounded-[12px]">
        <span>Игра</span>
        <span className="ml-[57px]">Игрок</span>
        <span className="ml-[120px]">Ставка</span>
        <span>Коэффициент</span>
        <span>Результат</span>
      </div>
      <div className="flex flex-col gap-[10px] ssm:mt-[15px] md:mt-0">
        <LastGame />
        <LastGame />
        <LastGame />
        <LastGame />
        <LastGame />
        <LastGame />
        <LastGame />
        <LastGame />
      </div>
    </div>
  );
}
export default LastGamesList;
