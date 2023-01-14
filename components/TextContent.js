export default function TextContent ({headline, text1, text2}) {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      {headline &&
        <div className="max-w-3xl mx-auto text-center pb-5">
            <h2 className="text-xl font-medium leading-tight text-black sm:text-2xl lg:text-3xl">{headline}</h2>
        </div>
      }
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:items-stretch gap-x-12 xl:gap-x-20">
              <div className="flex flex-col justify-between md:py-5">
                  <blockquote>
                      <p className="text-2xl leading-relaxed text-black text-center font-extralight">{text1}</p>
                  </blockquote>
              </div>
              {text2 &&
                <div className="flex flex-col justify-between md:py-5">
                    <blockquote>
                        <p className="text-2xl leading-relaxed text-black text-center font-extralight">{text2}</p>
                    </blockquote>
                </div>
              }
          </div>
      </div>
    </section>
  )
}