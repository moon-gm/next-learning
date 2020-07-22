import SEO from './../parts/SEO'
import Styles from './../sass/pages/index.module.scss'
import Parts from './../config/parts';
import urls from './../config/outerUrls';

export default function Home({allData}) {
  return (
	<>
		<SEO pageName="Home" />
		<div className={Styles.AppHeader}>
			<div className={Styles.mainTitle}>
				{allData[0].name}
			</div>
			<img
				src="/nextjs.svg"
				className={Styles.AppLogo}
				alt="logo"
			/>
			<Parts.OuterLink
				url={urls.NextOfficial.Top}
				linkText="> Go to Official"
			/>
		</div>
	</>
  )
}
