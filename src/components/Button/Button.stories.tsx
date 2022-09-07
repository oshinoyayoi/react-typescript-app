import React from "react";
import Button from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,
  // 这里的args是组件层级（默认导出）中传入组件属性
  // 这个 Button 组件的所有 stories 的 primary（这里为children） 属性都会是 “Button”
  args: {
    children: "Button",
  },
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  //覆盖最初的children属性，更改为"Primary Args"
  children: "Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  // children: 'Secondary Args',
};

// 复用 PrimaryA 的 args
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  // 并覆盖 children 属性
  children: "Long Primary Args",
};
