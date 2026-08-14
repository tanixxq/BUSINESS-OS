
import Projects from "./Projects";
import { useState } from "react";
import Tasks from "./Tasks";
import Clients from "./Client";
import Finance from "./Finance";
import Settings from "./Setting";

const DesktopContent = () => {
    const [activeItem, setActiveItem] = useState("Overview");

    const navigation = [
        "Overview",
        "Projects",
        "Tasks",
        "Clients",
        "Finance",
        "Settings"
    ];

    const renderContent = () => {
        if (activeItem === "Projects") {
            return <Projects />;
        
        }
                

        if (activeItem === "Tasks") {
            return <Tasks />;
        }

        if (activeItem === "Clients") {
            return <Clients />;
        }

        if (activeItem === "Finance") {
            return <Finance />;
        }

        if (activeItem === "Settings") {
            return <Settings />;
        }

        return (
            <>
                {/* OVERVIEW HEADER */}

                <div className="flex items-center justify-between mb-5">

                    <div>
                        <p className="text-[54px] text-[#8a857d] mb-1">
                            Welcome to your Workspace.
                        </p>

                        <h1 className="text-lg font-semibold">
                            Good evening, Tanishq
                        </h1>
                    </div>

                    <button className="px-10 py-2 rounded-md bg-[#2f4f46] text-[15px] text-white text-[9px]">
                        + New
                    </button>

                </div>

                {/* STATS */}

                <div className="grid grid-cols-3 gap-3">

                    {/* REVENUE */}

                    <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">

                        <p className="text-[12px] text-[#8b867e]">
                            REVENUE
                        </p>

                        <p className="text-sm font-semibold mt-1">
                            ₹42,850
                        </p>

                        <p className="text-[10px] text-[#66806f] mt-1">
                            +18.4%
                        </p>

                    </div>

                    {/* PROJECTS */}

                    <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">

                        <p className="text-[12px] text-[#8b867e]">
                            PROJECTS
                        </p>

                        <p className="text-sm font-semibold mt-1">
                            7
                        </p>

                        <p className="text-[10px] text-[#66806f] mt-1">
                            3 active
                        </p>

                    </div>

                    {/* TASKS */}

                    <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">

                        <p className="text-[12px] text-[#8b867e]">
                            TASKS
                        </p>

                        <p className="text-sm font-semibold mt-1">
                            23
                        </p>

                        <p className="text-[10px] text-[#9a8060] mt-1">
                            5 due soon
                        </p>

                    </div>

                </div>

                {/* LOWER CONTENT */}

                <div className="grid grid-cols-[1.4fr_1fr] gap-3 mt-4">

                    {/* BUSINESS ACTIVITY */}

                    <section className="bg-white border border-[#e1ddd6] rounded-lg p-4">

                        <div className="flex justify-between items-center mb-4">

                            <p className="text-[20px] font-semibold">
                                Business activity
                            </p>

                            <span className="text-[12px] text-[#918b83]">
                                This month
                            </span>

                        </div>

                        <div className="h-20 flex items-end gap-2">

                            {[35, 48, 42, 64, 55, 72, 82, 68, 91, 76].map(
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

                    {/* RECENT ACTIVITY */}

                    <section className="bg-white border border-[#e1ddd6] rounded-lg p-4">

                        <p className="text-[9px] font-semibold mb-3">
                            Recent activity
                        </p>

                        <div className="space-y-3">

                            {/* ACTIVITY 1 */}

                            <div className="flex gap-2">

                                <div className="w-1.5 h-1.5 rounded-full bg-[#66806f] mt-1" />

                                <div>

                                    <p className="text-[8px]">
                                        Project completed
                                    </p>

                                    <p className="text-[7px] text-[#99938b]">
                                        Website redesign
                                    </p>

                                </div>

                            </div>

                            {/* ACTIVITY 2 */}

                            <div className="flex gap-2">

                                <div className="w-1.5 h-1.5 rounded-full bg-[#9a8060] mt-1" />

                                <div>

                                    <p className="text-[8px]">
                                        Invoice paid
                                    </p>

                                    <p className="text-[7px] text-[#99938b]">
                                        ₹12,500 received
                                    </p>

                                </div>

                            </div>

                            {/* ACTIVITY 3 */}

                            <div className="flex gap-2">

                                <div className="w-1.5 h-1.5 rounded-full bg-[#7d8fa1] mt-1" />

                                <div>

                                    <p className="text-[8px]">
                                        New client
                                    </p>

                                    <p className="text-[7px] text-[#99938b]">
                                        Acme Studio
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>

                </div>
            </>
        );
    };

    return (
        <div className="w-full h-full bg-[#f5f3ef] text-[#252525] font-sans overflow-hidden">

            {/* TOP BAR */}

            <header className="h-[11%] flex items-center justify-between px-5 border-b border-[#ddd8d0] bg-[#faf9f6]">

                <div className="flex items-center gap-2">

                    <div className="w-6 h-6 rounded-md bg-[#2f4f46] flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                            B
                        </span>
                    </div>

                    <span className="text-sm font-semibold tracking-tight">
                        Business OS
                    </span>

                </div>

                <div className="flex items-center gap-4">

                    <span className="text-[15px] text-[#77736d]">
                        Friday, 14 Aug
                    </span>

                    <div className="w-7 h-7 rounded-full bg-[#d8c8b5] flex items-center justify-center text-[15px] font-semibold">
                        T
                    </div>

                </div>

            </header>

            {/* MAIN AREA */}

            <div className="flex h-[89%]">

                {/* SIDEBAR */}

                <aside className="w-[21%] border-r border-[#ddd8d0] bg-[#eeeae3] p-3">

                    <div className="space-y-1">

                        {navigation.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveItem(item)}
                                className={
                                    activeItem === item
                                        ? "w-full text-left px-3 py-2 rounded-md text-[10px] transition-all bg-[#d9e0da] text-[#2f4f46] font-semibold"
                                        : "w-full text-left px-3 py-2 rounded-md text-[10px] transition-all text-[#68645e] hover:bg-[#e3ded6]"
                                }
                            >
                                {item}
                            </button>
                        ))}

                    </div>

                    <div className="mt-8 pt-4 border-t border-[#d8d2c9]">

                        

                        

                    </div>

                </aside>

                {/* CONTENT */}

                <main className="flex-1 p-5 overflow-hidden">
                    {renderContent()}
                </main>

            </div>

        </div>
    );
};

export default DesktopContent;

