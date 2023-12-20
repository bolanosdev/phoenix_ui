import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../responsive.utils";
import type { ClassByResponsiveProps } from "../responsive.utils";

describe("responsive.utils.align", () => {
  test(`:text-alignment`, () => {
    const align = "text-left";
    const properties: ClassByResponsiveProps = { align };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(align);
  });
});

