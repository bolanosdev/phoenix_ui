import { describe, test, expect } from "bun:test";
import { getClassByViewPort, type ClassByResponsiveProps } from "../../utils";
import type {
  TextColor,
  TextWeight,
  BackgroundColor,
  BackgroundWeight,
} from "../../types/attributes";

// TODO this test needs more work
describe("dark properties", () => {
  describe(":dark:color", () => {
    test(`:dark:text-\${$color-value} default weight`, () => {
      const color: TextColor = "text-blue";
      const dark_color: TextColor = "text-cyan";
      const properties: ClassByResponsiveProps = {
        colors: { text: { color } },
        dark: {
          colors: { text: { color: dark_color } },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(`${color}-400 dark:${dark_color}-400`);
    });

    test(`:dark:text-\${$color-value} plus weight `, () => {
      const color: TextColor = "text-blue";
      const dark_color: TextColor = "text-cyan";
      const weight: TextWeight = "200";
      const properties: ClassByResponsiveProps = {
        colors: {
          text: { color, weight },
        },
        dark: {
          colors: { text: { color: dark_color } },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(`${color}-200 dark:${dark_color}-400`);
    });

    test(`:dark:bg-\${$color-value} default weight`, () => {
      const color: BackgroundColor = "bg-blue";
      const dark_color: BackgroundColor = "bg-cyan";
      const properties: ClassByResponsiveProps = {
        colors: {
          background: { color },
        },
        dark: {
          colors: {
            background: { color: dark_color },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(`${color}-400 dark:${dark_color}-400`);
    });

    test(`:dark:bg-\${$color-value} plus weight `, () => {
      const color: BackgroundColor = "bg-blue";
      const weight: BackgroundWeight = "200";
      const dark_color: BackgroundColor = "bg-cyan";
      const properties: ClassByResponsiveProps = {
        colors: {
          background: { color, weight },
        },
        dark: {
          colors: {
            background: { color: dark_color },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(`${color}-200 dark:${dark_color}-400`);
    });
  });
});
