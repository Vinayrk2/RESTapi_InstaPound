import React, { useState } from 'react';

export function Post({ username, image, caption, likes, timestamp, comments }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [commentsState, setComments] = useState(comments);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(current => isLiked ? current - 1 : current + 1);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: commentsState.length + 1,
        username: "current_user",
        text: newComment,
        timestamp: "now"
      };
      setComments([...commentsState, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <article className="bg-white border rounded-lg mb-6">
      <div className="flex items-center p-4">
        <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
        <span className="font-semibold">{username}</span>
      </div>
      
      <img src={image || "/placeholder.svg"} alt={`Post by ${username}`} className="w-full aspect-square object-cover" />

      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <button onClick={handleLike} className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isLiked ? 'text-red-500 fill-current' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button onClick={() => setShowComments(!showComments)} className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
          <button className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        <div className="mb-2">
          <span className="font-semibold">{likeCount.toLocaleString()} likes</span>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold mr-2">{username}</span>
            {caption}
          </p>
          {commentsState.length > 0 && (
            <button
              onClick={() => setShowComments(!showComments)}
              className="text-gray-500 text-sm"
            >
              View all {commentsState.length} comments
            </button>
          )}
          <p className="text-xs text-gray-500 uppercase">{timestamp}</p>
        </div>

        {showComments && (
          <div className="mt-4 space-y-2">
            {commentsState.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-2">
                <span className="font-semibold">{comment.username}</span>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleAddComment} className="mt-4 flex items-center">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-grow px-2 py-1 border-b focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={!newComment.trim()}
            className="ml-2 text-blue-500 font-semibold disabled:opacity-50"
          >
            Post
          </button>
        </form>
      </div>
    </article>
  );
}