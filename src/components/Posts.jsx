import Link from 'next/link';
import { HiDotsHorizontal } from 'react-icons/hi';
import moment from 'moment';
import Icons from './icons';
import { cookies } from 'next/headers';

export default async function Post({ post }) {
  const cookieStore = await cookies();
  const userId = cookieStore.get('user_id')?.value;

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4">
      <div className="flex w-full">
        <Link href={`/user/${post?.userId}`}>
          <img
            src={post?.profileImg}
            alt="user"
            className="h-11 w-11 rounded-full object-cover mr-4"
          />
        </Link>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <span className="truncate max-w-[120px] font-medium text-slate-800">
                @{post?.username}
              </span>
              <span className="text-slate-400">·</span>
              <span className="truncate max-w-[100px]">
                {moment(post?.createdAt).fromNow()}
              </span>
            </div>
            <HiDotsHorizontal className="text-slate-400 h-4 w-4" />
          </div>

          <Link href={`/posts/${post?.id}`}>
            <p className="text-slate-800 text-sm mt-2 mb-3">{post?.text}</p>
            {post?.image && (
              <img
                src={post?.image}
                alt="post-img"
                className="rounded-xl w-full max-h-[400px] object-cover"
              />
            )}
          </Link>

          <Icons post={post} currentUserId={userId} />
        </div>
      </div>
    </div>
  );
}
