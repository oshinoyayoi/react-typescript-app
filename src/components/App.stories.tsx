import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Apps } from "./App";

export default {
  title: "Todo/Apps",

  component: Apps,
} as ComponentMeta<typeof Apps>;

const Template: ComponentStory<typeof Apps> = () => <Apps />;

export const Primary = Template.bind({});
// args:在这个 story 中传入组件属性，只影响当前 story
Primary.args = {
  primary: true,
  label: "Button",
};
