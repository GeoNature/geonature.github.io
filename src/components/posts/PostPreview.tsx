import Link from "next/link";

import Post from "@/interfaces/Post";

const PostPreview = ({ post }: { post: Post }) => (
  <div className="card">
    <div className="card-body">
      <h3 className="card-title h5">
        <Link as={`/posts/${post.slug}`} href="/posts/[post.slug]">
          {post.title}
        </Link>
      </h3>
      <p className="card-text">{post.date}</p>
      <p className="card-text">{post.excerpt}</p>
    </div>
  </div>
);

export default PostPreview;
