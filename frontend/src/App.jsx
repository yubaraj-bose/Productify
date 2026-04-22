import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePage from "./pages/CreatePage";
import EditProductPage from "./pages/EditProductPage";
import useAuthReq from "./hooks/useAuthReq";
import useUserSync from "./hooks/useUserSync";

function App() {
  const { isClerkLoaded, isSignedIn } = useAuthReq();
  useUserSync();

  if (!isClerkLoaded) return null;

  return (
    <div className="flex h-screen bg-base-100 font-sans text-base-content overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-base-200/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-full flex flex-col">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/profile" element={isSignedIn ? <ProfilePage /> : <Navigate to={"/"} />} />
                <Route path="/create" element={isSignedIn ? <CreatePage /> : <Navigate to={"/"} />} />
                <Route
                  path="/edit/:id"
                  element={isSignedIn ? <EditProductPage /> : <Navigate to={"/"} />}
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
