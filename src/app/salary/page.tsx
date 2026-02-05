'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Download, DollarSign, TrendingUp, Users, Calendar, Filter, MoreVertical, CreditCard, PiggyBank, Shield, Heart, Target, Award, CheckCircle, Clock } from 'lucide-react';

const COMPENSATION_DATA = [
    {
        id: '1',
        name: 'Sarah Chen',
        department: 'Design',
        position: 'UX Designer',
        baseSalary: 110000,
        bonus: 15000,
        equity: 5000,
        totalComp: 130000,
        level: 'Senior',
        reviewDate: '2025-01-15',
        lastIncrease: '2024-01-15',
        performance: 'Exceeds Expectations',
        avatar: 'https://i.pravatar.cc/150?u=sarah'
    },
    {
        id: '2',
        name: 'Mike Ross',
        department: 'Engineering',
        position: 'Frontend Developer',
        baseSalary: 120000,
        bonus: 18000,
        equity: 8000,
        totalComp: 146000,
        level: 'Senior',
        reviewDate: '2025-03-20',
        lastIncrease: '2023-06-10',
        performance: 'Meets Expectations',
        avatar: 'https://i.pravatar.cc/150?u=mike'
    },
    {
        id: '3',
        name: 'Jessica Lee',
        department: 'Product',
        position: 'Product Manager',
        baseSalary: 140000,
        bonus: 25000,
        equity: 12000,
        totalComp: 177000,
        level: 'Lead',
        reviewDate: '2025-02-10',
        lastIncrease: '2024-02-10',
        performance: 'Exceeds Expectations',
        avatar: 'https://i.pravatar.cc/150?u=jessica'
    },
    {
        id: '4',
        name: 'David Kim',
        department: 'Engineering',
        position: 'Backend Developer',
        baseSalary: 125000,
        bonus: 20000,
        equity: 9000,
        totalComp: 154000,
        level: 'Senior',
        reviewDate: '2025-01-30',
        lastIncrease: '2023-12-01',
        performance: 'Meets Expectations',
        avatar: 'https://i.pravatar.cc/150?u=david'
    }
];

const BENEFITS_PROGRAMS = [
    {
        id: '1',
        name: 'Health Insurance',
        type: 'Medical',
        coverage: 'Premium PPO',
        employeeCost: '$250/month',
        companyCost: '$750/month',
        enrollment: 78,
        status: 'active',
        description: 'Comprehensive medical coverage with low deductibles',
        provider: 'Blue Cross Blue Shield'
    },
    {
        id: '2',
        name: '401(k) Retirement',
        type: 'Retirement',
        coverage: 'Match up to 6%',
        employeeCost: 'Variable',
        companyCost: 'Match contribution',
        enrollment: 65,
        status: 'active',
        description: 'Traditional and Roth options with company match',
        provider: 'Fidelity'
    },
    {
        id: '3',
        name: 'Dental & Vision',
        type: 'Dental/Vision',
        coverage: 'Standard Plan',
        employeeCost: '$35/month',
        companyCost: '$105/month',
        enrollment: 82,
        status: 'active',
        description: 'Complete dental and vision coverage',
        provider: 'MetLife'
    },
    {
        id: '4',
        name: 'Flexible Spending',
        type: 'FSA/HSA',
        coverage: 'Tax-advantaged',
        employeeCost: 'Pre-tax contributions',
        companyCost: '$0',
        enrollment: 45,
        status: 'active',
        description: 'Healthcare and dependent care FSA accounts',
        provider: 'WageWorks'
    },
    {
        id: '5',
        name: 'Life Insurance',
        type: 'Life',
        coverage: '2x Salary',
        employeeCost: '$15/month',
        companyCost: '$45/month',
        enrollment: 90,
        status: 'active',
        description: 'Term life insurance with optional supplemental coverage',
        provider: 'Prudential'
    }
];

const PAYROLL_HISTORY = [
    {
        id: '1',
        period: 'November 2024',
        payDate: '2024-11-30',
        grossPay: 145000,
        netPay: 102500,
        taxes: 35750,
        deductions: 6750,
        status: 'processed',
        employees: 83,
        averageSalary: 1747,
        totalCost: 168500
    },
    {
        id: '2',
        period: 'October 2024',
        payDate: '2024-10-31',
        grossPay: 142000,
        netPay: 100600,
        taxes: 35100,
        deductions: 6300,
        status: 'processed',
        employees: 82,
        averageSalary: 1732,
        totalCost: 165200
    },
    {
        id: '3',
        period: 'September 2024',
        payDate: '2024-09-30',
        grossPay: 138500,
        netPay: 98000,
        taxes: 34125,
        deductions: 6375,
        status: 'processed',
        employees: 80,
        averageSalary: 1731,
        totalCost: 161500
    }
];

const SALARY_STATS = {
    totalPayroll: '$1.73M',
    averageSalary: '$112K',
    averageBonus: '$18K',
    benefitsCost: '$450K',
    budgetUtilization: '87%',
    meritIncreaseBudget: '5.2%'
};

const BUDGET_ALLOCATION = [
    { category: 'Base Salaries', amount: 1450000, percentage: 65, color: 'bg-blue-500' },
    { category: 'Bonuses', amount: 320000, percentage: 15, color: 'bg-green-500' },
    { category: 'Benefits', amount: 280000, percentage: 12, color: 'bg-purple-500' },
    { category: 'Taxes', amount: 150000, percentage: 7, color: 'bg-orange-500' },
    { category: 'Other', amount: 50000, percentage: 1, color: 'bg-gray-500' }
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'active': return 'bg-green-100 text-green-600';
        case 'processed': return 'bg-blue-100 text-blue-600';
        case 'pending': return 'bg-yellow-100 text-yellow-600';
        case 'inactive': return 'bg-gray-100 text-gray-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};

const getPerformanceColor = (performance: string) => {
    switch (performance) {
        case 'Exceeds Expectations': return 'bg-green-100 text-green-600';
        case 'Meets Expectations': return 'bg-blue-100 text-blue-600';
        case 'Needs Improvement': return 'bg-red-100 text-red-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};

export default function SalaryPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Salary</h1>
                    <p className="text-gray-500 mt-1">Manage compensation, benefits, and payroll</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                        <Download className="w-5 h-5" />
                        Export Report
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg">
                        <Plus className="w-5 h-5" />
                        Run Payroll
                    </button>
                </div>
            </motion.div>

            {/* Stats Overview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Total Payroll</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{SALARY_STATS.totalPayroll}</p>
                        </div>
                        <DollarSign className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Avg Salary</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{SALARY_STATS.averageSalary}</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Avg Bonus</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{SALARY_STATS.averageBonus}</p>
                        </div>
                        <Award className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Benefits Cost</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{SALARY_STATS.benefitsCost}</p>
                        </div>
                        <Shield className="w-8 h-8 text-orange-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Budget Used</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{SALARY_STATS.budgetUtilization}</p>
                        </div>
                        <Target className="w-8 h-8 text-red-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Merit Budget</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{SALARY_STATS.meritIncreaseBudget}</p>
                        </div>
                        <Users className="w-8 h-8 text-cyan-500" />
                    </div>
                </div>
            </motion.div>

            {/* Compensation Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Compensation Overview</h2>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search employees..."
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                    {COMPENSATION_DATA.map((employee, index) => (
                        <motion.div
                            key={employee.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            className="p-4 rounded-2xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img src={employee.avatar} alt={employee.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{employee.name}</h3>
                                        <p className="text-sm text-gray-600">{employee.position} • {employee.department}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{employee.level}</span>
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getPerformanceColor(employee.performance)}`}>
                                                {employee.performance}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-gray-900">${(employee.totalComp).toLocaleString()}</p>
                                    <p className="text-sm text-gray-500">Total Compensation</p>
                                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
                                        <span>${(employee.baseSalary).toLocaleString()} base</span>
                                        <span>${(employee.bonus).toLocaleString()} bonus</span>
                                        <span>${(employee.equity).toLocaleString()} equity</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Benefits Programs</h2>
                    <button className="text-primary font-medium hover:text-primary/80">Manage Benefits</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-80 overflow-y-auto">
                    {BENEFITS_PROGRAMS.map((benefit, index) => (
                        <motion.div
                            key={benefit.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.05 }}
                            className="p-4 rounded-2xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{benefit.name}</h3>
                                        <p className="text-sm text-gray-500">{benefit.type}</p>
                                    </div>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(benefit.status)}`}>
                                    {benefit.status}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{benefit.description}</p>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Coverage</span>
                                    <span className="text-sm font-medium text-gray-900">{benefit.coverage}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Employee Cost</span>
                                    <span className="text-sm font-medium text-gray-900">{benefit.employeeCost}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Enrollment</span>
                                    <span className="text-sm font-medium text-gray-900">{benefit.enrollment} employees</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Payroll History Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Payroll History</h2>
                    <button className="text-primary font-medium hover:text-primary/80">View All</button>
                </div>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                    {PAYROLL_HISTORY.map((payroll, index) => (
                        <motion.div
                            key={payroll.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <CreditCard className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{payroll.period}</h3>
                                    <p className="text-sm text-gray-500">Paid on {payroll.payDate} • {payroll.employees} employees</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-bold text-gray-900">${(payroll.grossPay).toLocaleString()}</p>
                                <p className="text-sm text-gray-500">Gross Payroll</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-bold text-gray-900">${(payroll.netPay).toLocaleString()}</p>
                                <p className="text-sm text-gray-500">Net Payroll</p>
                            </div>
                            <div className="text-right">
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(payroll.status)}`}>
                                    {payroll.status}
                                </span>
                                <p className="text-sm text-gray-600 mt-1">Total: ${(payroll.totalCost).toLocaleString()}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}