interface SiteConfig {
  name: string
  description: string
  twitterHandle: string
  openGraph: {
    title: string
    description: string
    image: string
  }
}

const siteConfig: SiteConfig = {
  name: "",
  description: "",
  twitterHandle: "",
  openGraph: {
    title: "",
    description: "",
    image: "",
  },
}

export { siteConfig }
