export default function BlogFeatureCard ({id, image, title, categories, author, excerpt}) {
  return (
    <div key={id} className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
      <div className="flex flex-col justify-between flex-1 px-5 py-6">
        <div className="relative">
          <a href={`post/${id}`} title="" className="block aspect-w-4 aspect-h-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="object-cover w-full h-[200px]" src={`images/${image}`} alt="" />
          </a>
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> {categories} </span>
          </div>
        </div>
        <div className="flex-1 mt-8">
          <p className="text-2xl font-semibold">
            <a href={`post/${id}`} title="" className="text-black"> {title} </a>
          </p>
          <p className="mt-4 text-base text-gray-600">
            {excerpt}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="flex">
          <div className="flex items-center flex-1 px-6 py-5">
            <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate"> {author} </span>
          </div>
          <a href={`post/${id}`} title="" className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white">
            Read more
            <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}