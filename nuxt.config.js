module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  env: {
    users: [
      { id: 1, name: "M Hafidz ", number: 24 },
      { id: 2, name: "Deddy Gunawan", number: 23 },
      { id: 3, name: "Mas Bro", number: 30 },
      { id: 4, name: "Hasyim Asyari", number: 23 },
      { id: 5, name: "Sam", number: 35 },
      { id: 6, name: "Didik", number: 2 },
    ],
  },
  generate: {
    routes: [
      "/1",
      "/2",
      "/3",
      "/4",
      "/5",
      "/6",
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: "~/components/loading.vue",
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
