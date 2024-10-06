import { Dispatch, SetStateAction } from "react";

interface IProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}
function MenuMobile({ setOpen }: IProps) {
  return (
    <div className="ssm:block md:hidden fixed z-[1000] bottom-0 left-0 w-full h-[66px] bg-white dark:bg-gray-900 border border-white shadow rounded-2xl border-opacity-5 py-[15px] pl-[28px] pr-[27px]">
      <ul className="flex justify-between">
        <li
          onClick={() => setOpen(true)}
          className="flex flex-col items-center h-[36px]"
        >
          <svg
            className="flex-grow"
            width="19.000000"
            height="13.458313"
            viewBox="0 0 19 13.4583"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M17.81 5.54L1.18 5.54C0.53 5.54 0 6.07 0 6.72C0 7.38 0.53 7.91 1.18 7.91L17.81 7.91C18.46 7.91 19 7.38 19 6.72C19 6.07 18.46 5.54 17.81 5.54Z"
              fill="#7F89C1"
              fill-opacity="1.000000"
              fill-rule="nonzero"
            />
            <path
              id="Vector"
              d="M1.18 2.37L17.81 2.37C18.46 2.37 19 1.84 19 1.18C19 0.53 18.46 0 17.81 0L1.18 0C0.53 0 0 0.53 0 1.18C0 1.84 0.53 2.37 1.18 2.37Z"
              fill="#7F89C1"
              fill-opacity="1.000000"
              fill-rule="nonzero"
            />
            <path
              id="Vector"
              d="M17.81 11.08L1.18 11.08C0.53 11.08 0 11.61 0 12.27C0 12.92 0.53 13.45 1.18 13.45L17.81 13.45C18.46 13.45 19 12.92 19 12.27C19 11.61 18.46 11.08 17.81 11.08Z"
              fill="#7F89C1"
              fill-opacity="1.000000"
              fill-rule="nonzero"
            />
          </svg>

          <span className="flex-grow-0 text-xs font-semibold leading-none text-center text-[#7F89C1]">
            Меню
          </span>
        </li>
        <li className="flex flex-col items-center h-[36px]">
          <svg
            className="flex-grow"
            width="19.000000"
            height="19.000000"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M1.58 11.87L8.7 11.87L8.7 19L5.54 19C4.49 19 3.48 18.58 2.74 17.84C2 17.09 1.58 16.09 1.58 15.04L1.58 11.87ZM19 8.7C19 9.12 18.83 9.53 18.53 9.82C18.23 10.12 17.83 10.29 17.41 10.29L10.29 10.29L10.29 7.09C10.02 7.11 9.76 7.12 9.5 7.12C9.23 7.12 8.97 7.11 8.7 7.09L8.7 10.29L1.58 10.29C1.16 10.29 0.76 10.12 0.46 9.82C0.16 9.53 0 9.12 0 8.7C0 7.86 0.33 7.06 0.92 6.46C1.52 5.87 2.32 5.54 3.16 5.54L4.54 5.54C4.09 5.14 3.73 4.65 3.5 4.11C3.26 3.56 3.14 2.97 3.16 2.37C3.16 2.16 3.25 1.96 3.39 1.81C3.54 1.66 3.74 1.58 3.95 1.58C4.16 1.58 4.36 1.66 4.51 1.81C4.66 1.96 4.75 2.16 4.75 2.37C4.75 4.45 6.62 5.16 8.05 5.41C7.52 4.48 7.21 3.44 7.12 2.37C7.12 1.74 7.37 1.14 7.82 0.69C8.26 0.25 8.87 0 9.5 0C10.12 0 10.73 0.25 11.17 0.69C11.62 1.14 11.87 1.74 11.87 2.37C11.78 3.44 11.47 4.48 10.94 5.41C12.37 5.16 14.25 4.45 14.25 2.37C14.25 2.16 14.33 1.96 14.48 1.81C14.63 1.66 14.83 1.58 15.04 1.58C15.25 1.58 15.45 1.66 15.6 1.81C15.74 1.96 15.83 2.16 15.83 2.37C15.85 2.97 15.73 3.56 15.49 4.11C15.26 4.65 14.9 5.14 14.45 5.54L15.83 5.54C16.67 5.54 17.47 5.87 18.07 6.46C18.66 7.06 19 7.86 19 8.7ZM8.7 2.37C8.8 3.21 9.07 4.02 9.5 4.76C9.92 4.02 10.19 3.21 10.29 2.37C10.29 2.16 10.2 1.96 10.05 1.81C9.91 1.66 9.7 1.58 9.5 1.58C9.29 1.58 9.08 1.66 8.94 1.81C8.79 1.96 8.7 2.16 8.7 2.37ZM10.29 19L13.45 19C13.97 19 14.49 18.89 14.97 18.69C15.45 18.49 15.88 18.2 16.25 17.84C16.62 17.47 16.91 17.03 17.11 16.55C17.31 16.07 17.41 15.56 17.41 15.04L17.41 11.87L10.29 11.87L10.29 19Z"
              fill="#7F89C1"
              fill-opacity="1.000000"
              fill-rule="nonzero"
            />
          </svg>

          <span className="text-xs font-semibold leading-none text-center text-[#7F89C1]">
            Бонусы
          </span>
        </li>
        <li className="flex flex-col items-center h-[36px]">
          <div className="p-[14px] mt-[-28px] bg-[#008EFF] rounded-full">
            <svg
              width="20.000000"
              height="20.000214"
              viewBox="0 0 20 20.0002"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M14.65 3.72L5.35 3.72C2.4 3.72 0 6.12 0 9.07L0 14.65C0 17.6 2.4 20 5.35 20L14.65 20C17.6 20 20 17.6 20 14.65L20 9.07C20 6.12 17.6 3.72 14.65 3.72ZM12.5 10.02C12.5 9.47 12.95 9.02 13.5 9.02C14.05 9.02 14.5 9.47 14.5 10.02C14.5 10.57 14.05 11.03 13.5 11.03C12.95 11.03 12.5 10.59 12.5 10.04L12.5 10.02ZM8.13 14.07C7.98 14.22 7.79 14.29 7.6 14.29C7.41 14.29 7.22 14.22 7.07 14.07L6.04 13.04L5.05 14.03C4.9 14.18 4.71 14.25 4.52 14.25C4.33 14.25 4.14 14.18 3.99 14.03C3.7 13.74 3.7 13.26 3.99 12.97L4.98 11.98L4.02 11.02C3.73 10.73 3.73 10.25 4.02 9.96C4.31 9.67 4.79 9.67 5.08 9.96L6.04 10.92L7.03 9.93C7.32 9.64 7.8 9.64 8.09 9.93C8.38 10.22 8.38 10.7 8.09 10.99L7.1 11.98L8.13 13.01C8.42 13.3 8.42 13.78 8.13 14.07ZM11.54 13C10.99 13 10.53 12.55 10.53 12C10.53 11.45 10.97 11 11.52 11L11.54 11C12.09 11 12.54 11.45 12.54 12C12.54 12.55 12.1 13 11.54 13ZM13.5 14.97C12.95 14.97 12.5 14.53 12.5 13.98L12.5 13.96C12.5 13.41 12.95 12.96 13.5 12.96C14.05 12.96 14.5 13.41 14.5 13.96C14.5 14.51 14.06 14.97 13.5 14.97ZM15.48 13C14.93 13 14.47 12.55 14.47 12C14.47 11.45 14.91 11 15.46 11L15.48 11C16.03 11 16.48 11.45 16.48 12C16.48 12.55 16.04 13 15.48 13Z"
                fill="#FFFFFF"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
              <path
                id="Vector"
                d="M11.77 0.7L11.76 1.64C11.75 2.53 11.02 3.26 10.13 3.26C9.98 3.26 9.89 3.35 9.89 3.48C9.89 3.62 9.99 3.72 10.12 3.72L8.51 3.72C8.5 3.64 8.49 3.57 8.49 3.48C8.49 2.59 9.22 1.85 10.11 1.85C10.26 1.85 10.36 1.76 10.36 1.63L10.37 0.69C10.38 0.3 10.69 0 11.07 0L11.08 0C11.47 0 11.77 0.32 11.77 0.7Z"
                fill="#FFFFFF"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
          </div>
          <span className="mt-[4px] text-xs font-semibold leading-none text-center dark:text-white">
            Игры
          </span>
        </li>
        <li className="flex flex-col items-center h-[36px]">
          <svg
            className="flex-grow"
            width="19.000000"
            height="19.000000"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip2004_48399">
                <rect
                  id="life-ring 1"
                  rx="-0.500000"
                  width="18.000000"
                  height="18.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="white"
                  fill-opacity="0"
                />
              </clipPath>
            </defs>
            <rect
              id="life-ring 1"
              rx="-0.500000"
              width="18.000000"
              height="18.000000"
              transform="translate(0.500000 0.500000)"
              fill="#FFFFFF"
              fill-opacity="0"
            />
            <g clip-path="url(#clip2004_48399)">
              <path
                id="Vector"
                d="M5.54 9.5C5.54 8.72 5.77 7.96 6.2 7.32L2.25 3.37C0.79 5.08 4.57e-5 7.25 4.57e-5 9.5C4.57e-5 11.74 0.79 13.91 2.25 15.62L6.2 11.67C5.77 11.03 5.54 10.27 5.54 9.5Z"
                fill="#7F89C1"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
              <path
                id="Vector"
                d="M16.74 3.37L12.79 7.32C13.22 7.96 13.45 8.72 13.45 9.5C13.45 10.27 13.22 11.03 12.79 11.67L16.74 15.62C18.2 13.91 19 11.74 19 9.5C19 7.25 18.2 5.08 16.74 3.37Z"
                fill="#7F89C1"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
              <path
                id="Vector"
                d="M9.5 13.45C8.72 13.45 7.96 13.22 7.32 12.79L3.37 16.74C5.08 18.2 7.25 19 9.5 19C11.74 19 13.91 18.2 15.62 16.74L11.67 12.79C11.03 13.22 10.27 13.45 9.5 13.45Z"
                fill="#7F89C1"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
              <path
                id="Vector"
                d="M9.5 5.36C10.32 5.36 11.12 5.58 11.81 6L16 2.17C14.18 0.77 11.88 0 9.5 0C7.11 0 4.81 0.77 3 2.17L7.18 6C7.87 5.58 8.67 5.36 9.5 5.36Z"
                fill="#7F89C1"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </g>
          </svg>

          <span className="text-xs font-semibold leading-none text-center text-[#7F89C1]">
            Помощь
          </span>
        </li>
        <li className="flex flex-col items-center h-[36px]">
          <svg
            className="flex-grow"
            width="15.041672"
            height="16.624756"
            viewBox="0 0 15.0417 16.6248"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M11.65 4.05C11.65 6.29 9.8 8.1 7.52 8.1C5.23 8.1 3.38 6.29 3.38 4.05C3.38 1.81 5.23 0 7.52 0C9.8 0 11.65 1.81 11.65 4.05ZM0 16.21C0 12.86 3.37 10.13 7.52 10.13C11.66 10.13 15.04 12.86 15.04 16.21C15.04 16.44 14.85 16.62 14.62 16.62L0.41 16.62C0.18 16.62 0 16.44 0 16.21Z"
              fill="#7F89C1"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </svg>

          <span className="text-xs font-semibold leading-none text-center text-[#7F89C1]">
            Аккаунт
          </span>
        </li>
      </ul>
    </div>
  );
}

export default MenuMobile;
