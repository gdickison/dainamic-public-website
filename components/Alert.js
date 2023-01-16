export default function Alert ({alertHeading = "Alert Heading", alertText = "Alert text", closeAlert}) {
  return (
    <div className="fixed inset-0 md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:overflow-y-auto h-fit z-10 flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-blue-500 text-gray-100">
      <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
        {alertHeading}
      </h2>
      <p className="flex-1 dark:text-gray-400">{alertText}.</p>
      <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
        <button className="px-8 py-2 rounded-sm bg-blue-700 hover:bg-blue-800" onClick={closeAlert}>Okay</button>
      </div>
    </div>
  )
}