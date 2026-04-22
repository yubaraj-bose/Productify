import { useProducts } from "../hooks/useProducts";
import { PackageIcon, SparklesIcon } from "lucide-react";
import { Link } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductCard from "../components/ProductCard";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return (
      <div role="alert" className="alert alert-error">
        <span>Something went wrong. Please refresh the page.</span>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      
      <div className="flex flex-col items-center justify-center text-center min-h-[60vh] py-20 px-4 bg-base-100 rounded-3xl border border-base-200 shadow-xl shadow-base-200/50 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/50 backdrop-blur-sm text-base-content/80 text-sm font-medium mb-8 border border-base-300 shadow-sm">
            <SparklesIcon className="size-4 text-emerald-500" />
            <span>Discover & Share</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-base-content mb-6 max-w-3xl leading-tight">
            Showcase Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-pink-500">Products</span>
          </h1>
          <p className="text-lg md:text-xl text-base-content/60 mb-10 max-w-2xl leading-relaxed">
            Join a thriving community of creators. Upload your best work, discover amazing products, and connect with others in a beautifully curated space.
          </p>
          <SignInButton mode="modal">
            <button className="btn bg-base-content text-base-100 hover:bg-base-content/90 hover:scale-105 border-none rounded-full px-10 py-4 h-auto min-h-0 text-lg font-bold shadow-2xl transition-all duration-300">
              Start Selling Today
            </button>
          </SignInButton>
        </div>
      </div>

      
      <div>
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <PackageIcon className="size-5 text-primary" />
          All Products
        </h2>

        {products.length === 0 ? (
          <div className="card bg-base-300">
            <div className="card-body items-center text-center py-16">
              <PackageIcon className="size-16 text-base-content/20" />
              <h3 className="card-title text-base-content/50">No products yet</h3>
              <p className="text-base-content/40 text-sm">Be the first to share something!</p>
              <Link to="/create" className="btn btn-primary btn-sm mt-2">
                Create Product
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default HomePage;
