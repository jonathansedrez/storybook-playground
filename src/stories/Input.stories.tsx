import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../components/Input";

import { fn } from "storybook/test";

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
    label: "Some label",
    onChange: fn(),
  },
};

export const RequiredRender: Story = {
  render: () => <Input isRequired />,
};
