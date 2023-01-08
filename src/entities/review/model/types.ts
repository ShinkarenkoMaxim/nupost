import { Effect } from 'effector';
import * as userModel from '@/entities/user';

export type Review = {
  id: number;
  name: string;
  content: string;
  imageUrl: string | null;
  likes: number;
  selfRating: number;
  usersRating: number;
  category: Category;
  pieceOfArt: PieceOfArt;
  user: userModel.types.User;
};

type Category = {
  id: number;
  name: string;
};

type PieceOfArt = {
  id: number;
  name: string;
};

export type FeedOptions = {
  effect: Effect<any, FeedResponse>;
};

export type FeedResponse = {
  reviews: Review[];
};
