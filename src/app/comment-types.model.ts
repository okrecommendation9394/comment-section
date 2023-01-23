export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  user: {
    image: { img: string };
    username: string;
  };
  replies: Reply[];
  score: number;
}
export interface Reply {
  id: any;
  content: string;
  createdAt: string;
  replyingTo: string;
  replies: Reply[];
  score: number;
  user: {
    image: {
      img: string;
    };
    username: string;
  };
}
