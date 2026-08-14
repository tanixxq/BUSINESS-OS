
const Projects = () => {
    const projects = [
        {
            name: "Website Redesign",
            client: "Acme Studio",
            status: "Active",
            progress: 72,
            deadline: "28 Aug 2026",
            value: "₹32,000"
        },
        {
            name: "Business OS",
            client: "Internal Product",
            status: "In Progress",
            progress: 46,
            deadline: "12 Sep 2026",
            value: "Internal"
        },
        {
            name: "Mobile App Landing Page",
            client: "Nova Labs",
            status: "Planning",
            progress: 18,
            deadline: "24 Sep 2026",
            value: "₹18,500"
        },
        {
            name: "Brand Identity",
            client: "NorthPeak",
            status: "Completed",
            progress: 100,
            deadline: "10 Aug 2026",
            value: "₹24,000"
        }
    ];

    const getStatusClasses = (status) => {
        if (status === "Active") {
            return "bg-[#d9e0da] text-[#2f4f46]";
        }

        if (status === "Completed") {
            return "bg-[#dce8df] text-[#52705b]";
        }

        if (status === "Planning") {
            return "bg-[#e6e3dc] text-[#6f6a62]";
        }

        return "bg-[#efe4d2] text-[#8a6c42]";
    };

    return (
        <div className="h-full overflow-hidden">

            {/* PAGE HEADER */}

            <div className="flex items-center justify-between mb-5">

                <div>
                    <p className="text-[12px] text-[#8a857d] mb-1">
                        PROJECTS
                    </p>

                    <h1 className="text-xl font-semibold">
                        Your Projects
                    </h1>

                    <p className="text-[11px] text-[#8a857d] mt-1">
                        Manage active work, deadlines and project progress.
                    </p>
                </div>

                <button className="px-5 py-2 rounded-md bg-[#2f4f46] text-white text-[11px] font-medium">
                    + New Project
                </button>

            </div>

            {/* PROJECT SUMMARY */}

            <div className="grid grid-cols-3 gap-3 mb-4">

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">
                    <p className="text-[9px] text-[#99938b] uppercase tracking-wide">
                        Total Projects
                    </p>

                    <p className="text-xl font-semibold mt-1">
                        7
                    </p>
                </div>

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">
                    <p className="text-[9px] text-[#99938b] uppercase tracking-wide">
                        Active
                    </p>

                    <p className="text-xl font-semibold mt-1 text-[#2f4f46]">
                        3
                    </p>
                </div>

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">
                    <p className="text-[9px] text-[#99938b] uppercase tracking-wide">
                        Completed
                    </p>

                    <p className="text-xl font-semibold mt-1">
                        4
                    </p>
                </div>

            </div>

            {/* PROJECT LIST */}

            <div className="grid grid-cols-2 gap-3">

                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="bg-white border border-[#e1ddd6] rounded-lg p-4"
                    >

                        {/* CARD HEADER */}

                        <div className="flex items-start justify-between">

                            <div>
                                <h2 className="text-[14px] font-semibold">
                                    {project.name}
                                </h2>

                                <p className="text-[10px] text-[#8b867e] mt-1">
                                    {project.client}
                                </p>
                            </div>

                            <span
                                className={
                                    "px-2 py-1 rounded-md text-[9px] font-medium " +
                                    getStatusClasses(project.status)
                                }
                            >
                                {project.status}
                            </span>

                        </div>

                        {/* PROGRESS */}

                        <div className="mt-5">

                            <div className="flex justify-between items-center mb-1">

                                <span className="text-[9px] text-[#8b867e]">
                                    Progress
                                </span>

                                <span className="text-[9px] font-semibold">
                                    {project.progress}%
                                </span>

                            </div>

                            <div className="h-1.5 bg-[#e8e4dd] rounded-full overflow-hidden">

                                <div
                                    className="h-full bg-[#66806f] rounded-full"
                                    style={{
                                        width: project.progress + "%"
                                    }}
                                />

                            </div>

                        </div>

                        {/* DETAILS */}

                        <div className="flex justify-between mt-5">

                            <div>
                                <p className="text-[8px] text-[#99938b] uppercase">
                                    Deadline
                                </p>

                                <p className="text-[10px] font-medium mt-1">
                                    {project.deadline}
                                </p>
                            </div>

                            <div className="text-right">

                                <p className="text-[8px] text-[#99938b] uppercase">
                                    Value
                                </p>

                                <p className="text-[10px] font-medium mt-1">
                                    {project.value}
                                </p>

                            </div>

                        </div>

                        {/* ACTION */}

                        <button className="w-full mt-4 py-2 rounded-md border border-[#ddd8d0] text-[9px] text-[#68645e] hover:bg-[#f4f1eb]">
                            View Project
                        </button>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default Projects;

