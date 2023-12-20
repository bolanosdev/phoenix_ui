import { Text } from "../packages/react-text";

export default {
  title: "Example/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    text: "hello world",
  },
};
