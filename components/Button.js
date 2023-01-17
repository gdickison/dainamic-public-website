export default function Button ({target, text}) {
  return (
    <button type="button" className="mt-4 px-8 py-3 font-semibold rounded bg-blue-600 text-gray-100">
      <a href={target}>{text}</a>
    </button>
  )
}