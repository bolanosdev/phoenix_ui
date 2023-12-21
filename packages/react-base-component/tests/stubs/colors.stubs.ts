import {
  TextColor,
  BackgroundColor,
} from "../react-base-component/types/attributes";
const text_color: TextColor = "text-blue";
const bg_color: BackgroundColor = "bg-amber";
const dark_text_color: TextColor = "text-cyan";
const dark_bg_color: BackgroundColor = "bg-emerald";

const md_text_color: TextColor = "text-fuchsia";
const md_bg_color: BackgroundColor = "bg-gray";
const md_dark_text_color: TextColor = "text-emerald";
const md_dark_bg_color: BackgroundColor = "bg-orange";

const lg_text_color: TextColor = "text-amber";
const lg_bg_color: BackgroundColor = "bg-cyan";
const lg_dark_text_color: TextColor = "text-green";
const lg_dark_bg_color: BackgroundColor = "bg-emerald";

export const ColorStubs = {
  colors: {
    text: { color: text_color },
    background: { color: bg_color },
  },
  dark: {
    colors: {
      text: { color: dark_text_color },
      background: { color: dark_bg_color },
    },
  },
  overrides: {
    medium: {
      colors: {
        text: { color: md_text_color },
        background: { color: md_bg_color },
      },
      dark: {
        colors: {
          text: { color: md_dark_text_color },
          background: { color: md_dark_bg_color },
        },
      },
    },
    large: {
      colors: {
        text: { color: lg_text_color },
        background: { color: lg_bg_color },
      },
      dark: {
        colors: {
          text: { color: lg_dark_text_color },
          background: { color: lg_dark_bg_color },
        },
      },
    },
  },
};
