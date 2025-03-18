import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import type { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');

  return (
    <div className="bg-white border border-gray-200 rounded-sm mb-6">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.avatar}
            alt={post.user.username}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-semibold">{post.user.username}</span>
        </div>
        <MoreHorizontal className="h-5 w-5 cursor-pointer" />
      </div>

      <img src={post.image} alt="" className="w-full object-cover" style={{ maxHeight: '600px' }} />

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Heart
              className={`h-6 w-6 cursor-pointer ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
            />
            <MessageCircle className="h-6 w-6 cursor-pointer" />
            <Send className="h-6 w-6 cursor-pointer" />
          </div>
          <Bookmark className="h-6 w-6 cursor-pointer" />
        </div>

        <div className="mb-2">
          <span className="font-semibold">{post.likes.toLocaleString()} likes</span>
        </div>

        <div className="mb-2">
          <span className="font-semibold mr-2">{post.user.username}</span>
          {post.caption}
        </div>

        {post.comments.length > 0 && (
          <div className="text-sm text-gray-500 mb-2">
            View all {post.comments.length} comments
          </div>
        )}

        <div className="text-xs text-gray-500">{post.timestamp}</div>
      </div>

      <div className="border-t border-gray-200 p-4">
        <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 focus:outline-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            className={`font-semibold ${
              comment ? 'text-blue-500' : 'text-blue-200'
            }`}
            disabled={!comment}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}