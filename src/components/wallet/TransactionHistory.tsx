import { TRANSACTIONS } from '@/lib/mock-data';
import { ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TransactionHistory() {
    return (
        <div className="bg-surface rounded-[2.5rem] p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-900">Transaction History</h3>

                <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-full bg-black text-white text-sm font-bold">All</button>
                    <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-bold hover:bg-gray-200 transition-colors">Income</button>
                    <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-bold hover:bg-gray-200 transition-colors">Expenses</button>
                </div>
            </div>

            <div className="space-y-4">
                {TRANSACTIONS.map(tx => (
                    <div key={tx.id} className="flex items-center justify-between p-4 rounded-3xl hover:bg-gray-50 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className={cn(
                                "w-12 h-12 rounded-full flex items-center justify-center",
                                tx.type === 'Income' ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                            )}>
                                {tx.type === 'Income' ? <ArrowDownLeft className="w-6 h-6" /> : <ArrowUpRight className="w-6 h-6" />}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">{tx.title}</h4>
                                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mt-1">
                                    {tx.status === 'Pending' && <Clock className="w-3 h-3 text-orange-500" />}
                                    <span className={tx.status === 'Pending' ? 'text-orange-500' : ''}>{tx.date}</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-right">
                            <div className={cn(
                                "font-bold text-lg",
                                tx.type === 'Income' ? "text-green-600" : "text-gray-900"
                            )}>
                                {tx.type === 'Income' ? '+' : ''}{tx.amount.toLocaleString()} USD
                            </div>
                            <div className="text-xs font-medium text-gray-400 mt-1">
                                {tx.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
