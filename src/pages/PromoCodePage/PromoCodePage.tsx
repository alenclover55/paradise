import LastGamesList from "../../components/LastGamesList/LastGamesList";
import CustomSelect from "../../components/ui/CustomSelect/CustomSelect";
import MainLayout from "../../components/MainLayout/MainLayout";

function PromoCodePage() {
  return (
    <div>
      <MainLayout
        pageImgUrl="./assets/pagesImages/promocode.svg"
        title="Промо-код"
      >
        <div className="grid ssm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-[20px] mt-[20px] ">
          <div className="px-[20px] pt-[25px] pb-[20px] bg-white dark:bg-[#252A42] rounded-3xl">
            <div className="pb-[15.5px] mb-[16.5px] border-b border-[#E7EAFA] dark:border-[#343A58]">
              <h3 className="text-lg font-bold leading-none text-[#252A42] dark:text-white mb-[10px]">
                Активировать промокод:
              </h3>
              <p className="text-xs font-semibold leading-none text-[#7F89C1]">
                Выполните условия
              </p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <span className="w-[24px] h-[24px] flex items-center justify-center bg-gradient-to-t from-[#2E71F0] to-[#65A0FF]  dark:bg-[#16A58B26] rounded-[10px]">
                  <img src="./assets/icons/vk_promo.svg" alt="" />
                </span>
                <p className="text-xs font-semibold leading-none text-[#353C5A] dark:text-white">
                  Подписка на группу
                  <span className="ml-1 text-[#008EFF]">ВКонтакте</span>
                </p>
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="w-[24px] h-[24px] flex items-center justify-center bg-gradient-to-t from-[#2E87F0] to-[#65C8FF] dark:bg-[#16A58B26] rounded-[10px]">
                  <img src="./assets/icons/tg_promo.svg" alt="" />
                </span>
                <p className="text-xs font-semibold leading-none text-[#353C5A] dark:text-white">
                  Подпишитесь на наш
                  <span className="ml-1 text-[#008EFF]">TG Канал</span>
                </p>
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="w-[24px] h-[24px] flex items-center justify-center bg-gradient-to-t from-[#55993C] to-[#89D36E] dark:bg-[#16A58B26] rounded-[10px]">
                  <img src="./assets/icons/coins_promo.svg" alt="" />
                </span>
                <p className="flex gap-[4px] text-xs font-semibold leading-none text-[#353C5A] dark:text-white">
                  Отыгрыш от 100
                  <img src="./assets/icons/coins_promo.svg" alt="" />
                </p>
              </div>
            </div>
            <div className="w-full h-[48px] flex items-center gap-[8px] bg-[#EDEFFA] dark:bg-[#353C5A] py-[16px] pl-[16px] pr-[10px] rounded-xl mt-[16px]">
              <img src="./assets/icons/bookmark_input.svg" alt="" />
              <input
                className="w-full text-xs font-semibold text-[#353C5A] dark:text-white bg-inherit outline-none"
                placeholder="Промо-код"
                type="text"
              />
            </div>
            <button className="w-full h-[48px] flex items-center justify-center gap-[8px]   bg-[#16a58b] hover:bg-[#21695b] cursor-pointer transition rounded-xl text-xs font-semibold text-white mt-[8px]">
              Активировать
              <img src="./assets/icons/checkmark.svg" alt="" />
            </button>
            <button className="w-full h-[48px] flex items-center justify-center gap-[8px] bg-[#EDEFFA] hover:bg-[#d3d5e0] dark:bg-[#353C5A] dark:hover:bg-[#42475c] transition-colors rounded-xl text-xs font-semibold text-[#353C5A] dark:text-white mt-[8px]">
              Подписаться на рассылку промо-кодов
            </button>
          </div>
          <div className="px-[20px] pt-[25px] pb-[20px] bg-white dark:bg-[#252A42] rounded-3xl">
            <div className="pb-[15.5px] mb-[16.5px] border-b border-[#E7EAFA] dark:border-[#343A58]">
              <h3 className="text-lg font-bold leading-none text-[#252A42] dark:text-white mb-[10px]">
                Создать свой промокод
              </h3>
              <p className="text-xs font-semibold leading-none text-[#7F89C1]">
                Выполните условия
              </p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <span className="w-[24px] h-[24px] flex items-center justify-center bg-gradient-to-t from-[#2E71F0] to-[#65A0FF] rounded-[10px]">
                  <img src="./assets/icons/vk_promo.svg" alt="" />
                </span>
                <p className="text-xs font-semibold leading-none text-[#353C5A] dark:text-white">
                  Подписка на группу
                  <span className="ml-1 text-[#008EFF]">ВКонтакте</span>
                </p>
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="w-[24px] h-[24px] flex items-center justify-center bg-gradient-to-t from-blue-500 to-blue-400 rounded-[10px]">
                  <img src="./assets/icons/tg_promo.svg" alt="" />
                </span>
                <p className="text-xs font-semibold leading-none text-[#353C5A] dark:text-white">
                  Подпишитесь на наш
                  <span className="ml-1 text-[#008EFF]">TG Канал</span>
                </p>
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="w-[24px] h-[24px] flex items-center justify-center bg-gradient-to-t from-gray-600 to-green-300 rounded-[10px]">
                  <img src="./assets/icons/coins_promo.svg" alt="" />
                </span>
                <p className="flex gap-[4px] text-xs font-semibold leading-none text-[#353C5A] dark:text-white">
                  Совершить депозитов на сумму от 1000
                  <img src="./assets/icons/coins_promo.svg" alt="" />
                </p>
              </div>
            </div>
            <div className="w-full h-[48px] flex items-center gap-[8px] bg-[#EDEFFA] dark:bg-[#353C5A] py-[16px] pl-[16px] pr-[10px] rounded-xl mt-[16px]">
              <img src="./assets/icons/bookmark_input.svg" alt="" />
              <input
                className="w-full text-xs font-semibold text-[#353C5A] dark:text-white bg-inherit outline-none"
                placeholder="Введите название промо-код"
                type="text"
              />
            </div>
            <div className="flex gap-[10px]">
              <div className="w-full h-[48px] flex items-center gap-[8px] bg-[#EDEFFA] dark:bg-[#353C5A] py-[16px] pl-[16px] pr-[10px] rounded-xl mt-[8px]">
                <input
                  className="w-full text-xs font-semibold text-[#353C5A] dark:text-white bg-inherit outline-none"
                  placeholder="Активаций"
                  type="text"
                />
              </div>
              <div className="w-full h-[48px] flex items-center gap-[8px] bg-[#EDEFFA] dark:bg-[#353C5A] py-[16px] pl-[16px] pr-[10px] rounded-xl mt-[8px]">
                <input
                  className="w-full text-xs font-semibold text-[#353C5A] dark:text-white bg-inherit outline-none"
                  placeholder="Награда"
                  type="text"
                />
              </div>
            </div>

            <button className="w-full h-[48px] flex items-center justify-center gap-[8px] bg-[#16a58b] hover:bg-[#21695b] cursor-pointer transition  rounded-xl text-xs font-semibold text-white mt-[8px]">
              Активировать
            </button>
          </div>
          <div className="px-[20px] pt-[25px] pb-[20px] bg-white dark:bg-[#252A42] rounded-3xl">
            <div className="pb-[15.5px] mb-[16.5px] border-b border-[#E7EAFA] dark:border-[#343A58]">
              <h3 className="text-lg font-bold leading-none text-[#252A42] dark:text-white mb-[10px]">
                Создать подарок
              </h3>
              <p className="text-xs font-semibold leading-none text-[#7F89C1]">
                Заполните данные подарка
              </p>
            </div>
            <div className="flex gap-[10px]">
              <div className="w-full h-[48px] flex items-center gap-[8px] bg-[#EDEFFA] dark:bg-[#353C5A] py-[16px] pl-[16px] pr-[10px] rounded-xl">
                <input
                  className="w-full text-xs font-semibold text-[#353C5A] dark:text-white bg-inherit outline-none"
                  placeholder="Кол-во победителей"
                  type="text"
                />
              </div>
              <div className="w-full h-[48px] flex items-center gap-[8px] bg-[#EDEFFA] dark:bg-[#353C5A] py-[16px] pl-[16px] pr-[10px] rounded-xl">
                <input
                  className="w-full text-xs font-semibold text-[#353C5A] dark:text-white bg-inherit outline-none"
                  placeholder="Награда"
                  type="text"
                />
              </div>
            </div>
            <CustomSelect />
            <div className="w-full h-[48px] flex items-center gap-[8px] bg-[#EDEFFA] dark:bg-[#353C5A] py-[16px] pl-[16px] pr-[10px] rounded-xl mt-[6px]">
              <input
                className="w-full text-xs font-semibold text-[#353C5A] dark:text-white bg-inherit outline-none"
                placeholder="дд.мм.гггг"
                type="text"
              />
            </div>
            <div className="w-full h-[48px] flex items-center gap-[8px] bg-[#EDEFFA] dark:bg-[#353C5A] py-[16px] pl-[16px] pr-[10px] rounded-xl mt-[6px]">
              <input
                className="w-full text-xs font-semibold text-[#353C5A] dark:text-white bg-inherit outline-none"
                placeholder="--:--"
                type="text"
              />
            </div>
            <button className="w-full h-[48px] flex items-center justify-center gap-[8px]  bg-[#16a58b] hover:bg-[#21695b] cursor-pointer transition rounded-xl text-xs font-semibold text-white mt-[8px]">
              Создать подарок
            </button>
          </div>
        </div>
      </MainLayout>
      <LastGamesList />
    </div>
  );
}

export default PromoCodePage;
