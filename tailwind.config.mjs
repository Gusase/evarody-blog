/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        base75: [
            '"Mona Sans"',
            {
                fontVariationSettings: '"wdth" 75',
            },
        ],
        base100: [
            '"Mona Sans"',
            {
                fontVariationSettings: '"wdth" 100',
            },
        ],
        base125: [
            '"Mona Sans"',
            {
                fontVariationSettings: '"wdth" 125',
            },
        ],
    },    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
