// import { monthFormatDate } from '../../../utils/formatDate';
// import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

import dayjs from 'dayjs';

interface Props {
  date: Date;
  decreaseMonth(): void;
  increaseMonth(): void;
}

const CalenderHeader = ({ date, decreaseMonth, increaseMonth }: Props) => {
  //   const dateToString = monthFormatDate(date);
  // 리팩토링 day.js를 활용하여 한줄로 구현
  // export const monthFormatDate = (d: Date): string => {
  //   const date = new Date(d);
  //   const monthIndex = date.getMonth() + 1;
  //   const year = date.getFullYear();
  //   return `${year}년 ${`0${monthIndex}`.slice(-2)}월`;
  // };

  const dateToString = dayjs(date).format('YYYY년 MM월 DD일');
  console.log('dateToString 자체 typeof', typeof dateToString);

  return (
    <div className="p-2 flex justify-evenly items-center">
      <button type="button" onClick={decreaseMonth} className="text-3xl text-white">
        {/* <FiChevronsLeft /> */}
      </button>
      <div className="">{dateToString}</div>
      <button type="button" onClick={increaseMonth} className="text-3xl text-white">
        {/* <FiChevronsRight /> */}
      </button>
    </div>
  );
};

export default CalenderHeader;
