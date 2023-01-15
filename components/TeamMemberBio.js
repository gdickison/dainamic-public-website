/* eslint-disable @next/next/no-img-element */
export default function TeamMemberBio ({name, role, image, text, handleClick}) {
  return (
    <section className="pb-14 bg-white border-2 border-red-500 absolute left-0 right-0 mx-auto top-80 w-4/5 z-10">
        <img className="absolute top-6 right-6 hover:cursor-pointer" src="/images/x-close.svg" alt="close" onClick={handleClick} />
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
          <div>
            <img className="w-full mx-auto sm:max-w-xs" src={`/images/${image}`} alt="" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {name}
            </h3>
            <h3 className="text-lg text-gray-900">
              {role}
            </h3>
            <p className="mt-4 text-lg text-gray-700">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}