import type { Meta, StoryObj } from '@storybook/react';

import { Nav } from './Nav';

const meta: Meta<typeof Nav> = {
  title: 'components/sections/Nav',
  component: Nav,
};

export default meta;

type Story = StoryObj<typeof Nav>;

export const Basic: Story = {
  args: {
    name: '이주영',
  },
  decorators: [
    (Story) => (
      <div className="relative w-[390px] bg-main-primaryHover">
        <Story />
        <div className="absolute top-[70px] left-[20px] text-sm text-gray-30">
          잘 보이기 위해 bg-gradient5 설정한 것이며, 실제로는 없습니다.
        </div>
      </div>
    ),
  ],
};

export const WithoutName: Story = {
  args: {
    name: '',
  },
  decorators: [
    (Story) => (
      <div className="relative w-[390px] bg-main-primaryHover">
        <Story />
        <div className="absolute top-[70px] left-[20px] text-sm text-gray-30">
          잘 보이기 위해 bg-gradient5 설정한 것이며, 실제로는 없습니다.
        </div>
      </div>
    ),
  ],
};
