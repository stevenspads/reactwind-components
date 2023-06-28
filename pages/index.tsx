import Head from "next/head"
import { Layout } from "@/components"
import { siteConfig } from "@/config"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
      </Head>
      <div className="container mx-auto max-w-2xl">
        <header className="mb-12 text-center">
          <h1>About this project</h1>
        </header>
        <div className="space-y-6">
          <p>
            Reactwind is a library of reusable React components that can be
            copied into your next project.
          </p>
          <p>
            Components are styled using{" "}
            <a href="https://tailwindcss.com">TailwindCSS</a> and have support
            for dark mode.
          </p>
          <p>
            Components are previewable with{" "}
            <a href="https://storybook.js.org">Storybook</a>.
          </p>
          <p>
            Consult the{" "}
            <a href="https://github.com/stevenspads/reactwind/blob/main/README.md">
              README
            </a>{" "}
            to learn more.
          </p>
        </div>
      </div>
    </Layout>
  )
}
