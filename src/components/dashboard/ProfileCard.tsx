import { PROFILE_CARD_DATA } from '@/lib/mock-data';
import Image from 'next/image';

export function ProfileCard() {
    return (
        <div className="relative h-[320px] rounded-[32px] overflow-hidden group shadow-lg">
            <div className="absolute inset-0 bg-gray-200">
                <Image
                    src={PROFILE_CARD_DATA.avatar}
                    alt={PROFILE_CARD_DATA.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                    <h3 className="text-white text-xl font-medium mb-1">{PROFILE_CARD_DATA.name}</h3>
                    <p className="text-white/80 text-sm font-light">{PROFILE_CARD_DATA.role}</p>
                </div>

                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl text-white font-medium border border-white/10">
                    ${PROFILE_CARD_DATA.rate.toLocaleString()}
                </div>
            </div>
        </div>
    );
}
