'use client';

import React from 'react';
import Image from 'next/image';

import LogoImage from '@/assets/images/logo/oli.png';
import { Button, Typography } from '@/components/common';

// TODO : User type
interface User {
  name: string;
}

interface NavProps {
  user?: User;
}
export const Nav = ({ user }: NavProps) => {
  console.log('test', user);
  return (
    <div className="flex justify-between items-center w-full h-[44px] pt-xs px-xs">
      <div className="flex justify-center items-center w-10 390:w-8">
        <Image src={LogoImage} alt="nav_image" width={100} />
      </div>

      {user ? (
        <Typography type={'subLabel1'} className="text-white">
          {user.name}의 타겟 모음
        </Typography>
      ) : (
        <div className="flex gap-2">
          <Button variant={'tertiary'} width={'full'} className="w-14 h-8">
            <Typography type={'caption1'}>로그인</Typography>
          </Button>
          <Button variant={'primary'} width={'full'} className="w-14 h-8 ">
            <Typography type={'caption1'}>회원가입</Typography>
          </Button>
        </div>
      )}
    </div>
  );
};

Nav.displayName = 'Nav';
