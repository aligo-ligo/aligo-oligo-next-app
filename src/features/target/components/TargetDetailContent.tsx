'use client';

import { useRouter } from 'next/navigation';

import { Nav } from '@/components/sections/nav';

import DetailLayout from './TargetDetailLayout';
import ContentBody from './ContentBody';
import { Modal } from '@/components/modal';

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
      body={<ContentBody />}
      footer={<Modal buttonName="공유" />}
    />
  );
};

export default TargetDetailContent;
