import { describe, test, expect } from "bun:test";
import { getClassByViewPort, type ClassByResponsiveProps } from "../utils";
import type {
  TextColor,
  TextWeight,
  BackgroundColor,
  BackgroundWeight,
} from "../types/attributes";

describe("react-base-component.props.color", () => {
  test(`:text-color default weight`, () => {
    const color: TextColor = "text-blue";
    const properties: ClassByResponsiveProps = { colors: { text: { color } } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${color}-400`);
  });

  test(`:text-color plus weight `, () => {
    const color: TextColor = "text-blue";
    const weight: TextWeight = "200";
    const properties: ClassByResponsiveProps = {
      colors: { text: { color, weight } },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${color}-${weight}`);
  });

  test(`:bg-color default weight`, () => {
    const color: BackgroundColor = "bg-blue";
    const properties: ClassByResponsiveProps = {
      colors: { background: { color } },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${color}-400`);
  });

  test(`:bg-color plus weight `, () => {
    const color: BackgroundColor = "bg-blue";
    const weight: BackgroundWeight = "200";
    const properties: ClassByResponsiveProps = {
      colors: { background: { color, weight } },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${color}-${weight}`);
  });
});
