'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { useCopyToClipboard } from '@/hooks';
import { Share } from '@/assets/svg';

const REFERRAL_LINK = '0x0e0Fcb520F76f3eAC0Aa764De4B97C53Eb366158';

const ReferralLink = () => {
  const [copied, setCopied] = useState(false);
  const { copy } = useCopyToClipboard();

  const handleCopy = () => {
    copy(REFERRAL_LINK);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-secondary flex flex-col rounded-xl px-4 py-6">
        <span className="text-secondary-foreground text-sm">
          Your Referral Link
        </span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          {REFERRAL_LINK}
        </span>
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <Button className="md:flex-1" onClick={handleCopy} size="lg">
          {copied ? 'Copied!' : 'Copy Link'}
        </Button>
        <Button className="md:flex-1" variant="secondary" size="lg">
          <Share className="size-6" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default ReferralLink;
