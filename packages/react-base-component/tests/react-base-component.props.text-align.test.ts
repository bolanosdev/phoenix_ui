import { describe, test, expect } from "bun:test";
import { getClassByViewPort, type ClassByResponsiveProps } from "../utils";

describe("react-base-component.props.text-align", () => {
  test(`:text-alignment`, () => {
    const align = "text-left";
    const properties: ClassByResponsiveProps = { align };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(align);
  });
});
