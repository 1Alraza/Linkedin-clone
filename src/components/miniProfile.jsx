'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, UserCog } from "lucide-react";
import ManageAccountDialog from "./ManageAccountDialog";
import { SignOut } from "@/lib/actions/user";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import Link from "next/link";

const MiniProfile = ({ user }) => {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);

  if (!user) return null;

  async function handleSignOut() {
    const res = await SignOut();
    if (res?.success) {
      router.push('/sign-in');
    } else {
      alert('Sign out failed');
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-14 w-14 cursor-pointer shadow-sm ring-1 ring-slate-300">
            <AvatarImage src={user?.avatar || ''} alt="User avatar" />
            <AvatarFallback className="bg-slate-900 text-white font-bold">
              {user?.username?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          side="right"
          className="w-60 p-4 rounded-xl border border-slate-200 shadow-lg bg-white"
        >
          <div className="flex flex-col justify-between h-48">
            <div>
              <DropdownMenuLabel className="flex flex-col items-start gap-2">
                <img
                  src={user?.avatar || ''}
                  alt={user?.username || 'user'}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-sm font-semibold text-slate-700">
                  Logged in as {user?.username}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
            </div>

            <div className="flex flex-col gap-2 mt-auto">
              <DropdownMenuItem
                onClick={() => setDialogOpen(true)}
                className="flex items-center gap-2 cursor-pointer text-sm text-slate-600 hover:text-slate-900"
              >
                <UserCog className="h-4 w-4" />
                <span>Manage Account</span>
              </DropdownMenuItem>

              <Link href={`/user/${user?.id}`}>
                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer text-sm text-slate-600 hover:text-slate-900"
                >
                  <UserCog className="h-4 w-4" />
                  <span>View Profile</span>
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem
                onClick={handleSignOut}
                className="flex items-center gap-2 cursor-pointer text-sm text-red-500 hover:text-red-700"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <ManageAccountDialog open={dialogOpen} onOpenChange={setDialogOpen} user={user} />
    </>
  );
};

export default MiniProfile;
