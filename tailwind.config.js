module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./../public/static/images/bg.jpg')",
        "hero-pattern":
          " url(`https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/e456d8b923f5/assets/img/home/hero_photos/DLIUyjgS7v50YRV2xfNquA.jpg`)",
      },
      boxShadow: {
        "main-box-shadow": "0px 0px 50px 2px rgba(0,0,0,0.46)",
        "search-box": "0px 0px 7px 2px rgba(0,0,0,0.46)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
