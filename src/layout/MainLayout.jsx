import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-dvh bg-black text-gray-100">
      <Navbar />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
