'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import BlurredLetters from '@/components/BlurredLetters';
import Loading from '@/components/Loading';
import { Button } from '@/components/ui/button';
import useAuthStore from '@/store/useAuthStore';

export default function Home() {
  const { hasHydrated: hasHydrated, signedIn, setSignedIn } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (hasHydrated && signedIn) {
      router.push('/dashboard');
    }
    // don't need router.push
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedIn, hasHydrated]);

  if (!hasHydrated) {
    return <Loading />;
  }

  return (
    <div className="relative mx-auto mt-[60px] w-full max-w-[1260px] pb-10 max-md:mb-[117px] max-md:px-4">
      <BlurredLetters />
      <div className="md:bg-background-primary mx-auto flex w-full max-w-[464px] flex-col items-center rounded-xl px-5 md:border md:py-10">
        <Image
          src="/avatars-circle.png"
          alt=""
          width={320}
          height={320}
          className="mb-20 object-cover"
        />
        <h1 className="text-center text-2xl font-medium">
          Refer friends and earn with Patara!
        </h1>
        <p className="text-secondary-foreground mt-3 mb-10 text-center md:max-w-[375px]">
          Invite your friends to Patara and earn a share of their on-chain
          rewards forever!
        </p>
        <Button
          size="lg"
          className="px-4 max-md:w-full"
          onClick={() => {
            setSignedIn(true);
            router.push('/dashboard');
          }}
        >
          Connect/Sign in
        </Button>
      </div>
    </div>
  );
}
