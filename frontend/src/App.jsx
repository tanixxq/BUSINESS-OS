import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./Layouts/DashboardLayout";
import BusinessCore from "./Three/BusinessCore";

const Dashboard = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white">
                BusinessOS
            </h1>

            <p className="mt-2 text-slate-400">
                Welcome to BusinessOS.
            </p>

            <div className="mt-8">
                <BusinessCore />
            </div>
        </div>
    );
};

const Placeholder = ({ title }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white">
                {title}
            </h1>

            <p className="mt-2 text-slate-400">
                This module is coming soon.
            </p>
        </div>
    );
};

function App() {
    return (
        <Routes>

            <Route element={<DashboardLayout />}>

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/clients"
                    element={<Placeholder title="Clients" />}
                />

                <Route
                    path="/projects"
                    element={<Placeholder title="Projects" />}
                />

                <Route
                    path="/tasks"
                    element={<Placeholder title="Tasks" />}
                />

                <Route
                    path="/invoices"
                    element={<Placeholder title="Invoices" />}
                />

                <Route
                    path="/analytics"
                    element={<Placeholder title="Analytics" />}
                />

                <Route
                    path="/settings"
                    element={<Placeholder title="Settings" />}
                />

            </Route>

            <Route
                path="/"
                element={
                    <Navigate
                        to="/dashboard"
                        replace
                    />
                }
            />

        </Routes>
    );
}

export default App;