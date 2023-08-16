/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': {
          50: '#e1fffe',
          100: '#b3fffc',
          200: '#80fffa',
          300: '#4dfff7',
          400: '#27fff6',
          500: '#01fff4',
          600: '#01fff3',
          700: '#01fff1',
          800: '#01ffef',
          900: '#00ffec',
        },
        'neon-green': {
          50: '#efffe1',
          100: '#d8ffb3',
          200: '#beff80',
          300: '#a3ff4d',
          400: '#90ff27',
          500: '#7cff01',
          600: '#74ff01',
          700: '#69ff01',
          800: '#5fff01',
          900: '#4cff00',
        },
        'neon-purple': {
          50: '#ffe2ef',
          100: '#ffb8d7',
          200: '#ff88bc',
          300: '#ff58a1',
          400: '#ff358c',
          500: '#ff1178',
          600: '#ff0f70',
          700: '#ff0c65',
          800: '#ff0a5b',
          900: '#ff0548',
        },
        'neon-red': {
          50 : '#ffe6e6',
          100: '#ffc1c1',
          200: '#ff9898',
          300: '#ff6f6f',
          400: '#ff5050',
          500: '#ff3131',
          600: '#ff2c2c',
          700: '#ff2525',
          800: '#ff1f1f',
          900: '#ff1313',
        },
        'neon-yellow': {
          50: '#fffde1',
          100: '#fffbb4',
          200: '#fff982',
          300: '#fff650',
          400: '#fff42b',
          500: '#fff205',
          600: '#fff004',
          700: '#ffee04',
          800: '#ffec03',
          900: '#ffe801',
        }
      }
    },
  },
  plugins: [],
}

