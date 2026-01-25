
import Link from 'next/link';

export function PremiumPromoCard() {
    return (
        <div className="relative overflow-hidden rounded-3xl p-8 h-full min-h-[200px] flex flex-col justify-center text-white isolate">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 z-[-1] bg-black">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/40 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-purple-600/40 blur-[60px] rounded-full -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Upgrade to Premium</h3>
                <p className="text-gray-300 text-sm mb-6 max-w-[200px]">
                    Get unlimited access to all features and priority support.
                </p>

                <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 transition-colors"
                >
                    Upgrade Now
                </Link>
            </div>
        </div>
    );
}
