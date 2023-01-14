export default function FeatureCard ({title, icon, text}) {
  return (
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <i className={`icofont-${icon} icofont-4x text-red-600 w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0`}></i>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-xl uppercase font-medium mb-3">{title}</h2>
        <p className="leading-relaxed text-base">{text}</p>
      </div>
    </div>
  )
}