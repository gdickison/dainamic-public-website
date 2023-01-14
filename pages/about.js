import aboutData from '../public/data/about-us-data.json'
import FeatureCard from '../components/FeatureCard'

export default function About () {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">About</h1>
          <div className="flex my-10 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#0000dd] inline-flex"></div>
          </div>
        </div>
        <div className="space-y-8">
          <div className='text-center'>
            <h2 className="text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Dainamic was created to address three key needs
            </h2>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10  md:space-y-0 space-y-6">
            {aboutData &&
              aboutData.map(feature => (
                <FeatureCard
                  key={feature.id}
                  title={feature.title}
                  icon={feature.icon}
                  text={feature.text}
                />
              ))
            }
          </div>
        </div>
        {/* <button className="flex mx-auto mt-16 text-white bg-[#0000dd] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
      </div>
    </section>
  )
}