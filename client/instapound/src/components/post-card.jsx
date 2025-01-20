
import { useState } from "react";

export function PostCard({ id, username, userImage, image, likes, caption, comments }) {
  const [isCommentOpen, setIsCommentOpen] = useState(false)
  const [localComments, setLocalComments] = useState(comments)

  const addComment = (text) => {
    setLocalComments([
      ...localComments,
      {
        id: localComments.length + 1,
        username: "current_user",
        text,
      },
    ])
  }

  return (
    <div className="bg-white border rounded-lg mb-8">
      <div className="flex items-center p-4">
        <div className="h-8 w-8 mr-3 rounded-full bg-gray-200 flex justify-center items-center">
          <img src={userImage} alt={username} className="h-full w-full rounded-full object-cover" />
          <span className="text-gray-500">{username && username[0].toUpperCase()}</span>
        </div>
        <span className="font-semibold">{username}</span>
      </div>
      
      <div className="relative aspect-square">
        <img
          src={image || "/placeholder.svg"}
          alt={`Post by ${username}`}
          className="object-cover h-full w-full"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <button className="hover:opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06 4.92 4.93 4.93 4.93 1.06-1.06a5.5 5.5 0 0 0 0-7.78L12 5.67l-1.06 1.06a5.5 5.5 0 0 0-1.5 2.06V14.5a5.5 5.5 0 0 0 6 0V6.7a5.5 5.5 0 0 0-3.94 0L12 5.67 13.06 4.61z" />
              </svg>
            </button>
            <button className="hover:opacity-75" onClick={() => setIsCommentOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9l1.9 5.7z" />
              </svg>
            </button>
            <button className="hover:opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333 ```jsx
                -1.333-3.732 0L4.412 10c-.77 1.333.192 3 1.732 3h13.856c1.54 0 2.502-1.667 1.732-3L12 9z" />
              </svg>
            </button>
          </div>
          <button className="hover:opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
            </svg>
          </button>
        </div>

        <div className="mb-2">
          <span className="font-semibold">{likes.toLocaleString()} likes</span>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold mr-2">{username}</span>
            {caption}
          </p>
          {localComments.length > 0 && (
            <button
              onClick={() => setIsCommentOpen(true)}
              className="text-gray-500 text-sm"
            >
              View all {localComments.length} comments
            </button>
          )}
        </div>
      </div>

      <div className={`fixed inset-0 bg-black bg-opacity-50 ${isCommentOpen ? 'block' : 'hidden'}`} onClick={() => setIsCommentOpen(false)}>
        <div className="bg-white rounded-lg p-4 max-w-md mx-auto mt-20">
          <h2 className="font-semibold">Comments</h2>
          <div className="space-y-2">
            {localComments.map(comment => (
              <div key={comment.id} className="flex items-center">
                <span className="font-semibold">{comment.username}</span>
                <span className="ml-2">{comment.text}</span>
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Add a comment..."
            className="border rounded-lg p-2 w-full mt-4"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.currentTarget.value) {
                addComment(e.currentTarget.value);
                e.currentTarget.value = '';
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}