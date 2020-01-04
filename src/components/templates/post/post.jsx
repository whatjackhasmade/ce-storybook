import React from "react"

import ParseHTML from "../../particles/parseHTML"
import Layout from "../../particles/layout"

import Link from "../../atoms/link/link"

import Article from "../../molecules/article/article"

import Banner from "../../organisms/banner/banner"
import Related from "../../organisms/related/related"

const banner = {
  content: "Creating a Positive Day",
  cta: {
    href: "#",
    label: "Call to action",
    target: null,
  },
  title: "Creating a Positive Day",
}

const related = {
  intro: {
    cta: {
      href: "/posts",
      label: "View all posts",
      target: null,
    },
    subtitle: "Related posts",
    text:
      "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
    title: "Continue reading our beauty insights",
  },
  items: [
    {
      category: {
        href: "/category/beauty-routine",
        label: "Beauty routine",
      },
      description:
        "Celtic Elements is a Welsh, Vegan, Wellness brand. We use Welsh natural ingredients from the hillsides & coast of Wales in our Skincare, Body care and Well being ranges.",
      image: "https://source.unsplash.com/random/500x300",
      slug: "creating-a-positive-day",
      title: "Creating a Positive Day",
    },
    {
      category: {
        href: "/category/beauty-routine",
        label: "Beauty routine",
      },
      description:
        "Celtic Elements is a Welsh, Vegan, Wellness brand. We use Welsh natural ingredients from the hillsides & coast of Wales in our Skincare, Body care and Well being ranges.",
      image: "https://source.unsplash.com/random/500x300",
      slug: "creating-a-positive-day",
      title: "Creating a Positive Day",
    },
    {
      category: {
        href: "/category/beauty-routine",
        label: "Beauty routine",
      },
      description:
        "Celtic Elements is a Welsh, Vegan, Wellness brand. We use Welsh natural ingredients from the hillsides & coast of Wales in our Skincare, Body care and Well being ranges.",
      image: "https://source.unsplash.com/random/500x300",
      slug: "creating-a-positive-day",
      title: "Creating a Positive Day",
    },
  ],
}

const PostTemplate = props => (
  <Layout {...props}>
    <PostContent {...props} />
  </Layout>
)

const PostContent = ({ pageContext }) => {
  // TODO: Pull in banner & related from pageContext with ACF
  const { content, title } = pageContext

  return (
    <>
      <Article>
        <nav>
          <Link href="/posts">All Posts</Link>
        </nav>
        <h1>{title}</h1>
        {content && ParseHTML(content)}
      </Article>
      {banner && <Banner {...banner} />}
      {related && <Related {...related} />}
    </>
  )
}

export default PostTemplate
