import React from "react"
import Helmet from "react-helmet"
import he from "he"

const SEO = ({ data }) => {
  if (!data || !data.seo) return null

  const {
    isBlog,
    metaDesc,
    opengraphImage,
    opengraphTitle,
    slug,
    title,
    twitterDescription,
    twitterImage,
    twitterTitle,
  } = data.seo

  const postURL = `/`

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: process.env.GATSBY_DOMAIN,
      name: opengraphTitle ? he.decode(opengraphTitle) : he.decode(title),
      alternateName: "WhatJackHasMade",
    },
    {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": postURL,
            name: opengraphTitle ? he.decode(opengraphTitle) : he.decode(title),
            image: opengraphImage ? opengraphImage : null,
          },
        },
      ],
    },
    {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      url: process.env.GATSBY_DOMAIN,
      name: opengraphTitle ? he.decode(opengraphTitle) : he.decode(title),
      alternateName: "WhatJackHasMade",
      headline: opengraphTitle ? he.decode(opengraphTitle) : he.decode(title),
      image: {
        "@type": "ImageObject",
        url: opengraphImage ? opengraphImage : null,
      },
      description: metaDesc,
    },
  ]

  return (
    <Helmet>
      {/* General tags */}
      <title>
        {opengraphTitle ? he.decode(opengraphTitle) : he.decode(title)}
      </title>
      <meta name="description" content={metaDesc} />
      <meta name="image" content={opengraphImage ? opengraphImage : null} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta
        property="og:url"
        content={`${process.env.GATSBY_DOMAIN}/${slug}`}
      />
      {isBlog ? <meta property="og:type" content="article" /> : null}
      <meta
        property="og:title"
        content={opengraphTitle ? he.decode(opengraphTitle) : he.decode(title)}
      />
      <meta property="og:description" content={metaDesc ? metaDesc : ""} />
      <meta
        property="og:image"
        content={opengraphImage ? opengraphImage : null}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`${process.env.GATSBY_DOMAIN}/${slug}`}
      />
      <meta name="twitter:creator" content={"whatjackhasmade"} />
      <meta
        name="twitter:title"
        content={
          twitterTitle
            ? twitterTitle
            : opengraphTitle
            ? he.decode(opengraphTitle)
            : he.decode(title)
        }
      />
      <meta
        name="twitter:description"
        content={
          twitterDescription ? twitterDescription : metaDesc ? metaDesc : ""
        }
      />
      <meta
        name="twitter:image"
        content={
          twitterImage ? twitterImage : opengraphImage ? opengraphImage : null
        }
      />
    </Helmet>
  )
}

export default SEO
