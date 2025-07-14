import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../components/Input";

const meta = {
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RequiredArgs: Story = {
  args: {
    isRequired: true,
  },
};

export const RequiredRender: Story = {
  render: () => <Input isRequired />,
};
