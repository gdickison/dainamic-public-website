export default function Footer () {
  return (
    <section className="py-10 bg-gray-100 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                    <img className="w-auto h-9" src="/images/dainamic_new_logo_dark.png" alt="" />

                    <p className="text-base leading-relaxed text-gray-600 mt-7">Dainamic’s high quality economic data and analytical tools help you make sense of local market conditions so financial institutions can be confident about decisions and the reporting they send to regulators.</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div>
                    <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Contact Us</p>

                    <ul className="mt-6 space-y-4">
                        <li className="flex items-center gap-2">
                            <i className="icofont-email icofont-2x text-red-500"></i>
                            <a href="mailTo:hello@dainamic.ai" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> hello@dainamic.ai </a>
                        </li>

                        <li className="flex items-center gap-2">
                            <i className="icofont-globe icofont-2x text-red-500"></i>
                            <a href="https://dainamic.ai" target="_blank" rel="noreferrer" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> dainamic.ai </a>
                        </li>
                    </ul>
                </div>

            </div>

            <hr className="mt-16 mb-10 border-gray-200" />

            <p className="text-sm text-center text-gray-600">© Copyright 2023 - All Rights Reserved</p>
        </div>
    </section>
  )
}