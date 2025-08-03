import Post from "./Posts";

export default function Feed({ data }) {
  return (
    <div className="space-y-4">
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
