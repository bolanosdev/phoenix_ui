import { describe, test, expect } from "bun:test";
import { getClassByViewPort, type ClassByResponsiveProps } from "../src/utils";

describe("react-base-component.props.padding", () => {
  test(`:all`, () => {
    const padding = "p-0";
    const properties: ClassByResponsiveProps = { padding: { all: padding } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(padding);
  });

  test(`:x`, () => {
    const padding = "px-0";
    const properties: ClassByResponsiveProps = { padding: { x: padding } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(padding);
  });

  test(`:y`, () => {
    const padding = "py-0";
    const properties: ClassByResponsiveProps = { padding: { y: padding } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(padding);
  });

  test(`:top`, () => {
    const padding = "pt-0";
    const properties: ClassByResponsiveProps = { padding: { top: padding } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(padding);
  });

  test(`:bottom`, () => {
    const padding = "pb-0";
    const properties: ClassByResponsiveProps = { padding: { bottom: padding } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(padding);
  });

  test(`:left`, () => {
    const padding = "pl-0";
    const properties: ClassByResponsiveProps = { padding: { left: padding } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(padding);
  });

  test(`:right`, () => {
    const padding = "pr-0";
    const properties: ClassByResponsiveProps = { padding: { right: padding } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(padding);
  });

  test(`:combined (left, right, top, bottom)`, () => {
    const left_padding = "pl-0";
    const right_padding = "pr-0";
    const top_padding = "pt-0";
    const bottom_padding = "pb-0";

    const properties: ClassByResponsiveProps = {
      padding: {
        left: left_padding,
        right: right_padding,
        top: top_padding,
        bottom: bottom_padding,
      },
    };

    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(left_padding);
    expect(result.trim()).toContain(right_padding);
    expect(result.trim()).toContain(top_padding);
    expect(result.trim()).toContain(bottom_padding);
  });

  test(`:combined (x,y)`, () => {
    const x_padding = "px-0";
    const y_padding = "py-0";

    const properties: ClassByResponsiveProps = {
      padding: {
        x: x_padding,
        y: y_padding,
      },
    };

    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(x_padding);
    expect(result.trim()).toContain(y_padding);
  });
});
