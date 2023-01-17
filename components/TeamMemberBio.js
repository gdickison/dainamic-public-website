/* eslint-disable @next/next/no-img-element */
export default function TeamMemberBio ({name, role, image, text, social, handleClick}) {
  return (
    <section className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full bg-slate-500 bg-opacity-50 z-10">
      <div className="relative p-[30px] max-w-5xl my-[100px] mx-auto bg-white rounded-md">
      <img className="absolute h-6 w-6 top-2 right-2 md:h-10 md:w-10 md:top-6 md:right-6 hover:cursor-pointer" src="/images/x-close.svg" alt="close" onClick={handleClick} />
        <div className="flex flex-col md:flex-row w-full overflow-scroll">
          <div className="w-full">
            <img className="w-full mx-auto sm:max-w-xs" src={`/images/${image}`} alt="" />
          </div>
          <div className="md:max-w-[60%]">
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
            <p className="mt-4 text-base text-gray-700">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}