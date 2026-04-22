import { HeartIcon, UsersIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full py-10 mt-12 bg-base-100 border-t border-base-200">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-6">
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-base-content/70 flex items-center gap-1.5 font-medium">
            © {new Date().getFullYear()} Productify. Crafted with 
            <HeartIcon className="size-4 text-pink-500 fill-pink-500/20" /> 
            for creators.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-500/10 px-3 py-1.5 rounded-full font-semibold border border-emerald-500/20 shadow-sm">
            <UsersIcon className="size-3.5" />
            <span>Group_id=2</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-6 text-sm text-base-content/60 font-medium w-full">
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Privacy Policy coming soon!"); }} className="hover:text-emerald-600 transition-colors">Privacy</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Terms of Service coming soon!"); }} className="hover:text-emerald-600 transition-colors">Terms</a>
          <a href="mailto:support@productify.com" className="hover:text-pink-600 transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
