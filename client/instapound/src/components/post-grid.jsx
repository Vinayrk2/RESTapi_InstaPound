import { PostCard } from "./post-card"

const posts = [
  {
    id: 1,
    username: "traveler",
    userImage: "/placeholder.svg",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-63dHXr13V3GyEulbx126394o2QPwP1.png",
    likes: 1234,
    caption: "Amazing view from the plane! ✈️ #travel #adventure",
    comments: [
      { id: 1, username: "user1", text: "Incredible shot! 😍" },
      { id: 2, username: "user2", text: "Where is this?" },
    ],
  },
  {
    id: 2,
    username: "photographer",
    userImage: "/placeholder.svg",
    image: "/placeholder.svg",
    likes: 856,
    caption: "Perfect lighting today 📸 #photography",
    comments: [
      { id: 1, username: "user3", text: "Beautiful composition!" },
      { id: 2, username: "user4", text: "What camera did you use?" },
    ],
  },
  {
    id: 3,
    username: "artist",
    userImage: "/placeholder.svg",
    image: "/placeholder.svg",
    likes: 2345,
    caption: "New artwork complete 🎨 #art",
    comments: [
      { id: 1, username: "user5", text: "This is amazing!" },
      { id: 2, username: "user6", text: "Love your style!" },
    ],
  },
]

export function PostGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  )
}

