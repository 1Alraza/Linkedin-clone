import Feed from "@/components/feed";
import Input from "@/components/input";
import { getallPosts } from "@/lib/actions/post";

export default async function Home() {
  const data = await getallPosts();

  return (
    <div className="min-h-screen max-w-xl mx-auto px-4">
      <div className="rounded-xl bg-white border border-slate-200 px-4 py-3 mt-4 shadow-sm">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-800">Home</h2>
      </div>

      <div className="mt-6 space-y-6">
        <Input />
        <Feed data={data} />
      </div>
    </div>
  );
}
