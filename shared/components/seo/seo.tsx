import Head from 'next/head';

const SEO = ({title, keywords, description, type, url, image}: any) => {
	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1'></meta>
			<meta name='keywords' content={keywords}></meta>
			<meta name='description' content={description}></meta>
			<meta property='og:title' content={title} />
			<meta property='og:type' content={type} />
			<meta property='og:url' content={url} />
			<meta property='og:image' content={image} />
			<meta property='twitter:title' content={title} />
			<meta name='twitter:type' content={type} />
			<meta name='twitter:url' content={url} />
			<meta name='twitter:image' content={image} />
			<meta charSet='utf-8'></meta>
			<link rel='icon' href='/favicon.ico'></link>
			<link rel='canonical' href={url}></link>
			<title>{title}</title>
		</Head>
	);
};
SEO.defaultProps = {
	title: 'NextJS with talwind CSS',
	keywords: 'Making seo friendly site',
	description: 'It is a demo project to learn NextJS with tailwind CSS',
	ogTitle: 'NextJS with talwind CSS',
};

export default SEO;
