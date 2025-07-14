import type { Meta, StoryObj } from "@storybook/react-vite";
import { RegistrationForm } from "../components/RegistrationForm";
import { userEvent } from "storybook/internal/test";

const meta = {
  component: RegistrationForm,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RegistrationForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Some label",
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText("Some label");

    await userEvent.type(input, "Some text", {
      delay: 1000,
    });

    const submitButton = canvas.getByRole("button");
    await userEvent.click(submitButton);
  },
};
