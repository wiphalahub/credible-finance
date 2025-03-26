'use client';

import { Layout } from '@/components/Layout';
import { Airdrop } from '@/components/dashboard/Airdrop';
import { AccountMenu } from '@/components/dashboard/AccountMenu';

export default function AirdropPage() {
  return (
    <Layout title="Airdrop" subtitle="Participate in token airdrops and earn rewards">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <AccountMenu />
        </div>
        <div className="md:col-span-3">
          <Airdrop />
        </div>
      </div>
    </Layout>
  );
} 