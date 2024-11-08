import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  title: string;
  pageImgUrl: string;
  children: ReactNode;
}
function MainLayout({ title, children, pageImgUrl }: IProps) {
  const navigation = useNavigate();
  return (
    <div className="dark:bg-[#252A424D] px-[20px] pt-[20px] pb-[30px] my-[20px] rounded-[16px] bg-[#E0E3F4] ">
      <div className="flex items-center justify-between gap-[16px] pb-[20px] border-b-[1px] border-[#EDEFFA] dark:border-gray-800">
        <div className="flex items-center gap-[16px]">
          <img src={pageImgUrl} alt="" />
          <p className="text-2xl font-semibold text-[#252A42] dark:text-white">
            {title}
          </p>
        </div>
        <div className="flex items-center gap-[8px]">
          <button className="flex items-center justify-center dark:bg-[#252A42] rounded-2xl w-[44px] h-[44px] bg-white">
            <img src="../../public/assets/icons/question.svg" alt="" />
          </button>
          <button
            onClick={() => navigation(-1)}
            className="flex items-center justify-center dark:bg-[#252A42] rounded-2xl w-[44px] h-[44px] bg-white"
          >
            <img src="../../public/assets/icons/go_back.svg" alt="" />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default MainLayout;
