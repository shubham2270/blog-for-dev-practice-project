import React from "react";

import { TerminalIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <header className='border-b border-gray-100'>
      <div className='container mx-auto px-4 sm:px-6 py-4'>
        <Link href='/'>
          <a className='flex item-center space-x-1 text-blue-600'>
            <TerminalIcon className='w-8 h-8 flex-shrink-0' />
            <span className='font-bold text-lg tracking-light whitespace-nowrap'>
              Blog for Dev
            </span>
          </a>
        </Link>
        {!loading ? (
          <div>
            {!session ? (
              <button
                onClick={signIn}
                className='bg-blue-600 text-white px-4 py2 rounded-md'
              >
                Sign In
              </button>
            ) : (
              <div>
                <img
                  src={session.user.image}
                  className='rounded-full border-2 border-blue-600 w-8 h-8'
                  alt=''
                ></img>
                <p>Hello, {session.user.name?.[0] ?? "there"}</p>
              </div>
            )}
            {session ? (
              <button
                className='bg-red-600 text-white px-4 py2 rounded-md'
                onClick={signOut}
              >
                Sign Out
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
