function TournamentPage() {
  return (
    <div>
      <div className="dark:bg-[#252A424D] px-[20px] pt-[20px] pb-[30px] mt-[20px] rounded-[16px] mb-[20px]">
        <div className="flex items-center justify-between gap-[16px] pb-[20px] border-b-[1px] border-[#EDEFFA] dark:border-gray-800">
          <div className="flex items-center gap-[16px]">
            <img src="../../public/assets/pagesImages/tournament.svg" alt="" />
            <p className="text-2xl font-semibold text-[#252A42] dark:text-white">
              Турниры
            </p>
          </div>
          <div className="flex items-center gap-[8px]">
            <button className="flex items-center justify-center dark:bg-[#252A42] rounded-2xl w-[44px] h-[44px] bg-white">
              <img src="../../public/assets/icons/question.svg" alt="" />
            </button>
            <button className="flex items-center justify-center dark:bg-[#252A42] rounded-2xl w-[44px] h-[44px] bg-white">
              <img src="../../public/assets/icons/go_back.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="flex ssm:flex-col xl:flex-row gap-[20px] mt-[28px]">
          <div className="ssm:w-full xl:w-1/2">
            <div className="items-start bg-[url('../../assets/images/blue_bg.png')] bg-no-repeat bg-cover w-full pl-[32px] pb-[32px] pt-[31px] pr-[12px] rounded-[24px] relative">
              <div className="inline-flex items-center justify-center px-5 py-4 border bg_lightblue rounded-xl">
                <span className="text-xs font-semibold leading-tight text-center text-white">
                  Каждые 24 часа
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-[16px] mb-[14px]">
                Ежедневный турнир
              </h3>
              <p className="text-sm font-semibold leading-tight text-[#CEECFF] max-w-[430px]">
                Зарабатывать очки в слотах, 10% с каждой вашей ставки. Делайте
                ставки, чем больше ставок - тем больше очков.
              </p>
              <span className="text-xs font-semibold leading-none text-white capitalize mt-[16px] mb-[8px]">
                ТЕКУЩИЙ БАНК:
              </span>
              <div className="text-sm w-[116px] font-bold leading-none text-[#0C0F1E] capitalize flex items-center gap-[8px] py-[12px] pl-[12px] pr-[22px] bg-white rounded-[16px]">
                <img src="../../public/assets/icons/coins.svg" alt="" />
                500.00
              </div>
              <img
                className="absolute bottom-[6px] right-[12px] ssm:hidden xxl:block"
                src="../../public/assets/images/сup.png"
                alt=""
              />
            </div>
            <div className="flex justify-between py-[16px] pl-[16px] pr-[23px] bg-white dark:bg-[#252A42] rounded-2xl ssm:flex-col 2xl:flex-row gap-[15px] mt-[20px]">
              <div className="flex gap-[15px]">
                <img src="../../public/assets/icons/alarm_clock.svg" alt="" />
                <p className="text-sm font-semibold leading-tight text-[#252A42] dark:text-white max-w-[176px]">
                  Завершение данного турнира через:
                </p>
              </div>
              <div className="flex items-center gap-[5px]">
                <span className="text-2xl font-bold leading-tight text-center text-[#252A42] dark:text-white bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl py-[16px] px-[12px]">
                  0
                </span>
                <span className="text-2xl font-bold leading-tight text-center text-[#252A42] dark:text-white bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl py-[16px] px-[12px]">
                  9
                </span>
                <span className="mx-[5px] text-2xl font-bold leading-tight text-center text-[#4C4F6A]">
                  :
                </span>
                <span className="text-2xl font-bold leading-tight text-center text-[#252A42] dark:text-white bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl py-[16px] px-[12px]">
                  3
                </span>
                <span className="text-2xl font-bold leading-tight text-center text-[#252A42] dark:text-white bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl py-[16px] px-[12px]">
                  7
                </span>
                <span className="mx-[5px] text-2xl font-bold leading-tight text-center text-[#4C4F6A]">
                  :
                </span>
                <span className="text-2xl font-bold leading-tight text-center text-[#252A42] dark:text-white bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl py-[16px] px-[12px]">
                  4
                </span>
                <span className="text-2xl font-bold leading-tight text-center text-[#252A42] dark:text-white bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl py-[16px] px-[12px]">
                  2
                </span>
              </div>
            </div>
            <div>
              <div>
                <div className="dark:bg-[#252A424D] bg-white px-[20px] pt-[20px] pb-[30px] mt-[20px] rounded-[16px] mb-[20px]">
                  <div className="flex items-center justify-between gap-[16px] pb-[20px] border-b-[1px] border-[#EDEFFA] dark:border-gray-800">
                    <div className="flex items-center gap-[16px]">
                      <img
                        src="../../public/assets/icons/add_member.svg"
                        alt=""
                      />
                      <p className="text-base font-bold leading-none text-[#252A42] dark:text-white">
                        Как принять участие в турнире ?
                      </p>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <button className="flex items-center justify-center w-6 h-6 dark:bg-[#2F3653] rounded-lg">
                        <img
                          src="../../public/assets/icons/dropdown_icon.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium leading-normal text-[#7F89C1] mt-[18px]">
                      We could request you to provide Us with your Personal
                      Information. <br />
                      In some cases, We could ask you the information from you
                      through surveys or contests.
                    </p>

                    <p className="text-xs font-medium leading-normal text-[#7F89C1] my-[25px]">
                      Taking a part in these surveys or contests is totally
                      performed on a voluntary basis, and,
                      <br />
                      in this view, you are free to take a decision regarding
                      the disclosure of such information.Information.
                    </p>

                    <p className="text-xs font-medium leading-normal text-[#7F89C1]">
                      We are requesting could be related to the contact
                      information (such as name, correspondence address, <br />
                      and telephone number), and demographic information (such
                      as zip or postal code or age).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="md:flex gap-[20px] justify-between ssm:grid grid-cols-2">
              <div className="flex ssm:flex-col md:flex-row justify-center items-center gap-[15px] bg-white dark:bg-[#252A42] rounded-2xl ssm:pl-0 ssm:pr-0 py-[15px] md:pl-[15px] md:pr-[57px]">
                <img src="../../public/assets/icons/star_square.svg" alt="" />
                <div className="flex flex-col ssm:items-center md:items-start">
                  <p className="text-lg font-bold leading-tight text-[#252A42] dark:text-white">
                    15
                  </p>
                  <span className="text-xs font-semibold leading-tight text-[#7F89C1]">
                    Ваше место
                  </span>
                </div>
              </div>
              <div className="flex ssm:flex-col md:flex-row justify-center items-center gap-[15px] bg-white dark:bg-[#252A42] rounded-2xl ssm:pl-0 ssm:pr-0 py-[15px] md:pl-[15px] md:pr-[57px]">
                <img src="../../public/assets/icons/gift_square.svg" alt="" />
                <div className="flex flex-col ssm:items-center md:items-start">
                  <p className="text-lg font-bold leading-tight text-[#252A42] dark:text-white">
                    24.33$
                  </p>
                  <span className="text-xs font-semibold leading-tight text-[#7F89C1]">
                    Ваш приз
                  </span>
                </div>
              </div>
              <div className="flex  md:flex-row items-center gap-[15px] bg-white dark:bg-[#252A42] rounded-2xl   ssm:pr-0 py-[15px] pl-[15px] md:pr-[57px] col-span-2">
                <img src="../../public/assets/icons/coin_square.svg" alt="" />
                <div>
                  <p className="text-lg font-bold leading-tight text-[#252A42] dark:text-white">
                    642.33$
                  </p>
                  <span className="text-xs font-semibold leading-tight text-[#7F89C1]">
                    Ваш оборот
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-[20px] mt-[59px]">
              <div className="flex flex-col items-center w-full ssm:h-auto md:h-[112px] bg-white dark:bg-[#252A42] rounded-2xl px-[10px] pb-[10px]">
                <img
                  className="mt-[-30px]"
                  src="../../public/assets/images/profile_rate.png"
                  alt=""
                />
                <p className="text-sm font-bold leading-tight text-center text-[#252A42] dark:text-white mt-[5px] mb-[15px]">
                  Никита
                </p>
                <div className="flex gap-[10px] ssm:flex-col md:flex-row">
                  <div className="flex items-center gap-[5px] bg-[#FFA53826] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px]">
                    <img
                      src="../../public/assets/icons/coins_orange.svg"
                      alt=""
                    />
                    <span className="text-sm font-bold leading-tight text-[#FFA538]">
                      279.49
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#16A58B26] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px]">
                    <img
                      src="../../public/assets/icons/gift_green.svg"
                      alt=""
                    />
                    <span className="text-sm font-bold leading-tight text-[#16A58B]">
                      124.33
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-full ssm:h-auto md:h-[112px] bg-white dark:bg-[#252A42] rounded-2xl px-[10px] pb-[10px]">
                <img
                  className="mt-[-30px]"
                  src="../../public/assets/images/profile_rate.png"
                  alt=""
                />
                <p className="text-sm font-bold leading-tight text-center text-[#252A42] dark:text-white mt-[5px] mb-[15px]">
                  Никита
                </p>
                <div className="flex gap-[10px] ssm:flex-col md:flex-row">
                  <div className="flex items-center gap-[5px] bg-[#FFA53826] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px]">
                    <img
                      src="../../public/assets/icons/coins_orange.svg"
                      alt=""
                    />
                    <span className="text-sm font-bold leading-tight text-[#FFA538]">
                      279.49
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#16A58B26] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px]">
                    <img
                      src="../../public/assets/icons/gift_green.svg"
                      alt=""
                    />
                    <span className="text-sm font-bold leading-tight text-[#16A58B]">
                      124.33
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-full ssm:h-auto md:h-[112px] bg-white dark:bg-[#252A42] rounded-2xl px-[10px] pb-[10px]">
                <img
                  className="mt-[-30px]"
                  src="../../public/assets/images/profile_rate.png"
                  alt=""
                />
                <p className="text-sm font-bold leading-tight text-center text-[#252A42] dark:text-white mt-[5px] mb-[15px]">
                  Никита
                </p>
                <div className="flex gap-[10px] ssm:flex-col md:flex-row">
                  <div className="flex items-center gap-[5px] bg-[#FFA53826] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px]">
                    <img
                      src="../../public/assets/icons/coins_orange.svg"
                      alt=""
                    />
                    <span className="text-sm font-bold leading-tight text-[#FFA538]">
                      279.49
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#16A58B26] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px]">
                    <img
                      src="../../public/assets/icons/gift_green.svg"
                      alt=""
                    />
                    <span className="text-sm font-bold leading-tight text-[#16A58B]">
                      124.33
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-4 py-[17px] pl-[20px] pr-[16px] bg-[#D7DBF0] dark:bg-[#1E2238] rounded-[12px] mb-[11px] mt-[21px]">
                <div>
                  <p className="text-xs font-medium leading-tight text-[#7F89C1]">
                    Позиция
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium leading-tight text-[#7F89C1]">
                    Игрок
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium leading-tight text-[#7F89C1] text-right pr-[20px]">
                    Оборот
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium leading-tight text-[#7F89C1] text-right">
                    Приз
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="ssm:flex justify-between md:grid items-center grid-cols-4 bg-white dark:bg-[#252A42] py-[10px] ssm:pl-[15px] md:pl-[20px] ssm:pr-[10px] md:pr-[16px] rounded-[14px] ssm:gap-[10px] md:gap-0">
                  <div className="flex items-center gap-[8px]">
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      4
                    </span>
                    <img
                      className="ssm:w-[14px] md:w-[18px]"
                      src="../../public/assets/icons/star.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center gap-[8px] ssm:ml-0 md:ml-[-20px]">
                    <img
                      className="ssm:w-[30px] md:w-[40px]"
                      src="../../public/assets/images/profile_rate.png"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      Никита
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#FFA53826] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/coins_orange.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#FFA538]">
                      279.49
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#16A58B26] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/gift_green.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#16A58B]">
                      124.33
                    </span>
                  </div>
                </div>
                <div className="ssm:flex justify-between md:grid items-center grid-cols-4 bg-white dark:bg-[#252A42] py-[10px] ssm:pl-[15px] md:pl-[20px] ssm:pr-[10px] md:pr-[16px] rounded-[14px] ssm:gap-[10px] md:gap-0">
                  <div className="flex items-center gap-[8px]">
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      4
                    </span>
                    <img
                      className="ssm:w-[14px] md:w-[18px]"
                      src="../../public/assets/icons/star.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center gap-[8px] ssm:ml-0 md:ml-[-20px]">
                    <img
                      className="ssm:w-[30px] md:w-[40px]"
                      src="../../public/assets/images/profile_rate.png"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      Никита
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#FFA53826] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/coins_orange.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#FFA538]">
                      279.49
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#16A58B26] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/gift_green.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#16A58B]">
                      124.33
                    </span>
                  </div>
                </div>
                <div className="ssm:flex justify-between md:grid items-center grid-cols-4 bg-white dark:bg-[#252A42] py-[10px] ssm:pl-[15px] md:pl-[20px] ssm:pr-[10px] md:pr-[16px] rounded-[14px] ssm:gap-[10px] md:gap-0">
                  <div className="flex items-center gap-[8px]">
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      4
                    </span>
                    <img
                      className="ssm:w-[14px] md:w-[18px]"
                      src="../../public/assets/icons/star.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center gap-[8px] ssm:ml-0 md:ml-[-20px]">
                    <img
                      className="ssm:w-[30px] md:w-[40px]"
                      src="../../public/assets/images/profile_rate.png"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      Никита
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#FFA53826] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/coins_orange.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#FFA538]">
                      279.49
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#16A58B26] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/gift_green.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#16A58B]">
                      124.33
                    </span>
                  </div>
                </div>
                <div className="ssm:flex justify-between md:grid items-center grid-cols-4 bg-white dark:bg-[#252A42] py-[10px] ssm:pl-[15px] md:pl-[20px] ssm:pr-[10px] md:pr-[16px] rounded-[14px] ssm:gap-[10px] md:gap-0">
                  <div className="flex items-center gap-[8px]">
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      4
                    </span>
                    <img
                      className="ssm:w-[14px] md:w-[18px]"
                      src="../../public/assets/icons/star.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center gap-[8px] ssm:ml-0 md:ml-[-20px]">
                    <img
                      className="ssm:w-[30px] md:w-[40px]"
                      src="../../public/assets/images/profile_rate.png"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      Никита
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#FFA53826] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/coins_orange.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#FFA538]">
                      279.49
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#16A58B26] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/gift_green.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#16A58B]">
                      124.33
                    </span>
                  </div>
                </div>
                <div className="ssm:flex justify-between md:grid items-center grid-cols-4 bg-white dark:bg-[#252A42] py-[10px] ssm:pl-[15px] md:pl-[20px] ssm:pr-[10px] md:pr-[16px] rounded-[14px] ssm:gap-[10px] md:gap-0">
                  <div className="flex items-center gap-[8px]">
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      4
                    </span>
                    <img
                      className="ssm:w-[14px] md:w-[18px]"
                      src="../../public/assets/icons/star.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center gap-[8px] ssm:ml-0 md:ml-[-20px]">
                    <img
                      className="ssm:w-[30px] md:w-[40px]"
                      src="../../public/assets/images/profile_rate.png"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      Никита
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#FFA53826] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/coins_orange.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#FFA538]">
                      279.49
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#16A58B26] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/gift_green.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#16A58B]">
                      124.33
                    </span>
                  </div>
                </div>
                <div className="ssm:flex justify-between md:grid items-center grid-cols-4 bg-white dark:bg-[#252A42] py-[10px] ssm:pl-[15px] md:pl-[20px] ssm:pr-[10px] md:pr-[16px] rounded-[14px] ssm:gap-[10px] md:gap-0">
                  <div className="flex items-center gap-[8px]">
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      4
                    </span>
                    <img
                      className="ssm:w-[14px] md:w-[18px]"
                      src="../../public/assets/icons/star.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center ssm:gap-[5px] md:gap-[8px]">
                    <img
                      className="ssm:w-[30px] md:w-[40px]"
                      src="../../public/assets/images/profile_rate.png"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      Никита
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#FFA53826] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/coins_orange.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#FFA538]">
                      279.49
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#16A58B26] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/gift_green.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#16A58B]">
                      124.33
                    </span>
                  </div>
                </div>
                <div className="ssm:flex justify-between md:grid items-center grid-cols-4 bg-white dark:bg-[#252A42] py-[10px] ssm:pl-[15px] md:pl-[20px] ssm:pr-[10px] md:pr-[16px] rounded-[14px] ssm:gap-[10px] md:gap-0">
                  <div className="flex items-center gap-[8px]">
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      4
                    </span>
                    <img
                      className="ssm:w-[14px] md:w-[18px]"
                      src="../../public/assets/icons/star.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center gap-[8px] ssm:ml-0 md:ml-[-20px]">
                    <img
                      className="ssm:w-[30px] md:w-[40px]"
                      src="../../public/assets/images/profile_rate.png"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#252A42] dark:text-white">
                      Никита
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#FFA53826] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/coins_orange.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#FFA538]">
                      279.49
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#16A58B26] pt-[10px] pr-[11px] pb-[9px] pl-[14px] rounded-[12px] ssm:w-[80px] ssm:h-[30px] md:w-[90px] md:h-[32px] ssm:justify-self-auto md:justify-self-end">
                    <img
                      src="../../public/assets/icons/gift_green.svg"
                      alt=""
                    />
                    <span className="ssm:text-xs md:text-sm font-bold leading-tight text-[#16A58B]">
                      124.33
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TournamentPage;
