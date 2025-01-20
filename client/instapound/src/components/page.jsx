import { Header } from "@/components/header"
import { Stories } from "@/components/stories"
import { PostGrid } from "@/components/post-grid"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto">
        <Stories />
        <div className="p-4">
          <PostGrid />
        </div>
      </main>
    </div>
  )
}

