import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";
import ThemeSelector from "./ThemeSelector";
import { BellIcon, SearchIcon } from "lucide-react";

function Header() {
  const { isSignedIn } = useAuth();

  return (
    <header className="h-20 bg-base-100/80 backdrop-blur-md border-b border-base-200 sticky top-0 z-30 transition-all duration-300 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        {/* Placeholder for Search or mobile menu */}
        <div className="relative hidden md:block max-w-md w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="size-4 text-base-content/40" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            className="input input-sm w-full pl-10 bg-base-200/50 border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-full transition-all duration-200"
            onChange={(e) => console.log("Search query:", e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeSelector />
        
        <button 
          className="btn btn-ghost btn-circle btn-sm text-base-content/70 hover:text-primary"
          onClick={() => alert('Notifications feature coming soon!')}
        >
          <BellIcon className="size-5" />
        </button>

        <div className="h-6 w-px bg-base-300 mx-1" aria-hidden="true" />

        {isSignedIn ? (
          <div className="flex items-center gap-3">
            <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "size-9 shadow-sm" } }} />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <SignInButton mode="modal">
              <button className="btn btn-ghost btn-sm rounded-full px-4 font-medium">Log In</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="btn btn-primary btn-sm rounded-full px-5 font-medium shadow-sm shadow-primary/20 hover:shadow-primary/40 transition-all">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
