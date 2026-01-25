import { WalletOverview } from '@/components/wallet/WalletOverview';
import { TransactionHistory } from '@/components/wallet/TransactionHistory';

export default function WalletPage() {
    return (
        <div className="space-y-6">
            <section>
                <WalletOverview />
            </section>

            <section>
                <TransactionHistory />
            </section>
        </div>
    );
}
