import { VFC } from "react";
import Layout from "../components/Layout";
import { getAllPostsData } from "../lib/posts";
import { Posts } from "../type";
import Post from "../components/Post";

type Props = {
  posts: Posts[];
};

const Blog: VFC<Props> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
};
