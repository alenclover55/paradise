import "./Header.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { openModal } from "../../redux/slices/modalsSlice";

function Header() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      setTheme("dark");
    } else {
      setTheme(String(localStorage.getItem("theme")));
    }
  }, []);
  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        break;
      default:
        break;
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between py-[26px] border-b border-[#DDE1F9] dark:border-[#20253d]">
      <div className="flex items-center gap-[18px]">
        <Link className="lg:hidden mm:block " to={"/"}>
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
        <NavLink className="header-link" to="/">
          <svg
            width="16.952393"
            height="16.666687"
            viewBox="0 0 16.9524 16.6667"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M15.83 5L10.37 0.64C9.3 -0.21 7.64 -0.22 6.58 0.63L1.12 5C0.34 5.63 -0.14 6.88 0.03 7.86L1.08 14.15C1.32 15.55 2.63 16.66 4.05 16.66L12.89 16.66C14.29 16.66 15.63 15.53 15.87 14.14L16.92 7.85C17.07 6.88 16.59 5.63 15.83 5ZM9.09 13.33C9.09 13.67 8.81 13.95 8.47 13.95C8.13 13.95 7.84 13.67 7.84 13.33L7.84 10.83C7.84 10.49 8.13 10.2 8.47 10.2C8.81 10.2 9.09 10.49 9.09 10.83L9.09 13.33Z"
              fill="#FFFFFF"
              fill-opacity="1.000000"
              fill-rule="nonzero"
            />
          </svg>
          Главная
        </NavLink>
        <NavLink className="header-link" to="/faq">
          <svg
            width="15.000000"
            height="14.349854"
            viewBox="0 0 15 14.3499"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M11.25 0L3.75 0C1.5 0 0 1.5 0 3.75L0 8.25C0 10.5 1.5 12 3.75 12L3.75 13.59C3.75 14.19 4.41 14.55 4.91 14.22L8.25 12L11.25 12C13.5 12 15 10.5 15 8.25L15 3.75C15 1.5 13.5 0 11.25 0ZM7.5 9.12C7.18 9.12 6.93 8.87 6.93 8.56C6.93 8.25 7.18 8 7.5 8C7.81 8 8.06 8.25 8.06 8.56C8.06 8.87 7.81 9.12 7.5 9.12ZM8.44 6.01C8.15 6.21 8.06 6.33 8.06 6.54L8.06 6.7C8.06 7.01 7.8 7.26 7.5 7.26C7.19 7.26 6.93 7.01 6.93 6.7L6.93 6.54C6.93 5.67 7.57 5.25 7.81 5.08C8.09 4.89 8.18 4.77 8.18 4.57C8.18 4.2 7.87 3.89 7.5 3.89C7.12 3.89 6.81 4.2 6.81 4.57C6.81 4.88 6.56 5.13 6.25 5.13C5.94 5.13 5.69 4.88 5.69 4.57C5.69 3.57 6.5 2.76 7.5 2.76C8.49 2.76 9.3 3.57 9.3 4.57C9.3 5.42 8.67 5.85 8.44 6.01Z"
              fill="#7F89C1"
              fill-opacity="1.000000"
              fill-rule="nonzero"
            />
          </svg>
          FAQ
        </NavLink>
        <div className="ssm:hidden lg:flex rounded-[10px] bg-[#3f416926]">
          <span
            onClick={() => setTheme("dark")}
            className={classNames("flex p-[12px] rounded-[10px]", {
              ["bg-[#008EFF]"]: theme === "dark",
            })}
          >
            <img src="../../assets/icons/icon_evil.svg" alt="evil" />
          </span>
          <span
            onClick={() => setTheme("light")}
            className={classNames("flex p-[12px] rounded-[10px]", {
              ["bg-[#008EFF]"]: theme === "light",
            })}
          >
            <img src="../../assets/icons/icon_saint.svg" alt="saint" />
          </span>
        </div>
      </div>
      <div className="flex items-center ssm:gap-2 md:gap-4">
        <div className="flex rounded-[14px] bg-[#3f416926] lg:gap-5 ssm:gap-0">
          <div className="flex items-center gap-2 p-3">
            <img src="../../assets/icons/coins.svg" alt="coins" />
            <span className="text-sm font-bold text-[#343A60] dark:text-white">
              90000
            </span>
          </div>
          <button
            onClick={() =>
              dispatch(
                openModal({
                  key: "register",
                  open: true,
                })
              )
            }
            className=" flex items-center gap-2 p-3 bg-[#16a58b] hover:bg-[#21695b] cursor-pointer transition rounded-[14px]"
          >
            <img src="../../assets/icons/wallet.svg" alt="wallet" />
            <span className="text-sm font-bold text-white ssm:hidden lg:block">
              Кошелёк
            </span>
          </button>
        </div>
        <span>
          <img src="../../assets/icons/profile_img.png" alt="profile" />
        </span>
      </div>
    </div>
  );
}

export default Header;
