/* eslint-disable @next/next/no-img-element */
export default function TeamMemberBio ({name, role, image, text, social, handleClick}) {
  return (
    <section className=" bg-white border-2 border-red-500 fixed inset-0 md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:overflow-y-auto h-fit z-10">
      <div className="relative transform overflow-hidden rounded-lg shadow-xl transition-all">
        <img className="absolute h-6 w-6 top-2 right-2 md:h-10 md:w-10 md:top-6 md:right-6 hover:cursor-pointer" src="/images/x-close.svg" alt="close" onClick={handleClick} />
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 my-8 md:my-20 gap-y-6 md:grid-cols-2 gap-x-10 content-center">
            <div className="">
              <img className="w-full mx-auto sm:max-w-xs" src={`/images/${image}`} alt="" />
            </div>
            <div className="">
              <div className="flex items-center gap-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {name}
                </h3>
                <span>
                  <a className="text-gray-500" href={social} target="_blank" rel="noreferrer">
                    <img className="h-8 w-8" src="/images/linkedin.png" alt="linked in icon" />
                  </a>
                </span>
              </div>
              <h3 className="text-lg text-gray-900">
                {role}
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}