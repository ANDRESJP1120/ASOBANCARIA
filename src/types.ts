export interface Post {
  id: string;
  user: {
    username: string;
    avatar: string;
  };
  image: string;
  caption: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
}

export interface Comment {
  id: string;
  username: string;
  text: string;
}