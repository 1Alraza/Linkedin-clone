'use client';

import { useActionState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SignIn } from '@/lib/actions/user';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const [formState, formAction] = useActionState(SignIn, {});
  const router = useRouter();

  useEffect(() => {
    if (formState?.success) {
      router.push('/');
    }
  }, [formState?.success, router]);

  return (
    <div className="w-full max-w-md bg-slate-50 rounded-lg shadow-lg p-8 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-600">
          Stay connected and sign in to your account
        </p>
        <p className="text-sm mt-2 text-gray-500">
          New to LinkedIn?{" "}
          <Link href="/sign-up" className="text-blue-600 hover:underline">
            Join now
          </Link>
        </p>
      </div>

      <form action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
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

        {formState?.error && (
          <p className="text-red-500 text-sm">{formState.error}</p>
        )}
        {formState?.success && (
          <p className="text-green-600 text-sm">Login successful!</p>
        )}

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          Sign In
        </Button>
      </form>

    </div>
  );
}