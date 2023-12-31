import { CheckIcon } from '@/assets/icons';
import { Typography } from '@/components/common';

interface SelectableCardListProps {
  items: {
    /** title에는 카드 선택 시 상위 컴포넌트에 callback으로 전달할 값을 넣어주세요. */
    title: string;
    /** content에는 카드에 출력할 component를 넣어주세요. */
    content: string | React.ReactNode;
  }[];
  onClick: (itemTitle: string) => void;
}

export const SelectableCardList = ({ items, onClick }: SelectableCardListProps) => {
  const handleCardClick = (itemTitle: string) => {
    onClick(itemTitle);
  };

  return (
    <div>
      {items.map((item, index) => (
        <button className="w-full group" onClick={() => handleCardClick(item.title)} key={`card${index + 1}`}>
          <div className="p-4xs relative flex items-center justify-between rounded-md gap-4xs group-focus:bg-main-primary-10 group-hover:bg-main-primary-10 shadow-[0_0_7.9px_0_rgba(0,88,255,0.10)] mb-4xs">
            <Typography type="title3" className="text-gray-50">
              {item.content}
            </Typography>
            <CheckIcon className="fill-gray-40 group-focus:main-primary-80 group-hover:fill-main-primary-80" />
          </div>
        </button>
      ))}
    </div>
  );
};
SelectableCardList.displayName = 'SelectableCardList';
