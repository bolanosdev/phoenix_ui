import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../../responsive.utils";
import {
  TextColor,
  BackgroundColor,
} from "../../../react-base-component/types/attributes";
import { ColorStubs } from "../../../stubs/colors.stubs";
import type { ClassByResponsiveProps } from "../../responsive.utils";

describe("responsive.utils.overrides:color", () => {
  describe(":TextColorType", () => {
    test(`text-color and md::dark:text-color`, () => {
      const color: TextColor = "text-blue";
      const dark_color: TextColor = "text-amber";
      const md_color: TextColor = "text-cyan";
      const md_dark_color: TextColor = "text-fuchsia";
      const properties: ClassByResponsiveProps = {
        colors: { text: { color } },
        dark: {
          colors: { text: { color: dark_color } },
        },
        overrides: {
          medium: {
            colors: { text: { color: md_color } },
            dark: {
              colors: { text: { color: md_dark_color } },
            },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `${color}-400 dark:${dark_color}-400 md:${md_color}-400 md:dark:${md_dark_color}-400`
      );
    });

    test(`concatenate text-color and md:dark:text-color`, () => {
      const color: TextColor = "text-blue";
      const dark_color: TextColor = "text-amber";
      const lg_color: TextColor = "text-cyan";
      const lg_dark_color: TextColor = "text-fuchsia";
      const properties: ClassByResponsiveProps = {
        colors: { text: { color } },
        dark: {
          colors: { text: { color: dark_color } },
        },
        overrides: {
          large: {
            colors: { text: { color: lg_color } },
            dark: {
              colors: { text: { color: lg_dark_color } },
            },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `${color}-400 dark:${dark_color}-400 lg:${lg_color}-400 lg:dark:${lg_dark_color}-400`
      );
    });

    test(`combine text-color and (md|lg):dark:text-color`, () => {
      const color: TextColor = "text-blue";
      const dark_color: TextColor = "text-amber";
      const md_color: TextColor = "text-gray";
      const md_dark_color: TextColor = "text-green";
      const lg_color: TextColor = "text-cyan";
      const lg_dark_color: TextColor = "text-fuchsia";
      const properties: ClassByResponsiveProps = {
        colors: { text: { color } },
        dark: {
          colors: { text: { color: dark_color } },
        },
        overrides: {
          medium: {
            colors: { text: { color: md_color } },
            dark: {
              colors: { text: { color: md_dark_color } },
            },
          },
          large: {
            colors: { text: { color: lg_color } },
            dark: {
              colors: { text: { color: lg_dark_color } },
            },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `${color}-400 dark:${dark_color}-400 md:${md_color}-400 md:dark:${md_dark_color}-400 lg:${lg_color}-400 lg:dark:${lg_dark_color}-400`
      );
    });
  });

  describe(":BackgroundColorType", () => {
    test(`concatenate bg-color and md::dark:bg-color`, () => {
      const color: BackgroundColor = "bg-black";
      const dark_color: BackgroundColor = "bg-cyan";
      const md_color: BackgroundColor = "bg-amber";
      const md_dark_color: BackgroundColor = "bg-green";
      const properties: ClassByResponsiveProps = {
        colors: { background: { color } },
        dark: {
          colors: { background: { color: dark_color } },
        },
        overrides: {
          medium: {
            colors: { background: { color: md_color } },
            dark: {
              colors: { background: { color: md_dark_color } },
            },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `${color} dark:${dark_color}-400 md:${md_color}-400 md:dark:${md_dark_color}-400`
      );
    });

    test(`concatenate bg-color and md:dark:bg-color`, () => {
      const color: BackgroundColor = "bg-blue";
      const dark_color: BackgroundColor = "bg-amber";
      const lg_color: BackgroundColor = "bg-cyan";
      const lg_dark_color: BackgroundColor = "bg-fuchsia";
      const properties: ClassByResponsiveProps = {
        colors: { background: { color } },
        dark: {
          colors: { background: { color: dark_color } },
        },
        overrides: {
          large: {
            colors: { background: { color: lg_color } },
            dark: {
              colors: { background: { color: lg_dark_color } },
            },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `${color}-400 dark:${dark_color}-400 lg:${lg_color}-400 lg:dark:${lg_dark_color}-400`
      );
    });

    test(`combine bg-color and (md|lg):dark:bg-color`, () => {
      const color: BackgroundColor = "bg-blue";
      const dark_color: BackgroundColor = "bg-amber";
      const md_color: BackgroundColor = "bg-gray";
      const md_dark_color: BackgroundColor = "bg-green";
      const lg_color: BackgroundColor = "bg-cyan";
      const lg_dark_color: BackgroundColor = "bg-fuchsia";
      const properties: ClassByResponsiveProps = {
        colors: { background: { color } },
        dark: {
          colors: { background: { color: dark_color } },
        },
        overrides: {
          medium: {
            colors: { background: { color: md_color } },
            dark: {
              colors: { background: { color: md_dark_color } },
            },
          },
          large: {
            colors: { background: { color: lg_color } },
            dark: {
              colors: { background: { color: lg_dark_color } },
            },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `${color}-400 dark:${dark_color}-400 md:${md_color}-400 md:dark:${md_dark_color}-400 lg:${lg_color}-400 lg:dark:${lg_dark_color}-400`
      );
    });
  });

  describe(":TextColorType and :BackgroundColorType", () => {
    test(`concatenate bg-color and md::dark:bg-color`, () => {
      const properties: ClassByResponsiveProps = ColorStubs;

      const result = getClassByViewPort(properties);
      expect(result).toContain(`${ColorStubs.colors.text.color}-400`);
      expect(result).toContain(`${ColorStubs.colors.background.color}-400`);
      expect(result).toContain(`dark:${ColorStubs.dark.colors.text.color}-400`);
      expect(result).toContain(`dark:${ColorStubs.dark.colors.text.color}-400`);

      expect(result).toContain(
        `md:${ColorStubs.overrides.medium.colors.text.color}-400`
      );
      expect(result).toContain(
        `md:${ColorStubs.overrides.medium.colors.background.color}-400`
      );
      expect(result).toContain(
        `md:dark:${ColorStubs.overrides.medium.dark.colors.text.color}-400`
      );
      expect(result).toContain(
        `md:dark:${ColorStubs.overrides.medium.dark.colors.background.color}-400`
      );

      expect(result).toContain(
        `lg:${ColorStubs.overrides.large.colors.text.color}-400`
      );
      expect(result).toContain(
        `lg:${ColorStubs.overrides.large.colors.background.color}-400`
      );
      expect(result).toContain(
        `lg:dark:${ColorStubs.overrides.large.dark.colors.text.color}-400`
      );
      expect(result).toContain(
        `lg:dark:${ColorStubs.overrides.large.dark.colors.background.color}-400`
      );
    });
  });
});

