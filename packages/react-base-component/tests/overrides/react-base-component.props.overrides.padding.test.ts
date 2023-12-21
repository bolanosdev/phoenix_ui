import { describe, test, expect } from "bun:test";
import { getClassByViewPort, type ClassByResponsiveProps } from "../../utils";

import {
  AllPaddingType,
  LeftPaddingType,
  BottomPaddingType,
} from "../../types/spacing";

describe("react-base-component.props.overrides:padding", () => {
  test(`should concatenate :\${pading-vvalue} with md:\${pading-value}`, () => {
    const padding: AllPaddingType = "p-0";
    const md_pading: AllPaddingType = "p-5";
    const properties: ClassByResponsiveProps = {
      padding: { all: padding },
      overrides: {
        medium: {
          padding: {
            all: md_pading,
          },
        },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${padding} md:${md_pading}`);
  });

  test(`should concatenate :\${pading-vvalue} with md:\${pading-value}`, () => {
    const padding: AllPaddingType = "p-0";
    const lg_pading: AllPaddingType = "p-2";
    const properties: ClassByResponsiveProps = {
      padding: { all: padding },
      overrides: {
        large: {
          padding: {
            all: lg_pading,
          },
        },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${padding} lg:${lg_pading}`);
  });

  test(`should concatenate :\${pading-vvalue} with (md|lg):\${pading-value}`, () => {
    const padding: AllPaddingType = "p-0";
    const md_pading: AllPaddingType = "p-5";
    const lg_pading: AllPaddingType = "p-2";
    const properties: ClassByResponsiveProps = {
      padding: { all: padding },
      overrides: {
        medium: {
          padding: {
            all: md_pading,
          },
        },
        large: {
          padding: {
            all: lg_pading,
          },
        },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${padding} md:${md_pading} lg:${lg_pading}`);
  });

  test(`should concatenate different paddings for different resolutions `, () => {
    const padding: AllPaddingType = "p-0";
    const md_pading: LeftPaddingType = "pl-3";
    const lg_pading: BottomPaddingType = "pb-4";
    const properties: ClassByResponsiveProps = {
      padding: { all: padding },
      overrides: {
        medium: {
          padding: {
            left: md_pading,
          },
        },
        large: {
          padding: {
            bottom: lg_pading,
          },
        },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${padding} md:${md_pading} lg:${lg_pading}`);
  });
});
