function OpenSlotsPage() {
  return (
    <div>
      <div className="w-full ssm:h-auto 2xl:h-[760px] bg-[#252A424D] rounded-[16px] backdrop-blur-lg my-[20px] p-[20px]">
        <img
          className="w-full"
          src="../../assets/images/slot_open.png"
          alt=""
        />
        <div className="flex items-center justify-between ssm:flex-wrap md:flex-nowrap gap-[15px]">
          <div className="flex items-center gap-[8px] pt-[10px]">
            <button className="py-[19px] px-[22px] bg-white dark:bg-[#1D2239] rounded-[14px]">
              <img src="../../../assets/icons/arrow.svg" alt="" />
            </button>
            <button className="py-[18px] px-[15.67px] bg-white dark:bg-[#1D2239] rounded-[14px]">
              <img src="../../../assets/icons/full_screen.svg" alt="" />
            </button>
            <div className="flex items-center gap-[8px]">
              <img src="../../assets/icons/all_games.svg" alt="" />
              <p className="text-sm font-bold text-[#343A60] dark:text-white">
                Monster Island
              </p>
            </div>
          </div>
          <img src="../../assets/images/slots_logo.svg" alt="" />
          <div className="flex items-center gap-[9px] py-[10px] pl-[16px] pr-[12px] border rounded-xl border-[#D5D8EC] dark:border-gray-800">
            <span className="text-[12px] font-semibold text-[#343A60] dark:text-white">
              Демо режим
            </span>
            <div className="w-[40px] h-[24px] rounded-[111px] bg-white dark:bg-[#252A42] relative block">
              <span className="w-[16px] h-[16px] bg-[#16A58B] rounded-full block absolute top-1 right-1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenSlotsPage;
