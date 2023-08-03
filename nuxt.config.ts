// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Kubisz Mariusz",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "pl-PL",
      },
      link: [
        // Favicon
        {
          rel: "icon",
          href: "/favicon.ico",
          sizes: "32x32",
        },
        {
          rel: "icon",
          href: "/icon.svg",
          type: "image/svg+xml",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/manifest.webmanifest",
        },

        // Fonts
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Quicksand&display=swap",
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss"],

  devtools: { enabled: true },
});
