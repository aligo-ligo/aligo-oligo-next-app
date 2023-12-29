'use client';

import { ContentWrapper } from '@/components/sections/contentWrapper';
import { EmptyMapCard } from '@/features/components/MapCardCollections';

interface TargetLayout {
  children: React.ReactNode;
}

// export const TargetLayout = ({ children }: TargetLayout) => {
//   return <div>{children}</div>;
// };

const memberData = {
  nickname: '이주영',
};

export const TargetLayout = () => {
  return (
    <section className="px-xs pt-lg">
      <ContentWrapper
        title={
          <>
            {/* {!memberData?.nickname && (
            <>
              <br />
            </>
          )} */}
            {memberData?.nickname && (
              <>
                {memberData.nickname} 님
                <br />
              </>
            )}
            N개의 목표를 설정하셨고
            <br />
            N개를 이루셨네요!
          </>
        }
      >
        <div className="pt-lg flex gap-4">
          <EmptyMapCard alternativeTextIndex={1} />
        </div>
      </ContentWrapper>
    </section>
  );
};
