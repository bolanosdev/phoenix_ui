import { SyntheticEvent } from "react";

import type { TextSizeType } from "./texts";
import type { AllMargins, AllPaddings } from "./spacing";
import type { AllHeights, AllWidths } from "./sizing";
import type { ResponsiveOverrides, DarkOverrides } from "./utilities";
import type { FlexType, ColorPropertyType, OpacityType } from "./attributes";
import { DATA_TEST_ID } from "../constants";

export interface ReactBaseComponentAttributes {
  className?: string;
  onClick?: (event: SyntheticEvent) => void;
  id?: string;
  [DATA_TEST_ID]?: string;
}

export interface ReactBaseComponentProperties {
  id?: string;
  dataTestId?: string;

  children?: React.ReactNode;
  className?: string;

  size?: TextSizeType;
  colors?: ColorPropertyType;
  opacity?: OpacityType;

  width?: AllWidths;
  height?: AllHeights;
  margin?: AllMargins;
  padding?: AllPaddings;

  flex?: FlexType;
  dark?: DarkOverrides;
  overrides?: ResponsiveOverrides;
  onClick?: (event: SyntheticEvent) => void;
}
