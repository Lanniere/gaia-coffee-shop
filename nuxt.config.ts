// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV === "development"

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: isDev },

	ssr: true,

	modules: ["@nuxt/eslint", ...(isDev ? ["@nuxt/hints"] : []), "@nuxt/image", "@nuxt/ui"],

	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],

	css: ["~/assets/css/main.css"],

	app: {
		head: {
			link: [
				{
					rel: "preload",
					href: "/fonts/advent-pro/AdventPro-Regular.woff2",
					as: "font",
					type: "font/woff2",
					crossorigin: "",
				},
				{
					rel: "preload",
					href: "/fonts/advent-pro/AdventPro-SemiBold.woff2",
					as: "font",
					type: "font/woff2",
					crossorigin: "",
				},
			],
		},
	},

	ui: {
		fonts: false,
	},

	icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "app/assets/images",
      },
    ],
  },
})