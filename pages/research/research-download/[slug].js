import { useRouter } from "next/router"
import ContactCapture from "../../../components/ContactCapture"
import papers from "../../../public/data/papers.json"

export default function ResearchDownload () {
  const router = useRouter()
  const { slug } = router.query
  const paper = papers.find(paper => paper.paperSlug === slug)

  return (
    <ContactCapture
      paper={paper}
    />
  )
}