// components/Navbar.js
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NAV_ITEMS = [
  { href: "/Hrdashboard", label: "Home" },
  { href: "/Employees", label: "Attendance" },
  { href: "/exemployees", label: "Ex Employees" },
  { href: "/Assets", label: "Assets" },
  { href: "/Employee", label: "Employees" },
  { href: "/Documents", label: "Documents" },
];

export default function Navbar({ hrName = "HR", onLogout }) {
  const router = useRouter();

  const isActive = (href) => router.pathname === href;

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
         
            <span className="text-lg font-semibold text-gray-900">
             nutro milk
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Profile + Logout */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">
              {hrName}
            </span>
            <button
              onClick={onLogout}
              className="inline-flex items-center rounded-lg bg-[#C1272D] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#a02125]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
