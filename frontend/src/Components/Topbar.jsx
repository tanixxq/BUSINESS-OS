import { Search, Bell, Plus } from "lucide-react";

const Topbar = () => {
    return (
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-slate-950/80 px-6 backdrop-blur-xl">

            <div className="flex items-center gap-4">

                <div className="relative w-80">

                    <Search
                        size={18}
                        strokeWidth={1.8}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-white/20 focus:bg-white/10"
                    />

                </div>

            </div>

            <div className="flex items-center gap-3">

                <button
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
                    aria-label="Create"
                >
                    <Plus
                        size={19}
                        strokeWidth={1.8}
                    />
                </button>

                <button
                    className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
                    aria-label="Notifications"
                >
                    <Bell
                        size={19}
                        strokeWidth={1.8}
                    />

                    <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-white" />

                </button>

                <div className="ml-2 flex items-center gap-3 border-l border-white/10 pl-4">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950">
                        T
                    </div>

                    <div className="hidden sm:block">

                        <p className="text-sm font-medium text-white">
                            Tanishq
                        </p>

                        <p className="text-xs text-slate-500">
                            Administrator
                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
};

export default Topbar;