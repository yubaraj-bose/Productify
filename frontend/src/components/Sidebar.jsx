import { Link, useLocation } from "react-router";
import { useAuth } from "@clerk/clerk-react";
import { HomeIcon, PlusCircleIcon, UserIcon, LayoutDashboardIcon } from "lucide-react";

function Sidebar() {
  const { isSignedIn } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-20 hover:w-64 group bg-base-100 border-r border-base-200 hidden md:flex flex-col h-screen sticky top-0 transition-all duration-300 z-40 overflow-hidden shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-xl shrink-0">
          <LayoutDashboardIcon className="size-6 text-primary" />
        </div>
        <span className="text-xl font-bold tracking-tight text-base-content opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Productify
        </span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link
          to="/"
          className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
            isActive("/") ? "bg-primary text-primary-content shadow-sm" : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
          }`}
        >
          <HomeIcon className="size-6 shrink-0" />
          <span className="font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Home</span>
        </Link>

        {isSignedIn && (
          <>
            <Link
              to="/create"
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                isActive("/create") ? "bg-primary text-primary-content shadow-sm" : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
              }`}
            >
              <PlusCircleIcon className="size-6 shrink-0" />
              <span className="font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">New Product</span>
            </Link>

            <Link
              to="/profile"
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                isActive("/profile") ? "bg-primary text-primary-content shadow-sm" : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
              }`}
            >
              <UserIcon className="size-6 shrink-0" />
              <span className="font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Profile</span>
            </Link>
          </>
        )}
      </nav>

      <div className="p-4 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden">
        <div className="bg-gradient-to-tr from-primary/10 to-secondary/10 p-4 rounded-2xl border border-primary/10">
          <p className="text-xs text-base-content/60 font-medium">Productify Workspace</p>
          <p className="text-sm text-base-content/80 mt-1">Manage your products efficiently.</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
