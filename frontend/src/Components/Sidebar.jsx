import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    FolderKanban,
    CheckSquare,
    Receipt,
    BarChart3,
    Settings
} from "lucide-react";

const navigation = [
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard
    },
    {
        label: "Clients",
        path: "/clients",
        icon: Users
    },
    {
        label: "Projects",
        path: "/projects",
        icon: FolderKanban
    },
    {
        label: "Tasks",
        path: "/tasks",
        icon: CheckSquare
    },
    {
        label: "Invoices",
        path: "/invoices",
        icon: Receipt
    },
    {
        label: "Analytics",
        path: "/analytics",
        icon: BarChart3
    }
];

const Sidebar = () => {

    return (

        <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-white/10 bg-slate-950 text-white">

            <div className="flex h-20 items-center border-b border-white/10 px-6">

                <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-slate-950">
                        B
                    </div>

                    <span className="text-xl font-bold tracking-tight">
                        BusinessOS
                    </span>

                </div>

            </div>

            <nav className="flex-1 px-4 py-6">

                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Workspace
                </p>

                <div className="space-y-1">

                    {navigation.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? "bg-white text-slate-950 shadow-lg shadow-white/5"
                                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                                    }`
                                }
                            >

                                <Icon
                                    size={18}
                                    strokeWidth={1.8}
                                />

                                <span>
                                    {item.label}
                                </span>

                            </NavLink>

                        );

                    })}

                </div>

            </nav>

            <div className="border-t border-white/10 p-4">

                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                            isActive
                                ? "bg-white text-slate-950"
                                : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`
                    }
                >

                    <Settings
                        size={18}
                        strokeWidth={1.8}
                    />

                    <span>
                        Settings
                    </span>

                </NavLink>

            </div>

        </aside>

    );

};

export default Sidebar;