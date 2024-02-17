import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "heading1-bold": [
          "64px",
          {
            lineHeight: "140%",
            fontWeight: "800",
          },
        ],
      },
      colors: {
        "pink-1": "#FC4D6D",
        "black-1": "1D1D1D",
        "primary-gradient":
          "linear-gradient(112.33deg, #FC4D6D 23.89%, #FDA02F 94.22%)",
      },
    },
  },
  plugins: [],
};
export default config;
