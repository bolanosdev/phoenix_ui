import { describe, test, expect } from "bun:test";
import { getClassByViewPort, type ClassByResponsiveProps } from "../utils";

describe("responsive.utils.size", () => {
  test(`:text-size`, () => {
    const size = "text-sm";
    const properties: ClassByResponsiveProps = { size };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(size);
  });
});
