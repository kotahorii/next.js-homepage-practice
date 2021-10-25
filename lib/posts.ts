import fetch from "node-fetch";
import { Posts } from "../type";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export const getAllPostsData = async () => {
  const res = await fetch(apiUrl);
  const posts = await res.json();
  return posts;
};

export const getAllPostIds = async () => {
  const res = await fetch(apiUrl);
  const posts = (await res.json()) as Posts[];

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};

export const getPostData = async (id: string) => {
  const res = await fetch(`${apiUrl}/${id}/`);
  const post = (await res.json()) as Posts;

  return post;
};
