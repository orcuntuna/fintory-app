/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ["inter-400"]: ["Inter-Regular"],
        ["inter-500"]: ["Inter-Medium"],
        ["inter-600"]: ["Inter-SemiBold"],
        ["inter-700"]: ["Inter-Bold"],
      },
    },
  },
  plugins: [],
}
