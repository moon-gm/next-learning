import SEO from './../parts/SEO'
import Styles from './../sass/pages/index.module.scss'
import Parts from './../config/parts';
import urls from './../config/outerUrls';
import SwipeableViews from 'react-swipeable-views';

export default function Home({allData}) {
  return (
	<>
		<SEO pageName="Home" />
		<div className={Styles.AppHeader}>
		<SwipeableViews enableMouseEvents index={1}>
				<div className={Styles.mainTitle}>
					<p onClick={() => window.location.href=urls.MySite.ReactLearning}>
						React Learning
					</p>
					<p className={Styles.subTitle}>
						〜 ↑ Click to React.js site ↑ 〜<br/>
						◀︎ Swipe here
					</p>
				</div>
				<div className={Styles.mainTitle}>
					<p>
						{allData[0].name}
					</p>
					<p className={Styles.subTitle}>
						〜 This Site 〜<br/>
						◀︎ Swipe here ▶︎
					</p>
				</div>
				<div className={Styles.mainTitle}>
					<p onClick={() => window.location.href=urls.MySite.GatsbyLearning}>
						Gatsby Learning
					</p>
					<p className={Styles.subTitle}>
						〜 ↑ Click to Gatsby.js site ↑ 〜<br/>
						Swipe here ▶︎
					</p>
				</div>
			</SwipeableViews>
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
