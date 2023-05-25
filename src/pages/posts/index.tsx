import Head from "next/head";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";
import PostList from "@/components/posts/PostList";
import { getAllPosts } from "@/lib/api";
import Post from "@/interfaces/Post";

export default function Actualites({ posts }: { posts: Post[] }) {
  return (
    <Page>
      <Head>
        <title>Actualités</title>
      </Head>
      <main>
        <Section
          title="Actualités"
          hero
          heroImage={require("public/images/banners/header-actus.jpg")}
        />
        <Section>{posts.length > 0 && <PostList posts={posts} />}</Section>
      </main>
    </Page>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts(["title", "date", "slug", "author", "excerpt"]);

  return {
    props: { posts },
  };
};
