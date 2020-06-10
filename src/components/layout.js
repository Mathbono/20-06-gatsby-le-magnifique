/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql, Link} from 'gatsby';
import {Layout, Menu} from 'antd';
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined
} from '@ant-design/icons';

import Source from './source';

const {Header, Content, Footer, Sider} = Layout;

const GLayout = ({children, page}) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<Layout style={{minHeight: '100vh'}}>
			<Sider
				style={{zIndex: '10'}}
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={broken => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<div className="logo" />
				<Menu
					style={{zIndex: '10'}}
					theme="dark"
					mode="inline"
					defaultSelectedKeys={[page]}
				>
					<Menu.Item key="1" icon={<UserOutlined />}>
						<Link to="/">Home</Link>
					</Menu.Item>
					<Menu.Item key="2" icon={<VideoCameraOutlined />}>
						<a
							href="https://www.youtube.com/"
							target="_blank"
							rel="noreferrer"
						>
							Youtube
						</a>
					</Menu.Item>
					<Menu.Item key="3" icon={<UploadOutlined />}>
						<Link to="/page-2">Page 2</Link>
					</Menu.Item>
					<Menu.Item key="4" icon={<UserOutlined />}>
						<Link to="/about">About</Link>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout>
				<Header
					className="site-layout-sub-header-background"
					style={{padding: 0, zIndex: '10'}}
				>
					<h1 style={{paddingLeft: '10px', color: 'white'}}>
						{data.site.siteMetadata.title}
					</h1>
				</Header>
				<Content style={{margin: '24px 16px 0'}}>
					<div
						className="site-layout-background"
						style={{padding: 24, minHeight: 360}}
					>
						{children}
					</div>
				</Content>
				<Footer style={{textAlign: 'center', zIndex: '10'}}>
					<span>
						Ant Design ©{new Date().getFullYear()} Created by Ant UED
					</span>
					<Source />
				</Footer>
			</Layout>
		</Layout>
	);
};

GLayout.propTypes = {
	children: PropTypes.node.isRequired
};

export default GLayout;
