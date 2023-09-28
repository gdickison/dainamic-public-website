import { useRouter } from "next/router"

export default function WhitepaperDownload () {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className="relative h-screen">
      <embed className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-24 px-12 w-full h-full" src={`/data/${slug}.pdf`} type="application/pdf" />
    </div>
  )
}