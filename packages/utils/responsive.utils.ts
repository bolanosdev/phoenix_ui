import { AllMargins, AllPaddings } from "../react-base-component/types/spacing";
import { AllWidths, AllHeights } from "../react-base-component/types/sizing";
import {
  TextSizeType,
  TextAlignmentType,
} from "../react-base-component/types/texts";
import {
  ResponsiveOverrides,
  DarkOverrides,
} from "../react-base-component/types/utilities";
import { BackgroundColorType } from "../react-base-component/types/attributes/background.types";
import {
  FlexType,
  OpacityType,
  ColorPropertyType,
  TextColorType,
} from "../react-base-component/types/attributes";
import {
  getTextColorAttribute,
  getBackgroundColorAttribute,
} from "../react-base-component/react-base-component.utils";

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

const getResponsiveClassName = (
  parentNames: string[],
  propertyName: string,
  className: string
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
  className: string
): string => {
  if (parentNames.includes("dark") || propertyName === "dark") {
    return `dark:${className}`;
  }
  return `${className}`;
};

const recusiveClassSearch = (
  activeProperty: ClassByResponsiveProps,
  propertyName: string,
  parentNames: string[]
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
        colorClass
      );
      return getResponsiveClassName(parentNames, propertyName, darkColorClass);
    }

    if (isBackgroundColor) {
      const colorClass = getBackgroundColorAttribute(
        activeProperty as BackgroundColorType
      );
      const darkColorClass = getDarkClassName(
        parentNames,
        propertyName,
        colorClass
      );
      return getResponsiveClassName(parentNames, propertyName, darkColorClass);
    }
  }

  if (propertyName === "width") {
    // @ts-ignore
    return getResponsiveClassName(
      parentNames,
      propertyName,
      `w-${activeProperty.value}`
    );
  }

  if (propertyName === "height") {
    // @ts-ignore
    return getResponsiveClassName(
      parentNames,
      propertyName,
      `h-${activeProperty.value}`
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
      [propertyName, ...parentNames]
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

