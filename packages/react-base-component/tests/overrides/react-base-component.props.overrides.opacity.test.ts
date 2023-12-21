import { describe, test, expect } from "bun:test";
import {
  getClassByViewPort,
  type ClassByResponsiveProps,
} from "../../src/utils";
import { OpacityType } from "../../src/types/attributes";

describe.only("responsive.utils.overrides.opacity", () => {
  test(`:\${opacity-value}`, () => {
    const opacity = "opacity-100";
    const properties: ClassByResponsiveProps = { opacity };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(opacity);
  });

  test(`concatenate \${text-alignment-value} and md:\${text-alignment-value}`, () => {
    const opacity: OpacityType = "opacity-100";
    const md_opacity: OpacityType = "opacity-20";
    const properties: ClassByResponsiveProps = {
      opacity,
      overrides: { medium: { opacity: md_opacity } },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${opacity} md:${md_opacity}`);
  });

  test(`concatenate \${text-alignment-value} and lg:\${text-alignment-value}`, () => {
    const opacity: OpacityType = "opacity-20";
    const lg_opacity: OpacityType = "opacity-30";
    const properties: ClassByResponsiveProps = {
      opacity,
      overrides: { large: { opacity: lg_opacity } },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${opacity} lg:${lg_opacity}`);
  });

  test(`concatenate \${text-alignment-value} and (md|lg):\${text-alignment-value}`, () => {
    const opacity: OpacityType = "opacity-10";
    const md_opacity: OpacityType = "opacity-100";
    const lg_opacity: OpacityType = "opacity-25";
    const properties: ClassByResponsiveProps = {
      opacity,
      overrides: {
        medium: { opacity: md_opacity },
        large: { opacity: lg_opacity },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${opacity} md:${md_opacity} lg:${lg_opacity}`);
  });
});
