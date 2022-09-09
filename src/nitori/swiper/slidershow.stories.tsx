import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Slidershow } from "./slidershow";

export default {
  title: "Nitori/Slidershow",

  component: Slidershow,
} as ComponentMeta<typeof Slidershow>;

const Template: ComponentStory<typeof Slidershow> = () => <Slidershow />;

export const Primary = Template.bind({});
// args:在这个 story 中传入组件属性，只影响当前 story
Primary.args = {
  rank: {
    id: "1",
    imgUrl: "",
  },

  // inputEl: React.RefObject<HTMLTextAreaElement>;
};
