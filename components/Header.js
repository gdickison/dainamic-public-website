/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function Header () {
  return (
    <header className="bg-[#fff] bg-opacity-90 backdrop-blur-sm fixed top-0 left-0 right-0 mx-auto z-10">
      <div className="max-w-[1440px] px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" title="" className="flex">
              <img className="w-auto h-8" src="/images/dainamic_new_logo_dark.png" alt="" />
            </Link>
          </div>
          <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
            {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
            </svg>
            {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <Link href="/" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Home </Link>
            <Link href="/about" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> About </Link>
            <Link href="/blog" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Blog </Link>
            <Link href="/whitepapers" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Research </Link>
            <Link href="/contact" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Contact Us </Link>
          </div>
        </div>
      </div>
    </header>
  )
}