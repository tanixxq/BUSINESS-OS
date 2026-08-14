import { useState } from "react";

const Finance = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const transactions = [
        {
            id: 1,
            title: "Website Redesign",
            client: "Acme Studio",
            type: "Income",
            status: "Paid",
            amount: "₹32,000",
            date: "12 Aug 2026"
        },
        {
            id: 2,
            title: "Brand Identity",
            client: "NorthPeak",
            type: "Income",
            status: "Paid",
            amount: "₹24,000",
            date: "10 Aug 2026"
        },
        {
            id: 3,
            title: "Landing Page",
            client: "Nova Labs",
            type: "Income",
            status: "Pending",
            amount: "₹18,500",
            date: "08 Aug 2026"
        },
        {
            id: 4,
            title: "Hosting & Services",
            client: "Workspace",
            type: "Expense",
            status: "Paid",
            amount: "₹3,200",
            date: "05 Aug 2026"
        },
        {
            id: 5,
            title: "Mobile App Design",
            client: "Pixel House",
            type: "Income",
            status: "Overdue",
            amount: "₹12,000",
            date: "01 Aug 2026"
        }
    ];

    const filters = [
        "All",
        "Income",
        "Expense",
        "Pending",
        "Overdue"
    ];

    const filteredTransactions =
        activeFilter === "All"
            ? transactions
            : transactions.filter((transaction) => {
                if (
                    activeFilter === "Income" ||
                    activeFilter === "Expense"
                ) {
                    return transaction.type === activeFilter;
                }

                return transaction.status === activeFilter;
            });

    const getStatusClass = (status) => {
        if (status === "Paid") {
            return "bg-[#d9e0da] text-[#2f4f46]";
        }

        if (status === "Pending") {
            return "bg-[#efe4d2] text-[#8a6c42]";
        }

        return "bg-[#f1dfdc] text-[#9a5d52]";
    };

    if (selectedTransaction) {
        return (
            <div className="h-full overflow-hidden">

                {/* DETAIL HEADER */}

                <div className="flex items-center justify-between mb-5">

                    <div>
                        <p className="text-[11px] text-[#8a857d]">
                            TRANSACTION
                        </p>

                        <h1 className="text-xl font-semibold mt-1">
                            {selectedTransaction.title}
                        </h1>

                        <p className="text-[10px] text-[#99938b] mt-1">
                            {selectedTransaction.client}
                        </p>
                    </div>

                    <button
                        onClick={() => setSelectedTransaction(null)}
                        className="px-4 py-2 rounded-md border border-[#ddd8d0] text-[10px] text-[#68645e] hover:bg-[#f0ede7]"
                    >
                        ← Back
                    </button>

                </div>

                {/* DETAIL CARDS */}

                <div className="grid grid-cols-3 gap-3">

                    <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">

                        <p className="text-[9px] text-[#99938b] uppercase">
                            Amount
                        </p>

                        <p className="text-xl font-semibold mt-1">
                            {selectedTransaction.amount}
                        </p>

                    </div>

                    <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">

                        <p className="text-[9px] text-[#99938b] uppercase">
                            Status
                        </p>

                        <span
                            className={
                                "inline-block mt-2 px-2 py-1 rounded-md text-[9px] font-medium " +
                                getStatusClass(selectedTransaction.status)
                            }
                        >
                            {selectedTransaction.status}
                        </span>

                    </div>

                    <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">

                        <p className="text-[9px] text-[#99938b] uppercase">
                            Date
                        </p>

                        <p className="text-[10px] font-medium mt-2">
                            {selectedTransaction.date}
                        </p>

                    </div>

                </div>

                {/* DETAILS */}

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-4 mt-4">

                    <p className="text-[10px] font-semibold mb-4">
                        Transaction details
                    </p>

                    <div className="space-y-3">

                        <div className="flex justify-between">
                            <span className="text-[9px] text-[#99938b]">
                                Type
                            </span>

                            <span className="text-[10px] font-medium">
                                {selectedTransaction.type}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-[9px] text-[#99938b]">
                                Client
                            </span>

                            <span className="text-[10px] font-medium">
                                {selectedTransaction.client}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-[9px] text-[#99938b]">
                                Date
                            </span>

                            <span className="text-[10px] font-medium">
                                {selectedTransaction.date}
                            </span>
                        </div>

                    </div>

                </div>

            </div>
        );
    }

    return (
        <div className="h-full overflow-hidden">

            {/* PAGE HEADER */}

            <div className="flex items-center justify-between mb-5">

                <div>

                    <p className="text-[12px] text-[#8a857d] mb-1">
                        FINANCE
                    </p>

                    <h1 className="text-xl font-semibold">
                        Financial Overview
                    </h1>

                    <p className="text-[11px] text-[#8a857d] mt-1">
                        Track income, expenses and outstanding payments.
                    </p>

                </div>

                <button className="px-5 py-2 rounded-md bg-[#2f4f46] text-white text-[11px] font-medium">
                    + New Invoice
                </button>

            </div>

            {/* SUMMARY */}

            <div className="grid grid-cols-4 gap-3 mb-4">

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">

                    <p className="text-[9px] text-[#99938b] uppercase tracking-wide">
                        Revenue
                    </p>

                    <p className="text-xl font-semibold mt-1">
                        ₹86,000
                    </p>

                    <p className="text-[9px] text-[#66806f] mt-1">
                        +18.4%
                    </p>

                </div>

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">

                    <p className="text-[9px] text-[#99938b] uppercase tracking-wide">
                        Expenses
                    </p>

                    <p className="text-xl font-semibold mt-1">
                        ₹3,200
                    </p>

                    <p className="text-[9px] text-[#9a5d52] mt-1">
                        This month
                    </p>

                </div>

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">

                    <p className="text-[9px] text-[#99938b] uppercase tracking-wide">
                        Pending
                    </p>

                    <p className="text-xl font-semibold mt-1">
                        ₹18,500
                    </p>

                    <p className="text-[9px] text-[#8a6c42] mt-1">
                        1 invoice
                    </p>

                </div>

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">

                    <p className="text-[9px] text-[#99938b] uppercase tracking-wide">
                        Overdue
                    </p>

                    <p className="text-xl font-semibold mt-1">
                        ₹12,000
                    </p>

                    <p className="text-[9px] text-[#9a5d52] mt-1">
                        Needs attention
                    </p>

                </div>

            </div>

            {/* CHART */}

            <section className="bg-white border border-[#e1ddd6] rounded-lg p-4 mb-4">

                <div className="flex justify-between items-center mb-4">

                    <div>
                        <p className="text-[10px] font-semibold">
                            Revenue this month
                        </p>

                        <p className="text-[8px] text-[#99938b] mt-1">
                            Income across the last 8 periods
                        </p>
                    </div>

                    <span className="text-[9px] text-[#66806f]">
                        +18.4%
                    </span>

                </div>

                <div className="h-20 flex items-end gap-2">

                    {[28, 42, 36, 58, 52, 70, 64, 86].map(
                        (height, index) => (
                            <div
                                key={index}
                                className="flex-1 bg-[#9cae9f] rounded-t-sm"
                                style={{
                                    height: height + "%"
                                }}
                            />
                        )
                    )}

                </div>

            </section>

            {/* FILTERS */}

            <div className="flex items-center gap-2 mb-3">

                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={
                            activeFilter === filter
                                ? "px-3 py-1.5 rounded-md bg-[#d9e0da] text-[#2f4f46] text-[10px] font-semibold"
                                : "px-3 py-1.5 rounded-md text-[#68645e] text-[10px] hover:bg-[#ebe7e0]"
                        }
                    >
                        {filter}
                    </button>
                ))}

            </div>

            {/* TRANSACTIONS */}

            <div className="space-y-2 overflow-hidden">

                {filteredTransactions.map((transaction) => (
                    <div
                        key={transaction.id}
                        className="bg-white border border-[#e1ddd6] rounded-lg p-3"
                    >

                        <div className="flex items-center gap-3">

                            <div className="flex-1 min-w-0">

                                <p className="text-[11px] font-medium">
                                    {transaction.title}
                                </p>

                                <p className="text-[9px] text-[#99938b] mt-1">
                                    {transaction.client}
                                </p>

                            </div>

                            <span className="text-[10px] font-semibold">
                                {transaction.amount}
                            </span>

                            <span
                                className={
                                    "px-2 py-1 rounded-md text-[8px] font-medium " +
                                    getStatusClass(transaction.status)
                                }
                            >
                                {transaction.status}
                            </span>

                            <span className="text-[8px] text-[#99938b] w-16 text-right">
                                {transaction.date}
                            </span>

                            <button
                                onClick={() => setSelectedTransaction(transaction)}
                                className="px-2 py-1 rounded-md border border-[#ddd8d0] text-[8px] text-[#68645e] hover:bg-[#f4f1eb]"
                            >
                                View
                            </button>

                        </div>

                    </div>
                ))}

                {filteredTransactions.length === 0 && (
                    <div className="bg-white border border-[#e1ddd6] rounded-lg p-8 text-center">

                        <p className="text-[12px] font-medium">
                            No transactions found
                        </p>

                        <p className="text-[9px] text-[#99938b] mt-1">
                            Try another filter.
                        </p>

                    </div>
                )}

            </div>

        </div>
    );
};

export default Finance;

