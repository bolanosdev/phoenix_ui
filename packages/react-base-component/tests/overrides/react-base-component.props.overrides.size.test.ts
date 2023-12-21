import { describe, test, expect } from "bun:test";
import { getClassByViewPort, type ClassByResponsiveProps } from "../../utils";
import { TextSizeType } from "../../types/texts";

describe("react-base-component.props.overrides.size", () => {
  test(`should concatenate text-size and md:text-size`, () => {
    const size: TextSizeType = "text-sm";
    const md_size: TextSizeType = "text-base";
    const properties: ClassByResponsiveProps = {
      size,
      overrides: {
        medium: { size: md_size },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${size} md:${md_size}`);
  });

  test(`should concatenate text-size and lg:text-size-value`, () => {
    const size: TextSizeType = "text-sm";
    const lg_size: TextSizeType = "text-lg";
    const properties: ClassByResponsiveProps = {
      size,
      overrides: {
        large: { size: lg_size },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${size} lg:${lg_size}`);
  });

  test("should concatenate text-size and (md|lg):text-size", () => {
    const size: TextSizeType = "text-sm";
    const md_size: TextSizeType = "text-base";
    const lg_size: TextSizeType = "text-lg";
    const properties: ClassByResponsiveProps = {
      size,
      overrides: {
        medium: { size: md_size },
        large: { size: lg_size },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${size} md:${md_size} lg:${lg_size}`);
  });
});
