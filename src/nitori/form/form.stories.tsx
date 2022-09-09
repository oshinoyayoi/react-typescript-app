import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Form } from "./form";

export default {
  title: "Nitori/Form",

  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form />;

export const Primary = Template.bind({});
// args:在这个 story 中传入组件属性，只影响当前 story
Primary.args = {
  defaultValues: {
    example: "",
    exampleRequired: "",
  },
  label: "test",
  // inputEl: React.RefObject<HTMLTextAreaElement>;
};
