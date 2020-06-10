import React from 'react';
import RehypeReact from 'rehype-react';
import {graphql, Link} from 'gatsby';
import Img from 'gatsby-image';
import {Button, Divider} from 'antd';
import {LeftCircleFilled, RightCircleFilled} from '@ant-design/icons';

import Layout from '../components/layout';
import Bio from '../components/bio';
import Source from '../components/source';
import MailchimpForm from '../components/mailchimpForm';
import SEO from '../components/seo';

export default ({data, pageContext}) => {
	const ButtonGroup = Button.Group;
	const {title, date} = data.markdownRemark.frontmatter;
	// const __html = data.markdownRemark.html;
	const {prev, next} = pageContext;
	const renderAst = new RehypeReact({
		createElement: React.createElement,
		components: {source: Source}
	}).Compiler;

	return (
		<Layout>
			<SEO title={title} description={data.markdownRemark.excerpt} />
			<p>{date}</p>
			<Img
				style={{marginBottom: '30px'}}
				fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
				title={data.markdownRemark.frontmatter.title}
				alt={data.markdownRemark.frontmatter.title}
			/>
			{/*<div dangerouslySetInnerHTML={{__html}} />*/}
			<div>{renderAst(data.markdownRemark.htmlAst)}</div>
			<MailchimpForm />
			<Bio />
			<Divider />
			<ButtonGroup>
				{prev && (
					<Button type="primary" size="large">
						<Link to={prev.frontmatter.slug}>
							<LeftCircleFilled />
							&nbsp;
							{prev.frontmatter.title}
						</Link>
					</Button>
				)}
				{next && (
					<Button type="primary" size="large">
						<Link to={next.frontmatter.slug}>
							{next.frontmatter.title}
							&nbsp;
							<RightCircleFilled />
						</Link>
					</Button>
				)}
			</ButtonGroup>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: {slug: {eq: $slug}}) {
			html
			htmlAst
			excerpt
			frontmatter {
				title
				date(formatString: "DD MMMM, YYYY")
				image {
					childImageSharp {
						fluid(maxWidth: 630) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	}
`;
