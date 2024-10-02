/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./_drafts/**/*.md",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_pages/*.{html,md}",
    "./_posts/*.md",
    "./*.{html,md}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
}
