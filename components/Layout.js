import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilsStyles from '../styles/utils.module.css';

const name = 'Ryo Kinoshita';
export const siteTitle = 'Next.js Blog';

function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<img
							src='/images/profile.png'
							className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}
						/>
						<h1 className={utilsStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<img
							src='/images/profile.png'
							className={utilsStyles.borderCircle}
						/>
						<h1 className={utilsStyles.heading2Xl}>{name}</h1>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div>
					<Link href='/'>← ホームへ戻る</Link>
				</div>
			)}
		</div>
	);
}

export default Layout;
