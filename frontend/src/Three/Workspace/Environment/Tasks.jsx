import { useState } from "react";

const Tasks = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Finish homepage design",
            project: "Website Redesign",
            priority: "High",
            status: "In Progress",
            due: "Today"
        },
        {
            id: 2,
            title: "Send invoice to Acme Studio",
            project: "Website Redesign",
            priority: "Medium",
            status: "To Do",
            due: "Tomorrow"
        },
        {
            id: 3,
            title: "Create dashboard wireframes",
            project: "Business OS",
            priority: "High",
            status: "In Progress",
            due: "18 Aug"
        },
        {
            id: 4,
            title: "Review client feedback",
            project: "Brand Identity",
            priority: "Low",
            status: "Completed",
            due: "Completed"
        },
        {
            id: 5,
            title: "Prepare project proposal",
            project: "Nova Labs",
            priority: "Medium",
            status: "To Do",
            due: "22 Aug"
        },
        {
            id: 6,
            title: "Update portfolio case study",
            project: "Business OS",
            priority: "Low",
            status: "To Do",
            due: "25 Aug"
        }
    ]);

    const filters = [
        "All",
        "To Do",
        "In Progress",
        "Completed"
    ];

    const filteredTasks =
        activeFilter === "All"
            ? tasks
            : tasks.filter((task) => task.status === activeFilter);

    const toggleTask = (id) => {
        setTasks((currentTasks) =>
            currentTasks.map((task) => {
                if (task.id !== id) {
                    return task;
                }

                return {
                    ...task,
                    status:
                        task.status === "Completed"
                            ? "To Do"
                            : "Completed",
                    due:
                        task.status === "Completed"
                            ? "Not completed"
                            : "Completed"
                };
            })
        );
    };

    const getPriorityClass = (priority) => {
        if (priority === "High") {
            return "bg-[#f1dfdc] text-[#9a5d52]";
        }

        if (priority === "Medium") {
            return "bg-[#efe4d2] text-[#8a6c42]";
        }

        return "bg-[#e5e8e4] text-[#617064]";
    };

    const getStatusClass = (status) => {
        if (status === "Completed") {
            return "bg-[#dce8df] text-[#52705b]";
        }

        if (status === "In Progress") {
            return "bg-[#efe4d2] text-[#8a6c42]";
        }

        return "bg-[#e7e4de] text-[#6f6a62]";
    };

    return (
        <div className="h-full overflow-hidden">

            {/* HEADER */}

            <div className="flex items-center justify-between mb-5">

                <div>
                    <p className="text-[12px] text-[#8a857d] mb-1">
                        TASKS
                    </p>

                    <h1 className="text-xl font-semibold">
                        Your Tasks
                    </h1>

                    <p className="text-[11px] text-[#8a857d] mt-1">
                        Stay on top of the work that moves your business forward.
                    </p>
                </div>

                <button className="px-5 py-2 rounded-md bg-[#2f4f46] text-white text-[11px] font-medium">
                    + New Task
                </button>

            </div>

            {/* SUMMARY */}

            <div className="grid grid-cols-3 gap-3 mb-4">

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">
                    <p className="text-[9px] text-[#99938b] uppercase tracking-wide">
                        Total
                    </p>

                    <p className="text-xl font-semibold mt-1">
                        {tasks.length}
                    </p>
                </div>

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">
                    <p className="text-[9px] text-[#99938b] uppercase tracking-wide">
                        In Progress
                    </p>

                    <p className="text-xl font-semibold mt-1 text-[#8a6c42]">
                        {tasks.filter(
                            (task) => task.status === "In Progress"
                        ).length}
                    </p>
                </div>

                <div className="bg-white border border-[#e1ddd6] rounded-lg p-3">
                    <p className="text-[9px] text-[#99938b] uppercase tracking-wide">
                        Completed
                    </p>

                    <p className="text-xl font-semibold mt-1 text-[#52705b]">
                        {tasks.filter(
                            (task) => task.status === "Completed"
                        ).length}
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

            {/* TASK LIST */}

            <div className="space-y-2 overflow-hidden">

                {filteredTasks.map((task) => (
                    <div
                        key={task.id}
                        className={
                            task.status === "Completed"
                                ? "bg-[#faf9f6] border border-[#e3dfd8] rounded-lg p-3 opacity-70"
                                : "bg-white border border-[#e1ddd6] rounded-lg p-3"
                        }
                    >
                        <div className="flex items-center gap-3">

                            {/* COMPLETE BUTTON */}

                            <button
                                onClick={() => toggleTask(task.id)}
                                className={
                                    task.status === "Completed"
                                        ? "w-5 h-5 rounded-full bg-[#66806f] flex items-center justify-center text-white text-[10px]"
                                        : "w-5 h-5 rounded-full border-2 border-[#c7c1b8] hover:border-[#66806f]"
                                }
                            >
                                {task.status === "Completed" ? "✓" : ""}
                            </button>

                            {/* TASK CONTENT */}

                            <div className="flex-1 min-w-0">

                                <p
                                    className={
                                        task.status === "Completed"
                                            ? "text-[11px] font-medium line-through text-[#8e8880]"
                                            : "text-[11px] font-medium"
                                    }
                                >
                                    {task.title}
                                </p>

                                <p className="text-[9px] text-[#99938b] mt-1">
                                    {task.project}
                                </p>

                            </div>

                            {/* PRIORITY */}

                            <span
                                className={
                                    "px-2 py-1 rounded-md text-[8px] font-medium " +
                                    getPriorityClass(task.priority)
                                }
                            >
                                {task.priority}
                            </span>

                            {/* STATUS */}

                            <span
                                className={
                                    "px-2 py-1 rounded-md text-[8px] font-medium " +
                                    getStatusClass(task.status)
                                }
                            >
                                {task.status}
                            </span>

                            {/* DUE */}

                            <div className="w-16 text-right">
                                <p className="text-[8px] text-[#99938b]">
                                    DUE
                                </p>

                                <p className="text-[9px] font-medium mt-1">
                                    {task.due}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}

                {filteredTasks.length === 0 && (
                    <div className="bg-white border border-[#e1ddd6] rounded-lg p-8 text-center">
                        <p className="text-[12px] font-medium">
                            No tasks found
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

export default Tasks;

