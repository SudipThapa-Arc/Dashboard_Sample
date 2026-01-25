import Link from 'next/link';
import { Plus } from 'lucide-react';
import { PEERS } from '@/lib/mock-data';

export function ConnectWidget() {
    return (
        <div className="bg-surface rounded-3xl p-6 border border-gray-100 h-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Let's Connect</h3>
                <Link href="/discover" className="text-sm font-bold text-primary hover:text-orange-600 transition-colors">
                    See all
                </Link>
            </div>

            <div className="space-y-4">
                {PEERS.map(peer => (
                    <div key={peer.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src={peer.avatar} alt={peer.name} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                            <div>
                                <h4 className="font-bold text-sm text-gray-900">{peer.name}</h4>
                                <p className="text-xs text-gray-500">{peer.role}</p>
                            </div>
                        </div>

                        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group">
                            <Plus className="w-4 h-4 text-gray-400 group-hover:text-white" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
