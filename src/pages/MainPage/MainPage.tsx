import "./MainPage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import FilterButton from "../../components/FilterButton/FilterButton";
import {
  saintLives,
  saintMode,
  saintSlots,
} from "../../components/GamesList/games";
import GamesList from "../../components/GamesList/GamesList";
import LastGamesList from "../../components/LastGamesList/LastGamesList";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function MainPage() {
  return (
    <div>
      <div className="relative mt-[20px]">
        <Swiper
          className="relative mainPageSlider"
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="relative w-full  ssm:p-[24px] md:py-[49px] md:pl-[60px] md:pr-[30px] md:bg-gray-700  rounded-[28px] overflow-hidden">
              <img
                className="ssm:hidden md:block z-[1] left-0 top-0 absolute w-full h-full object-cover"
                src="/assets/images/angel_bg.png"
                alt=""
              />
              <img
                className="ssm:block md:hidden z-[1] left-0 top-0 absolute w-full h-full object-cover"
                src="/assets/images/angel_small_bg.png"
                alt=""
              />
              <div className="relative z-[2]">
                <h3 className="ssm:text-lg md:text-4xl font-bold text-white mb-[15px]">
                  Получай бонус +1% за <br /> депозит криптовалютой
                </h3>
                <p className=" ssm:text-xs md:text-base font-semibold text-white mb-[17px]">
                  Минимальная сумма депозита: 5 USDT <br /> Депозит меньше
                  минимальной суммы не будет зачислен
                </p>
                <button className="flex items-center gap-2 bg-white py-[12px] px-[16px] rounded-2xl ssm:text-xs md:text-sm font-bold text-[#008EFF]">
                  <svg
                    width="24.000000"
                    height="24.000000"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      id="vuesax/bold/wallet-2"
                      rx="-0.500000"
                      width="23.000000"
                      height="23.000000"
                      transform="translate(0.500000 0.500000)"
                      fill="#008EFF"
                      fill-opacity="0"
                    />
                    <g opacity="0.000000" />
                    <path
                      id="Vector"
                      d="M22 10.97L22 13.03C22 13.58 21.56 14.03 21 14.05L19.04 14.05C17.95 14.05 16.96 13.26 16.87 12.18C16.82 11.55 17.06 10.96 17.48 10.55C17.84 10.17 18.35 9.95 18.91 9.95L21 9.95C21.56 9.97 22 10.42 22 10.97Z"
                      fill="#008EFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M20.46 15.55L19.04 15.55C17.13 15.55 15.54 14.12 15.37 12.3C15.29 11.26 15.66 10.22 16.42 9.47C17.07 8.82 17.95 8.45 18.91 8.45L20.46 8.45C20.76 8.45 21 8.21 20.97 7.92C20.75 5.49 19.13 3.83 16.75 3.55C16.51 3.5 16.26 3.5 16 3.5L7 3.5C6.71 3.5 6.44 3.52 6.18 3.56C3.63 3.88 2 5.78 2 8.5L2 15.5C2 18.26 4.23 20.5 7 20.5L16 20.5C18.79 20.5 20.73 18.75 20.97 16.08C21 15.79 20.76 15.55 20.46 15.55ZM13 9.75L7 9.75C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25L13 8.25C13.4 8.25 13.75 8.59 13.75 9C13.75 9.41 13.4 9.75 13 9.75Z"
                      fill="#008EFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  Пополнить баланс
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full  ssm:p-[24px] md:py-[49px] md:pl-[60px] md:pr-[30px]  md:bg-gray-700  rounded-[28px] overflow-hidden">
              <img
                className="ssm:hidden md:block z-[1] left-0 top-0 absolute w-full h-full object-cover"
                src="/assets/images/angel_bg.png"
                alt=""
              />
              <img
                className="ssm:block md:hidden z-[1] left-0 top-0 absolute w-full h-full object-cover"
                src="/assets/images/angel_small_bg.png"
                alt=""
              />
              <div className="relative z-[2]">
                <h3 className="ssm:text-lg md:text-4xl font-bold text-white mb-[15px]">
                  Получай бонус +1% за <br /> депозит криптовалютой
                </h3>
                <p className=" ssm:text-xs md:text-base font-semibold text-white mb-[17px]">
                  Минимальная сумма депозита: 5 USDT <br /> Депозит меньше
                  минимальной суммы не будет зачислен
                </p>
                <button className="flex items-center gap-2 bg-white py-[12px] px-[16px] rounded-2xl ssm:text-xs md:text-sm font-bold text-[#008EFF]">
                  <svg
                    width="24.000000"
                    height="24.000000"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      id="vuesax/bold/wallet-2"
                      rx="-0.500000"
                      width="23.000000"
                      height="23.000000"
                      transform="translate(0.500000 0.500000)"
                      fill="#008EFF"
                      fill-opacity="0"
                    />
                    <g opacity="0.000000" />
                    <path
                      id="Vector"
                      d="M22 10.97L22 13.03C22 13.58 21.56 14.03 21 14.05L19.04 14.05C17.95 14.05 16.96 13.26 16.87 12.18C16.82 11.55 17.06 10.96 17.48 10.55C17.84 10.17 18.35 9.95 18.91 9.95L21 9.95C21.56 9.97 22 10.42 22 10.97Z"
                      fill="#008EFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M20.46 15.55L19.04 15.55C17.13 15.55 15.54 14.12 15.37 12.3C15.29 11.26 15.66 10.22 16.42 9.47C17.07 8.82 17.95 8.45 18.91 8.45L20.46 8.45C20.76 8.45 21 8.21 20.97 7.92C20.75 5.49 19.13 3.83 16.75 3.55C16.51 3.5 16.26 3.5 16 3.5L7 3.5C6.71 3.5 6.44 3.52 6.18 3.56C3.63 3.88 2 5.78 2 8.5L2 15.5C2 18.26 4.23 20.5 7 20.5L16 20.5C18.79 20.5 20.73 18.75 20.97 16.08C21 15.79 20.76 15.55 20.46 15.55ZM13 9.75L7 9.75C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25L13 8.25C13.4 8.25 13.75 8.59 13.75 9C13.75 9.41 13.4 9.75 13 9.75Z"
                      fill="#008EFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  Пополнить баланс
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full  ssm:p-[24px] md:py-[49px] md:pl-[60px] md:pr-[30px]  md:bg-gray-700  rounded-[28px] overflow-hidden">
              <img
                className="ssm:hidden md:block z-[1] left-0 top-0 absolute w-full h-full object-cover"
                src="/assets/images/angel_bg.png"
                alt=""
              />
              <img
                className="ssm:block md:hidden z-[1] left-0 top-0 absolute w-full h-full object-cover"
                src="/assets/images/angel_small_bg.png"
                alt=""
              />
              <div className="relative z-[2]">
                <h3 className="ssm:text-lg md:text-4xl font-bold text-white mb-[15px]">
                  Получай бонус +1% за <br /> депозит криптовалютой
                </h3>
                <p className=" ssm:text-xs md:text-base font-semibold text-white mb-[17px]">
                  Минимальная сумма депозита: 5 USDT <br /> Депозит меньше
                  минимальной суммы не будет зачислен
                </p>
                <button className="flex items-center gap-2 bg-white py-[12px] px-[16px] rounded-2xl ssm:text-xs md:text-sm font-bold text-[#008EFF]">
                  <svg
                    width="24.000000"
                    height="24.000000"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      id="vuesax/bold/wallet-2"
                      rx="-0.500000"
                      width="23.000000"
                      height="23.000000"
                      transform="translate(0.500000 0.500000)"
                      fill="#008EFF"
                      fill-opacity="0"
                    />
                    <g opacity="0.000000" />
                    <path
                      id="Vector"
                      d="M22 10.97L22 13.03C22 13.58 21.56 14.03 21 14.05L19.04 14.05C17.95 14.05 16.96 13.26 16.87 12.18C16.82 11.55 17.06 10.96 17.48 10.55C17.84 10.17 18.35 9.95 18.91 9.95L21 9.95C21.56 9.97 22 10.42 22 10.97Z"
                      fill="#008EFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M20.46 15.55L19.04 15.55C17.13 15.55 15.54 14.12 15.37 12.3C15.29 11.26 15.66 10.22 16.42 9.47C17.07 8.82 17.95 8.45 18.91 8.45L20.46 8.45C20.76 8.45 21 8.21 20.97 7.92C20.75 5.49 19.13 3.83 16.75 3.55C16.51 3.5 16.26 3.5 16 3.5L7 3.5C6.71 3.5 6.44 3.52 6.18 3.56C3.63 3.88 2 5.78 2 8.5L2 15.5C2 18.26 4.23 20.5 7 20.5L16 20.5C18.79 20.5 20.73 18.75 20.97 16.08C21 15.79 20.76 15.55 20.46 15.55ZM13 9.75L7 9.75C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25L13 8.25C13.4 8.25 13.75 8.59 13.75 9C13.75 9.41 13.4 9.75 13 9.75Z"
                      fill="#008EFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  Пополнить баланс
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <section className="my-[20px]">
        <div className="bg-[rgba(37, 42, 66, 0.3)] flex ssm:flex-col md:flex-row ssm:items-start justify-between md:items-center gap-[8px] p-[18px] filter-buttons-wrapper">
          <div className="flex gap-[8px] w-full overflow-x-auto ">
            <FilterButton
              isActive
              imgUrl="/assets/icons/icon_home.svg"
              text="Лобби"
            />
            <FilterButton
              imgUrl="/assets/icons/fire_icon.svg"
              text="Популярные"
            />
            <FilterButton imgUrl="/assets/icons/light_arrow.svg" text="Новые" />
            <FilterButton imgUrl="/assets/icons/slots.svg" text="Слоты" />
            <FilterButton imgUrl="/assets/icons/lives_icon.svg" text="Лайвы" />
            <FilterButton
              imgUrl="/assets/icons/poker-cards.svg"
              text="BlackJack"
            />
          </div>
          <div className="bg-white dark:bg-[#252A42] flex items-center gap-[8px] relative rounded-[12px] ssm:w-full md:w-auto">
            <img
              className="absolute left-[19px] top-[14px]"
              src="../../assets/icons/search_icon.svg"
              alt=""
            />
            <input
              className="bg-white dark:bg-[#252A42] ssm:w-full md:w-auto placeholder:text-[#7F89C1] text-[#7F89C1] text-[14px] font-semibold border-none py-[12px] pl-[46px] outline-none focus:outline-[#22263c] rounded-[12px]"
              type="text"
              placeholder="Поиск..."
            />
          </div>
        </div>
      </section>
      <GamesList
        listImg="./assets/icons/slots_square.svg"
        listTitle="Слоты рая"
        listOfGames={saintSlots}
      />
      <GamesList
        listImg="./assets/pagesImages/saintLives.svg"
        listTitle="Режимы рая"
        listOfGames={saintMode}
      />
      <GamesList
        listImg="./assets/pagesImages/saintMode.svg"
        listTitle="Лайвы рая"
        listOfGames={saintLives}
      />
      <LastGamesList />
    </div>
  );
}

export default MainPage;
