import BlogFeaturedArticles from "../components/BlogFeaturedArticles"

export default function Blog () {
  return (
    <div className="mt-16 md:mt-20 min-h-[100vh - 455px]">
      <BlogFeaturedArticles
        numArticles={1}
      />
    </div>
  )
}