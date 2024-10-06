import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="px-[20px] pt-[20px] ssm:[50px] md:pb-[27.98px] rounded-3xl">
      <div className="ssm:hidden md:flex items-center justify-between pb-[14.5px] border-b border-[#D4D7EA] dark:border-[rgb(43, 48, 69)]">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              className="hidden dark:block"
              src="../../assets/icons/logo.svg"
              alt="logo"
            />
            <img
              className="block dark:hidden"
              src="../../assets/icons/logo-light.svg"
              alt="logo"
            />
          </Link>
          <p className="flex items-center text-[#7f89c1] text-sm font-medium">
            © 2024 Paradise – Экономическая онлайн стратегия
          </p>
        </div>
        <div className="flex gap-2.5">
          <span className="flex items-center leading-10 dark:text-[#596489] text-[#020203] text-sm font-medium">
            Социальные сети:
          </span>
          <a href="">
            <img src="/assets/icons/telegram.svg" alt="telegram" />
          </a>
          <a href="">
            <img src="/assets/icons/vk.svg" alt="vk" />
          </a>
        </div>
      </div>
      <div className="ssm:hidden md:flex justify-between pt-[27.52px]">
        <div className="flex items-center gap-[25px] text-[#7F89C1]">
          <a href="">Пользовательское соглашение</a>
          <a href="">Responsible Gaming Policy</a>
          <a href="">AML policy</a>
          <a href="">Поддержка</a>
          <a href="">Контакты</a>
        </div>
        <div>
          <img src="../../assets/icons/18+.svg" alt="" />
        </div>
      </div>
      <div className="px-[15px] pt-[20px] pb-[40px] mb-[40px] ssm:block md:hidden">
        <div className="pb-[19.5px] border-b border-solid border-[#D4D7EA] dark:border-[#2B3045] mb-[20.5px]">
          <Link to={"/"}>
            <img
              className="hidden mx-auto dark:block"
              src="../../assets/icons/logo.svg"
              alt="logo"
            />
            <img
              className="block mx-auto dark:hidden"
              src="../../assets/icons/logo-light.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xs leading-normal text-center text-[#7F89C1]">
            © 2024 Paradise – Экономическая онлайн стратегия
          </p>
          <ul className="flex flex-col gap-[25px] items-center ">
            <Link
              to={"/"}
              className="text-sm font-semibold leading-10 text-[#7F89C1]"
            >
              Пользовательское соглашение
            </Link>
            <Link
              to={"/"}
              className="text-sm font-semibold leading-10 text-[#7F89C1]"
            >
              Responsible Gaming Policy
            </Link>
            <Link
              to={"/"}
              className="text-sm font-semibold leading-10 text-[#7F89C1]"
            >
              AML policy
            </Link>
            <Link
              to={"/"}
              className="text-sm font-semibold leading-10 text-[#7F89C1]"
            >
              Поддержка
            </Link>
            <Link
              to={"/"}
              className="text-sm font-semibold leading-10 text-[#7F89C1]"
            >
              Контакты
            </Link>
          </ul>
          <div>
            <img className="mx-auto" src="/assets/icons/18+.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
