import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Category } from "./category";

export default {
  title: "Nitori/Category",

  component: Category,
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => <Category />;

export const Primary = Template.bind({});
// args:在这个 story 中传入组件属性，只影响当前 story
Primary.args = {
  parimart: true,

  // inputEl: React.RefObject<HTMLTextAreaElement>;
};
