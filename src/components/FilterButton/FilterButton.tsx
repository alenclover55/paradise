import classNames from "classnames";
import "./filterButton.scss";
interface IFilerButton {
  imgUrl: string;
  text: string;
  isActive?: boolean;
}

function FilterButton({ imgUrl, text, isActive }: IFilerButton) {
  return (
    <div className={classNames("filter-buttons", { ["active"]: isActive })}>
      <img src={imgUrl} alt="" />
      <span
        className={classNames("text-sm text-[#758BD0] font-semibold", {
          ["text-white"]: isActive,
        })}
      >
        {text}
      </span>
    </div>
  );
}

export default FilterButton;
