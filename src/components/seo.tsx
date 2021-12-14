/**
 * This react helmet code is adapted from
 * https://themeteorchef.com/tutorials/reusable-seo-with-react-helmet.
 *
 * A great tutorial explaining how to setup a robust version of an
 * SEO friendly react-helmet instance.
 *
 *
 * Use the Helmet on pages to generate SEO and meta content!
 *
 * Usage:
 * <SEO
 *   title={title}
 *   description={description}
 *   image={image}
 * />
 *
 */
import { useSiteMetadata } from "@hooks"
import React from "react"
import { Helmet } from "react-helmet"

interface HelmetProps {
  children?: React.ReactNode
  title: string
  pathname: string
  description?: string
  image?: string
  published?: string
  timeToRead?: number
}

function SEO({
  title,
  description,
  children,
  image,
  published,
  pathname,
  timeToRead,
}: HelmetProps) {
  // const twitter = site.social.find(option => option.name === 'twitter') || {};
  const { title: siteTitle, url: siteUrl } = useSiteMetadata()

  if (title) {
    title = `${title} - ${siteTitle}`
  } else {
    title = siteTitle
  }

  const fullURL = (path: string) => (path ? `${siteUrl}${path}` : siteUrl)

  // If no image is provided lets looks for a default novela static image
  //  image = image || '/preview.jpg';// eslint-disable-line

  const metaTags = [
    { charset: "utf-8" },
    {
      "http-equiv": "X-UA-Compatible",
      content: "IE=edge",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#fff",
    },
    {
      rel: "canonical",
      href: fullURL(pathname),
    },
    { itemprop: "name", content: title },
    { itemprop: "description", content: description || "" },
    { itemprop: "image", content: image },
    { name: "description", content: description || "" },
    // https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: `@${siteTitle || title}` },
    { name: "twitter:title", content: title || siteTitle },
    { name: "twitter:description", content: description || "" },
    { name: "twitter:creator", content: `@${siteTitle}` },
    {
      name: "twitter:image",
      content: image,
    },

    { property: "og:title", content: title },
    { property: "og:url", content: siteUrl },
    { property: "og:image", content: image },
    { property: "og:description", content: description || "" },
    { property: "og:site_name", content: siteTitle },
  ]

  if (published) {
    metaTags.push({ name: "article:published_time", content: published })
  }

  if (timeToRead) {
    metaTags.push({ name: "twitter:label1", content: "Reading time" })
    metaTags.push({ name: "twitter:data1", content: `${timeToRead} min read` })
  }

  return (
    <Helmet title={title} htmlAttributes={{ lang: "zh-CN" }} meta={metaTags}>
      {children}
    </Helmet>
  )
}

export default SEO
