import {
  AllMargins,
  TopMarginType,
  BottomMarginType,
  LeftMarginType,
} from "../react-base-component/types/spacing/margin.types";
import {
  AllPaddings,
  AllPaddingType,
  RightPaddingType,
  VerticalPaddingType,
} from "../react-base-component/types/spacing/padding.types";
import { ResponsiveOverrides } from "../react-base-component/types/utilities";

const all_padding: AllPaddingType = "p-1";
const top_margin: TopMarginType = "mt-2";

const md_padding_top: VerticalPaddingType = "py-3";
const md_margin_left: LeftMarginType = "ml-2";

const lg_padding_right: RightPaddingType = "pr-4";
const lg_margin_bottom: BottomMarginType = "mb-3";

type SpacingStubType = {
  margin?: AllMargins;
  padding?: AllPaddings;
  overrides?: ResponsiveOverrides;
};

export const SpacingStubs: SpacingStubType = {
  margin: {
    top: top_margin,
  },
  padding: {
    all: all_padding,
  },
  overrides: {
    medium: {
      margin: { left: md_margin_left },
      padding: { y: md_padding_top },
    },
    large: {
      margin: { bottom: lg_margin_bottom },
      padding: { right: lg_padding_right },
    },
  },
};
