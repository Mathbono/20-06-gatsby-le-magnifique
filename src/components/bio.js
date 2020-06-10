import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Card, Avatar, Divider} from 'antd';

const {Meta} = Card;

const Bio = () => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						author
						pseudo
					}
				}
			}
		`}
		render={data => (
			<>
				<Divider orientation="left">Auteur</Divider>
				<Card
					style={{width: 300}}
					cover={
						<img
							src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
							title="Auteur"
							alt="Auteur"
						/>
					}
				>
					<Meta
						avatar={
							<Avatar
								src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
								alt={data.site.siteMetadata.author}
							/>
						}
						title={
							<a href="https://github.com/Mathbono">
								{data.site.siteMetadata.pseudo}
							</a>
						}
						description="Auteur du site"
					/>
				</Card>
			</>
		)}
	/>
);

export default Bio;
