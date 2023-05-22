type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PostBody;
