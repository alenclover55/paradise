import classNames from "classnames";
import { useState } from "react";

interface IProps {
  itemTitle: string;
  content: string;
}
function FAQGroupItem({ itemTitle, content }: IProps) {
  const [activeDrop, setActiveDrop] = useState(false);
  const dropDown = classNames({
    questionIcon: true,
    active: activeDrop,
  });
  const activeArrow = classNames({
    questionArrow: activeDrop,
  });

  return (
    <div className="bg-white dark:bg-[#252A42] rounded-xl">
      <div className="flex items-center justify-between pt-[8px] pl-[8px] pb-[7px] pr-[12px]">
        <div className="flex items-center gap-[8px]">
          <svg
            className={dropDown}
            width="32.000000"
            height="32.000000"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip12_33099">
                <rect
                  id="Frame 116"
                  rx="9.500000"
                  width="31.000000"
                  height="31.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="white"
                  fill-opacity="0"
                />
              </clipPath>
            </defs>
            <rect
              id="Frame 116"
              rx="9.500000"
              width="31.000000"
              height="31.000000"
              transform="translate(0.500000 0.500000)"
            />
            <g clip-path="url(#clip12_33099)">
              <path
                id="Vector"
                d="M17.98 13.63C17.98 13.18 17.79 12.8 17.41 12.49C17.02 12.19 16.55 12.03 15.99 12.03C15.52 12.03 15.1 12.15 14.74 12.39C14.38 12.63 14.13 12.93 14.01 13.3L12 12.71C12.25 11.9 12.72 11.24 13.43 10.75C14.14 10.25 14.97 10 15.94 10C17.1 10 18.07 10.35 18.83 11.05C19.61 11.74 20 12.6 20 13.64C20 14.13 19.9 14.58 19.7 15.01C19.5 15.44 19.25 15.78 18.95 16.03C18.34 16.53 17.81 16.86 17.36 17.01L17.05 17.11L16.95 18.12L15.29 18.12L15.07 15.95C15.38 15.86 15.72 15.74 16.08 15.58C16.41 15.44 16.71 15.29 16.97 15.14C17.25 14.97 17.49 14.74 17.69 14.47C17.88 14.18 17.98 13.9 17.98 13.63ZM15.21 21.63C14.98 21.39 14.86 21.09 14.86 20.71C14.86 20.34 14.98 20.03 15.21 19.79C15.45 19.54 15.74 19.41 16.1 19.41C16.45 19.41 16.74 19.54 16.97 19.79C17.21 20.03 17.33 20.34 17.33 20.71C17.33 21.09 17.21 21.39 16.97 21.63C16.74 21.87 16.45 22 16.1 22C15.74 22 15.45 21.87 15.21 21.63Z"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </g>
          </svg>
          <p className="text-sm font-semibold text-[#7F89C1]">{itemTitle}</p>
        </div>
        <span
          onClick={() => setActiveDrop((prevState) => !prevState)}
          className={
            "w-[24px] h-[24px] flex items-center justify-center bg-[#EDEFFA] dark:bg-[#323856] rounded-[8px] cursor-pointer " +
            activeArrow
          }
        >
          <img src=".././assets/icons/arrow_down.svg" alt="" />
        </span>
      </div>
      {activeDrop && (
        <div className=" border-t border-[#E7EAFA] dark:border-[#3B4160]">
          <div className="pl-[15px] pt-[15px] pb-[21px] pr-[15px]">
            <p className="text-xs font-medium leading-tight text-[#7F89C1]">
              {content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FAQGroupItem;
