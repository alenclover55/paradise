import { NavLink, Link } from "react-router-dom";
import "./Menu.scss";
import { useState } from "react";
import classNames from "classnames";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [allGamesDropper, setAllGamesDropper] = useState(true);
  const [menuDropper, setMenuDropper] = useState(true);
  return (
    <div
      className={classNames(
        "bg-white dark:bg-[#0c0f1e] min-h-screen px-[20px] pt-[22px] grow-0 ssm:hidden md:block",
        { ["hide"]: !menuOpen }
      )}
    >
      <div className="flex items-center gap-3 justify-between pb-[17px] border-b border-[#E5E8F7] dark:border-[#20253d]">
        <Link to={"/"}>
          {menuOpen ? (
            <>
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
            </>
          ) : (
            <svg
              width="40.000000"
              height="40.000000"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M13.33 0L26.66 0C34.03 0 40 5.96 40 13.33L40 26.66C40 34.03 34.03 40 26.66 40L13.33 40C5.96 40 0 34.03 0 26.66L0 13.33C0 5.96 5.96 0 13.33 0Z"
                fill="#008EFF"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M24.25 10.7C26.66 10.7 28.56 11.28 29.95 12.44C31.34 13.6 32.03 15.19 32.03 17.2L32.03 17.54C32.03 19.57 31.34 21.17 29.95 22.33C28.56 23.49 26.66 24.07 24.25 24.07L15.98 24.07L15.98 31.11L11.31 31.11L11.31 10.7L24.25 10.7ZM24.13 19.94C25.14 19.94 25.92 19.74 26.46 19.35C27 18.93 27.27 18.33 27.27 17.54L27.27 17.2C27.27 16.43 27 15.85 26.46 15.46C25.92 15.04 25.14 14.83 24.13 14.83L15.98 14.83L15.98 19.94L24.13 19.94Z"
                fill="#FFFFFF"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
          )}
        </Link>
        <span
          className="w-[28px] h-[28px] bg-[#EDEFFA] dark:bg-[#171B2DA6] flex items-center justify-center rounded-lg"
          onClick={() => setMenuOpen((prevState) => !prevState)}
        >
          <svg
            className={classNames({ "rotate-180": !menuOpen })}
            width="11.785645"
            height="10.714111"
            viewBox="0 0 11.7856 10.7141"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="↳ Icon Color"
              d="M5.86 9.49L1.72 5.35L5.86 1.21C6.14 0.94 6.14 0.48 5.86 0.2C5.58 -0.07 5.13 -0.07 4.85 0.2L0.2 4.85C-0.07 5.13 -0.07 5.58 0.2 5.86L4.85 10.5C5.13 10.78 5.58 10.78 5.86 10.5C6.14 10.22 6.14 9.77 5.86 9.49ZM11.57 9.49L7.43 5.35L11.57 1.21C11.85 0.94 11.85 0.48 11.57 0.2C11.29 -0.07 10.84 -0.07 10.56 0.2L5.92 4.85C5.64 5.13 5.64 5.58 5.92 5.86L10.56 10.5C10.84 10.78 11.29 10.78 11.57 10.5C11.85 10.22 11.85 9.77 11.57 9.49Z"
              fill="#7F89C1"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div className="menu__body">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 my-[17px]">
              <img src="../../assets/icons/all_games.svg" alt="" />
              <span
                className={classNames(
                  "text-[#7f89c1] text-xs font-semibold uppercase",
                  {
                    ["hidden"]: !menuOpen,
                  }
                )}
              >
                Все игры
              </span>
            </div>
            <span
              onClick={() => setAllGamesDropper(!allGamesDropper)}
              className={classNames(
                "p-[2px] bg-[#E0E3F4] dark:bg-[#171B2DA6] rounded-lg w-[24px] h-[24px] flex items-center justify-center",
                { ["rotate-180"]: allGamesDropper }
              )}
            >
              <svg
                width="11.427734"
                height="5.714355"
                viewBox="0 0 11.4277 5.71436"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-[#8D9BCB]"
                  id="↳ Icon Color"
                  d="M1.17 0.17C0.87 -0.09 0.42 -0.06 0.17 0.24C-0.09 0.54 -0.06 1 0.25 1.25L5.25 5.54C5.51 5.77 5.91 5.77 6.17 5.54L11.17 1.25C11.47 1 11.51 0.54 11.25 0.24C11 -0.06 10.54 -0.09 10.25 0.17L5.71 4.05L1.17 0.17Z"
                  fill="#8D9BCB"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
            </span>
          </div>
          {allGamesDropper && (
            <div className="flex flex-col gap-[15px]">
              <NavLink className="nav-link" to={"/slots"}>
                <svg
                  width="17.000000"
                  height="18.000010"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M3.5 8.01C3.59 6.49 4.37 1.68 10.68 0.8C11.01 0.75 11.31 0.62 11.56 0.41C11.65 0.32 11.75 0.23 11.84 0.13C11.98 -0.03 12.22 -0.05 12.38 0.09L12.39 0.1C12.53 0.22 12.56 0.44 12.46 0.59C11.88 1.43 10.35 3.84 11.81 7.8C11.91 8.08 11.71 8.37 11.42 8.37C11.25 8.37 11.09 8.26 11.03 8.1C10.73 7.36 10.03 5.46 10.76 2.36C10.81 2.15 10.75 1.92 10.59 1.77C10.44 1.62 10.22 1.56 10.01 1.61C8.76 1.92 4.6 2.99 4.31 8.06C4.3 8.27 4.12 8.44 3.91 8.44C3.67 8.44 3.49 8.24 3.5 8.01Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M12.6 1.63C12.41 2.7 12.17 6.05 16.63 5.77C16.81 5.76 16.94 5.58 16.89 5.4C16.61 4.47 15.63 1.96 13 1.37C12.82 1.32 12.64 1.45 12.6 1.63Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M17 13.67C17 16.06 15.05 17.99 12.66 17.99C10.27 17.99 8.33 16.06 8.33 13.67C8.33 11.29 10.27 9.35 12.66 9.35C15.05 9.35 17 11.29 17 13.67Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M6.68 13.67C6.68 12.75 6.92 11.89 7.35 11.14C7.48 10.93 7.43 10.65 7.25 10.48C6.41 9.72 5.28 9.28 4.05 9.36C1.9 9.5 0.16 11.22 0.01 13.36C-0.17 15.89 1.83 17.99 4.33 17.99C5.45 17.99 6.48 17.57 7.25 16.87C7.43 16.7 7.48 16.42 7.35 16.2C6.92 15.46 6.68 14.59 6.68 13.67Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M3.5 8.01C3.59 6.49 4.37 1.68 10.68 0.8C11.01 0.75 11.31 0.62 11.56 0.41C11.65 0.32 11.75 0.23 11.84 0.13C11.98 -0.03 12.22 -0.05 12.38 0.09L12.39 0.1C12.53 0.22 12.56 0.44 12.46 0.59C11.88 1.43 10.35 3.84 11.81 7.8C11.91 8.08 11.71 8.37 11.42 8.37C11.25 8.37 11.09 8.26 11.03 8.1C10.73 7.36 10.03 5.46 10.76 2.36C10.81 2.15 10.75 1.92 10.59 1.77C10.44 1.62 10.22 1.56 10.01 1.61C8.76 1.92 4.6 2.99 4.31 8.06C4.3 8.27 4.12 8.44 3.91 8.44C3.67 8.44 3.49 8.24 3.5 8.01Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M12.6 1.63C12.41 2.7 12.17 6.05 16.63 5.77C16.81 5.76 16.94 5.58 16.89 5.4C16.61 4.47 15.63 1.96 13 1.37C12.82 1.32 12.64 1.45 12.6 1.63Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M17 13.67C17 16.06 15.05 18 12.66 18C10.27 18 8.33 16.06 8.33 13.67C8.33 11.29 10.27 9.35 12.66 9.35C15.05 9.35 17 11.29 17 13.67Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M6.68 13.67C6.68 12.75 6.92 11.89 7.35 11.14C7.48 10.93 7.43 10.65 7.25 10.48C6.41 9.72 5.28 9.28 4.05 9.36C1.9 9.5 0.16 11.22 0.01 13.36C-0.17 15.89 1.83 17.99 4.33 17.99C5.45 17.99 6.48 17.57 7.25 16.87C7.43 16.7 7.48 16.42 7.35 16.2C6.92 15.46 6.68 14.59 6.68 13.67Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <span>Slots</span>
              </NavLink>
              <NavLink className="nav-link" to={"/lives_casino"}>
                <svg
                  width="18.000000"
                  height="18.000000"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    id="vuesax/bold/play"
                    rx="-0.500000"
                    width="17.000000"
                    height="17.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <path
                    id="Vector"
                    d="M13.11 7.2L4.19 12.57C3.67 12.89 3 12.51 3 11.9L3 5.9C3 3.28 5.82 1.65 8.09 2.95L11.54 4.93L13.11 5.83C13.62 6.14 13.63 6.89 13.11 7.2Z"
                    fill="#16A58B"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M13.56 11.59L10.53 13.35L7.5 15.09C6.41 15.72 5.18 15.59 4.29 14.96C3.85 14.66 3.9 13.99 4.36 13.72L13.89 8C14.34 7.74 14.93 7.99 15.02 8.51C15.21 9.67 14.73 10.92 13.56 11.59Z"
                    fill="#16A58B"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <g opacity="0.000000" />
                </svg>
                <span>Live Casino</span>
              </NavLink>
              <NavLink className="nav-link" to={"/dice"}>
                <svg
                  width="18.000000"
                  height="18.000000"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="clip19_13372">
                      <rect
                        id="dice-alt 1"
                        rx="-0.500000"
                        width="17.000000"
                        height="17.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="white"
                        fill-opacity="0"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="dice-alt 1"
                    rx="-0.500000"
                    width="17.000000"
                    height="17.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <g clip-path="url(#clip19_13372)">
                    <path
                      id="Vector"
                      d="M14.25 6.75L10.5 6.75C9.5 6.75 8.55 7.14 7.84 7.84C7.14 8.55 6.75 9.5 6.75 10.5L6.75 14.25C6.75 15.24 7.14 16.19 7.84 16.9C8.55 17.6 9.5 17.99 10.5 18L14.25 18C15.24 17.99 16.19 17.6 16.9 16.9C17.6 16.19 17.99 15.24 18 14.25L18 10.5C17.99 9.5 17.6 8.55 16.9 7.84C16.19 7.14 15.24 6.75 14.25 6.75ZM10.5 11.25C10.35 11.25 10.2 11.2 10.08 11.12C9.95 11.04 9.86 10.92 9.8 10.78C9.75 10.65 9.73 10.49 9.76 10.35C9.79 10.2 9.86 10.07 9.96 9.96C10.07 9.86 10.2 9.79 10.35 9.76C10.49 9.73 10.64 9.75 10.78 9.8C10.92 9.86 11.04 9.95 11.12 10.08C11.2 10.2 11.25 10.35 11.25 10.5C11.25 10.69 11.17 10.88 11.03 11.03C10.88 11.17 10.69 11.25 10.5 11.25ZM14.25 15C14.1 15 13.95 14.95 13.83 14.87C13.71 14.79 13.61 14.67 13.55 14.53C13.5 14.4 13.48 14.24 13.51 14.1C13.54 13.95 13.61 13.82 13.71 13.71C13.82 13.61 13.95 13.54 14.1 13.51C14.24 13.48 14.39 13.5 14.53 13.55C14.67 13.61 14.79 13.71 14.87 13.83C14.95 13.95 15 14.1 15 14.25C15 14.44 14.92 14.63 14.78 14.78C14.63 14.92 14.44 15 14.25 15ZM11.7 3.75L9.05 1.09C8.34 0.39 7.39 0 6.4 0C5.4 0 4.45 0.39 3.75 1.09L1.09 3.75C0.39 4.45 0 5.4 0 6.4C0 7.39 0.39 8.34 1.09 9.05L3.75 11.7C4.16 12.12 4.68 12.43 5.25 12.61L5.25 10.5C5.25 9.1 5.8 7.77 6.78 6.78C7.77 5.8 9.1 5.25 10.5 5.25L12.62 5.25C12.43 4.68 12.12 4.16 11.7 3.75ZM3.75 7.5C3.6 7.5 3.45 7.45 3.33 7.37C3.2 7.29 3.11 7.17 3.05 7.03C3 6.89 2.98 6.74 3.01 6.6C3.04 6.45 3.11 6.32 3.21 6.21C3.32 6.11 3.45 6.04 3.6 6.01C3.74 5.98 3.89 6 4.03 6.05C4.17 6.11 4.29 6.2 4.37 6.33C4.45 6.45 4.5 6.6 4.5 6.75C4.5 6.94 4.42 7.13 4.28 7.28C4.13 7.42 3.94 7.5 3.75 7.5ZM6.75 4.5C6.6 4.5 6.45 4.45 6.33 4.37C6.2 4.29 6.11 4.17 6.05 4.03C6 3.89 5.98 3.74 6.01 3.6C6.04 3.45 6.11 3.32 6.21 3.21C6.32 3.11 6.45 3.04 6.6 3.01C6.74 2.98 6.89 3 7.03 3.05C7.17 3.11 7.29 3.2 7.37 3.33C7.45 3.45 7.5 3.6 7.5 3.75C7.5 3.94 7.42 4.13 7.28 4.28C7.13 4.42 6.94 4.5 6.75 4.5Z"
                      fill="#7F89C1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
                <span>Dice</span>
              </NavLink>
              <NavLink className="nav-link" to={"/mines"}>
                <svg
                  width="18.000000"
                  height="18.000000"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="clip19_13381">
                      <rect
                        id="Frame"
                        rx="-0.500000"
                        width="17.000000"
                        height="17.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="white"
                        fill-opacity="0"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="Frame"
                    rx="-0.500000"
                    width="17.000000"
                    height="17.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <g clip-path="url(#clip19_13381)">
                    <path
                      id="Vector"
                      d="M17.82 5.87L17.43 5.48C17.2 5.25 16.83 5.25 16.6 5.48C16.37 5.71 16.37 6.08 16.6 6.31L16.99 6.7C17.11 6.82 17.26 6.88 17.41 6.88C17.56 6.88 17.71 6.82 17.82 6.7C18.05 6.48 18.05 6.1 17.82 5.87Z"
                      fill="#7F89C1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M15.48 5.48C15.25 5.25 14.87 5.25 14.65 5.48L14.25 5.87C14.02 6.1 14.02 6.48 14.25 6.7C14.37 6.82 14.52 6.88 14.67 6.88C14.82 6.88 14.97 6.82 15.08 6.7L15.48 6.31C15.7 6.08 15.7 5.71 15.48 5.48Z"
                      fill="#7F89C1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M17.82 3.14C17.71 3.02 17.56 2.96 17.41 2.96C17.26 2.96 17.11 3.02 16.99 3.14L16.6 3.53C16.37 3.76 16.37 4.13 16.6 4.36C16.83 4.59 17.2 4.59 17.43 4.36L17.82 3.97C18.05 3.74 18.05 3.36 17.82 3.14Z"
                      fill="#7F89C1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M15.52 3.67L14.69 2.84C14.01 2.15 12.89 2.15 12.2 2.84L11.93 3.12L11.1 2.29C10.87 2.06 10.49 2.06 10.27 2.29L8.7 3.85C7.94 3.53 7.11 3.36 6.25 3.36C4.58 3.36 3.01 4.01 1.83 5.19C-0.62 7.63 -0.62 11.6 1.83 14.05C3.01 15.23 4.58 15.88 6.25 15.88C7.93 15.88 9.5 15.23 10.68 14.05C11.86 12.86 12.51 11.29 12.51 9.62C12.51 8.76 12.34 7.94 12.02 7.17L13.59 5.61C13.81 5.38 13.81 5.01 13.59 4.78L12.76 3.95L13.03 3.67C13.26 3.44 13.63 3.44 13.86 3.67L14.69 4.5C14.81 4.61 14.96 4.67 15.11 4.67C15.26 4.67 15.41 4.61 15.52 4.5C15.75 4.27 15.75 3.9 15.52 3.67ZM9.02 12.38C8.28 13.12 7.3 13.53 6.26 13.53C5.21 13.53 4.23 13.12 3.49 12.38C3.26 12.15 3.26 11.78 3.49 11.55C3.72 11.32 4.09 11.32 4.32 11.55C4.84 12.07 5.53 12.35 6.26 12.35C6.99 12.35 7.67 12.07 8.19 11.55C8.42 11.32 8.79 11.32 9.02 11.55C9.25 11.78 9.25 12.15 9.02 12.38Z"
                      fill="#7F89C1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
                <span>Mines</span>
              </NavLink>
              <NavLink className="nav-link" to={"/bubbles"}>
                <svg
                  width="18.000000"
                  height="18.000015"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    id="Ellipse 1"
                    cx="5.849976"
                    cy="5.850006"
                    r="5.850000"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                  />
                  <circle
                    id="Ellipse 2"
                    cx="14.849976"
                    cy="14.850006"
                    r="3.150000"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                  />
                </svg>
                <span>Bubbles</span>
              </NavLink>
              <NavLink className="nav-link" to={"/keno"}>
                <svg
                  width="18.000000"
                  height="18.000000"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="clip19_13424">
                      <rect
                        id="Frame"
                        rx="-0.500000"
                        width="17.000000"
                        height="17.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="white"
                        fill-opacity="0"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="Frame"
                    rx="-0.500000"
                    width="17.000000"
                    height="17.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <g clip-path="url(#clip19_13424)">
                    <path
                      id="Vector"
                      d="M4.19 2.25L6.3 2.25C7.38 2.25 8.25 3.11 8.25 4.19L8.25 6.3C8.25 7.38 7.38 8.25 6.3 8.25L4.19 8.25C3.11 8.25 2.25 7.38 2.25 6.3L2.25 4.19C2.25 3.11 3.11 2.25 4.19 2.25Z"
                      fill="#7F89C1"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                    <path
                      id="Vector"
                      d="M4.19 9.75L6.3 9.75C7.38 9.75 8.25 10.61 8.25 11.69L8.25 13.8C8.25 14.88 7.38 15.75 6.3 15.75L4.19 15.75C3.11 15.75 2.25 14.88 2.25 13.8L2.25 11.69C2.25 10.61 3.11 9.75 4.19 9.75Z"
                      fill="#7F89C1"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                    <path
                      id="Vector"
                      d="M11.69 2.25L13.8 2.25C14.88 2.25 15.75 3.11 15.75 4.19L15.75 6.3C15.75 7.38 14.88 8.25 13.8 8.25L11.69 8.25C10.61 8.25 9.75 7.38 9.75 6.3L9.75 4.19C9.75 3.11 10.61 2.25 11.69 2.25Z"
                      fill="#7F89C1"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                    <path
                      id="Vector"
                      d="M11.69 9.75L13.8 9.75C14.88 9.75 15.75 10.61 15.75 11.69L15.75 13.8C15.75 14.88 14.88 15.75 13.8 15.75L11.69 15.75C10.61 15.75 9.75 14.88 9.75 13.8L9.75 11.69C9.75 10.61 10.61 9.75 11.69 9.75Z"
                      fill="#7F89C1"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
                <span>Keno</span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <div className="menu__body">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 my-[17px]">
              <svg
                width="20.000000"
                height="20.000000"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.000000" />
                <path
                  id="Vector"
                  d="M17.08 4.87C17.08 6.23 15.97 7.34 14.61 7.34C13.25 7.34 12.14 6.23 12.14 4.87C12.14 3.51 13.25 2.4 14.61 2.4C15.97 2.4 17.08 3.51 17.08 4.87Z"
                  fill="#7F89C1"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
                <path
                  id="Vector"
                  d="M7.84 4.87C7.84 6.23 6.74 7.34 5.38 7.34C4.02 7.34 2.91 6.23 2.91 4.87C2.91 3.51 4.02 2.4 5.38 2.4C6.74 2.4 7.84 3.51 7.84 4.87Z"
                  fill="#7F89C1"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
                <path
                  id="Vector"
                  d="M17.08 15.12C17.08 16.48 15.97 17.59 14.61 17.59C13.25 17.59 12.14 16.48 12.14 15.12C12.14 13.76 13.25 12.65 14.61 12.65C15.97 12.65 17.08 13.76 17.08 15.12Z"
                  fill="#7F89C1"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
                <path
                  id="Vector"
                  d="M7.84 15.12C7.84 16.48 6.74 17.59 5.38 17.59C4.02 17.59 2.91 16.48 2.91 15.12C2.91 13.76 4.02 12.65 5.38 12.65C6.74 12.65 7.84 13.76 7.84 15.12Z"
                  fill="#7F89C1"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </svg>

              <span
                className={classNames(
                  "text-[#7f89c1] text-xs font-semibold uppercase",
                  {
                    ["hidden"]: !menuOpen,
                  }
                )}
              >
                МЕНЮ
              </span>
            </div>
            <span
              onClick={() => setMenuDropper(!menuDropper)}
              className={classNames(
                "p-[2px] bg-[#EDEFFA] dark:bg-[#171B2DA6] rounded-lg w-[24px] h-[24px] flex items-center justify-center cursor-pointer",
                { ["rotate-180"]: menuDropper }
              )}
            >
              <svg
                width="11.427734"
                height="5.714355"
                viewBox="0 0 11.4277 5.71436"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-[#8D9BCB]"
                  id="↳ Icon Color"
                  d="M1.17 0.17C0.87 -0.09 0.42 -0.06 0.17 0.24C-0.09 0.54 -0.06 1 0.25 1.25L5.25 5.54C5.51 5.77 5.91 5.77 6.17 5.54L11.17 1.25C11.47 1 11.51 0.54 11.25 0.24C11 -0.06 10.54 -0.09 10.25 0.17L5.71 4.05L1.17 0.17Z"
                  fill="#8D9BCB"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
            </span>
          </div>
          {menuDropper && (
            <div className="flex flex-col gap-[15px]">
              <NavLink className="nav-link-bottom" to={"/referals"}>
                <svg
                  width="18.000000"
                  height="18.000000"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.000000" />
                  <path
                    id="Vector"
                    d="M13.14 5.82C13.09 5.82 13.04 5.82 12.98 5.82C11.82 5.79 10.9 4.83 10.9 3.66C10.9 2.47 11.87 1.5 13.07 1.5C14.26 1.5 15.23 2.46 15.23 3.66C15.23 4.83 14.3 5.79 13.14 5.82Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M15.59 11.02C14.75 11.58 13.57 11.79 12.48 11.65C12.77 11.04 12.92 10.35 12.93 9.63C12.93 8.88 12.76 8.17 12.45 7.55C13.56 7.4 14.73 7.61 15.58 8.17C16.77 8.95 16.77 10.23 15.59 11.02Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M4.83 5.82C4.88 5.82 4.93 5.82 4.98 5.82C6.14 5.79 7.07 4.83 7.07 3.66C7.07 2.46 6.1 1.5 4.9 1.5C3.71 1.5 2.74 2.46 2.74 3.66C2.74 4.83 3.66 5.79 4.83 5.82Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M4.91 9.63C4.91 10.36 5.06 11.05 5.35 11.67C4.29 11.79 3.19 11.56 2.38 11.03C1.19 10.24 1.19 8.96 2.38 8.17C3.18 7.63 4.31 7.41 5.38 7.53C5.07 8.16 4.91 8.87 4.91 9.63Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M9.09 11.9C9.03 11.89 8.96 11.89 8.89 11.9C7.51 11.85 6.41 10.72 6.41 9.33C6.41 7.9 7.56 6.75 9 6.75C10.42 6.75 11.58 7.9 11.58 9.33C11.57 10.72 10.47 11.85 9.09 11.9Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M6.65 13.45C5.52 14.21 5.52 15.45 6.65 16.2C7.94 17.07 10.05 17.07 11.34 16.2C12.48 15.45 12.48 14.2 11.34 13.45C10.06 12.59 7.95 12.59 6.65 13.45Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <span>Рефералы</span>
              </NavLink>
              <NavLink className="nav-link-bottom" to={"/tournament"}>
                <svg
                  width="18.000000"
                  height="18.000000"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M8.43 13.68L6.75 13.68C5.92 13.68 5.25 14.36 5.25 15.18L5.25 15.37L4.5 15.37C4.19 15.37 3.93 15.62 3.93 15.93C3.93 16.24 4.19 16.5 4.5 16.5L13.5 16.5C13.8 16.5 14.06 16.24 14.06 15.93C14.06 15.62 13.8 15.37 13.5 15.37L12.75 15.37L12.75 15.18C12.75 14.36 12.07 13.68 11.25 13.68L9.56 13.68L9.56 11.97C9.37 11.99 9.18 12 9 12C8.81 12 8.62 11.99 8.43 11.97L8.43 13.68Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M13.85 8.72C14.35 8.54 14.79 8.23 15.13 7.88C15.83 7.11 16.29 6.19 16.29 5.11C16.29 4.03 15.44 3.18 14.36 3.18L13.94 3.18C13.45 2.18 12.43 1.5 11.25 1.5L6.75 1.5C5.56 1.5 4.54 2.18 4.05 3.18L3.63 3.18C2.55 3.18 1.7 4.03 1.7 5.11C1.7 6.19 2.16 7.11 2.86 7.88C3.2 8.23 3.64 8.54 4.14 8.72C4.91 10.64 6.79 12 9 12C11.2 12 13.08 10.64 13.85 8.72ZM11.12 6.33L10.66 6.9C10.58 6.98 10.53 7.15 10.54 7.26L10.58 8C10.62 8.45 10.29 8.68 9.87 8.52L9.19 8.25C9.08 8.21 8.91 8.21 8.8 8.25L8.12 8.52C7.7 8.68 7.37 8.45 7.41 8L7.45 7.26C7.46 7.15 7.41 6.98 7.33 6.9L6.87 6.33C6.57 5.99 6.7 5.61 7.14 5.49L7.85 5.31C7.96 5.28 8.1 5.18 8.16 5.08L8.55 4.46C8.8 4.08 9.19 4.08 9.44 4.46L9.83 5.08C9.89 5.18 10.03 5.28 10.14 5.31L10.85 5.49C11.29 5.61 11.42 5.99 11.12 6.33Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <g opacity="0.000000" />
                </svg>
                <span>Турниры</span>
              </NavLink>
              <NavLink className="nav-link-bottom" to={"/bonus"}>
                <svg
                  width="18.000000"
                  height="18.000000"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 9L15 13.5C15 15.15 13.65 16.5 12 16.5L6 16.5C4.34 16.5 3 15.15 3 13.5L3 9C3 8.58 3.33 8.25 3.75 8.25L5.22 8.25C5.64 8.25 5.97 8.58 5.97 9L5.97 11.35C5.97 11.9 6.28 12.41 6.77 12.68C6.99 12.8 7.22 12.86 7.47 12.86C7.76 12.86 8.04 12.78 8.29 12.61L9 12.14L9.66 12.59C10.12 12.89 10.71 12.93 11.19 12.67C11.69 12.41 12 11.9 12 11.34L12 9C12 8.58 12.33 8.25 12.75 8.25L14.25 8.25C14.66 8.25 15 8.58 15 9Z"
                    fill="#008EFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    d="M16.12 5.25L16.12 6C16.12 6.82 15.72 7.5 14.62 7.5L3.37 7.5C2.22 7.5 1.87 6.82 1.87 6L1.87 5.25C1.87 4.42 2.22 3.75 3.37 3.75L14.62 3.75C15.72 3.75 16.12 4.42 16.12 5.25Z"
                    fill="#008EFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    d="M8.72 3.75L4.58 3.75C4.33 3.47 4.34 3.04 4.61 2.77L5.67 1.7C5.95 1.43 6.41 1.43 6.68 1.7L8.72 3.75Z"
                    fill="#008EFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    d="M13.4 3.75L9.26 3.75L11.3 1.7C11.58 1.43 12.03 1.43 12.31 1.7L13.38 2.77C13.65 3.04 13.65 3.47 13.4 3.75Z"
                    fill="#008EFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    d="M10.47 8.25C10.89 8.25 11.22 8.58 11.22 9L11.22 11.34C11.22 11.94 10.56 12.3 10.06 11.97L9.39 11.52C9.14 11.35 8.82 11.35 8.56 11.52L7.85 11.98C7.36 12.31 6.7 11.95 6.7 11.36L6.7 9C6.7 8.58 7.04 8.25 7.45 8.25L10.47 8.25Z"
                    fill="#008EFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <g opacity="0.000000" />
                </svg>
                <span>Турниры</span>
              </NavLink>
              <NavLink className="nav-link-bottom" to={"/promo"}>
                <svg
                  width="18.000000"
                  height="18.000000"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.75 3.71L12.75 9.06C12.75 10.55 11.69 11.13 10.39 10.35L9.4 9.75C9.18 9.61 8.81 9.61 8.59 9.75L7.6 10.35C6.3 11.13 5.25 10.55 5.25 9.06L5.25 3.74C5.25 2.25 6 1.5 7.5 1.5L10.5 1.5C11.98 1.5 12.73 2.24 12.75 3.71Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    d="M16.5 8.92L16.5 11.19C16.5 14.98 15 16.5 11.25 16.5L6.75 16.5C3 16.5 1.5 14.98 1.5 11.19L1.5 8.92C1.5 6.9 1.92 5.53 2.88 4.69C3.37 4.28 4.12 4.64 4.12 5.28L4.12 9.06C4.12 10.17 4.58 11.07 5.37 11.52C6.18 11.98 7.19 11.9 8.18 11.31L9 10.82L9.81 11.31C10.37 11.64 10.95 11.82 11.49 11.82C11.89 11.82 12.27 11.72 12.62 11.52C13.41 11.07 13.87 10.17 13.87 9.06L13.87 5.27C13.87 4.63 14.63 4.27 15.11 4.69C16.07 5.53 16.5 6.9 16.5 8.92Z"
                    fill="#7F89C1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <g opacity="0.000000" />
                </svg>
                <span>Турниры</span>
              </NavLink>
              <NavLink className="nav-link-bottom" to={"/keno"}>
                <svg
                  width="18.000000"
                  height="18.000000"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="clip19_13207">
                      <rect
                        id="life-ring 1"
                        rx="-0.500000"
                        width="17.000000"
                        height="17.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="white"
                        fill-opacity="0"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="life-ring 1"
                    rx="-0.500000"
                    width="17.000000"
                    height="17.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <g clip-path="url(#clip19_13207)">
                    <path
                      id="Vector"
                      d="M5.25 8.99C5.25 8.26 5.46 7.54 5.87 6.93L2.13 3.19C0.75 4.81 0 6.87 0 8.99C0 11.12 0.75 13.18 2.13 14.8L5.87 11.06C5.46 10.45 5.25 9.73 5.25 8.99Z"
                      fill="#7F89C1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M15.86 3.19L12.12 6.93C12.53 7.54 12.75 8.26 12.75 8.99C12.75 9.73 12.53 10.45 12.12 11.06L15.86 14.8C17.24 13.18 18 11.12 18 8.99C18 6.87 17.24 4.81 15.86 3.19Z"
                      fill="#7F89C1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M9 12.75C8.26 12.74 7.54 12.53 6.93 12.12L3.19 15.86C4.81 17.24 6.87 17.99 9 17.99C11.12 17.99 13.18 17.24 14.8 15.86L11.06 12.12C10.45 12.53 9.73 12.74 9 12.75Z"
                      fill="#7F89C1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M9 5.25C9.73 5.25 10.45 5.46 11.06 5.87L14.8 2.13C13.18 0.75 11.12 6.1e-5 9 6.1e-5C6.87 6.1e-5 4.81 0.75 3.19 2.13L6.93 5.87C7.54 5.46 8.26 5.25 9 5.25Z"
                      fill="#7F89C1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
                <span>Поддержка</span>
              </NavLink>
              <NavLink className="nav-link-bottom" to={"/faq"}>
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
                <span>FAQ</span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
