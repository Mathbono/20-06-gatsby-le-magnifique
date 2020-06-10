module.exports = {
	siteMetadata: {
		title: `Gatsby le Magnifique`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `Mathieu Bonomini`,
		pseudo: `Mathbono`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-catch-links',
		{
			resolve: `gatsby-plugin-less`,
			options: {
				modifyVars: require('./src/theme/antd.js'),
				javascriptEnabled: true
			}
		},
		{
			resolve: `gatsby-plugin-antd`,
			options: {
				style: true
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog`,
				path: `${__dirname}/blog`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-remark`,
		`gatsby-remark-component`,
		{
			resolve: `gatsby-remark-external-links`,
			options: {
				target: `_blank`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `@raae/gatsby-remark-oembed`,
			options: {
				providers: {
					include: ['Twitter', 'YouTube']
				}
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
