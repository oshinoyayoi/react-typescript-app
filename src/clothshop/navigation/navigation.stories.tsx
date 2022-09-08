import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navigation } from "./navigation";

export default {
  title: "Shop/HomePage/Navigation",

  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation />;

export const Primary = Template.bind({});
// args:在这个 story 中传入组件属性，只影响当前 story
Primary.args = {
  parimary: true,
  // inputEl: React.RefObject<HTMLTextAreaElement>;
};
