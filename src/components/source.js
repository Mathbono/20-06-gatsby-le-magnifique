import React from 'react';

const Source = () => (
	<p style={{fontSize: '0.9rem', fontStyle: 'italic'}}>
		<a href="https://www.flickr.com/photos/75487768@N04/29153802485">
			"city"
		</a>
		<span>
			&nbsp;by{' '}
			<a href="https://www.flickr.com/photos/75487768@N04">barnyz</a> is
			licensed under&nbsp;
		</span>
		<a
			href="https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=ccsearch&atype=html"
			style={{marginRight: '5px'}}
		>
			CC BY-NC-ND 2.0
		</a>
		<a
			href="https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=ccsearch&atype=html"
			target="_blank"
			rel="noopener noreferrer"
			style={{
				display: 'inline-block',
				whiteSpace: 'none',
				marginTop: '2px',
				marginLeft: '3px',
				height: '22px'
			}}
		>
			<img
				style={{
					height: 'inherit',
					marginRight: '3px',
					display: 'inline-block'
				}}
				src="https://search.creativecommons.org/static/img/cc_icon.svg"
				title="cc"
				alt="cc"
			/>
			<img
				style={{
					height: 'inherit',
					marginRight: '3px',
					display: 'inline-block'
				}}
				src="https://search.creativecommons.org/static/img/cc-by_icon.svg"
				title="cc-by"
				alt="cc-by"
			/>
			<img
				style={{
					height: 'inherit',
					marginRight: '3px',
					display: 'inline-block'
				}}
				src="https://search.creativecommons.org/static/img/cc-nc_icon.svg"
				title="cc-nc"
				alt="cc-nc"
			/>
			<img
				style={{
					height: 'inherit',
					marginRight: '3px',
					display: 'inline-block'
				}}
				src="https://search.creativecommons.org/static/img/cc-nd_icon.svg"
				title="cc-nd"
				alt="cc-nd"
			/>
		</a>
	</p>
);

export default Source;
