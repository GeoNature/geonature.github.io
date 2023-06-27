import { FC } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";
import { getPostBySlug, getAllPosts } from "@/lib/api";

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
      <ReactMarkdown
        components={{
          img: (props) => (
            <img src={props.src} alt={props.alt} className="img-fluid" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
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

  return {
    props: {
      post: post,
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
