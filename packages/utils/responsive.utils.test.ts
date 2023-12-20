import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "./responsive.utils.ts";
import type { ClassByResponsiveProps } from "./responsive.utils";

describe("responsive utils", () => {
  describe("getClassByViewPort", () => {
    test("empty properties", () => {
      const properties: ClassByResponsiveProps = {};
      const result = getClassByViewPort(properties);
      expect(result).toBe("");
    });

    test("doesnt throw properties", () => {
      const properties: ClassByResponsiveProps = { size: undefined };
      const result = getClassByViewPort(properties);
      expect(result).toBe("");
    });
  });
});

