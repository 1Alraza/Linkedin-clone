'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import News from "./News";

export default function RightSidebar() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/${input}`);
  };

  return (
    <div className="p-5 w-full flex flex-col gap-6 bg-white shadow-md rounded-xl border border-slate-200">
      {/* Search Bar */}
      <div className="sticky top-0 z-10">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search people or posts..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-4 py-2 text-sm rounded-lg border border-slate-300 bg-white placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition"
          />
        </form>
      </div>

      {/* News Feed */}
      <News />
    </div>
  );
}
