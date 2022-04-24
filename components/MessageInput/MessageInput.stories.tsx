import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MessageInput from "./MessageInput";
//import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Messages/MessageInput",
  component: MessageInput,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MessageInput>;

const Template: ComponentStory<typeof MessageInput> = (args) => (
  <div
    id="test"
    className="w-1/2 h-8 p-4 border-orange-900 border-solid border-2"
  >
    <MessageInput {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

//More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// Default.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole("button", { name: /Log in/i });
//   await userEvent.click(loginButton);
// };
