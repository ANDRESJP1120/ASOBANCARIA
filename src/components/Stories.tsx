import React from 'react';

const stories = [
  {
    username: 'your_story',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
  },
  {
    username: 'john_doe',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
  },
  {
    username: 'jane_smith',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    username: 'alex_wilson',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
  },
];

export default function Stories() {
  return (
    <div className="flex space-x-4 p-4 bg-white border border-gray-200 rounded-sm overflow-x-auto mb-6">
      {stories.map((story) => (
        <div key={story.username} className="flex flex-col items-center space-y-1 flex-shrink-0">
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600">
            <div className="p-[2px] rounded-full bg-white">
              <img
                src={story.avatar}
                alt={story.username}
                className="h-14 w-14 rounded-full object-cover cursor-pointer"
              />
            </div>
          </div>
          <span className="text-xs w-16 truncate text-center">{story.username}</span>
        </div>
      ))}
    </div>
  );
}