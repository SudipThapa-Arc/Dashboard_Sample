import { IncomeTracker } from '@/components/dashboard/IncomeTracker';
import { ProjectList } from '@/components/dashboard/ProjectList';
import { ConnectWidget } from '@/components/dashboard/ConnectWidget';
import { PremiumPromoCard } from '@/components/dashboard/PremiumPromoCard';
import { ProposalProgressCard } from '@/components/dashboard/ProposalProgressCard';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <section className="h-[400px]">
            <IncomeTracker />
          </section>

          <section>
            <ProjectList />
          </section>
        </div>

        {/* Right Column (Sidebar Widgets) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <section>
            <ConnectWidget />
          </section>

          <section>
            <PremiumPromoCard />
          </section>

          <section className="flex-1">
            <ProposalProgressCard />
          </section>
        </div>
      </div>
    </div>
  );
}

