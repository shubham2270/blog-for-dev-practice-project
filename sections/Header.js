import { TerminalIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;
