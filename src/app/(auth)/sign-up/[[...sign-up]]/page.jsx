


'use client';

import { SignUp } from '@/lib/actions/user';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [formState, formAction,isPending] = useActionState(SignUp, {});
  const router = useRouter();
  const [avatarPreview, setAvatarPreview] = useState(null);

  useEffect(() => {
    if (formState?.success) {
      router.push('/sign-in');
    }
  }, [formState, router]);

  function handleAvatarChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    } else {
      setAvatarPreview(null);
      e.target.value = null;
    }
  }

  return (
    <div className="w-full max-w-md bg-slate-50 rounded-lg shadow-lg p-8 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900">Join LinkedIn</h1>
        <p className="text-sm text-gray-600">
          Make the most of your professional life
        </p>
        <p className="text-sm mt-2 text-gray-500">
          Already a member?{' '}
          <Link href="/sign-in" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>

      <form action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="username">User Name</Label>
          <Input
            name="username"
            id="username"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder=""
            required
          />
        </div>

        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            name="bio"
            id="bio"
            placeholder="Tell us about yourself..."
          />
        </div>

        <div>
          <Label htmlFor="avatar">Avatar</Label>
          <div className="flex items-center gap-4">
            <Input
              name="avatar"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="w-full"
            />
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="w-12 h-12 rounded-full object-cover border"
              />
            )}
          </div>
        </div>

        {formState?.error && (
          <p className="text-red-500 text-sm">{formState.error}</p>
        )}
        {formState?.success && (
          <p className="text-green-600 text-sm">Account created successfully!</p>
        )}

        <Button
        type="submit"
        className="w-full bg-[#1e3a8a] hover:bg-[#1a357a] text-white"
        disabled={isPending}
        >
        {isPending ? 'Creating...' : 'Agree & Join'}
      </Button>
      </form>

    </div>
  );
}