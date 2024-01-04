import {
  FlexType,
  OpacityType,
  TextColorType,
  BackgroundColorType,
  ColorPropertyType,
  ActionType,
} from "../types/attributes";
import { AllMargins, AllPaddings } from "../types/spacing";
import { AllWidths, AllHeights } from "../types/sizing";
import { TextSizeType, TextAlignmentType } from "../types/texts";
import { ResponsiveOverrides, DarkOverrides } from "../types/utilities";
import {
  ReactBaseComponentAttributes,
  ReactBaseComponentProperties,
} from "../types/";

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

export type ClassByResponsiveProps = {
  size?: TextSizeType;
  width?: AllWidths;
  height?: AllHeights;
  margin?: AllMargins;
  padding?: AllPaddings;
  colors?: ColorPropertyType;
  opacity?: OpacityType;
  align?: TextAlignmentType;
  flex?: FlexType;
  dark?: DarkOverrides;
  overrides?: ResponsiveOverrides | undefined;
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

  return `${getTextColorAttribute(
    actions[action].text,
  )} ${getBackgroundColorAttribute(actions[action].background)}`;
};

export const getTextColorAttribute = (textColor?: TextColorType) => {
  const { color = "text-blue", weight = "400" } = textColor;
  if (color === "text-white" || color === "text-black") return color;
  return color + "-" + weight;
};

export const getBackgroundColorAttribute = (
  backgroundColor?: BackgroundColorType,
) => {
  const { color = "bg-blue", weight = "400" } = backgroundColor;
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

const getResponsiveClassName = (
  parentNames: string[],
  propertyName: string,
  className: string,
): string => {
  if (
    (parentNames.find && parentNames.find((it) => it === "medium")) ||
    propertyName === "medium"
  )
    return ` md:${className}`;
  if (
    (parentNames.find && parentNames.find((it) => it === "large")) ||
    propertyName === "large"
  )
    return ` lg:${className}`;
  return ` ${className}`;
};

const getDarkClassName = (
  parentNames: string[],
  propertyName: string,
  className: string,
): string => {
  if (parentNames.includes("dark") || propertyName === "dark") {
    return `dark:${className}`;
  }
  return `${className}`;
};

const recusiveClassSearch = (
  activeProperty: ClassByResponsiveProps,
  propertyName: string,
  parentNames: string[],
) => {
  if (activeProperty === undefined) {
    return "";
  }

  if (typeof activeProperty === "string") {
    return getResponsiveClassName(parentNames, propertyName, activeProperty);
  }

  if ((activeProperty as TextColorType | BackgroundColorType).color) {
    const isTextColor = propertyName === "text";
    const isBackgroundColor = propertyName === "background";

    if (isTextColor) {
      const colorClass = getTextColorAttribute(activeProperty as TextColorType);
      const darkColorClass = getDarkClassName(
        parentNames,
        propertyName,
        colorClass,
      );
      return getResponsiveClassName(parentNames, propertyName, darkColorClass);
    }

    if (isBackgroundColor) {
      const colorClass = getBackgroundColorAttribute(
        activeProperty as BackgroundColorType,
      );
      const darkColorClass = getDarkClassName(
        parentNames,
        propertyName,
        colorClass,
      );
      return getResponsiveClassName(parentNames, propertyName, darkColorClass);
    }
  }

  if (propertyName === "width") {
    // @ts-ignore
    return getResponsiveClassName(
      parentNames,
      propertyName,
      `w-${activeProperty.value}`,
    );
  }

  if (propertyName === "height") {
    // @ts-ignore
    return getResponsiveClassName(
      parentNames,
      propertyName,
      `h-${activeProperty.value}`,
    );
  }

  if ((activeProperty as FlexType).basis) {
    // @ts-ignore
    const basisClass = `basis-${activeProperty.basis}`;
    return getResponsiveClassName(parentNames, propertyName, basisClass);
  }

  var classes = "";
  Object.keys(activeProperty).forEach((childPropertyName) => {
    // @ts-ignore
    classes += recusiveClassSearch(
      activeProperty[childPropertyName],
      childPropertyName,
      [propertyName, ...parentNames],
    );
  });
  return classes;
};

export const getClassByViewPort = (properties: ClassByResponsiveProps) => {
  var classes = "";
  var propertyKeys = Object.keys(properties);

  propertyKeys.forEach((propertyName) => {
    // @ts-ignore
    const activeProperty = properties[propertyName];
    classes += recusiveClassSearch(activeProperty, propertyName, [""]);
  });

  return classes;
};
