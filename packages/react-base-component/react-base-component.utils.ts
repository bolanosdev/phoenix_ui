import { getClassByViewPort } from "../utils/responsive.utils";
import type {
  TextColorType,
  BackgroundColorType,
  ColorPropertyType,
  ActionType,
} from "./types/attributes";
import type {
  ReactBaseComponentAttributes,
  ReactBaseComponentProperties,
} from "./react-base-component.types";
import { DATA_TEST_ID } from "../constants";

type ActionMap = {
  neutral: ColorPropertyType;
  primary: ColorPropertyType;
  secondary: ColorPropertyType;
  success: ColorPropertyType;
  danger: ColorPropertyType;
  warning: ColorPropertyType;
  info: ColorPropertyType;
  light: ColorPropertyType;
  dark: ColorPropertyType;
};
export const getActionColorAttribute = (action: ActionType) => {
  const actions: ActionMap = {
    neutral: {
      text: { color: "text-white" },
      background: { color: "bg-slate", weight: "500" },
    },
    primary: {
      text: { color: "text-white", weight: "500" },
      background: { color: "bg-blue", weight: "500" },
    },
    secondary: {
      text: { color: "text-white" },
      background: { color: "bg-neutral", weight: "500" },
    },
    success: {
      text: { color: "text-white" },
      background: { color: "bg-emerald", weight: "500" },
    },
    danger: {
      text: { color: "text-black" },
      background: { color: "bg-red", weight: "500" },
    },
    warning: {
      text: { color: "text-white" },
      background: { color: "bg-yellow", weight: "500" },
    },
    info: {
      text: { color: "text-white" },
      background: { color: "bg-teal", weight: "500" },
    },
    light: { text: { color: "text-black" }, background: { color: "bg-white" } },
    dark: { text: { color: "text-white" }, background: { color: "bg-black" } },
  };
  // @ts-ignore
  return `${getTextColorAttribute(
    actions[action].text
  )} ${getBackgroundColorAttribute(actions[action].background)}`;
};

export const getTextColorAttribute = ({
  color = "text-slate",
  weight = "400",
}: TextColorType) => {
  if (color === "text-white" || color === "text-black") return color;
  return color + "-" + weight;
};

export const getBackgroundColorAttribute = ({
  color = "bg-slate",
  weight = "400",
}: BackgroundColorType) => {
  if (color === "bg-white" || color === "bg-black") return color;
  return color + "-" + weight;
};

export const getProperties = (properties: ReactBaseComponentProperties) => {
  let {
    id,
    size,
    width,
    height,
    margin,
    padding,
    flex,
    dark,
    overrides,
    className,
    dataTestId,
    onClick,
  } = properties;
  let attributes: ReactBaseComponentAttributes = {};
  className += getClassByViewPort({
    size,
    width,
    height,
    margin,
    padding,
    flex,
    dark,
    overrides,
  });

  if (onClick) {
    attributes.onClick = onClick;
  }

  if (id !== "") {
    attributes.id = id;
  }

  if (className !== "") {
    attributes.className = className;
  }

  if (dataTestId !== "") {
    attributes[DATA_TEST_ID] = dataTestId;
  }

  return attributes;
};

