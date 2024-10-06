function RafflePage() {
  return (
    <div>
      <div className=" bg-[url('./assets/images/raffle-white.jpeg')] dark:bg-[url('./assets/images/raffle-black.jpeg')] bg-no-repeat bg-cover bg-center px-[20px] pb-[30px] my-[20px] rounded-[16px]">
        <div className="flex flex-col items-center w-[53%] mx-auto">
          <img src="./assets/images/raffle-text.png" alt="" />
          <p className="text-lg font-bold leading-none tracking-[20px] text-center text-[#252A42] dark:text-white uppercase mt-[30px]">
            Приз
          </p>
          <img src="./assets/images/500.png" alt="" />
          <div className="grid grid-cols-2 gap-[20px] ssm:grid-cols-1 2xl:grid-cols-2">
            <div className="flex items-center gap-[16px] bg-[#E0E3F4] dark:bg-[#58629426] border rounded-2xl border-white border-opacity-5 p-[20px]">
              <img src="./assets/icons/people_group.svg" alt="" />
              <div>
                <h4 className="text-xs font-bold leading-none text-[#7F89C1] uppercase">
                  Количество участников
                </h4>
                <p className="text-2xl font-bold leading-none text-[#252A42] dark:text-white uppercase mt-[16px]">
                  4 892
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[16px] bg-[#E0E3F4] dark:bg-[#58629426] border rounded-2xl border-white border-opacity-5 p-[20px]">
              <img src="./assets/icons/user-tick.svg" alt="" />
              <div>
                <h4 className="text-xs font-bold leading-none text-[#7F89C1] uppercase">
                  Количество победителей
                </h4>
                <p className="text-2xl font-bold leading-none text-[#252A42] dark:text-white uppercase mt-[16px]">
                  100
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[16px] bg-[#E0E3F4] dark:bg-[#58629426] border rounded-2xl border-white border-opacity-5 p-[20px]">
              <img src="./assets/icons/bold_moneys.svg" alt="" />
              <div>
                <h4 className="text-xs font-bold leading-4 text-[#7F89C1] uppercase">
                  Сумма приза на
                  <br />
                  одного победителя
                </h4>
                <p className="text-2xl font-bold leading-none text-[#252A42] dark:text-white uppercase mt-[13px]">
                  100 руб.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[16px] bg-[#E0E3F4] dark:bg-[#58629426] border rounded-2xl border-white border-opacity-5 p-[20px]">
              <img src="./assets/icons/timer.svg" alt="" />
              <div>
                <h4 className="text-xs font-bold leading-none text-[#7F89C1] uppercase">
                  Дата окончания розыгрыша
                </h4>
                <p className="text-sm font-bold leading-none text-[#252A42] dark:text-white uppercase mt-[16px]">
                  21 августа 2024, 08:04 МСК
                </p>
              </div>
            </div>
            <button className="min-w-full flex items-center justify-center gap-[10px] bg-[#16A58B] ssm:col-span-1 2xl:col-span-2 py-[18px] rounded-[16px] text-sm font-bold text-center text-white">
              ПРИНЯТЬ УЧАСТИЕ
              <img src="./assets/icons/plus_round.svg" alt="" />
            </button>
            <div className="flex items-center col-span-2 text-sm font-semibold text-center dark:text-white gap-[16px] text-nowrap">
              <span className="w-full h-[1px] bg-[#D3D7EC] dark:bg-[#FFFFFF1A] block"></span>
              Участники (821)
              <span className="w-full h-[1px] bg-[#D3D7EC] dark:bg-[#FFFFFF1A] block"></span>
            </div>
            <div className="w-full bg-white dark:bg-[#121625] rounded-xl flex items-center justify-between py-[10px] pl-[10px] pr-[16px]">
              <div className="flex items-center gap-[8px]">
                <img src="./assets/images/bonus_player.png" alt="" />
                <h4 className="text-sm font-semibold text-[#252A42] dark:text-white">
                  Hercules
                </h4>
              </div>
              <p className="text-xs font-semibold text-center text-[#7F89C1]">
                ID: 46372
              </p>
            </div>
            <div className="w-full bg-white dark:bg-[#121625] rounded-xl flex justify-between items-center py-[10px] pl-[10px] pr-[16px]">
              <div className="flex items-center gap-[8px]">
                <img src="./assets/images/bonus_player.png" alt="" />
                <h4 className="text-sm font-semibold text-[#252A42] dark:text-white">
                  Hercules
                </h4>
              </div>
              <p className="text-xs font-semibold text-center text-[#7F89C1]">
                ID: 46372
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RafflePage;
