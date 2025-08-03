// app/user/[id]/page.jsx

import { HiArrowLeft } from 'react-icons/hi';
import Link from 'next/link';
import { getUserByUsername } from '@/lib/actions/user';
import Post from '@/components/Posts';
import FollowButton from '@/components/FollowButton';
import { getPostsByUserId } from '@/lib/actions/post';
import { cookies } from 'next/headers';

export default async function UserPage({ params }) {
  let data = null;
  const cookieStore = await cookies();
  const userId = cookieStore.get("user_id")?.value;

  try {

    const id = params.id;
    
    data = await getUserByUsername(id);
    if (data) {
      const posts = await getPostsByUserId(data.id);
      data.posts = posts;
    }
  } catch (error) {
    console.error("Failed to fetch user or posts:", error);
  }

  return (
    <div className="bg-slate-50 min-h-screen px-4 pt-4 max-w-xl mx-auto">
      <div className="flex items-center space-x-2 sticky top-3 z-50 bg-white px-3 py-2 rounded-xl shadow-md w-fit">
        <Link href="/" className="hover:bg-stone-200 p-2 rounded-full transition">
          <HiArrowLeft className="h-5 w-5 text-slate-700" />
        </Link>
        <h2 className="text-md font-medium text-slate-700">Back</h2>
      </div>

      {!data && (
        <div className="bg-red-100 text-red-700 border border-red-200 rounded-xl p-5 text-center mt-10 shadow-sm">
          <h2 className="text-lg font-semibold">User not found</h2>
        </div>
      )}

      {data && (
        <div className="bg-white rounded-xl shadow-md p-5 mt-6">
          <div className="flex items-center space-x-4">
            <img
              src={data.avatar}
              alt="Profile"
              className="h-16 w-16 rounded-full object-cover border border-slate-200"
            />
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                {data.firstName
                  ? `${data.firstName} ${data.lastName}`
                  : data.username}
              </h2>
              {data.bio && (
                <p className="text-sm text-slate-600 mt-1">{data.bio}</p>
              )}
            </div>
          </div>

          <div className="mt-4  flex space-x-6 text-sm  ">
            <div>
              <span className="font-bold">{data.following.length}</span> Following
            </div>
            <div>
              <span className="font-bold">{data.followers.length}</span> Followers
            </div>
          </div>

          <div className="mt-4">
            <FollowButton profileUser={data} userId={userId} />
          </div>
        </div>
      )}

      {data?.posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
