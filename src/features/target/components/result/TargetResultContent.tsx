'use client';

import { useRouter } from 'next/navigation';

import { ChartWidget } from '@/components/chart';
// import { Modal } from '@/components/modal';
import { Nav } from '@/components/sections/nav';

import ContentBody from '../detail/ContentBody';
import { DetailLayout } from '..';

const TargetResultContent = ({ id }: { id: number }) => {
  const router = useRouter();

  console.log(id, router);

  const test = {
    name: 'juyoung',
  };
  return (
    <DetailLayout
      header={<Nav user={test} />}
      graph={<ChartWidget />}
      body={<ContentBody />}
      // footer={<Modal buttonName="공유" />}
    />
  );
};

export default TargetResultContent;
