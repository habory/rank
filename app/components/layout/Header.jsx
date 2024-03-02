"use client";

import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

export default function Header({userId}) {
  return (
    <div className="flex justify-between items-center h-14 px-10 border-b border-gray-300 shadow-md">
      <div className="font-bold">
        <Link href="/" className="ks-title-2 text-2xl">Habory</Link>
      </div>
      

      {userId ? (
        <button type="button" onClick={() => signOut({ callbackUrl: "/" })} className="bg-black hover:bg-gray-700 text-white font-bold py-1.5 px-6 rounded-full">로그아웃</button>
      ) : (
        <button type="button" onClick={() => signIn("google")} className="bg-black hover:bg-gray-700 text-white font-bold py-1.5 px-6 rounded-full">로그인</button>
      )}
    </div>
  )
}
