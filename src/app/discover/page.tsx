import { FeaturedProjectCard } from '@/components/discover/FeaturedProjectCard';
import { TrendingPeers } from '@/components/discover/TrendingPeers';
import { RECENT_PROJECTS } from '@/lib/mock-data';

export default function DiscoverPage() {
    const featuredProject = RECENT_PROJECTS[0];

    return (
        <div className="space-y-12 pb-12">
            <section>
                <FeaturedProjectCard project={featuredProject} />
            </section>

            <section>
                <TrendingPeers />
            </section>

            {/* Categories Placeholder */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Browse by Category</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {['Development', 'Design', 'Marketing', 'Writing', 'Video', 'Audio'].map(cat => (
                        <button key={cat} className="px-6 py-3 bg-white border border-gray-100 rounded-full text-sm font-bold text-gray-600 hover:bg-black hover:text-white transition-all whitespace-nowrap">
                            {cat}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
}
