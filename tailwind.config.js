import withMT from "@material-tailwind/react/utils/withMT";
import flowbite from "flowbite-react/tailwind";

import tailgrids from "tailgrids/plugin";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['"Baloo Da 2"', 'sans-serif'],
        'bruno': ['"Bruno Ace"', 'sans-serif']
        // Add other font families as needed
      },
      backgroundImage: {
        'testimonialsRectangle': "url('/TestimonialsBg.png')",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("flowbite/plugin"),
    [tailgrids],
  ],
});
