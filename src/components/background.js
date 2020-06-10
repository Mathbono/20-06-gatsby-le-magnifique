import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Background = () => (
	<StaticQuery
		query={graphql`
			query {
				placeholderImage: file(relativePath: {eq: "background.jpg"}) {
					childImageSharp {
						fluid(maxWidth: 1024) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`}
		render={data => (
			<div
				style={{
					left: '0px',
					top: '0px',
					overflow: 'hidden',
					margin: '0px',
					padding: '0px',
					height: '100%',
					width: '100%',
					zIndex: '0',
					position: 'fixed'
				}}
			>
				<Img
					style={{minHeight: '100%'}}
					fluid={data.placeholderImage.childImageSharp.fluid}
				/>
			</div>
		)}
	/>
);

export default Background;
