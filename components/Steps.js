export default function Steps () {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">Make sense of a noise world</h2>
            </div>

            <ul className="max-w-md mx-auto mt-16 space-y-12">
                <li className="relative flex items-center">
                    <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>
                    <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                        <i className="icofont-brainstorming icofont-4x text-[#0037ff]"></i>
                    </div>
                    <div className="ml-6">
                        <h3 className="text-lg font-semibold text-black">Economic Intelligence</h3>
                        <p className="mt-4 text-base text-gray-600">Data to help you understand your community and benchmark against the nation.</p>
                    </div>
                </li>
                <li className="relative flex items-center">
                    <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                    <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                      <i className="icofont-chart-growth icofont-4x text-[#0037ff]"></i>
                    </div>
                    <div className="ml-6">
                        <h3 className="text-lg font-semibold text-black">Credible Predictions</h3>
                        <p className="mt-4 text-base text-gray-600">Our AI models predict and forecast help you understand trends and risk.</p>
                    </div>
                </li>
                <li className="relative flex items-center">
                    <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                      <i className="icofont-chart-bar-graph icofont-4x text-[#0037ff]"></i>
                    </div>
                    <div className="ml-6">
                        <h3 className="text-lg font-semibold text-black">Data Visualizations</h3>
                        <p className="mt-4 text-base text-gray-600">Easily explore and export data on employment, earnings, housing, mortgages, and consumption.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}