import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
//import { within, userEvent } from "@storybook/testing-library";
import MessageList from ".";
import { Message } from "../../models/Message";
import { Messages } from "./stories.data";

export default {
  title: "Messages/MessageList",
  component: MessageList,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MessageList>;

const Template: ComponentStory<typeof MessageList> = (args) => (
  <div id="test" className="w-1/2 h-24 border-orange-900 border-solid border-2">
    <MessageList {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  messages: Messages,
};

//More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// Default.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole("button", { name: /Log in/i });
//   await userEvent.click(loginButton);
// };
