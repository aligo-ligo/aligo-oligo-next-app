'use client';

import { useRouter } from 'next/navigation';
import DetailLayout from './TargetDetailLayout';
import { Nav } from '@/components/sections/nav';

const TargetDetailContent = ({ id }: { id: number }) => {
  const router = useRouter();
  console.log(id, router);

  const test = {
    name: 'juyoung',
  };
  return (
    <DetailLayout
      header={<Nav user={test} />}
      //   sticker={<Sticker />}
      //   body={<ContentBody />}
      //   footer={<DetailFooterButton />}
    />
  );
};

export default TargetDetailContent;
