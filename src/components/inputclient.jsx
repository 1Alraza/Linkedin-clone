'use client';

import { HiOutlinePhotograph } from 'react-icons/hi';
import { useActionState, useEffect, useRef, useState } from 'react';
import { Post } from '@/lib/actions/post';

export default function InputClient({ user }) {
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState('');
  const imagePickRef = useRef(null);
  const [formState, formAction, isPending] = useActionState(Post, {});

  const addImageToPost = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (formState.success) {
      location.reload();
    }
  }, [formState.success]);

  const isPostDisabled = formState.submitting || (!content.trim());

  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-4">
      <form action={formAction}>
        <div className="flex space-x-3 w-full">
          <img
            src={user.avatar}
            alt="user-img"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="w-full divide-y divide-slate-200">
            <textarea
              name="content"
              className="w-full resize-none border-none outline-none tracking-wide text-sm min-h-[50px] text-slate-800"
              placeholder="What's on your mind?"
              rows="2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>

            {selectedFile && (
              <img
                onClick={() => {
                  setSelectedFile(null);
                  setImageFileUrl(null);
                }}
                src={imageFileUrl}
                alt="preview"
                className="w-full max-h-[250px] object-cover mt-3 rounded-xl cursor-pointer"
              />
            )}

            <div className="flex items-center justify-between pt-2.5">
              <HiOutlinePhotograph
                className="h-9 w-9 p-2 text-indigo-600 hover:bg-indigo-100 rounded-full cursor-pointer"
                onClick={() => imagePickRef.current.click()}
              />
              <input
                type="file"
                name="image"
                ref={imagePickRef}
                accept="image/*"
                hidden
                onChange={addImageToPost}
              />
              <input name="user" defaultValue={JSON.stringify(user)} hidden />
              <button
                type="submit"
                disabled={isPending || isPostDisabled}
                className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-full font-semibold hover:bg-[#1a357a] disabled:opacity-50 text-sm"
              >
                {isPending ? 'Posting...' : 'Post'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
