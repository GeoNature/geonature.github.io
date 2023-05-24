import Link from "next/link";

import Post from "@/interfaces/Post";

const PostListItem = ({ post }: { post: Post }) => (
  <li>
    <div className="row">
      <div className="col-md-1">{post.date}</div>
      <div className="col-md-11">
        <Link
          as={`/posts/${post.slug}`}
          href="/posts/[post.slug]"
          className="fw-bold"
        >
          {post.title}
        </Link>
      </div>
    </div>
  </li>
);

const PostList = ({ posts }: { posts: Post[] }) => (
  <ul className="list-unstyled">
    {posts.map((post) => (
      <PostListItem post={post} key={post.slug} />
    ))}
  </ul>
);

export default PostList;
