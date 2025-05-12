import { ChevronDownIcon, LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useAuthStore from '@/store/useAuthStore';
import { Gear } from '@/assets/svg';

const SignedInUserMenu = () => {
  const setSignedIn = useAuthStore((store) => store.setSignedIn);
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="bg-secondary flex h-10 items-center rounded-lg pr-2 pl-1">
          <Image
            src="/signed-in-user-avatar.webp"
            width={32}
            height={32}
            alt=""
          />
          <span className="mr-4 ml-2 text-sm font-semibold">@patara.sui</span>
          <ChevronDownIcon className="text-secondary-foreground size-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-secondary">
        <DropdownMenuItem className="text-primary-foreground">
          <Gear />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-primary-foreground"
          onClick={() => {
            setSignedIn(false);
            router.push('/');
            useAuthStore.persist.clearStorage();
          }}
        >
          <LogOutIcon />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SignedInUserMenu;
