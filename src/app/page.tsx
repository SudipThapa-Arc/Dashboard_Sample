import { WelcomeBanner } from '@/components/dashboard/WelcomeBanner';
import { StatsOverview } from '@/components/dashboard/StatsOverview';
import { ProfileCard } from '@/components/dashboard/ProfileCard';
import { WorkTimeChart } from '@/components/dashboard/WorkTimeChart';
import { TimeTracker } from '@/components/dashboard/TimeTracker';
import { CalendarWidget } from '@/components/dashboard/CalendarWidget';
import { InfoAccordion } from '@/components/dashboard/InfoAccordion';
import { OnboardingWidget } from '@/components/dashboard/OnboardingWidget';
import { QuickStats, RecentActivities, TeamPerformance, UpcomingDeadlines } from '@/components/dashboard/EnhancedSections';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { ProductivityInsights } from '@/components/dashboard/ProductivityInsights';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section: Welcome & Stats */}
      <div className="flex flex-col lg:flex-row gap-8 items-end justify-between">
        <div className="flex-1 w-full">
          <WelcomeBanner />
        </div>
        <div className="w-full lg:w-auto">
          <StatsOverview />
        </div>
      </div>

      {/* Quick Stats Section */}
      <QuickStats />

      {/* Revenue & Productivity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <RevenueChart />
        <ProductivityInsights />
      </div>

      {/* Activity & Performance Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentActivities />
        <TeamPerformance />
        <UpcomingDeadlines />
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Profile & Info */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <ProfileCard />
          <div className="flex-1">
            <InfoAccordion />
          </div>
        </div>

        {/* Middle Column: Charts & Calendar */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <WorkTimeChart />
            <TimeTracker />
          </div>
          <div className="flex-1">
            <CalendarWidget />
          </div>
        </div>

        {/* Right Column: Onboarding */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <OnboardingWidget />
        </div>
      </div>
    </div>
  );
}

