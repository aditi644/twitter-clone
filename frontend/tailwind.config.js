import daisyui from 'daisyui';
import daisyUIThemes from "daisyui/src/theming/themes";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: 
    [daisyui],

	  daisyui: {
		  themes: [
			  "light",
			  {
				  black: {
					  ...daisyUIThemes["black"],
					  primary: "rgb(29, 155, 240)",
					  secondary: "rgb(24, 24, 24)",
				  },
			  },
		  ],
	  },
  
  
}

