
import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-64 p-4">
        <main className="flex-grow flex justify-center">
          <div className="w-full max-w-4xl px-8 py-6">
            {children}
          </div>
        </main>
        <footer className="text-center text-gray-500 text-sm py-4 bg-white">
          2025 — Built by Your Name
        </footer>
      </div>
    </div>
  );
};

export default Layout;
