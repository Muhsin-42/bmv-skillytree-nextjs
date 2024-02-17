import { transform } from "next/dist/build/swc";
import { text } from "stream/consumers";
import style from "styled-jsx/style";
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
        "nav-active": [
            "18px",
            {
              lineHeight: "22px",
              fontWeight: '700'
            }
        ],
        "nav": [
            "18px",
            {
              lineHeight: "22px",
              fontWeight: '600'
            }
        ]
      },
      colors: {
        "pink-1": "#FC4D6D",
        "black-1": "#1D1D1D",
        "gray-1": "#948181"
      },
    },
  },
  plugins: [],
};
export default config;
