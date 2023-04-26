import type { Meta, StoryObj } from '@storybook/vue3';
import Avatar from '../components/Avatar.vue';

const meta: Meta<typeof Avatar> = {
  title: 'Example/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;
export const Sizes: Story = {
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
};
