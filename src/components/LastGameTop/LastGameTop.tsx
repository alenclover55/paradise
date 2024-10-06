function LastGameTop() {
  return (
    <div className="flex bg-white dark:bg-[#252A42] py-[6px] pl-[6px] pr-[12px] gap-[10px] rounded-[10px] min-w-[230px]">
      <img
        className="w-[79px] h-[48px]"
        src="../../../public/assets/images/forLiveReward.png"
        alt=""
      />
      <div>
        <h3 className="text-sm font-bold text-[#343A60] dark:text-white">
          The dog house
        </h3>
        <div className="flex mt-[7px] gap-[4px]">
          <span className="text-xs font-semibold text-[#7785B3]">
            Leonar***
          </span>
          <div className="flex">
            <img
              className="w-[14px] h-[14px]"
              src="../../../public/assets/icons/coins.svg"
              alt=""
            />
            <span className="text-xs font-bold text-[#343A60] dark:text-white">
              324.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastGameTop;
