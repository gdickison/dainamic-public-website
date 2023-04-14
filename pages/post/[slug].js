/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import blogData from "../../public/data/blog-data.json";

export default function BlogStandard () {
  const router = useRouter()
  const { slug } = router.query
  const post = blogData.find((post) => post.id === slug);

  return (
    <>
      {post &&
        <article className="px-4 py-24 mx-auto max-w-7xl" itemid="#" itemScope itemType="http://schema.org/BlogPosting">
          <section className="text-gray-600 body-font bg-[url('/images/bg_abstract_white.jpg')] bg-cover">
            <div className="container mx-auto flex px-5 pt-12 pb-5 md:flex-row flex-col items-center">
              <div className="w-full lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                  {post.categories}
                </p>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{post.title}</h1>
                <p className="text-gray-700 w-full">
                  <span className="byline author vcard" itemProp="author" itemScope="itemScope" itemType="http://schema.org/Person">
                    <Link href="/about" itemProp="url" className="text-primary hover:text-primary-dark">
                    <span itemProp="name">
                      {post.author}
                    </span>
                    </Link>
                  </span>
                </p>
                <p className="text-gray-700 italic">
                  <span className="byline author vcard" itemProp="author" itemScope="itemScope" itemType="http://schema.org/Person">
                    <span itemProp="name">
                      {post.role}
                    </span>
                  </span>
                </p>
              </div>
              <div className="w-full">
                <img className="object-cover object-center rounded" alt={post.author} src={`/images/${post.authorImage}`}/>
              </div>
            </div>
          </section>
          <div className="w-full mx-auto mb-12 text-center md:w-2/3">
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
