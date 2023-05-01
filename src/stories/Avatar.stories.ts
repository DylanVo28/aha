import type {Meta, Preview, StoryObj} from '@storybook/vue3';
import Avatar from '../components/avatars/Avatar.vue';
import AvatarGroup from '../components/avatars/AvatarGroup.vue';

import {colorsNormalArray, sizesNormalArray} from "@/constants/constants";
import MyPage from "@/stories/Page.vue";

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,

  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: sizesNormalArray },
    color: { control: 'select', options: colorsNormalArray },
    squared: {
      control: 'boolean'
    },
    bordered: {
      control: 'boolean'
    },
    zoomed: {
      control: 'boolean'
    }
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;
export const Text: Story = {
  argTypes: {
    size: sizesNormalArray[2],
    text: "Dinh"
  },
};
export const Image: Story = {
  argTypes: {
    size: sizesNormalArray[2],
    src: "https://cdn.luatminhkhue.vn/lmk/article/meme_cua_Dui_2_6473667842.jpg"
  },
};

