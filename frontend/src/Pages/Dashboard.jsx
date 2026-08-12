import BusinessCore from "./Three/BusinessCore";

const Dashboard = () => {
    return (
        <div>

            <h1 className="text-3xl font-bold text-white">
                Dashboard
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