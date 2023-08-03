import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  content: [],
};
