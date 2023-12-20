import React, { FC } from "react";
import { getProperties } from "./react-base-component.utils";
import type { ReactBaseComponentProperties } from "./react-base-component.types";

type ReactBaseComponentProps = {
  component: string;
  className: string;
  attributes: object;
  properties: ReactBaseComponentProperties;
};

export const ReactBaseComponent: FC<ReactBaseComponentProps> = ({
  component,
  className,
  attributes,
  properties,
}) => {
  return React.createElement(
    component,
    { ...attributes, ...getProperties({ className, ...properties }) },
    properties.children
  );
};
