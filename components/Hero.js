/* eslint-disable @next/next/no-img-element */
import Button from "./Button"

export default function Hero () {
  return (
    <div className="h-[60vh] md:h-[80vh] max-h-[770px] bg-white relative">
      <section className="py-10 sm:py-16 lg:py-24 h-full flex items-center">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center justify-center grid-cols-1 gap-12">
            <div>
              <h1 className="mt-4 text-5xl font-light text-black lg:mt-8 sm:text-6xl xl:text-8xl uppercase">Economic Intelligence</h1>
              <p className="my-4 text-xl text-black lg:mt-8 sm:text-3xl">For Small and Mid-Size Banks</p>
              <Button
                target={"mailto:hello@dainamic.ai"}
                text={"Get In Touch"}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <img className="absolute bottom-10 right-1/2 left-1/2" src="/images/arrow-circle-down.svg" alt="more below"/> */}
    </div>
  )
}