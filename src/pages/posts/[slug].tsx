import { FC } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

type Props = {
  post: any;
  morePosts: any[];
  preview?: boolean;
};

const PostHeader: FC<{ title: string; date: string; author: string }> = ({
  title,
  date,
  author,
}) => {
  return (
    <Section title={title} hero>
      {author}, {date}
    </Section>
  );
};

const PostBody: FC<{ content: string }> = ({ content }) => {
  return (
    <div className="container my-5">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default function Post({ post }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Page>
      <article>
        <Head>
          <title>{post.title}</title>
        </Head>
        <PostHeader title={post.title} date={post.date} author={post.author} />
        <PostBody content={post.content} />
      </article>
    </Page>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "author",
    "slug",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
