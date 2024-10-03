/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        BaserPrimary: "#9966FF",
        BostanyPrimary: "#00C1A1",
        BostanybodyLigh: "#FAFBF9",
        BaserbodyLigh: "#FDF8FD",
        BaserSurface: "#FAF5F9",
        BaserSurfaceDarker: "#F6EDFF",
        BaserOutline: "#938F94",
        BaserOnSurfase: "#1D1B1E",
        dark: "#48464A",
        GeneralSuccessContainer: "#36C450",
        GeneralWarningContainer: "#FFCE22",
        BaserTertiary: "#808080",
        BaserSurfaceContainerHige: "#E6E1E6",
      },
      spacing: {
        lg: "6rem",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontFamily: {
        alexandria: ["Alexandria", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin(), require("tailwind-scrollbar-hide")],
};
