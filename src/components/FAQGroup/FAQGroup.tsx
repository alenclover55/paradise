import FAQGroupItem from "./FAQGroupItem";

interface IProps {
  title: string;
  groupItem: {
    itemTitle: string;
    content: string;
  }[];
}

function FAQGroup({ title, groupItem }: IProps) {
  return (
    <div className="mt-[20px]">
      <h3 className="mb-5 text-base font-bold text-[#252A42] dark:text-white">
        {title}
      </h3>
      <div className="flex flex-col gap-[10px]">
        {groupItem.map(({ itemTitle, content }) => (
          <FAQGroupItem itemTitle={itemTitle} content={content} />
        ))}
      </div>
    </div>
  );
}

export default FAQGroup;
