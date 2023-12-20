import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../responsive.utils";
import type { ClassByResponsiveProps } from "../responsive.utils";

describe("responsive.utils.opacity", () => {
  test(`:opacity-value`, () => {
    const opacity = "opacity-100";
    const properties: ClassByResponsiveProps = { opacity };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(opacity);
  });
});

