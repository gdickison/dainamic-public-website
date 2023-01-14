import blogData from '../public/data/blog-data.json'
import BlogFeatureCard from './BlogFeatureCard'

export default function BlogFeaturedArticles () {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold leading-tight text-gray-800 sm:text-3xl lg:text-4xl">Articles from our blog</h2>
        </div>
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full lg:gap-14">
          {blogData &&
            blogData.map(post => (
              <BlogFeatureCard
                key={post.id}
                id={post.id}
                image={post.image}
                title={post.title}
                categories={post.categories}
                author={post.author}
                excerpt={post.excerpt}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}