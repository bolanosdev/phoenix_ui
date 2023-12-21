import { describe, test, expect } from "bun:test";
import {
  getClassByViewPort,
  type ClassByResponsiveProps,
} from "../../src/utils";

describe("react-base-component.props.overrides.margin", () => {
  test(`:all`, () => {
    const margin = "m-0";
    const properties: ClassByResponsiveProps = { margin: { all: margin } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(margin);
  });

  test(`:x`, () => {
    const margin = "mx-0";
    const properties: ClassByResponsiveProps = { margin: { x: margin } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(margin);
  });

  test(`:y`, () => {
    const margin = "my-0";
    const properties: ClassByResponsiveProps = { margin: { y: margin } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(margin);
  });

  test(`:top`, () => {
    const margin = "mt-0";
    const properties: ClassByResponsiveProps = { margin: { top: margin } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(margin);
  });

  test(`:bottom`, () => {
    const margin = "mb-0";
    const properties: ClassByResponsiveProps = { margin: { bottom: margin } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(margin);
  });

  test(`:left`, () => {
    const margin = "ml-0";
    const properties: ClassByResponsiveProps = { margin: { left: margin } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(margin);
  });

  test(`:right`, () => {
    const margin = "mr-0";
    const properties: ClassByResponsiveProps = { margin: { right: margin } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(margin);
  });

  test(`:combined (left, right, top, bottom)`, () => {
    const left_margin = "ml-0";
    const right_margin = "mr-0";
    const top_margin = "mt-0";
    const bottom_margin = "mb-0";

    const properties: ClassByResponsiveProps = {
      margin: {
        left: left_margin,
        right: right_margin,
        top: top_margin,
        bottom: bottom_margin,
      },
    };

    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(left_margin);
    expect(result.trim()).toContain(right_margin);
    expect(result.trim()).toContain(top_margin);
    expect(result.trim()).toContain(bottom_margin);
  });

  test(`:combined (x,y)`, () => {
    const x_margin = "mx-0";
    const y_margin = "my-0";

    const properties: ClassByResponsiveProps = {
      margin: {
        x: x_margin,
        y: y_margin,
      },
    };

    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(x_margin);
    expect(result.trim()).toContain(y_margin);
  });
});
