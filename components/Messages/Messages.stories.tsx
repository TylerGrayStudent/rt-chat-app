import { ComponentMeta, ComponentStory } from "@storybook/react";
import Messages from "./Messages";

export default {
  title: "Messages",
  component: Messages,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Messages>;

const Template: ComponentStory<typeof Messages> = (args) => (
  <div
    id="test"
    className="w-1/2 h-32 overflow-auto border-orange-900 border-solid border-2"
  >
    <Messages {...args} />
  </div>
);

export const Default = Template.bind({});
