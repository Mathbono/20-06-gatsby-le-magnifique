import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';

const AboutPage = () => (
	<Layout page="4">
		<SEO title="About" />
		<h1>A propos</h1>
		<Bio />
	</Layout>
);

export default AboutPage;
