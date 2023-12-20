import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#00a4ff',
          secondary: '#961c00',
          accent: '#e34c00',
          neutral: '#060606',
          white: '#fffcfe',
          info: '#51a2ff',
          success: '#009052',
          warning: '#b64c00',
          error: '#cf003a',
          body: {
            "background-color": "#f9f9f9" // to add a different dark theme 
          }
        },
      },
    ],
  },
  //...
};
export default config;
