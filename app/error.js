"use client";

import Link from "next/link";

export default function Error({ error }) {
  return (
    <main className="flex justify-center items-center flex-col gap-4">
      <h1 className="text-2xl mt-15 font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>
      <Link href="/">
        <button className="inline-block bg-amber-500 text-gray-800 px-6 py-3 text-lg">
          Try again
        </button>
      </Link>
    </main>
  );
}
