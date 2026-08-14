import { useState } from "react";

const Clients = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedClient, setSelectedClient] = useState(null);

    const clients = [
        {
            id: 1,
            name: "Acme Studio",
            initials: "AS",
            email: "hello@acmestudio.com",
            status: "Active",
            projects: 2,
            revenue: "₹48,000",
            lastActivity: "Today"
        },
        {
            id: 2,
            name: "Nova Labs",
            initials: "NL",
            email: "team@novalabs.com",
            status: "Active",
            projects: 1,
            revenue: "₹18,500",
            lastActivity: "Yesterday"
        },
        {
            id: 3,
            name: "NorthPeak",
            initials: "NP",
            email: "hello@northpeak.com",
            status: "Active",
            projects: 3,
            revenue: "₹72,000",
            lastActivity: "2 days ago"
        },
        {
            id: 4,
            name: "Pixel House",
            initials: "PH",
            email: "contact@pixelhouse.com",
            status: "Inactive",
            projects: 1,
            revenue: "₹12,000",
            lastActivity: "18 days ago"
        }
    ];

    const filters = [
        "All",
        "Active",
        "Inactive"
    ];

    const filteredClients =
        activeFilter === "All"
            ? clients
            : clients.filter(
                (client) => client.status === activeFilter
            );

    const getStatusClass = (status) => {
        if (status === "Active") {
            return "bg-[#d9e0da] text-[#2f4f46]";
        }

        return "bg-[#e7e4de] text-[#6f6a62]";
    };

    if (selectedClient) {
        return (
            <div className="h-full overflow-hidden">

                {/* CLIENT DETAIL HEADER */}

                <div className="flex items-center justify-between mb-5">

                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-lg bg-[#d8c8b5] flex items-center justify-center text-[12px] font-semibold">
                            {selectedClient.initials}
                        </div>

                        <div>
                            <p className="text-[11px] text-[#8a857d]">
                                CLIENT
                            </p>

                            <h1 className="text-xl font-semibold">
                                {selectedClient.name}
                            </h1>
                        </div>

                    </div>

                    <button
                        onClick={() => setSelectedClient(null)}
                        className="px-4 py-2 rounded-md border border-[#ddd8d0] text-[10px] text-[#68645e] hover:bg-[#f0ede7]"
                    >
                        ← Back
                    </button>

                </div>

                {/* CLIENT DETAILS */}

                <div className="grid grid-cols-3 gap-3 mb-4">

                    <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">
                        <p className="text-[9px] text-[#99938b] uppercase">
                            Status
                        </p>

                        <span
                            className={
                                "inline-block mt-2 px-2 py-1 rounded-md text-[9px] font-medium " +
                                getStatusClass(selectedClient.status)
                            }
                        >
                            {selectedClient.status}
                        </span>
                    </div>

                    <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">
                        <p className="text-[9px] text-[#99938b] uppercase">
                            Projects
                        </p>

                        <p className="text-xl font-semibold mt-1">
                            {selectedClient.projects}
                        </p>
                    </div>

                    <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">
                        <p className="text-[9px] text-[#99938b] uppercase">
                            Revenue
                        </p>

                        <p className="text-xl font-semibold mt-1">
                            {selectedClient.revenue}
                        </p>
                    </div>

                </div>

                {/* CONTACT CARD */}

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-4">

                    <p className="text-[10px] font-semibold mb-4">
                        Client information
                    </p>

                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <p className="text-[8px] text-[#99938b] uppercase">
                                Email
                            </p>

                            <p className="text-[10px] mt-1">
                                {selectedClient.email}
                            </p>
                        </div>

                        <div>
                            <p className="text-[8px] text-[#99938b] uppercase">
                                Last Activity
                            </p>

                            <p className="text-[10px] mt-1">
                                {selectedClient.lastActivity}
                            </p>
                        </div>

                    </div>

                </div>

                {/* PROJECTS */}

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-4 mt-3">

                    <div className="flex items-center justify-between mb-3">

                        <p className="text-[10px] font-semibold">
                            Active projects
                        </p>

                        <button className="text-[9px] text-[#2f4f46] font-medium">
                            + Add Project
                        </button>

                    </div>

                    <div className="space-y-2">

                        <div className="flex items-center justify-between p-2 rounded-md bg-[#f6f3ee]">

                            <div>
                                <p className="text-[10px] font-medium">
                                    Website Redesign
                                </p>

                                <p className="text-[8px] text-[#99938b] mt-1">
                                    72% complete
                                </p>
                            </div>

                            <span className="text-[8px] text-[#2f4f46]">
                                Active
                            </span>

                        </div>

                        <div className="flex items-center justify-between p-2 rounded-md bg-[#f6f3ee]">

                            <div>
                                <p className="text-[10px] font-medium">
                                    Brand Refresh
                                </p>

                                <p className="text-[8px] text-[#99938b] mt-1">
                                    38% complete
                                </p>
                            </div>

                            <span className="text-[8px] text-[#8a6c42]">
                                In Progress
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
                        CLIENTS
                    </p>

                    <h1 className="text-xl font-semibold">
                        Your Clients
                    </h1>

                    <p className="text-[11px] text-[#8a857d] mt-1">
                        Keep track of relationships, projects and revenue.
                    </p>

                </div>

                <button className="px-5 py-2 rounded-md bg-[#2f4f46] text-white text-[11px] font-medium">
                    + New Client
                </button>

            </div>

            {/* SUMMARY */}

            <div className="grid grid-cols-3 gap-3 mb-4">

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">
                    <p className="text-[9px] text-[#99938b] uppercase tracking-wide">
                        Total Clients
                    </p>

                    <p className="text-xl font-semibold mt-1">
                        {clients.length}
                    </p>
                </div>

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">
                    <p className="text-[9px] text-[#99938b] uppercase tracking-wide">
                        Active
                    </p>

                    <p className="text-xl font-semibold mt-1 text-[#2f4f46]">
                        {
                            clients.filter(
                                (client) => client.status === "Active"
                            ).length
                        }
                    </p>
                </div>

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">
                    <p className="text-[9px] text-[#99938b] uppercase tracking-wide">
                        Revenue
                    </p>

                    <p className="text-xl font-semibold mt-1">
                        ₹1.50L
                    </p>
                </div>

            </div>

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

            {/* CLIENT LIST */}

            <div className="grid grid-cols-2 gap-3">

                {filteredClients.map((client) => (
                    <div
                        key={client.id}
                        className="bg-white border border-[#e1ddd6] rounded-lg p-4"
                    >

                        <div className="flex items-start justify-between">

                            <div className="flex items-center gap-3">

                                <div className="w-9 h-9 rounded-lg bg-[#d8c8b5] flex items-center justify-center text-[10px] font-semibold">
                                    {client.initials}
                                </div>

                                <div>

                                    <h2 className="text-[13px] font-semibold">
                                        {client.name}
                                    </h2>

                                    <p className="text-[9px] text-[#8b867e] mt-1">
                                        {client.email}
                                    </p>

                                </div>

                            </div>

                            <span
                                className={
                                    "px-2 py-1 rounded-md text-[9px] font-medium " +
                                    getStatusClass(client.status)
                                }
                            >
                                {client.status}
                            </span>

                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-5">

                            <div>
                                <p className="text-[8px] text-[#99938b] uppercase">
                                    Projects
                                </p>

                                <p className="text-[10px] font-semibold mt-1">
                                    {client.projects}
                                </p>
                            </div>

                            <div>
                                <p className="text-[8px] text-[#99938b] uppercase">
                                    Revenue
                                </p>

                                <p className="text-[10px] font-semibold mt-1">
                                    {client.revenue}
                                </p>
                            </div>

                            <div>
                                <p className="text-[8px] text-[#99938b] uppercase">
                                    Activity
                                </p>

                                <p className="text-[10px] font-semibold mt-1">
                                    {client.lastActivity}
                                </p>
                            </div>

                        </div>

                        <button
                            onClick={() => setSelectedClient(client)}
                            className="w-full mt-4 py-2 rounded-md border border-[#ddd8d0] text-[9px] text-[#68645e] hover:bg-[#f4f1eb]"
                        >
                            View Client
                        </button>

                    </div>
                ))}

                {filteredClients.length === 0 && (
                    <div className="col-span-2 bg-white border border-[#e1ddd6] rounded-lg p-8 text-center">

                        <p className="text-[12px] font-medium">
                            No clients found
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

export default Clients;

