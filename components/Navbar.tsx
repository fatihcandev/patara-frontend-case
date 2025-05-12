'use client';

import { useRouter } from 'next/navigation';

import { Button } from './ui/button';
import SearchInput from './SearchInput';
import SignedInUserMenu from './SignedInUserMenu';
import useAuthStore from '@/store/useAuthStore';
import { Bell, Gear, Menu, PataraLogo, Search } from '@/assets/svg';
import { useState } from 'react';
import { XIcon } from 'lucide-react';

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { signedIn, setSignedIn } = useAuthStore();
  const router = useRouter();
  return (
    <nav className="bg-background relative flex h-[80px] items-center p-5">
      {showSearchBar && (
        <div className="absolute top-0 right-0 left-0">
          <SearchInput className="h-[80px] rounded-none py-0 pr-7" />
          <Button
            className="absolute right-0 -bottom-8"
            size="sm"
            variant="ghost"
            onClick={() => setShowSearchBar(false)}
          >
            <XIcon />
            Cancel search
          </Button>
        </div>
      )}
      <Menu className="mr-4" />
      <PataraLogo />
      <SearchInput className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 max-lg:hidden lg:max-w-[300px] xl:max-w-[464px]" />
      <div className="ml-auto flex gap-2">
        <Button
          size="icon"
          variant="secondary"
          className="text-primary-foreground lg:hidden"
          onClick={() => setShowSearchBar(true)}
        >
          <Search className="size-6" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="text-primary-foreground"
        >
          <Bell className="size-6" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="text-primary-foreground"
        >
          <Gear className="size-6" />
        </Button>
        {signedIn ? (
          <span className="max-md:hidden">
            <SignedInUserMenu />
          </span>
        ) : (
          <Button
            className="px-7 max-md:hidden"
            onClick={() => {
              setSignedIn(true);
              router.push('/dashboard');
            }}
          >
            Connect/Sign in
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
