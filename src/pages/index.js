import React from 'react';
import {Link, graphql} from 'gatsby';
import Img from 'gatsby-image';
import {List} from 'antd';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({data}) => (
	<Layout page="1">
		<SEO title="Home" />
		<List
			itemLayout="horizontal"
			dataSource={data.allMarkdownRemark.edges}
			renderItem={({node}) => (
				<List.Item>
					<Img
						fixed={node.frontmatter.image.childImageSharp.fixed}
						style={{float: 'left', marginRight: '16px'}}
						title={node.frontmatter.title}
						alt={node.frontmatter.title}
					/>
					<List.Item.Meta
						title={
							<Link to={node.frontmatter.slug}>
								{node.frontmatter.title}
							</Link>
						}
						description={node.excerpt}
					/>
				</List.Item>
			)}
		/>
	</Layout>
);

export const query = graphql`
	{
		allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						slug
						image {
							childImageSharp {
								fixed(width: 150, height: 150) {
									...GatsbyImageSharpFixed_withWebp
								}
							}
						}
					}
					excerpt
				}
			}
		}
	}
`;

export default IndexPage;
