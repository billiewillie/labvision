// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	modules: [
		'@nuxt/image',
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@vueuse/nuxt',
		'@nuxtjs/google-fonts',
		'nuxt-icon',
		'nuxt-viewport'
	],
	image: {
		inject: true,
		format: ['webp'],
	},
	tailwindcss: {
		cssPath: ['~/assets/css/main.css', {injectPosition: 'first'}],
		configPath: 'tailwind.config',
		exposeConfig: {
			level: 2,
		},
		config: {},
		viewer: true,
	},
	googleFonts: {
		families: {
			Inter: '200..700',
		},
		display: 'swap',
		subsets: ['cyrillic', 'latin'],
		preload: true,
		prefetch: true,
		useStylesheet: true,
		preconnect: true,
	},
	typescript: {
		tsConfig: {
			compilerOptions: {
				baseUrl: '.',
			},
		},
	},
	app: {
		head: {
			title: 'Проточный цитометр',

			charset: 'utf-8',
			htmlAttrs: {
				lang: 'ru',
			},
			meta: [
				{
					name: 'robots',
					content: 'noindex, nofollow',
				},
				{
					name: 'theme-color',
					content: '#ffffff',
				},
				{
					name: 'apple-mobile-web-app-title',
					content: 'labvision',
				},
				{
					name: 'description',
					content: 'Проточный цитометр CELLRIVER - Первый российский проточный цитометр для широкого круга научных исследований, скрининговых исследований и фармацевтических разработок',
				},
				{
					name: 'keywords',
					content: 'цитометрический анализ, скрининговые тесты, волюметрический метод, цитокины, флуорохромы, флуоресценции, банк стволовых клеток, иммунофенотипирование, субпопуляция, лизирующие растворы, гомогенизация тканей'
				}
			],
			link: [
				{
					rel: 'icon',
					sizes: '96x96',
					href: '/favicon-96x96.png',
					type: 'image/png',
				},
				{
					rel: 'icon',
					href: '/favicon.svg',
					type: 'image/svg+xml',
				},
				{
					rel: 'shortcut icon',
					href: '/favicon.ico',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/apple-touch-icon.png',
				},
				{
					rel: 'manifest',
					href: '/site.webmanifest',
				},
			],
			script: [
				{
					type: 'text/javascript',
					innerHTML: `
						   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
							 m[i].l=1*new Date();
							 for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
							 k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
							 (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
						
							 ym(98974226, "init", {
										clickmap:true,
										trackLinks:true,
										accurateTrackBounce:true,
										webvisor:true
							 });
						`,
				}
			],
			noscript: [
				{
					innerHTML: `<div><img src="https://mc.yandex.ru/watch/98974226" style="position:absolute; left:-9999px;" alt="" /></div>`
				}
			],
			viewport: 'width=device-width, initial-scale=1',
		},
	},
	runtimeConfig: {
		public: {
			API_ENDPOINT: '',
		},
	},
})
