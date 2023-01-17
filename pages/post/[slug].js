import React from "react";
import { useRouter } from "next/router";
import blogData from "../../public/data/blog-data.json";

export default function BlogStandard () {
  const router = useRouter()
  const { slug } = router.query
  const post = blogData.find((post) => post.id === slug);

  return (
    <>
      {post &&
        <article className="px-4 py-24 mx-auto max-w-7xl" itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
          <div className="w-full mx-auto mb-12 text-center md:w-2/3">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
              {post.categories}
            </p>
            <h1 className="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl" itemprop="headline" title="Rise of Tailwind - A Utility First CSS Framework">
              {post.title}
            </h1>
            <p className="text-gray-700">
              <span className="byline author vcard" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
                <a href="mailto:hello@dainamic.ai" target="_blank" itemprop="url" rel="author noopener noreferrer" className="text-primary hover:text-primary-dark">
                <span itemprop="name">
                  {post.author}
                </span>
                </a>
              </span>
            </p>
            <p className="text-gray-700 italic">
              <span className="byline author vcard" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
                <span itemprop="name">
                  {post.role}
                </span>
              </span>
            </p>
          </div>
          <div className="mx-auto prose text-lg">
            <div dangerouslySetInnerHTML={{__html:post.text}} className="space-y-3"></div>
          </div>
          <p className="my-6 italic">
            {post.bio}
          </p>
        </article>
      }
    </>
  )
}
