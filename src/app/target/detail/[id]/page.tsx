'use client';
import TargetDetailContent from '@/features/target/components/TargetDetailContent';
import React from 'react';

interface ParamsProps {
  params: {
    id: string;
  };
}

const TargetDetailPage = ({ params }: ParamsProps) => {
  const id = +params['id'];
  return <TargetDetailContent id={id} />;
};

export default TargetDetailPage;
