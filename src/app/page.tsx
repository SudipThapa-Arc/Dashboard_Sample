import { WelcomeBanner } from '@/components/dashboard/WelcomeBanner';
import { StatsOverview } from '@/components/dashboard/StatsOverview';
import { ProfileCard } from '@/components/dashboard/ProfileCard';
import { WorkTimeChart } from '@/components/dashboard/WorkTimeChart';
import { TimeTracker } from '@/components/dashboard/TimeTracker';
import { CalendarWidget } from '@/components/dashboard/CalendarWidget';
import { InfoAccordion } from '@/components/dashboard/InfoAccordion';
import { OnboardingWidget } from '@/components/dashboard/OnboardingWidget';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Top Section: Welcome & High Level Stats */}
      <div className="flex flex-col lg:flex-row gap-8 items-end justify-between">
        <div className="flex-1 w-full">
          <WelcomeBanner />
        </div>
        <div className="w-full lg:w-auto">
          <StatsOverview />``
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[700px]">
        {/* Left Column: Profile & Info */}
        <div className="lg:col-span-3 flex flex-col gap-6 h-full">
          <ProfileCard />
          <div className="flex-1">
            <InfoAccordion />
          </div>
        </div>

        {/* Middle Column: Charts & Calendar */}
        <div className="lg:col-span-6 flex flex-col gap-6 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[320px]">
            <WorkTimeChart />
            <TimeTracker />
          </div>
          <div className="flex-1">
            <CalendarWidget />
          </div>
        </div>

        {/* Right Column: Onboarding */}
        <div className="lg:col-span-3 h-full">
          <OnboardingWidget />
        </div>
      </div>
    </div>
  );
}

