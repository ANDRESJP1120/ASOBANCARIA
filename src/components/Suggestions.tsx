import React from 'react';

const suggestions = [
  {
    username: 'photography_lover',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
    subtitle: 'Followed by user123 + 2 more',
  },
  {
    username: 'travel_enthusiast',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop',
    subtitle: 'Followed by jane_doe + 3 more',
  },
  {
    username: 'food_blogger',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    subtitle: 'Followed by cooking_master + 4 more',
  },
];

export default function Suggestions() {
  return (
    <div className="hidden lg:block w-80">
      <div className="fixed p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-gray-500">Suggestions For You</span>
          <button className="text-xs font-semibold">See All</button>
        </div>
        
        {suggestions.map((suggestion) => (
          <div key={suggestion.username} className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <img
                src={suggestion.avatar}
                alt={suggestion.username}
                className="h-8 w-8 rounded-full object-cover mr-3"
              />
              <div>
                <div className="text-sm font-semibold">{suggestion.username}</div>
                <div className="text-xs text-gray-500">{suggestion.subtitle}</div>
              </div>
            </div>
            <button className="text-xs font-semibold text-blue-500">Follow</button>
          </div>
        ))}
        
        <div className="mt-4 text-xs text-gray-400">
          © 2024 Instagram Clone
        </div>
      </div>
    </div>
  );
}