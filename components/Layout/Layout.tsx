import { ReactNode } from "react"
import Head from "next/head"
import { siteConfig } from "@/config"

import { Footer } from "../Footer"
import { Header } from "../Header"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const { name, twitterHandle, openGraph } = siteConfig

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="follow, index" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={name} />
        <meta property="og:description" content={openGraph.description} />
        <meta property="og:title" content={openGraph.title} />
        <meta property="og:image" content={openGraph.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:title" content={openGraph.title} />
        <meta name="twitter:description" content={openGraph.description} />
        <meta name="twitter:image" content={openGraph.image} />
      </Head>
      <main className="mb-24 px-2">
        <Header />
        {children}
      </main>
      <Footer />
    </>
  )
}

export { Layout }
