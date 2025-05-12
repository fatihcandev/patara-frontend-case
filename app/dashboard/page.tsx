'use client';

import Image from 'next/image';

import Stats from '@/components/dashboard/Stats';
import ReferralLink from '@/components/dashboard/ReferralLink';
import Earnings from '@/components/dashboard/earnings';
import useAuthStore from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loading from '@/components/Loading';

const Dashboard = () => {
  const { hasHydrated, signedIn } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (hasHydrated && !signedIn) {
      router.push('/');
    }
    // don't need router.push
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedIn, hasHydrated]);

  if (!hasHydrated) {
    return <Loading />;
  }

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-[60px] p-5 pb-[108px]">
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="bg-background-primary flex w-full flex-col rounded-2xl p-4 lg:max-w-[72.5%] lg:flex-row lg:p-10">
          <div className="flex w-full flex-col lg:max-w-[480px]">
            <div className="mb-[76px] flex w-full max-w-[350px] flex-col">
              <h1>Refer and Earn</h1>
              <p className="text-secondary-foreground">
                Invite your friends to Patara and earn a share of their on-chain
                rewards forever!
              </p>
            </div>
            <ReferralLink />
          </div>
          <Image
            src="/avatars-circle.png"
            alt=""
            width={320}
            height={320}
            className="ml-auto object-contain max-xl:hidden"
          />
        </div>
        <Stats />
      </div>
      <Earnings />
    </div>
  );
};

export default Dashboard;
