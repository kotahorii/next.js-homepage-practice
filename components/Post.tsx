import React, { VFC } from "react";
import { Posts } from "../type";
import Link from "next/link";

type Props = {
  post: Posts;
};
const Post: VFC<Props> = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
};

export default Post;
