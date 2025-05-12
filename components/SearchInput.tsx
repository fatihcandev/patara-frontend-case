'use client';

import { Search, SearchTrigger } from '@/assets/svg';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { XIcon } from 'lucide-react';
import { useState } from 'react';

interface SearchInputProps {
  className?: string;
}

const SearchInput = ({ className }: SearchInputProps) => {
  const [value, setValue] = useState('');
  return (
    <div
      className={cn(
        'bg-secondary text-secondary-foreground relative mx-auto flex h-10 items-center rounded-lg border px-2',
        className,
      )}
    >
      <Search className="absolute top-1/2 -translate-y-1/2" />
      <input
        type="text"
        className="text-foreground placeholder:text-secondary-foreground w-full border-none pl-8 text-sm outline-none"
        placeholder="Enter Accounts, Platforms, NFTs, Token"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value ? (
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-1/2 right-0 z-10 -translate-y-1/2"
          onClick={() => setValue('')}
        >
          <XIcon className="size-4" />
        </Button>
      ) : (
        <SearchTrigger className="ml-auto max-xl:hidden" />
      )}
    </div>
  );
};

export default SearchInput;
