import {Meta, StoryObj} from "@storybook/vue3";
import Input from "@/components/inputs/Input.vue";


const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,

  tags: ['autodocs'],
  argTypes: {
    type: {control: 'select', options: ['text','password']}
  },
};
export default meta;
type Story = StoryObj<typeof Input>;
export const Text: Story = {
  argTypes: {

  },
};
