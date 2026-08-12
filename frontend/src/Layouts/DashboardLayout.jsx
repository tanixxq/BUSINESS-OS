import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Sidebar />

            <div className="ml-64 min-h-screen">

                <Topbar />

                <main className="p-6 lg:p-8">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;