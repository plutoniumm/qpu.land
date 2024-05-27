import rehypeExternalLinks from 'rehype-external-links';
import rehypePresetMinify from 'rehype-preset-minify';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

const rehypeExternalLinksConfig = [
	rehypeExternalLinks,
	{ target: '_blank', rel: [ 'noopener', 'noreferrer' ] }
]

export default defineConfig( {
	site: 'https://qpu.land/',
	output: 'static',
	server: {
		port: parseInt( process.env.PORT || '3000' )
	},
	integrations: [
		mdx( {
			rehypePlugins: [ rehypeExternalLinksConfig, rehypePresetMinify ]
		} ),
		sitemap( {
			filter: page => page !== 'https://qpu.land/404'
		} )
	],
	markdown: {
		smartypants: true,
		rehypePlugins: [ rehypeExternalLinksConfig ],
		shikiConfig: {
			theme: 'one-dark-pro'
		}
	}
} )
