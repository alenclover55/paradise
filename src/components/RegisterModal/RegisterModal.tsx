function RegisterModal() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#EEEFFA] bg-opacity-75 dark:bg-[#131627bb] z-50 flex items-center justify-center">
      <div className="ssm:w-[360px] md:w-[700px] flex rounded-[18px] overflow-hidden">
        <img
          className="w-1/2 ssm:hidden md:block"
          src="../../public/assets/images/reg-log_img.png"
          alt=""
        />
        <div className="ssm:w-full md:w-1/2 bg-white dark:bg-[#252A42] py-[25px] pl-[26px] pr-[25px] ssm:rounded-[18px] md:rounded-none">
          <div className="flex items-center justify-between mb-[15px]">
            <h3 className="text-lg font-bold text-[#252A42] dark:text-white">
              Авторизация
            </h3>
            <span>
              <svg
                width="29.000000"
                height="29.000000"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <rect
                  className="fill-[#EDEFFA] dark:fill-[#2D3350]"
                  id="Rectangle 4600"
                  rx="10.000000"
                  width="29.000000"
                  height="29.000000"
                  fill-opacity="1.000000"
                />
                <path
                  id="↳ Icon Color"
                  d="M10.16 10.16C10.38 9.94 10.74 9.94 10.96 10.16L14.5 13.7L18.03 10.16C18.24 9.96 18.56 9.94 18.78 10.11L18.83 10.16C19.05 10.38 19.05 10.74 18.83 10.96L15.29 14.5L18.83 18.03C19.03 18.24 19.05 18.56 18.88 18.78L18.83 18.83C18.61 19.05 18.25 19.05 18.03 18.83L14.5 15.29L10.96 18.83C10.75 19.03 10.43 19.05 10.21 18.88L10.16 18.83C9.94 18.61 9.94 18.25 10.16 18.03L13.7 14.5L10.16 10.96C9.96 10.75 9.94 10.43 10.11 10.21L10.16 10.16Z"
                  fill="#7785B3"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
            </span>
          </div>
          <div className="flex items-center border border-[#E7EAFA] dark:border-gray-600 rounded-xl">
            <button className="w-1/2 flex items-center gap-[8px] text-xs font-semibold text-white bg-[#008EFF] rounded-xl py-[16px] pl-[48px]">
              <img src="../../public/assets/icons/user-enter.svg" alt="" />
              Вход
            </button>
            <button className="w-1/2 flex items-center gap-[8px] text-xs font-semibold text-[#8D9BCB] py-[16px] pr-[18px] pl-[24px]">
              <img src="../../public/assets/icons/user-add.svg" alt="" />
              Регистрация
            </button>
          </div>
          <div className="w-full h-[48px] flex items-center gap-[8px] rounded-xl bg-[#EDEFFA] dark:bg-[#353C5A] py-[16px] pl-[16px] pr-[10px] mt-[15px]">
            <img src="../../public/assets/icons/user_icon.svg" alt="" />
            <input
              className="w-full text-xs font-semibold text-[#353C5A] dark:text-white bg-inherit outline-none"
              placeholder="Логин"
              type="text"
            />
          </div>
          <div className="w-full h-[48px] flex items-center gap-[8px] bg-[#EDEFFA] dark:bg-[#353C5A] py-[16px] pl-[16px] pr-[10px] rounded-xl mt-[15px]">
            <img src="../../public/assets/icons/lock_icon.svg" alt="" />
            <input
              className="w-full text-xs font-semibold text-[#353C5A] dark:text-white bg-inherit outline-none"
              placeholder="Пароль"
              type="text"
            />
          </div>
          <button className="w-full h-[48px] flex items-center justify-center bg-[#008EFF] rounded-xl text-xs font-semibold text-white mt-[15px]">
            Войти
          </button>
          <div className="flex items-center col-span-2 text-xs font-semibold text-center text-[#8D9BCB] gap-[16px] text-nowrap mt-[15px]">
            <span className="w-full h-[1px] bg-[#E7EAFA] dark:bg-[#FFFFFF1A] block"></span>
            Другие методы входа
            <span className="w-full h-[1px] bg-[#E7EAFA] dark:bg-[#FFFFFF1A] block"></span>
          </div>
          <div className="flex gap-[8px] justify-center mt-[15px]">
            <button>
              <img src="../../public/assets/icons/vk_icon.png" alt="" />
            </button>
            <button>
              <img src="../../public/assets/icons/steam_icon.png" alt="" />
            </button>
            <button>
              <img src="../../public/assets/icons/google_icon.png" alt="" />
            </button>
            <button>
              <img src="../../public/assets/icons/yandex_icon.png" alt="" />
            </button>
          </div>
          <p className="text-[10px] text-[#8D9BCB] w-full leading-[15px] font-medium mt-[28px]">
            Данный сайт защищен reCAPTCHA с соответствующей политикой
            конфиденциальности Google{" "}
            <a className="text-[#3D8AFF] underline" href="">
              Политика конфиденциальности
            </a>{" "}
            и условиями предоставления услуг{" "}
            <a className="text-[#3D8AFF] underline" href="">
              Условия предоставления услуг.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
