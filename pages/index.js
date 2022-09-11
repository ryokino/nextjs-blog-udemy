import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import { getPostsData } from '../lib/post';
import styles from '../styles/Home.module.css';
import utilsStyle from '../styles/utils.module.css';

// ssgの場合
export async function getStaticProps() {
	const allPostsData = await getPostsData(); // id, date, title, thumbnailPath
	console.log('allPostData :>> ', allPostsData);

	return {
		props: {
			allPostsData,
		},
	};
}

// // ssrの場合
// export async function getServerSideProps(context) {
// 	return {
// 		props: {
// 			//　コンポーネントに渡すためのpropsが入る
// 		},
// 	};
// }

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilsStyle.headingMd}>
				<p>私はフロントエンドを専門にやっている医学生エンジニアです。</p>
			</section>

			<section className={`${utilsStyle.headingMd} ${utilsStyle.padding1px}`}>
				<h2>🗒エンジニアのブログ</h2>
			</section>
			<div className={styles.grid}>
				{allPostsData.map(({ id, title, date, thumbnail }) => (
					<article key={id}>
						<Link href={`/posts/${id}`}>
							<img src={`${thumbnail}`} className={styles.thumbnailImage} />
						</Link>
						<Link href={`/posts/${id}`}>
							<a className={utilsStyle.boldText}>{title}</a>
						</Link>
						<br />
						<small className={utilsStyle.lightText}>{date}</small>
					</article>
				))}
			</div>
		</Layout>
	);
}
