'use client'

import { SignOut } from '@/lib/actions/user';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaLinkedin } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import MiniProfile from './miniProfile';

export default function Sidebar({ user }) {
  const router = useRouter();

  async function handleSignOut() {
    const res = await SignOut();
    if (res?.success) {
      router.push('/sign-in');
    } else {
      alert('Sign out failed');
    }
  }

  return (
    <div className="flex flex-col p-4 pt-10 h-full sm:h-screen items-center overflow-y-auto bg-[#f1f5f9]">
      <div className="flex flex-col justify-between bg-white rounded-2xl shadow-lg w-full px-6 py-6 border border-[#e2e8f0]">
        {/* Top section: Logo + Navigation */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <Link href="/">
            <FaLinkedin className="w-16 h-16 text-[#1e3a8a] cursor-pointer p-2 hover:bg-[#e2e8f0] rounded-full transition-all duration-200" />
          </Link>

          {/* Home Link */}
          <Link
            href="/"
            className="flex items-center p-2 hover:bg-[#e2e8f0] text-[#1e3a8a] rounded-full transition-all duration-200 gap-3 w-fit"
          >
            <HiHome className="w-6 h-6" />
            <span className="font-medium hidden xl:inline text-sm">Home</span>
          </Link>
        </div>

        {/* Bottom section: Profile + Signout */}
        <div className="flex flex-col items-center gap-4 border-t border-[#cbd5e1] pt-6 mt-6">
          <MiniProfile user={user} />

          <div className="text-center">
            <h2 className="font-semibold text-sm text-[#334155]">{user.username}</h2>
            <p className="text-xs text-[#64748b]">{user.email}</p>
          </div>

          <button
            onClick={handleSignOut}
            className="bg-[#1e3a8a] text-white rounded-full hover:brightness-110 transition-all duration-200 w-44 h-9 shadow font-medium text-sm"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
