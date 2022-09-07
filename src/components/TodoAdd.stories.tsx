import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TodoAdd } from "./TodoAdd";

export default {
  title: "Todo/TodoAdd",

  component: TodoAdd,
} as ComponentMeta<typeof TodoAdd>;

const Template: ComponentStory<typeof TodoAdd> = (args) => (
  <TodoAdd {...args} />
);

export const Primary = Template.bind({});
// args:在这个 story 中传入组件属性，只影响当前 story
Primary.args = {
  buttonText: "+Todoを追加",
  // inputEl: React.RefObject<HTMLTextAreaElement>;
};
