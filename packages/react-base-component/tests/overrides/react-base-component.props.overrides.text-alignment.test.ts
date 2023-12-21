import { describe, test, expect } from "bun:test";
import { getClassByViewPort, type ClassByResponsiveProps } from "../../utils";
import { TextAlignmentType } from "../../types/texts";

describe("react-base-component.props.overrides:align", () => {
  test(`concatenate text-alignment-value and md:text-alignment-value`, () => {
    const align: TextAlignmentType = "text-left";
    const md_align: TextAlignmentType = "text-right";
    const properties: ClassByResponsiveProps = {
      align,
      overrides: { medium: { align: md_align } },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${align} md:${md_align}`);
  });

  test(`concatenate text-alignment-value and lg:text-alignment-value`, () => {
    const align: TextAlignmentType = "text-left";
    const lg_align: TextAlignmentType = "text-right";
    const properties: ClassByResponsiveProps = {
      align,
      overrides: { large: { align: lg_align } },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${align} lg:${lg_align}`);
  });

  test(`concatenate text-alignment-value and (md|lg):text-alignment-value`, () => {
    const align: TextAlignmentType = "text-left";
    const md_align: TextAlignmentType = "text-right";
    const lg_align: TextAlignmentType = "text-justify";
    const properties: ClassByResponsiveProps = {
      align,
      overrides: {
        medium: { align: md_align },
        large: { align: lg_align },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${align} md:${md_align} lg:${lg_align}`);
  });
});
