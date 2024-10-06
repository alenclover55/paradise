import CustomSelect from "./ui/CustomSelect/CustomSelect";

function DepositDidntArrived() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#EEEFFA] bg-opacity-75 dark:bg-[#131627bb] z-50 flex items-center justify-center">
      <div className="bg-[#E0E3F4] dark:bg-[#252A42] py-[25px] pl-[26px] pr-[25px] w-[400px] rounded-[18px]">
        <div className="flex items-center justify-between mb-[15px]">
          <h3 className="text-lg font-bold text-[#353C5A] dark:text-white">
            Не прошел депозит
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
        <div>
          <p className="text-sm font-semibold text-[#8D9BCB] mb-[10px]">
            Выбирете депозит:
          </p>
          <CustomSelect />
        </div>
        <div className="mt-[15px]">
          <p className="text-sm font-semibold text-[#8D9BCB] mb-2">
            Чек об оплате:
          </p>
          <div className="flex items-center gap-2 p-[7px] bg-[#EDEFFA] dark:bg-[#353C5A] rounded-xl">
            <input className="hidden" type="file" name="check" id="check" />
            <label
              className="flex items-center justify-start gap-1 p-2 bg-white dark:bg-[#4D577E] rounded-md text-xs font-semibold text-center text-[#404869] dark:text-white"
              htmlFor="check"
            >
              <svg
                width="20.000000"
                height="20.000000"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  id="vuesax/bold/folder-add"
                  rx="-0.500000"
                  width="19.000000"
                  height="19.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <path
                  className="fill-[#404869] dark:fill-white"
                  id="Vector"
                  d="M16.63 7.7L2.66 7.7C2.11 7.7 1.66 7.26 1.66 6.7L1.66 5.35C1.66 3.31 3.31 1.66 5.34 1.66L7.28 1.66C8.64 1.66 9.06 2.1 9.6 2.83L10.77 4.38C11.03 4.72 11.06 4.76 11.54 4.76L13.87 4.76C15.29 4.76 16.55 5.43 17.37 6.46C17.79 7.01 17.32 7.7 16.63 7.7Z"
                  fill="#FFFFFF"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
                <path
                  className="fill-[#404869] dark:fill-white"
                  id="Vector"
                  d="M17.32 8.95L2.66 8.95C2.11 8.95 1.66 9.4 1.66 9.95L1.66 13.87C1.66 16.33 3.66 18.33 6.12 18.33L13.87 18.33C16.33 18.33 18.33 16.33 18.33 13.87L18.32 9.95C18.32 9.4 17.87 8.95 17.32 8.95ZM12.08 13.95L10.67 13.95L10.67 15.41C10.67 15.75 10.39 16.04 10.04 16.04C9.69 16.04 9.42 15.75 9.42 15.41L9.42 13.95L7.91 13.95C7.57 13.95 7.29 13.67 7.29 13.33C7.29 12.99 7.57 12.7 7.91 12.7L9.42 12.7L9.42 11.25C9.42 10.9 9.69 10.62 10.04 10.62C10.39 10.62 10.67 10.9 10.67 11.25L10.67 12.7L12.08 12.7C12.42 12.7 12.7 12.99 12.7 13.33C12.7 13.67 12.42 13.95 12.08 13.95Z"
                  fill="#FFFFFF"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
                <g opacity="0.000000" />
              </svg>
              Выбрать файл
            </label>
            <div className="text-xs font-semibold text-[#8D9BCB]">
              Файл не выбран
            </div>
          </div>
          <div className="flex items-center gap-2 mt-[10px]">
            <svg
              width="20.000000"
              height="20.000000"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M10 20C15.5 20 20 15.51 20 10C20 4.48 15.5 0 10 0C4.49 0 0 4.48 0 10C0 15.51 4.49 20 10 20ZM10.75 14C10.75 14.4 10.41 14.75 10 14.75C9.58 14.75 9.25 14.4 9.25 14L9.25 9C9.25 8.59 9.58 8.25 10 8.25C10.41 8.25 10.75 8.59 10.75 9L10.75 14ZM9.08 5.62C9.13 5.48 9.19 5.38 9.28 5.29C9.39 5.19 9.5 5.12 9.61 5.08C9.74 5.03 9.86 5 10 5C10.13 5 10.25 5.03 10.38 5.08C10.5 5.12 10.6 5.19 10.71 5.29C10.8 5.38 10.86 5.48 10.91 5.62C10.97 5.73 11 5.87 11 6C11 6.12 10.97 6.26 10.91 6.37C10.86 6.5 10.8 6.61 10.71 6.7C10.6 6.8 10.5 6.87 10.38 6.91C10.14 7.02 9.85 7.02 9.61 6.91C9.5 6.87 9.39 6.8 9.28 6.7C9.19 6.61 9.13 6.5 9.08 6.37C9.02 6.26 9 6.12 9 6C9 5.87 9.02 5.73 9.08 5.62Z"
                fill="#8D9BCB"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
            <p className="text-xs font-semibold leading-none text-[#8D9BCB]">
              Вы можете загрузить файлы .png .jpg .pdf
            </p>
          </div>
        </div>
        <div className="mt-[15px]">
          <p className="text-sm font-semibold text-[#8D9BCB] mb-[10px]">
            Коментарий:
          </p>
          <textarea
            className="w-full bg-[#EDEFFA] dark:bg-[#353C5A] p-4 rounded-lg min-h-[80px] text-[#404869] dark:text-white outline-none text-sm font-semibold"
            name=""
            id=""
            placeholder="Кратко опишите ситуацию"
          ></textarea>
        </div>
        <button className="flex items-center justify-center w-full py-[19px] bg-[#16A58B] rounded-xl text-sm font-bold text-center text-white mt-[17px]">
          Создать заявку
        </button>
        <div>
          <div className="grid grid-cols-3 py-[12px] px-[15px] border rounded-lg border-[#D1D5E9] dark:border-[#333955] mt-[15px]">
            <p className="text-xs font-medium text-[#8D9BCB]">ID</p>
            <p className="text-xs font-medium text-[#8D9BCB]">ID пополнения</p>
            <p className="text-xs font-medium text-[#8D9BCB] justify-self-end">
              Статус
            </p>
          </div>
          <div className="flex flex-col gap-[5px] mt-[10px]">
            <div className="grid grid-cols-3 py-[12px] px-[15px] bg-white dark:bg-[#333955] border-none darkborder rounded-lg border-[#333955]">
              <p className="text-xs font-medium text-[#404869] dark:text-[#8D9BCB]">
                #48112839
              </p>
              <p className="text-xs font-medium text-[#404869] dark:text-[#8D9BCB]">
                2831283990
              </p>
              <p className="text-xs font-semibold justify-self-end text-[#16A58B]">
                Зачислено
              </p>
            </div>
            <div className="grid grid-cols-3 py-[12px] px-[15px] bg-white dark:bg-[#333955] border-none darkborder rounded-lg border-[#333955]">
              <p className="text-xs font-medium text-[#404869] dark:text-[#8D9BCB]">
                #48112839
              </p>
              <p className="text-xs font-medium text-[#404869] dark:text-[#8D9BCB]">
                2831283990
              </p>
              <p className="text-xs font-semibold justify-self-end text-[#16A58B]">
                Зачислено
              </p>
            </div>
            <div className="grid grid-cols-3 py-[12px] px-[15px] bg-white dark:bg-[#333955] border-none darkborder rounded-lg border-[#333955]">
              <p className="text-xs font-medium text-[#404869] dark:text-[#8D9BCB]">
                #48112839
              </p>
              <p className="text-xs font-medium text-[#404869] dark:text-[#8D9BCB]">
                2831283990
              </p>
              <p className="text-xs font-semibold justify-self-end text-[#16A58B]">
                Зачислено
              </p>
            </div>
            <div className="grid grid-cols-3 py-[12px] px-[15px] bg-white dark:bg-[#333955] border-none darkborder rounded-lg border-[#333955]">
              <p className="text-xs font-medium text-[#404869] dark:text-[#8D9BCB]">
                #48112839
              </p>
              <p className="text-xs font-medium text-[#404869] dark:text-[#8D9BCB]">
                2831283990
              </p>
              <p className="text-xs font-semibold justify-self-end text-[#16A58B]">
                Зачислено
              </p>
            </div>
            <div className="grid grid-cols-3 py-[12px] px-[15px] bg-white dark:bg-[#333955] border-none dark:border rounded-lg border-[#333955]">
              <p className="text-xs font-medium text-[#404869] dark:text-[#8D9BCB]">
                #48112839
              </p>
              <p className="text-xs font-medium text-[#404869] dark:text-[#8D9BCB]">
                2831283990
              </p>
              <p className="text-xs font-semibold justify-self-end text-[#16A58B]">
                Зачислено
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositDidntArrived;
