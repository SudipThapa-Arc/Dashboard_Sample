import { PEERS } from '@/lib/mock-data';
import { Plus } from 'lucide-react';

export function TrendingPeers() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Trending Creators</h3>
                <button className="text-sm font-bold text-primary hover:text-orange-600 transition-colors">
                    View all
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PEERS.map((peer, i) => (
                    <div key={peer.id} className="bg-surface p-6 rounded-3xl border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-all duration-300 group">
                        <div className="relative">
                            <img src={peer.avatar} alt={peer.name} className="w-16 h-16 rounded-full object-cover" />
                            <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full">
                                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                            </div>
                        </div>

                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 truncate">{peer.name}</h4>
                            <p className="text-sm text-gray-500 truncate">{peer.role}</p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-xs font-medium text-gray-400">98% Job Success</span>
                            </div>
                        </div>

                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:border-black transition-all">
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
