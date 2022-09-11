import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/post';
import utilsStyle from '../../styles/utils.module.css';
import Head from 'next/head';

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);

	return {
		props: {
			postData,
		},
	};
}

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilsStyle.headingXl}> {postData.title}</h1>
				<div className={utilsStyle.lightText}>{postData.date}</div>
				<div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
			</article>
		</Layout>
	);
}
