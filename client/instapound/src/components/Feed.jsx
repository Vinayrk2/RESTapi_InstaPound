import React from 'react';
import { Post } from './Post';

const posts = [
  {
    id: 1,
    username: "traveler",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-63dHXr13V3GyEulbx126394o2QPwP1.png",
    caption: "Amazing view from the plane! ✈️ #travel #adventure",
    likes: 1234,
    timestamp: "2 HOURS AGO",
    comments: [
      { id: 1, username: "user1", text: "Incredible shot! 😍", timestamp: "1 HOUR AGO" },
      { id: 2, username: "user2", text: "Where is this?", timestamp: "30 MINUTES AGO" },
    ],
  },
  {
    id: 2,
    username: "photographer",
    image: "/placeholder.svg?height=600&width=600",
    caption: "Perfect lighting today 📸 #photography",
    likes: 856,
    timestamp: "5 HOURS AGO",
    comments: [
      { id: 1, username: "user3", text: "Beautiful composition!", timestamp: "4 HOURS AGO" },
      { id: 2, username: "user4", text: "What camera did you use?", timestamp: "3 HOURS AGO" },
    ],
  },
  {
    id: 3,
    username: "artist",
    image: "/placeholder.svg?height=600&width=600",
    caption: "New artwork complete 🎨 #art",
    likes: 2345,
    timestamp: "1 DAY AGO",
    comments: [
      { id: 1, username: "user5", text: "This is amazing!", timestamp: "20 HOURS AGO" },
      { id: 2, username: "user6", text: "Love your style!", timestamp: "18 HOURS AGO" },
    ],
  },
];

export function Feed() {
  return (
    <div className="max-w-xl mx-auto px-4">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

