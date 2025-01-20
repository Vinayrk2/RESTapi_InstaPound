

const stories = [
  { id: 1, username: "user_one" },
  { id: 2, username: "travel_pics" },
  { id: 3, username: "photography" },
  { id: 4, username: "nature_lover" },
  { id: 5, username: "food_diary" },
  { id: 6, username: "lifestyle" },
  { id: 7, username: "adventure" },
  { id: 8, username: "daily_posts" },
];

export function Stories() {
  return (
    <div className="flex space-x-4 p-4 overflow-x-auto bg-white border-b">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
          <button className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-gray-200"></div>
            </div>
          </button>
          <span className="text-xs">{story.username}</span>
        </div>
      ))}
    </div>
  );
}

