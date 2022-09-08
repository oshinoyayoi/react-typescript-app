import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RankItem } from "./rankItem";

export default {
  title: "Nitori/RankItem",

  component: RankItem,
} as ComponentMeta<typeof RankItem>;

const Template: ComponentStory<typeof RankItem> = (args) => (
  <RankItem {...args} />
);

export const Primary = Template.bind({});
// args:在这个 story 中传入组件属性，只影响当前 story
Primary.args = {
  rank: {
    id: "1",
    goodsName: "",
    price: 499,
    star: 4,
    review: 123,
    img: "img",
  },

  // inputEl: React.RefObject<HTMLTextAreaElement>;
};
