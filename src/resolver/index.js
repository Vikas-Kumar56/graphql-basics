import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { Post } from "./Post";
import { Comment } from "./Comment";
import { User } from "./User";
import { Subscription } from "./Subscription";

export const resolvers = {
  Query,
  Mutation,
  Subscription,
  Post,
  Comment,
  User
};