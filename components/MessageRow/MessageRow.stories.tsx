import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
//import { within, userEvent } from "@storybook/testing-library";
import MessageRow from ".";

export default {
  title: "Messages/Message",
  component: MessageRow,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MessageRow>;

const Template: ComponentStory<typeof MessageRow> = (args) => (
  <div id="test" className="w-1/2 border-orange-900 border-solid border-2">
    <MessageRow {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  user: "John",
  message:
    "Hello World, This is a super long message. It should wrap around the screen. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long.",
};

//More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// Default.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole("button", { name: /Log in/i });
//   await userEvent.click(loginButton);
// };
