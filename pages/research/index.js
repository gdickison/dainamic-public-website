/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import papers from '../../public/data/papers.json'

export default function Research() {
  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Learn More</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Download our whitepapers to learn how data analysis will inform decision making, risk management, and regulatory compliance.
          </p>
        </div>
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          {papers && papers.map((paper) => (
            <li key={paper.title} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <Link href={`research/research-download/${paper.paperSlug}`} className="w-fit">
                <img className="border-2 border-gray-100 flex-none object-cover" src={paper.imageUrl} alt={`Cover of ${paper.title}`} />
              </Link>
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{paper.title}</h3>
                <p className="text-base leading-7 text-gray-600">{paper.author}</p>
                <p className="text-sm leading-7 text-gray-600">{paper.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{paper.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
