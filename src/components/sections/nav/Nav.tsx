'use client';

import React from 'react';
import Image from 'next/image';

import LogoImage from '@/assets/images/logo/oli.png';
import { Typography } from '@/components/common';

interface NavProps {
  name: string;
}
export const Nav = ({ name }: NavProps) => {
  return (
    <div className="flex justify-between items-center w-full h-[44px] pt-xs px-xs">
      <div className="flex justify-center items-center">
        <Image src={LogoImage} alt="nav_image" width={30} />
      </div>
      <Typography type={'subLabel1'} className="text-white">
        오늘도 힘내봐요! {name}님
      </Typography>
    </div>
  );
};

Nav.displayName = 'Nav';
