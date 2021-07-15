import * as React from "react"
import "@fontsource/rubik"
import {page, header, leftContainer, rightContainer, wrapper, footer,
  appName, text,} from "../components/layout.module.css";
import { StaticImage } from "gatsby-plugin-image";

// styles

// markup
const IndexPage = () => {
  return (
    <main className={page}>
      <title>Turyam</title>
      <div className={wrapper}>
        <header className={header}>turyam</header>
        <div className={leftContainer}>
          <StaticImage src="../images/main-screen.png" width={300} alt="main screen" />
        </div>
        <div className={rightContainer}>
          <div style={{textAlign:"center"}}>
            <div className={appName}>mind</div>
            <div class={text}>puzzles to sharpen your mind</div>
          </div>
          <a target="_blank" href='https://play.google.com/store/apps/details?id=com.turyam.mind&utm_source=turyam%20website&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
            <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width={300}/>
          </a>
        </div>
        <footer class={footer}>Google Play and the Google Play logo are trademarks of Google LLC.</footer>
      </div>
    </main>
  )
}

export default IndexPage
