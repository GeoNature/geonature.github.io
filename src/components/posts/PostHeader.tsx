type Props = {
  title: string;
  date: string;
  author: string;
};

const PostHeader = ({ title, date, author }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <span>{author}</span>
    </>
  );
};

export default PostHeader;
