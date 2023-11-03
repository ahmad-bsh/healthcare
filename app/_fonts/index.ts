import localFont from "next/font/local";

export const muli = localFont({
  src: [
    {
      path: "./Muli-ExtraLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Muli-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Muli-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
