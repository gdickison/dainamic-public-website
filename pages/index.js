import Head from 'next/head'
import Hero from '../components/Hero'
import TextContent from '../components/TextContent'
import Steps from '../components/Steps'
import BlogFeaturedArticles from '../components/BlogFeaturedArticles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dainamic.AI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Hero/>
        <TextContent
          text1={"Dainamic is a small team that provides high quality economic data and customized analytics to help smaller financial institutions deal with an increasingly complex world. Our services will help you make better decisions and better manage a growing list of regulations."}
        />
        <Steps/>
        <TextContent
          headline={"Need a more nimble, cost effective data science team?"}
          text1={"Dainamic is led by a small team of economists and data scientists that can help you create and explain forecasts over asset portfolios for CECL."}
          text2={"Dainamic helps banks comply with the current and expected credit loss (CECL) regulation by creating “reasonable and supportable” scenarios through advanced AI technology applied on a wide array of data, comparable to those that large banks have available in-house, at a fraction of the cost. Dainamic’s unique approach draws on extensive academic research."}
          button={true}
        />
        <BlogFeaturedArticles
          numArticles={1}
        />
      </main>
    </>
  )
}
