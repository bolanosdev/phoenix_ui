import { describe, test, expect } from "bun:test";
import { getClassByViewPort, type ClassByResponsiveProps } from "../utils";

describe("react-base-component.props.flex", () => {
  test(`:direction`, () => {
    const direction = "flex-row";
    const properties: ClassByResponsiveProps = { flex: { direction } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(direction);
  });

  test(`:wrap`, () => {
    const wrap = "flex-wrap";
    const properties: ClassByResponsiveProps = { flex: { wrap } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(wrap);
  });

  test(`:shrink`, () => {
    const shrink = "shrink";
    const properties: ClassByResponsiveProps = { flex: { shrink } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(shrink);
  });

  test(`:alignItems`, () => {
    const alignItems = "items-stretch";
    const properties: ClassByResponsiveProps = { flex: { alignItems } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(alignItems);
  });

  test(`:justifyContent`, () => {
    const justifyContent = "justify-end";
    const properties: ClassByResponsiveProps = { flex: { justifyContent } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(justifyContent);
  });

  test(`:grow`, () => {
    const grow = "grow";
    const properties: ClassByResponsiveProps = { flex: { grow } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(grow);
  });

  test(`:basis:px`, () => {
    const basis = "px";
    const properties: ClassByResponsiveProps = { flex: { basis } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(`basis-${basis}`);
  });

  test(`:basis:auto`, () => {
    const basis = "auto";
    const properties: ClassByResponsiveProps = { flex: { basis } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(`basis-${basis}`);
  });

  test(`:basis:full`, () => {
    const basis = "full";
    const properties: ClassByResponsiveProps = { flex: { basis } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(`basis-${basis}`);
  });

  test(`:basis:number`, () => {
    const basis = 1;
    const properties: ClassByResponsiveProps = { flex: { basis } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(`basis-${basis}`);
  });

  test(`:basisdecimal`, () => {
    const basis = 0.5;
    const properties: ClassByResponsiveProps = { flex: { basis } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(`basis-${basis}`);
  });

  test(`:basis:halve`, () => {
    const basis = "1/2";
    const properties: ClassByResponsiveProps = { flex: { basis } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(`basis-${basis}`);
  });

  test(`:basis:third`, () => {
    const basis = "1/3";
    const properties: ClassByResponsiveProps = { flex: { basis } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(`basis-${basis}`);
  });

  test(`:basis:fourths`, () => {
    const basis = "1/4";
    const properties: ClassByResponsiveProps = { flex: { basis } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(`basis-${basis}`);
  });

  test(`:basis:fifths`, () => {
    const basis = "1/5";
    const properties: ClassByResponsiveProps = { flex: { basis } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(`basis-${basis}`);
  });

  test(`:basis:sixts`, () => {
    const basis = "1/6";
    const properties: ClassByResponsiveProps = { flex: { basis } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(`basis-${basis}`);
  });

  test(`:basis:twelves`, () => {
    const basis = "1/12";
    const properties: ClassByResponsiveProps = { flex: { basis } };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toContain(`basis-${basis}`);
  });
});
