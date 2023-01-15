/* eslint-disable @next/next/no-img-element */
export default function Hero () {
  return (
    <div className="h-screen max-h-[770px] bg-white relative">
      <section className="py-10 sm:py-16 lg:py-24 h-full flex items-center">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center justify-center grid-cols-1 gap-12">
            <div>
              <h1 className="mt-4 text-4xl font-light text-black lg:mt-8 sm:text-6xl xl:text-8xl uppercase">Economic Intelligence</h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-3xl">for small and mid-size banks</p>
            </div>
          </div>
        </div>
      </section>
      {/* <img className="absolute bottom-10 right-1/2 left-1/2" src="/images/arrow-circle-down.svg" alt="more below"/> */}
    </div>
  )
}