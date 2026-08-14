import { useState } from "react";

const Settings = () => {
    const [profile, setProfile] = useState({
        name: "Tanishq",
        email: "tanishq@example.com"
    });

    const [preferences, setPreferences] = useState({
        notifications: true,
        weeklyReport: true,
        compactMode: false
    });

    const [saved, setSaved] = useState(false);

    const handleProfileChange = (field, value) => {
        setProfile({
            ...profile,
            [field]: value
        });

        setSaved(false);
    };

    const handleToggle = (field) => {
        setPreferences({
            ...preferences,
            [field]: !preferences[field]
        });

        setSaved(false);
    };

    const handleSave = () => {
        setSaved(true);
    };

    return (
        <div className="h-full overflow-hidden">

            {/* HEADER */}

            <div className="flex items-center justify-between mb-5">

                <div>
                    <p className="text-[12px] text-[#8a857d] mb-1">
                        SETTINGS
                    </p>

                    <h1 className="text-xl font-semibold">
                        Workspace Settings
                    </h1>

                    <p className="text-[11px] text-[#8a857d] mt-1">
                        Manage your profile and Business OS preferences.
                    </p>
                </div>

                <button
                    onClick={handleSave}
                    className="px-5 py-2 rounded-md bg-[#2f4f46] text-white text-[11px] font-medium"
                >
                    Save Changes
                </button>

            </div>

            {/* PROFILE */}

            <section className="bg-white border border-[#e1ddd6] rounded-lg p-4 mb-4">

                <p className="text-[11px] font-semibold mb-4">
                    Profile
                </p>

                <div className="grid grid-cols-2 gap-4">

                    <div>

                        <label className="text-[9px] text-[#99938b] uppercase">
                            Name
                        </label>

                        <input
                            type="text"
                            value={profile.name}
                            onChange={(event) =>
                                handleProfileChange(
                                    "name",
                                    event.target.value
                                )
                            }
                            className="w-full mt-2 px-3 py-2 rounded-md border border-[#ddd8d0] bg-[#faf9f6] text-[10px] outline-none focus:border-[#8fa197]"
                        />

                    </div>

                    <div>

                        <label className="text-[9px] text-[#99938b] uppercase">
                            Email
                        </label>

                        <input
                            type="email"
                            value={profile.email}
                            onChange={(event) =>
                                handleProfileChange(
                                    "email",
                                    event.target.value
                                )
                            }
                            className="w-full mt-2 px-3 py-2 rounded-md border border-[#ddd8d0] bg-[#faf9f6] text-[10px] outline-none focus:border-[#8fa197]"
                        />

                    </div>

                </div>

            </section>

            {/* PREFERENCES */}

            <section className="bg-white border border-[#e1ddd6] rounded-lg p-4 mb-4">

                <p className="text-[11px] font-semibold mb-4">
                    Preferences
                </p>

                <div className="space-y-4">

                    {/* NOTIFICATIONS */}

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-[10px] font-medium">
                                Notifications
                            </p>

                            <p className="text-[8px] text-[#99938b] mt-1">
                                Receive notifications for important business activity.
                            </p>
                        </div>

                        <button
                            onClick={() =>
                                handleToggle("notifications")
                            }
                            className={
                                preferences.notifications
                                    ? "w-9 h-5 rounded-full bg-[#66806f] p-0.5"
                                    : "w-9 h-5 rounded-full bg-[#c9c4bb] p-0.5"
                            }
                        >
                            <div
                                className={
                                    preferences.notifications
                                        ? "w-4 h-4 rounded-full bg-white ml-4"
                                        : "w-4 h-4 rounded-full bg-white ml-0"
                                }
                            />
                        </button>

                    </div>

                    {/* WEEKLY REPORT */}

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-[10px] font-medium">
                                Weekly report
                            </p>

                            <p className="text-[8px] text-[#99938b] mt-1">
                                Receive a weekly summary of your business.
                            </p>
                        </div>

                        <button
                            onClick={() =>
                                handleToggle("weeklyReport")
                            }
                            className={
                                preferences.weeklyReport
                                    ? "w-9 h-5 rounded-full bg-[#66806f] p-0.5"
                                    : "w-9 h-5 rounded-full bg-[#c9c4bb] p-0.5"
                            }
                        >
                            <div
                                className={
                                    preferences.weeklyReport
                                        ? "w-4 h-4 rounded-full bg-white ml-4"
                                        : "w-4 h-4 rounded-full bg-white ml-0"
                                }
                            />
                        </button>

                    </div>

                    {/* COMPACT MODE */}

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-[10px] font-medium">
                                Compact mode
                            </p>

                            <p className="text-[8px] text-[#99938b] mt-1">
                                Use a denser layout for workspace information.
                            </p>
                        </div>

                        <button
                            onClick={() =>
                                handleToggle("compactMode")
                            }
                            className={
                                preferences.compactMode
                                    ? "w-9 h-5 rounded-full bg-[#66806f] p-0.5"
                                    : "w-9 h-5 rounded-full bg-[#c9c4bb] p-0.5"
                            }
                        >
                            <div
                                className={
                                    preferences.compactMode
                                        ? "w-4 h-4 rounded-full bg-white ml-4"
                                        : "w-4 h-4 rounded-full bg-white ml-0"
                                }
                            />
                        </button>

                    </div>

                </div>

            </section>

            {/* WORKSPACE INFO */}

            <section className="bg-white border border-[#e1ddd6] rounded-lg p-4">

                <p className="text-[11px] font-semibold mb-4">
                    Workspace
                </p>

                <div className="space-y-3">

                    <div className="flex justify-between">

                        <span className="text-[9px] text-[#99938b]">
                            Workspace name
                        </span>

                        <span className="text-[10px] font-medium">
                            Business OS
                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span className="text-[9px] text-[#99938b]">
                            Projects
                        </span>

                        <span className="text-[10px] font-medium">
                            7
                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span className="text-[9px] text-[#99938b]">
                            Active clients
                        </span>

                        <span className="text-[10px] font-medium">
                            3
                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span className="text-[9px] text-[#99938b]">
                            Currency
                        </span>

                        <span className="text-[10px] font-medium">
                            INR (₹)
                        </span>

                    </div>

                </div>

            </section>

            {/* SAVE MESSAGE */}

            {saved && (
                <div className="mt-3 px-3 py-2 rounded-md bg-[#d9e0da] text-[#2f4f46] text-[9px]">
                    Settings saved successfully.
                </div>
            )}

        </div>
    );
};

export default Settings;

